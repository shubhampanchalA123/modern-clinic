"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaCalendarCheck, 
  FaArrowRight, 
  FaCheckCircle, 
  FaShieldAlt, 
  FaLeaf, 
  FaStar 
} from "react-icons/fa";
import { GiMedicines, GiFruitBowl } from "react-icons/gi";
import { MdSelfImprovement, MdVerified, MdOutlineScience } from "react-icons/md";
import { Sparkles, ChevronRight, Stethoscope, CheckCircle2, ShieldCheck, HeartPulse } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import VideoReels from "@/components/VideoReels";

export default function HairGrowthPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Services</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Hair Growth & Scalp Care</span>
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
                <span>Doctor-Guided Hair Regrowth Program</span>
                <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
              </div>

              <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                Permanent Recovery From{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Hair Fall & Thinning
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                Treat hair loss at its root cause with a medically proven, non-steroidal system combining individualized Homeopathy, scalp follicular nutrition, and adrenal stress regulation.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 my-7 w-full max-w-lg">
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-primary">10,000+</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Treated Patients</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-teal-500">92%</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Recovery Rate</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-indigo-500">0%</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Steroids / Toxins</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
                <Link
                  href="/HairGrowth/register"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-102 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FaCalendarCheck className="text-sm" />
                  <span>Book Hair Consultation</span>
                  <FaArrowRight className="text-xs" />
                </Link>

                <a
                  href="#how"
                  className="px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold text-xs sm:text-sm hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs"
                >
                  How Treatment Works ↓
                </a>
              </div>
            </div>

            {/* Right Side Image Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/3] sm:aspect-square rounded-3.5xl overflow-hidden border-2 border-primary/25 shadow-2xl bg-card">
                <Image
                  src="/images/hair-hero.png"
                  alt="Doctor-Guided Hair Regrowth"
                  fill
                  unoptimized
                  className="object-cover hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-white/20 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Non-Steroidal Formulation</span>
                  </div>
                  <h3 className="text-lg font-bold">Follicular Density Restoration</h3>
                  <p className="text-xs text-slate-200">Reactivating dormant roots from inside-out</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= 3-STEP TREATMENT PROTOCOL ================= */}
        <motion.section 
          id="how"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <MdOutlineScience className="w-3.5 h-3.5 text-teal-500" />
              <span>Multi-Stage Healing System</span>
            </div>
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              How Our Holistic Treatment Works
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              A 3-step medically guided process designed to fix your hair fall from the root.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Constitutional Homeopathy",
                desc: "Corrects internal biological triggers such as DHT sensitivity, thyroid imbalance, gut dysbiosis & stress cortisol.",
                icon: <GiMedicines size={24} className="text-white" />,
                gradient: "from-blue-600 to-indigo-600"
              },
              {
                num: "02",
                title: "Follicular Nutrition Therapy",
                desc: "Strengthens micro-circulation with cellular nutrients and botanical restorers that nourish the dermal papilla.",
                icon: <GiFruitBowl size={24} className="text-white" />,
                gradient: "from-indigo-600 to-purple-600"
              },
              {
                num: "03",
                title: "Stress & Lifestyle Healing",
                desc: "Balances adrenal cortisol, improves deep sleep cycles, and extends the anagen active hair growth phase.",
                icon: <MdSelfImprovement size={24} className="text-white" />,
                gradient: "from-teal-500 to-emerald-600"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-md`}>
                      {step.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground px-3 py-1 rounded-full bg-muted">
                      PHASE {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/70 flex items-center gap-2 text-xs font-semibold text-primary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  <span>Clinically Supervised Dosages</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= VIDEO REELS ================= */}
        <div className="mb-20">
          <VideoReels />
        </div>

        {/* ================= ROOT CAUSE IDENTIFICATION GRID ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <HeartPulse className="w-3.5 h-3.5 text-primary" />
              <span>Personalized Diagnosis</span>
            </div>
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              What's Causing Your Hair Fall?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Hair fall happens due to multiple internal & external triggers. We identify your exact root cause.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Stress & Anxiety (Cortisol)",
                desc: "Elevated cortisol pushes active hair follicles into sudden premature resting phase (Telogen Effluvium).",
                icon: "/images/icons/stress.png"
              },
              {
                title: "Hormonal & DHT Sensitivity",
                desc: "PCOS, thyroid imbalances and DHT sensitivity shrink follicles and accelerate crown thinning.",
                icon: "/images/icons/hormones.png"
              },
              {
                title: "Nutritional & Iron Deficiencies",
                desc: "Low ferritin, vitamin D3, B12 and amino acids starve hair matrix cells of essential building blocks.",
                icon: "/images/icons/nutrition.png"
              },
              {
                title: "Scalp Microbiome & Sebum",
                desc: "Persistent dandruff, fungal inflammation and clogged sebum pores restrict oxygen supply to roots.",
                icon: "/images/icons/scalp.png"
              },
              {
                title: "Lifestyle & Sleep Deprivation",
                desc: "Late-night circadian disruption, dehydration and metabolic stagnation impair cellular repair.",
                icon: "/images/icons/lifestyle.png"
              },
              {
                title: "Genetics & Pattern Thinning",
                desc: "Genetic predisposition causes androgenic miniaturization that requires targeted constitutional defense.",
                icon: "/images/icons/genetics.png"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-muted/80 p-2.5 mb-5 flex items-center justify-center">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-primary">
                  <Link href="/conditions/hair-loss" className="hover:underline flex items-center gap-1">
                    <span>Learn Treatment Details</span>
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
