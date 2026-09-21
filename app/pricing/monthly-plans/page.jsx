"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, ChevronRight, Calendar } from "lucide-react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function MonthlyPlans() {
  const tiers = [
    { 
      title: "1 Month Starter", 
      price: "₹1,499", 
      duration: "30 Days Care",
      desc: "Initial stabilization and root-cause mapping protocol",
      benefits: [
        "1 Senior Doctor In-Depth Consultation", 
        "4-Week Customized Constitutional Rx", 
        "1 Progress Follow-Up Review",
        "Personalized Dietary & Scalp Roadmap"
      ] 
    },
    { 
      title: "3 Month Recovery", 
      price: "₹4,499", 
      duration: "90 Days Complete Care",
      desc: "Comprehensive healing protocol for measurable visible recovery",
      benefits: [
        "Initial + 3 Dedicated Follow-Up Reviews", 
        "Continuous Dosage & Potency Optimization", 
        "Periodic Scalp / Skin Progress Tracking",
        "Direct Dedicated Care Chat Support",
        "Priority Medicine Deliveries"
      ], 
      popular: true 
    },
    { 
      title: "6 Month Transform", 
      price: "₹8,999", 
      duration: "180 Days Full Transformation",
      desc: "Long-term cellular restoration for severe & chronic conditions",
      benefits: [
        "Monthly Doctor Milestone Consultations", 
        "Comprehensive Multi-Stage Formulations", 
        "Immunity & Relapse-Prevention Protocol",
        "Direct Doctor Priority Access",
        "Free Doorstep Medicine Dispatch"
      ] 
    },
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
          <span className="text-primary font-semibold">1 / 3 / 6 Month Plans</span>
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
              <MdVerified className="text-teal-500 text-sm" />
              <span>Structured Multi-Stage Care Programs</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
            </div>

            <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Goal-Based Care &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                Recovery Plans
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Choose a structured multi-month plan tailored for measurable, lasting recovery with continuous doctor supervision and customized homeopathic potencies.
            </p>
          </div>
        </motion.div>

        {/* ================= TIERS GRID ================= */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {tiers.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`p-7 sm:p-8 rounded-3.5xl bg-card border transition-all flex flex-col justify-between relative shadow-lg hover:shadow-2xl ${
                  t.popular 
                    ? "border-primary/50 ring-2 ring-primary/30 shadow-primary/10" 
                    : "border-border hover:border-primary/40"
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white text-[11px] font-bold shadow-md uppercase tracking-wider">
                    Recommended Recovery Plan
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-foreground">{t.title}</h3>
                    <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {t.duration}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 min-h-[32px]">{t.desc}</p>
                  
                  <div className="my-6 pb-6 border-b border-border/80">
                    <span className="text-3.5xl sm:text-4xl font-black text-foreground font-mono">{t.price}</span>
                    <span className="text-xs text-muted-foreground ml-2">/ complete plan</span>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm">
                    {t.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href="/HairGrowth/register"
                    className={`w-full py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      t.popular
                        ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-md hover:opacity-95 hover:scale-102"
                        : "bg-muted hover:bg-primary/10 text-foreground border border-border hover:border-primary/30"
                    }`}
                  >
                    <FaCalendarCheck className="text-xs" />
                    <span>Select {t.title}</span>
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
