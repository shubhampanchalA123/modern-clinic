(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/HairGrowth-Clinic/app/payment-method/online/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnlinePaymentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/redux/slices/registerSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$appointmentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/redux/slices/appointmentSlice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function OnlinePaymentPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { createAppointmentOrderSuccess, orderDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "OnlinePaymentPage.useSelector": (state)=>state.appointment
    }["OnlinePaymentPage.useSelector"]);
    const [razorpayLoaded, setRazorpayLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAppointment, setIsAppointment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const orderId = params.get("orderId") || (orderDetails ? orderDetails.orderId : null);
    const amount = params.get("amount") || (orderDetails ? orderDetails.amount : null);
    const currency = params.get("currency") || (orderDetails ? orderDetails.currency : null);
    const key = params.get("key") || (orderDetails ? orderDetails.key : null);
    const consultantId = params.get("consultantId");
    // Get appointment data with expiration check (24 hours)
    const getAppointmentData = ()=>{
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
    const appointmentData = getAppointmentData();
    const appointmentId = appointmentData?.appointmentId;
    const appointmentAmount = appointmentData?.amount;
    // Check if appointment and create order
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnlinePaymentPage.useEffect": ()=>{
            if (appointmentId && appointmentAmount && !orderId) {
                setIsAppointment(true);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$appointmentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAppointmentOrder"])({
                    appointmentId,
                    amount: parseInt(appointmentAmount)
                }));
            }
        }
    }["OnlinePaymentPage.useEffect"], [
        appointmentId,
        appointmentAmount,
        orderId,
        dispatch
    ]);
    // Load Razorpay script
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnlinePaymentPage.useEffect": ()=>{
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = ({
                "OnlinePaymentPage.useEffect": ()=>setRazorpayLoaded(true)
            })["OnlinePaymentPage.useEffect"];
            document.body.appendChild(script);
        }
    }["OnlinePaymentPage.useEffect"], []);
    const handlePayment = ()=>{
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
            handler: function(response) {
                // Payment success
                if (isAppointment) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$appointmentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyAppointmentPayment"])({
                        appointmentId,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature
                    })).then((result)=>{
                        if (result.meta.requestStatus === "fulfilled") {
                            localStorage.removeItem("appointmentData");
                            router.push("/payment-method/success");
                        } else {
                            router.push("/payment-method/failed");
                        }
                    });
                } else {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyPayment"])({
                        consultantId,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature
                    })).then((result)=>{
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
                contact: "9999999999"
            },
            theme: {
                color: "#007bff"
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto px-6 py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "Online"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/payment-method/online/page.jsx",
                                lineNumber: 127,
                                columnNumber: 60
                            }, this),
                            " Payment"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/app/payment-method/online/page.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-2",
                        children: [
                            "Complete payment for ",
                            isAppointment ? "Appointment" : "Consultation",
                            " using UPI, Credit/Debit Card or Net Banking."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/app/payment-method/online/page.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/app/payment-method/online/page.jsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "mt-10 p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-sm",
                initial: {
                    opacity: 0,
                    y: 16
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "Order ID: ",
                                    orderId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/app/payment-method/online/page.jsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "Amount: ₹",
                                    amount / 100
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/app/payment-method/online/page.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/app/payment-method/online/page.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePayment,
                        disabled: !razorpayLoaded,
                        className: "mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-xl hover:bg-primary/80 transition disabled:opacity-50",
                        children: razorpayLoaded ? "Proceed to Pay" : "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/app/payment-method/online/page.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/app/payment-method/online/page.jsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/HairGrowth-Clinic/app/payment-method/online/page.jsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(OnlinePaymentPage, "UF+cCMPbtb3I8PeGkxih0gESiXk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = OnlinePaymentPage;
var _c;
__turbopack_context__.k.register(_c, "OnlinePaymentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=HairGrowth-Clinic_app_payment-method_online_page_jsx_74f4f847._.js.map