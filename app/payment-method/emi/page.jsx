"use client";

import { motion } from "framer-motion";

export default function EmiPaymentPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-3xl font-bold text-foreground">EMI / Installment Options</h1>
        <p className="text-muted-foreground mt-2">
          Choose a flexible monthly payment plan.
        </p>
      </motion.div>

      <div className="mt-10 space-y-4">
        {["3 Months", "6 Months", "12 Months"].map((duration, i) => (
          <motion.div
            key={i}
            className="p-5 bg-card/70 backdrop-blur-xl border border-border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <div className="text-lg text-foreground font-semibold">{duration} EMI</div>
            <div className="text-muted-foreground text-sm">Low monthly payments</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
