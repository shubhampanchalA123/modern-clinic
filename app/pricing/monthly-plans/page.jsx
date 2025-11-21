"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

export default function MonthlyPlans() {
  const tiers = [
    { title: "1 Month Starter", price: "₹1,499", benefits: ["Initial consult", "4 week plan", "1 follow-up"] },
    { title: "3 Month Progress", price: "₹4,499", benefits: ["Detailed plan", "3 follow-ups", "Progress tracking"], popular: true },
    { title: "6 Month Transform", price: "₹9,999", benefits: ["Comprehensive care", "Monthly reviews", "Priority support"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background-soft to-background-muted">
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">1 / 3 Month Plans</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Short and medium term plans tailored for measurable progress.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.05 }} className={`p-6 rounded-2xl bg-card/70 border border-border ${t.popular ? "ring-1 ring-primary/20" : ""}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>
                <div className="text-2xl font-bold">{t.price}</div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {t.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckBoxIcon /> <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <Link href="/HairGrowth/register" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">Select</Link>
                <Link href="/contact" className="text-sm text-accent hover:underline">Contact Sales</Link>
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
