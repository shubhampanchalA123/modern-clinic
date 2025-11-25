"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { XCircle } from "lucide-react";

export default function PaymentFailedPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20 text-center">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center"
      >
        <XCircle className="w-20 h-20 text-red-500" />
      </motion.div>

      <h1 className="mt-6 text-3xl font-bold text-foreground">Payment Failed</h1>
      <p className="text-muted-foreground mt-2">Something went wrong. Please try again.</p>

      <Link href="/payment-method">
        <button className="mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-xl hover:bg-primary/80 transition">
          Retry Payment
        </button>
      </Link>
    </div>
  );
}
