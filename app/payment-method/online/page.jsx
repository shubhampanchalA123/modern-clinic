"use client";

import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyPayment } from "@/redux/slices/registerSlice";
import { verifyAppointmentPayment } from "@/redux/slices/appointmentSlice";

const CASHFREE_SCRIPT_SRC = "https://sdk.cashfree.com/js/v3/cashfree.js";

function OnlinePaymentPageInner() {
  const params = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { orderDetails } = useSelector((state) => state.appointment);

  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [cashfreeLoaded, setCashfreeLoaded] = useState(false);
  const [isAppointment, setIsAppointment] = useState(false);
  const verifiedCashfreeRef = useRef(false);

  const orderId = params.get("orderId") || (orderDetails ? orderDetails.orderId : null);
  const amount = params.get("amount") || (orderDetails ? orderDetails.amount : null);
  const currency = params.get("currency") || (orderDetails ? orderDetails.currency : null);
  const key = params.get("key") || (orderDetails ? orderDetails.key : null);
  const gateway = params.get("gateway") || (orderDetails ? orderDetails.gateway : null) || "razorpay";
  const paymentSessionId = params.get("paymentSessionId") || (orderDetails ? orderDetails.paymentSessionId : null);
  const consultantId = params.get("consultantId");
  const flowFromParams = params.get("flow");

  const getAppointmentData = () => {
    const data = localStorage.getItem("appointmentData");
    if (data) {
      const parsed = JSON.parse(data);
      const now = Date.now();
      const hoursDiff = (now - parsed.timestamp) / (1000 * 60 * 60);
      if (hoursDiff < 24) {
        return parsed;
      }
      localStorage.removeItem("appointmentData");
      return null;
    }
    return null;
  };

  const getAppointmentOrderData = () => {
    const data = localStorage.getItem("appointmentOrderData");
    if (!data) return null;
    return JSON.parse(data);
  };

  const appointmentData = getAppointmentData();
  const appointmentOrderData = getAppointmentOrderData();
  const appointmentId = appointmentData?.appointmentId || appointmentOrderData?.appointmentId;
  const appointmentAmount = appointmentData?.amount;
  const isCashfree = gateway === "cashfree";
  const isAppointmentFlow = flowFromParams === "appointment" || appointmentOrderData?.flow === "appointment";

  const getCurrencySymbol = (value) => {
    switch (value) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "INR":
      default:
        return "₹";
    }
  };

  useEffect(() => {
    if (flowFromParams === "appointment" || appointmentOrderData?.flow === "appointment") {
      setIsAppointment(true);
      return;
    }

    if (flowFromParams === "consultation") {
      setIsAppointment(false);
      return;
    }

    if (!appointmentId && !consultantId) return;
    setIsAppointment(Boolean(appointmentId || appointmentOrderData));
  }, [appointmentId, consultantId, appointmentOrderData, flowFromParams]);

  useEffect(() => {
    if (!isCashfree) return;

    const script = document.createElement("script");
    script.src = CASHFREE_SCRIPT_SRC;
    script.async = true;
    script.onload = () => setCashfreeLoaded(true);
    script.onerror = () => setCashfreeLoaded(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isCashfree]);

  useEffect(() => {
    if (isCashfree) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => setRazorpayLoaded(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isCashfree]);

  useEffect(() => {
    const rawContext = sessionStorage.getItem("cashfreeOrderContext");
    let context = null;
    if (rawContext) {
      try {
        context = JSON.parse(rawContext);
      } catch {
        context = null;
      }
    }
    const effectiveOrderId = orderId || context?.orderId;
    if (!isCashfree || !effectiveOrderId) return;
    const pendingOrderId = sessionStorage.getItem("cashfreePendingOrderId");
    if ((pendingOrderId !== effectiveOrderId && pendingOrderId !== orderId) || verifiedCashfreeRef.current) return;

    verifiedCashfreeRef.current = true;
    const effectiveConsultantId = consultantId || context?.consultantId;
    const effectiveAppointmentId = appointmentId || context?.appointmentId;

    const verifyCashfree = async () => {
      try {
        if (isAppointmentFlow) {
          const result = await dispatch(
            verifyAppointmentPayment({
              appointmentId: effectiveAppointmentId,
              orderId: effectiveOrderId,
            })
          );

          if (result.meta.requestStatus === "fulfilled") {
            localStorage.removeItem("appointmentData");
            localStorage.removeItem("appointmentOrderData");
            sessionStorage.removeItem("cashfreePendingOrderId");
            sessionStorage.removeItem("cashfreeOrderContext");
            router.push("/payment-method/success");
          } else {
            sessionStorage.removeItem("cashfreePendingOrderId");
            sessionStorage.removeItem("cashfreeOrderContext");
            router.push("/payment-method/failed");
          }
          return;
        }

        const result = await dispatch(
          verifyPayment({
            consultantId: effectiveConsultantId,
            orderId: effectiveOrderId,
          })
        );

        if (result.meta.requestStatus === "fulfilled") {
          sessionStorage.removeItem("cashfreePendingOrderId");
          sessionStorage.removeItem("cashfreeOrderContext");
          router.push("/payment-method/success");
        } else {
          sessionStorage.removeItem("cashfreePendingOrderId");
          sessionStorage.removeItem("cashfreeOrderContext");
          router.push("/payment-method/failed");
        }
      } catch (error) {
        sessionStorage.removeItem("cashfreePendingOrderId");
        sessionStorage.removeItem("cashfreeOrderContext");
        router.push("/payment-method/failed");
      }
    };

    verifyCashfree();
  }, [isCashfree, orderId, appointmentId, consultantId, dispatch, router, isAppointmentFlow]);

  const handlePayment = () => {
    if (isCashfree) {
      if (!cashfreeLoaded || !window.Cashfree) {
        alert("Cashfree not loaded");
        return;
      }

      if (!paymentSessionId) {
        alert("Cashfree payment session missing");
        return;
      }

      sessionStorage.setItem(
        "cashfreeOrderContext",
        JSON.stringify({
          orderId,
          paymentSessionId,
          consultantId,
          appointmentId,
          isAppointment: isAppointmentFlow,
        })
      );
      sessionStorage.setItem("cashfreePendingOrderId", String(orderId || paymentSessionId));
      const cashfree = window.Cashfree({
        mode: process.env.NEXT_PUBLIC_CASHFREE_MODE || "sandbox",
      });

      cashfree.checkout({
        paymentSessionId,
        redirectTarget: "_self",
      });
      return;
    }

    if (!razorpayLoaded || !window.Razorpay) {
      alert("Razorpay not loaded");
      return;
    }

    const options = {
      key,
      amount,
      currency,
      order_id: orderId,
      name: "Hair Growth Clinic",
      description: "Consultation Payment",
      handler: function (response) {
        if (isAppointmentFlow) {
          dispatch(
            verifyAppointmentPayment({
              appointmentId,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            })
          ).then((result) => {
            if (result.meta.requestStatus === "fulfilled") {
              localStorage.removeItem("appointmentData");
              localStorage.removeItem("appointmentOrderData");
              router.push("/payment-method/success");
            } else {
              router.push("/payment-method/failed");
            }
          });
        } else {
          dispatch(
            verifyPayment({
              consultantId,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            })
          ).then((result) => {
            if (result.meta.requestStatus === "fulfilled") {
              router.push("/payment-method/success");
            } else {
              router.push("/payment-method/failed");
            }
          });
        }
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#007bff",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-3xl font-bold text-foreground">
          <span className="text-primary">Online</span> Payment
        </h1>
        <p className="text-muted-foreground mt-2">
          Complete payment for {isAppointment ? "Appointment" : "Consultation"} using UPI, Credit/Debit Card or Net Banking.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-sm"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">Gateway: {gateway}</p>
          <p className="text-sm text-muted-foreground">Order ID: {orderId}</p>
          <p className="text-sm text-muted-foreground">
            Amount: {getCurrencySymbol(currency)}{isCashfree ? amount : (amount ? amount / 100 : appointmentAmount)}
          </p>
        </div>
        <button
          onClick={handlePayment}
          disabled={isCashfree ? !cashfreeLoaded : !razorpayLoaded}
          className="mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-xl hover:bg-primary/80 transition disabled:opacity-50"
        >
          {isCashfree
            ? cashfreeLoaded
              ? "Proceed to Pay"
              : "Loading Cashfree..."
            : razorpayLoaded
              ? "Proceed to Pay"
              : "Loading..."}
        </button>
      </motion.div>
    </div>
  );
}

export default function OnlinePaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnlinePaymentPageInner />
    </Suspense>
  );
}
