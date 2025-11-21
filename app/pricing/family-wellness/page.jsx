"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

export default function FamilyWellness() {
  const plans = [
    { title: "Family Basic (2 members)", price: "₹2,499", features: ["2 consults", "Family nutrition plan"] },
    { title: "Family Plus (up to 4)", price: "₹4,999", features: ["4 consults", "Priority support", "Group follow-up"], popular: true },
    { title: "Family Premium (up to 6)", price: "₹8,999", features: ["6 consults", "Comprehensive plans per member", "Home visits if required"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background-soft to-background-muted">
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">Family Wellness Plans</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Special plans to keep your whole family healthy and supported.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.05 }} className={`p-6 rounded-2xl bg-card/70 border border-border ${p.popular ? "ring-1 ring-primary/20" : ""}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <div className="text-xl font-bold">{p.price}</div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckBoxIcon /> <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <Link href="/contact" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">Enquire</Link>
                <Link href="/HairGrowth/register" className="text-sm text-accent hover:underline">Book</Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <section className="mt-12">
          <Testimonials />
        </section> */}
      </main>
    </div>
  );
}

function CheckBoxIcon() {
  return (
    <span className="inline-flex w-6 h-6 items-center justify-center rounded-md bg-primary/10 text-primary">
      <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}
