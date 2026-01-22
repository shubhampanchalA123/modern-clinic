"use client";

import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyPayment } from "@/redux/slices/registerSlice";
import { createAppointmentOrder, verifyAppointmentPayment } from "@/redux/slices/appointmentSlice";

function OnlinePaymentPageInner() {
  const params = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { createAppointmentOrderSuccess, orderDetails } = useSelector((state) => state.appointment);

  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [isAppointment, setIsAppointment] = useState(false);

  const orderId = params.get("orderId") || (orderDetails ? orderDetails.orderId : null);
  const amount = params.get("amount") || (orderDetails ? orderDetails.amount : null);
  const currency = params.get("currency") || (orderDetails ? orderDetails.currency : null);
  const key = params.get("key") || (orderDetails ? orderDetails.key : null);
  const consultantId = params.get("consultantId");

  // Get appointment data with expiration check (24 hours)
  const getAppointmentData = () => {
    const data = localStorage.getItem("appointmentData");
    if (data) {
      const parsed = JSON.parse(data);
      const now = Date.now();
      const hoursDiff = (now - parsed.timestamp) / (1000 * 60 * 60);
      if (hoursDiff < 24) {
        return parsed;
      } else {
        localStorage.removeItem("appointmentData");
        return null;
      }
    }
    return null;
  };

  // Get appointment order data
  const getAppointmentOrderData = () => {
    const data = localStorage.getItem("appointmentOrderData");
    if (data) {
      const parsed = JSON.parse(data);
      return parsed;
    }
    return null;
  };

  const appointmentData = getAppointmentData();
  const appointmentOrderData = getAppointmentOrderData();

  const appointmentId = appointmentData?.appointmentId || appointmentOrderData?.appointmentId;
  const appointmentAmount = appointmentData?.amount;

  // Function to get currency symbol
  const getCurrencySymbol = (currency) => {
    switch (currency) {
      case "USD":
        return "$";
      case "INR":
        return "₹";
      case "EUR":
        return "€";
      default:
        return "₹"; // Default to INR
    }
  };

  // Check if appointment
  useEffect(() => {
    if (appointmentOrderData) {
      setIsAppointment(true);
    } else if (appointmentId && appointmentAmount && !orderId) {
      setIsAppointment(true);
      dispatch(createAppointmentOrder({
        appointmentId,
        amount: parseInt(appointmentAmount)
      }));
    }
  }, [appointmentId, appointmentAmount, orderId, appointmentOrderData, dispatch]);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    if (!razorpayLoaded || !window.Razorpay) {
      alert("Razorpay not loaded");
      return;
    }

    const options = {
      key: key,
      amount: amount,
      currency: currency,
      order_id: orderId,
      name: "Hair Growth Clinic",
      description: "Consultation Payment",
      handler: function (response) {
        // Payment success
        if (isAppointment) {
          dispatch(verifyAppointmentPayment({
            appointmentId,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature
          })).then((result) => {
            if (result.meta.requestStatus === "fulfilled") {
              localStorage.removeItem("appointmentData");
              localStorage.removeItem("appointmentOrderData");
              router.push("/payment-method/success");
            } else {
              router.push("/payment-method/failed");
            }
          });
        } else {
          dispatch(verifyPayment({
            consultantId,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature
          })).then((result) => {
            if (result.meta.requestStatus === "fulfilled") {
              router.push("/payment-method/success");
            } else {
              router.push("/payment-method/failed");
            }
          });
        }
      },
      prefill: {
        name: "User Name", // Can be from user data
        email: "user@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#007bff"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-3xl font-bold text-foreground"><span className="text-primary">Online</span> Payment</h1>
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
          <p className="text-sm text-muted-foreground">Order ID: {orderId}</p>
          <p className="text-sm text-muted-foreground">Amount: {getCurrencySymbol(currency)}{amount / 100}</p>
        </div>
        <button
          onClick={handlePayment}
          disabled={!razorpayLoaded}
          className="mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-xl hover:bg-primary/80 transition disabled:opacity-50"
        >
          {razorpayLoaded ? "Proceed to Pay" : "Loading..."}
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
