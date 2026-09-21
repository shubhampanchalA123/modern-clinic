"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Sparkles, ChevronRight, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function CustomProgramsPage() {
  const programs = [
    {
      title: "Starter Care Program",
      desc: "1-on-1 Doctor consultation, basic homeopathic constitutional protocol & 4-week follow-up tracking.",
      price: "₹1,499",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Rebuild & Recovery Program",
      desc: "Deep metabolic assessment, custom dietary roadmap, targeted homeopathic potencies & 12-week continuous monitoring.",
      price: "₹4,999",
      gradient: "from-indigo-600 to-purple-600",
      popular: true
    },
    {
      title: "Advanced Clinical Regrowth",
      desc: "Comprehensive multi-month diagnostic profiling, personalized biological combos & direct priority doctor access.",
      price: "₹12,999",
      gradient: "from-teal-500 to-emerald-600"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Personalized Root Assessment",
      desc: "Detailed constitutional history, high-res photo evaluation, and digital trichoscopy / dermoscopy."
    },
    {
      num: "02",
      title: "Tailored Formulations & Nutrition",
      desc: "Individualized homeopathic potencies + micronutrient & circadian lifestyle optimization."
    },
    {
      num: "03",
      title: "Ongoing Monitoring & Potency Shifts",
      desc: "Periodic review consultations, progress photo comparisons, and dosage refinement for zero rebounds."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Treatment Approach</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Custom Programs</span>
        </nav>

        {/* ================= HERO SPOTLIGHT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3.5xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-2xl overflow-hidden mb-18"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5">
                <HeartHandshake className="w-3.5 h-3.5 text-teal-500" />
                <span>Tailored Individualized Therapeutics</span>
                <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
              </div>

              <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                Personalized Treatment{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Programs
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                Every human biology is unique. Our custom programs blend doctor-guided clinical expertise, precise diagnostics, and lifestyle support to craft plans that fit your condition severity and goals.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8">
                <Link
                  href="/HairGrowth/register"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-102 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FaCalendarCheck className="text-sm" />
                  <span>Start Custom Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/treatment-approach/digital-diagnosis-method"
                  className="px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold text-xs sm:text-sm hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs"
                >
                  Explore Diagnostic Process →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/3] rounded-3.5xl overflow-hidden border-2 border-primary/25 shadow-2xl bg-card">
                <Image
                  src="/images/why-clinic.jpg"
                  alt="Custom Programs"
                  fill
                  unoptimized
                  className="object-cover hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-white/20 mb-1">
                    <MdVerified />
                    <span>Constitutional Homeopathy</span>
                  </div>
                  <h3 className="text-lg font-bold">100% Customized Rx</h3>
                  <p className="text-xs text-slate-200">Formulated specifically for your triggers</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= 3-STEP CUSTOM PROCESS ================= */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              How We Build Your Program
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              A systematic 3-step clinical framework for maximum recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      PHASE {s.num}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= PROGRAMS TIERS ================= */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              Curated Program Tiers
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Select the level of care and diagnostic depth you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {programs.map((p, i) => (
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
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2 min-h-[44px]">{p.desc}</p>
                  
                  <div className="my-6 pb-6 border-b border-border/80">
                    <span className="text-3.5xl sm:text-4xl font-black text-foreground font-mono">{p.price}</span>
                    <span className="text-xs text-muted-foreground ml-2">/ complete program</span>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href="/HairGrowth/register"
                    className={`w-full py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      p.popular
                        ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-md hover:opacity-95 hover:scale-102"
                        : "bg-muted hover:bg-primary/10 text-foreground border border-border hover:border-primary/30"
                    }`}
                  >
                    <FaCalendarCheck className="text-xs" />
                    <span>Get Started</span>
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
