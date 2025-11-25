"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center"
      >
        <CheckCircle className="w-20 h-20 text-green-500" />
      </motion.div>

      <h1 className="mt-6 text-3xl font-bold text-foreground">Payment Successful</h1>
      <p className="text-muted-foreground mt-2">Thank you for booking your appointment.</p>

      <Link href="/">
        <button className="mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-xl hover:bg-primary/80 transition">
          Go to Home
        </button>
      </Link>
    </div>
  );
}
