"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, ChevronRight, Users, HeartHandshake } from "lucide-react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function FamilyWellness() {
  const plans = [
    { 
      title: "Family Basic (2 Members)", 
      price: "₹2,499", 
      desc: "Ideal for couples or parent-child combined care",
      features: [
        "2 Senior Doctor Video Consultations", 
        "Individualized Constitutional Formulations", 
        "Family Dietary & Metabolic Guidelines",
        "1 Follow-Up Review per Member"
      ] 
    },
    { 
      title: "Family Plus (Up to 4)", 
      price: "₹4,999", 
      desc: "Holistic care for parents, children and family health",
      features: [
        "4 Comprehensive Doctor Consultations", 
        "Pediatric Immunity & Adult Chronic Care", 
        "Dedicated Family Care Coordinator",
        "2 Follow-Up Reviews per Member",
        "Priority Medicine Deliveries"
      ], 
      popular: true 
    },
    { 
      title: "Family Premium (Up to 6)", 
      price: "₹8,999", 
      desc: "Complete 3-generation healthcare support",
      features: [
        "6 Comprehensive Consultations", 
        "Geriatric, Adult & Pediatric Protocols", 
        "Emergency Priority Doctor Access",
        "Monthly Progress & Health Reviews",
        "Free Doorstep Medicine Dispatch"
      ] 
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Pricing</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Family Wellness Plans</span>
        </nav>

        {/* ================= HERO SPOTLIGHT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3.5xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-2xl overflow-hidden mb-18 text-center"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5">
              <Users className="w-3.5 h-3.5 text-teal-500" />
              <span>Multi-Member Complete Healthcare</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
            </div>

            <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Family Wellness &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                Shared Care Packages
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Keep your entire household healthy with integrated homeopathic care covering child immunity, parent lifestyle vitality, and chronic wellness under one unified package.
            </p>
          </div>
        </motion.div>

        {/* ================= TIERS GRID ================= */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`p-7 sm:p-8 rounded-3.5xl bg-card border transition-all flex flex-col justify-between relative shadow-lg hover:shadow-2xl ${
                  p.popular 
                    ? "border-primary/50 ring-2 ring-primary/30 shadow-primary/10" 
                    : "border-border hover:border-primary/40"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white text-[11px] font-bold shadow-md uppercase tracking-wider">
                    Best Value Family Plan
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 min-h-[32px]">{p.desc}</p>
                  
                  <div className="my-6 pb-6 border-b border-border/80">
                    <span className="text-3.5xl sm:text-4xl font-black text-foreground font-mono">{p.price}</span>
                    <span className="text-xs text-muted-foreground ml-2">/ shared package</span>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href="/HairGrowth/register"
                    className={`w-full py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      p.popular
                        ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-md hover:opacity-95 hover:scale-102"
                        : "bg-muted hover:bg-primary/10 text-foreground border border-border hover:border-primary/30"
                    }`}
                  >
                    <FaCalendarCheck className="text-xs" />
                    <span>Choose {p.title}</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      <Testimonials />
      <FAQ limit={4} />

    </div>
  );
}
