"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CreditCard, Wallet, Banknote, ArrowRight } from "lucide-react";

export default function PaymentMethodPage() {
  const options = [
    {
      title: "Online Payment",
      desc: "Pay instantly using UPI, Card or Net Banking.",
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      href: "/payment-method/online",
    },
    {
      title: "Pay at Clinic",
      desc: "Reserve your slot and pay during the clinic visit.",
      icon: <Wallet className="w-6 h-6 text-primary" />,
      href: "/payment-method/clinic",
    },
    {
      title: "EMI / Installments",
      desc: "Flexible monthly payment options.",
      icon: <Banknote className="w-6 h-6 text-primary" />,
      href: "/payment-method/emi",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground">Choose Payment Method</h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Select your preferred payment option to complete your appointment booking.
        </p>
      </motion.div>

      <div className="space-y-5">
        {options.map((opt, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.1 }}>
            <Link href={opt.href}>
              <div className="group flex items-center justify-between p-5 rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10">
                    {opt.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{opt.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{opt.desc}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
