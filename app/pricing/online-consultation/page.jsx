"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Testimonials from "@/components/Testimonials";

const heroImage = "/images/hero.png";

export default function OnlineConsultation() {
  const plans = [
    { name: "Quick Consult", price: "₹499", desc: "15 min video consult + basic plan", highlights: ["Doctor review", "1 follow-up chat"] },
    { name: "Standard Care", price: "₹1,499", desc: "30 min consult + 4-week plan", highlights: ["Personal Rx", "2 follow-ups"], popular: true },
    { name: "Comprehensive Remote", price: "₹3,999", desc: "Detailed digital diagnosis + 3 month support", highlights: ["AI-assisted report", "Monthly doctor reviews"] }
  ];

  return (
    <div className=" bg-gradient-to-b from-background via-background-soft to-background-muted">
      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm text-primary font-medium">Pricing • Online Consultation</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-foreground"><span className="text-primary">Online</span> Consultation Plans</h1>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Fast, secure video consultations with our doctors — personalised plans and follow-ups without leaving home.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Link href="#plans" className="rounded-xl px-5 py-3 bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition">
              See Plans
            </Link>

            <a href="#faq" className="text-sm text-accent font-medium hover:underline">FAQ</a>
          </div>

          <div className="mt-6 flex gap-3 text-sm">
            <div className="bg-secondary/40 p-3 rounded-lg shadow-soft text-foreground">Secure video calls</div>
            <div className="bg-secondary/40 p-3 rounded-lg shadow-soft text-foreground">Home delivery of medicines</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative rounded-2xl overflow-hidden shadow-medium bg-card">
          <div className="aspect-[4/3] relative">
            <Image src={heroImage} alt="Online Consultation" fill className="object-cover" />
          </div>
        </motion.div>
      </header>

      {/* PLANS */}
      <section id="plans" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Choose a plan</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Transparent pricing for digital-first care.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.06 }} className={`group relative p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-sm ${p.popular ? "ring-1 ring-primary/20" : ""}`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-60 rounded-t-2xl"></div>

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                <div className="text-xl font-bold text-foreground">{p.price}</div>
              </div>

              <p className="text-muted-foreground mt-3">{p.desc}</p>

              <ul className="mt-4 space-y-2 text-sm text-foreground">
                {p.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckBoxIcon /> <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <Link href="/HairGrowth/register" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">
                  Book
                </Link>
                <Link href="#" className="text-sm text-accent hover:underline flex items-center gap-2">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ + Testimonials */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-secondary/20 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Common Questions</h3>
            <div className="text-sm text-muted-foreground space-y-3">
              <div><strong>How long is a consult?</strong><div>Usually 15–30 minutes depending on the plan.</div></div>
              <div><strong>Are digital reports trusted?</strong><div>Yes — our doctors review AI-assisted findings before finalising the plan.</div></div>
              <div><strong>Do you deliver medicines?</strong><div>Yes — to your address with secure packaging.</div></div>
            </div>
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

/* small inline icon component to keep markup tidy */
function CheckBoxIcon() {
  return (
    <span className="inline-flex w-6 h-6 items-center justify-center rounded-md bg-primary/10 text-primary">
      <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}
