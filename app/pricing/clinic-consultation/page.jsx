"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Testimonials from "@/components/Testimonials";

const heroImage = "/images/hero.png";

export default function ClinicConsultation() {
  const offerings = [
    { title: "Initial Clinic Visit", price: "₹999", features: ["Face-to-face exam", "Scalp/skin physical check", "Immediate diagnostics"] },
    { title: "Clinic + Diagnostics", price: "₹2,499", features: ["Tricho/derm analysis", "Blood test review", "Extended follow-up"], highlight: true },
    { title: "Clinic Comprehensive", price: "₹7,999", features: ["Full diagnostics", "In-clinic procedures as needed", "Monthly onsite reviews"] }
  ];

  return (
    <div className="bg-gradient-to-b from-background via-background-soft to-background">
      <header className="max-w-7xl mx-auto px-6 pt-10 pb-10 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm text-primary font-medium">Pricing • Clinic Consultation</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-foreground"><span className="text-primary">Clinic</span> Consultation & Diagnostics</h1>
          <p className="text-muted-foreground mt-4 max-w-xl">In-depth physical assessments, advanced diagnostics and hands-on care — recommended for moderate to severe cases.</p>

          <div className="mt-6 flex items-center gap-4">
            <Link href="#clinic-plans" className="rounded-xl px-5 py-3 bg-primary text-primary-foreground">See Plans</Link>
            <a className="text-sm text-accent hover:underline" href="#faq">FAQ</a>
          </div>
        </motion.div>

        <motion.div className="relative rounded-2xl overflow-hidden shadow-medium bg-card" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="aspect-[4/3] relative">
            <Image src={heroImage} alt="Clinic Consultation" fill className="object-cover" />
          </div>
        </motion.div>
      </header>

      <section id="clinic-plans" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Clinic Packages</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Hands-on diagnostic packages with clear outcomes and follow-ups.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((o, i) => (
            <motion.div key={o.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.05 }} className={`p-6 rounded-2xl bg-card/70 border border-border backdrop-blur-xl shadow-sm ${o.highlight ? "ring-1 ring-accent/20" : ""}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{o.title}</h3>
                <div className="text-xl font-bold">{o.price}</div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {o.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckBoxIcon /> <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <Link href="/contact" className="px-4 py-2 rounded-lg border border-border">Book Visit</Link>
                <Link href="#" className="text-sm text-accent hover:underline flex items-center gap-2">Details <ArrowRight size={14} /></Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-secondary/20 border border-border">
            <h3 className="text-lg font-semibold text-foreground">What to expect</h3>
            <p className="text-sm text-muted-foreground mt-3">A thorough physical examination, direct scalp evaluation and on-the-spot advice — we prioritise accuracy and safety.</p>
          </div>

          {/* <div className="p-6 rounded-2xl bg-card/70 border border-border">
            <Testimonials />
          </div> */}
        </div>
      </section>

      {/* <div style={{ height: 120 }} /> */}
    </div>
  );
}

/* small inline icon component */
function CheckBoxIcon() {
  return (
    <span className="inline-flex w-6 h-6 items-center justify-center rounded-md bg-primary/10 text-primary">
      <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}
