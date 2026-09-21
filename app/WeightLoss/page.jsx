"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaCalendarCheck, 
  FaArrowRight, 
  FaCheckCircle, 
  FaShieldAlt, 
  FaHeartbeat, 
  FaWeight 
} from "react-icons/fa";
import { MdOutlineScience, MdVerified } from "react-icons/md";
import { Sparkles, ChevronRight, Stethoscope, CheckCircle2, ShieldCheck, Activity } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function WeightLossPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Services</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Metabolic Health & Weight Management</span>
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
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5">
                <MdVerified className="text-teal-500 text-sm" />
                <span>Doctor-Led Metabolic Optimization</span>
                <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
              </div>

              <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                Sustainable Fat Loss &{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Metabolic Reset
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                Overcome stubborn weight gain, thyroid sluggishness, insulin resistance, and PCOS bloating through clinical homeopathic constitutional medicine and metabolic nutrition.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 my-7 w-full max-w-lg">
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-primary">2,000+</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Patients Managed</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-teal-500">Zero</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Crash Diets</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-indigo-500">100%</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Natural Reset</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
                <Link
                  href="/HairGrowth/register"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-102 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FaCalendarCheck className="text-sm" />
                  <span>Book Metabolic Consult</span>
                  <FaArrowRight className="text-xs" />
                </Link>

                <Link
                  href="/conditions/weight-management"
                  className="px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold text-xs sm:text-sm hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs"
                >
                  View Metabolic Protocol →
                </Link>
              </div>
            </div>

            {/* Right Side Image Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/3] sm:aspect-square rounded-3.5xl overflow-hidden border-2 border-primary/25 shadow-2xl bg-card">
                <Image
                  src="/images/slider/weight.png"
                  alt="Metabolic Health & Weight Reset"
                  fill
                  unoptimized
                  className="object-cover hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-white/20 mb-1">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Metabolic Reset System</span>
                  </div>
                  <h3 className="text-lg font-bold">Endocrine & Adrenal Harmony</h3>
                  <p className="text-xs text-slate-200">Reactivating natural basal metabolic rate (BMR)</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= PILLARS OF METABOLIC RESTORATION ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <FaWeight className="w-3.5 h-3.5 text-primary" />
              <span>Root-Cause Management</span>
            </div>
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              4 Pillars of Lasting Weight Optimization
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Fixing the biological and hormonal obstacles that prevent fat breakdown.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Thyroid & BMR Optimization",
                desc: "Homeopathic support to enhance sluggish thyroid conversion and revitalize resting metabolic expenditure.",
                gradient: "from-blue-600 to-indigo-600"
              },
              {
                num: "02",
                title: "Insulin & Leptin Sensitivity",
                desc: "Reducing insulin spikes and visceral fat storage while improving natural cellular satiety cues.",
                gradient: "from-indigo-600 to-purple-600"
              },
              {
                num: "03",
                title: "Gut Microbiome Balance",
                desc: "Repairing digestive transit, eliminating bloating and enhancing nutrient bioavailability.",
                gradient: "from-teal-500 to-emerald-600"
              },
              {
                num: "04",
                title: "Cortisol & Stress Management",
                desc: "Preventing stress-induced emotional cravings and adrenal abdominal fat accumulation.",
                gradient: "from-amber-500 to-orange-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-primary px-3 py-1 rounded-full bg-primary/10">
                      PILLAR {item.num}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-primary">
                  <Link href="/conditions/weight-management" className="hover:underline flex items-center gap-1">
                    <span>Explore Protocol</span>
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>

      <Testimonials />
      <FAQ limit={4} />

    </div>
  );
}
