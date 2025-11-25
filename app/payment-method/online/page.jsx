"use client";

import { motion } from "framer-motion";

export default function OnlinePaymentPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-3xl font-bold text-foreground">Online Payment</h1>
        <p className="text-muted-foreground mt-2">
          Complete payment using UPI, Credit/Debit Card or Net Banking.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-sm"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-muted-foreground">This page will initiate your payment.</p>
        <button
          onClick={() => alert("Integrate Razorpay / ICICI payment here")}
          className="mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-xl hover:bg-primary/80 transition"
        >
          Proceed to Pay
        </button>
      </motion.div>
    </div>
  );
}
