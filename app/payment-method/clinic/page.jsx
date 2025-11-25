"use client";

import { motion } from "framer-motion";

export default function ClinicPaymentPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-3xl font-bold text-foreground">Pay at Clinic</h1>
        <p className="text-muted-foreground mt-2">
          Your appointment is reserved. Please complete the payment at the clinic.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-sm"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-foreground">Clinic Address:</p>
        <ul className="mt-3 text-muted-foreground space-y-1">
          <li>202 Business Island, Nipania, Indore</li>
          <li>121 Orbit Mall, Indore</li>
        </ul>

        <p className="mt-4 text-muted-foreground">
          Please arrive 10 minutes early for verification.
        </p>
      </motion.div>
    </div>
  );
}
