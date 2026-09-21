"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaUserMd, 
  FaCalendarCheck, 
  FaArrowRight, 
  FaCheckCircle
} from "react-icons/fa";
import { MdOutlineScience, MdHealthAndSafety, MdVerified } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    phase: "Phase 1 • Root Analysis",
    title: "Digital Assessment",
    desc: "In-depth medical evaluation mapping genetics, lifestyle triggers & hormonal patterns.",
    icon: MdOutlineScience,
    highlights: [
      "Symptom & History Mapping",
      "Hormonal Diagnostics"
    ],
    tagBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    iconGradient: "from-blue-600 to-cyan-500",
    accentGradient: "from-blue-600 to-cyan-500",
    stepBadge: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white",
  },
  {
    step: "02",
    phase: "Phase 2 • Formulation",
    title: "Holistic Formulation",
    desc: "Custom protocol combining medical homeopathy, targeted nutrition & cellular restorers.",
    icon: GiMedicines,
    highlights: [
      "100% Gentle & Non-Steroidal",
      "Personalized Micro-Dosages"
    ],
    tagBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    iconGradient: "from-indigo-600 to-purple-500",
    accentGradient: "from-indigo-600 to-purple-500",
    stepBadge: "bg-gradient-to-r from-indigo-600 to-purple-500 text-white",
  },
  {
    step: "03",
    phase: "Phase 3 • Continuous Care",
    title: "Doctor Consultations",
    desc: "Regular 1-on-1 doctor reviews with milestone photo tracking & dynamic dosage adjustments.",
    icon: FaUserMd,
    highlights: [
      "1-on-1 Doctor Video Calls",
      "Milestone Photo Timeline"
    ],
    tagBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    iconGradient: "from-teal-500 to-emerald-500",
    accentGradient: "from-teal-500 to-emerald-500",
    stepBadge: "bg-gradient-to-r from-teal-500 to-emerald-500 text-white",
  },
  {
    step: "04",
    phase: "Phase 4 • Long-Term Health",
    title: "Immunity Restoration",
    desc: "Balance metabolic vitality so your healing remains sustainable without lifetime dependence.",
    icon: MdHealthAndSafety,
    highlights: [
      "Restored Scalp & Body Immunity",
      "Zero Long-Term Dependence"
    ],
    tagBg: "bg-primary/10 text-primary border-primary/20",
    iconGradient: "from-blue-600 to-indigo-600",
    accentGradient: "from-blue-600 to-indigo-600",
    stepBadge: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
  },
];

export default function HealingProcess() {
  return (
    <section className="py-20 sm:py-26 px-4 sm:px-6 md:px-12 lg:px-20 bg-background relative overflow-hidden">
      
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-gradient-to-r from-blue-600/8 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/8 via-teal-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-teal-500/10 text-primary dark:text-blue-400 border border-primary/20 shadow-xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-600 to-teal-500" />
            </span>
            <span>Evidence-Based Healing Protocol</span>
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
          </div>

          {/* Headline */}
          <h2 className="text-3.5xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14]">
            How Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
              Healing Journey
            </span>{" "}
            <span className="relative inline-block text-foreground">
              Works
              <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 rounded-full opacity-80" />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A transparent, doctor-guided 4-step medical roadmap designed to identify your root cause, reverse stubborn symptoms, and deliver permanent health recovery.
          </p>
        </motion.div>


        {/* ================= 2-COLUMN CONNECTED PROCESS SHOWCASE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: 4 CONNECTED TIMELINE CARDS */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 relative">
              
              {steps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6 }}
                    className="group relative rounded-3.5xl border border-border/90 bg-card/90 dark:bg-card/75 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
                  >
                    {/* Top Gradient Accent Line */}
                    <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.accentGradient}`} />

                    <div>
                      {/* Card Top: Step Badge + Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full ${item.stepBadge} shadow-xs border border-white/20`}>
                          Step {item.step}
                        </span>

                        <div className={`w-12 h-12 rounded-2.5xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md bg-gradient-to-br ${item.iconGradient} text-white`}>
                          <Icon size={20} />
                        </div>
                      </div>

                      {/* Phase Tag */}
                      <div className="mb-2.5">
                        <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${item.tagBg}`}>
                          {item.phase}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>

                    {/* Highlights Checklist */}
                    <div className="pt-3.5 border-t border-border/70 space-y-2">
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-foreground/85 font-medium">
                          <FaCheckCircle className="text-teal-500 text-xs shrink-0" />
                          <span className="truncate">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Bar below cards with Gradient Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link href="#appointment-form">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-indigo-600 hover:from-primary/95 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 transition-all duration-200 group cursor-pointer border border-white/15"
                >
                  <FaCalendarCheck className="text-white/90 text-sm" />
                  <span>Book Doctor Assessment</span>
                  <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>
              </Link>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-medium">
                <ShieldCheck className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Doctor-supervised from Day 1</span>
              </div>
            </motion.div>
          </div>


          {/* RIGHT SIDE: REAL MEDICAL DOCTOR CLINICAL PHOTOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/4.7] rounded-3.5xl p-3.5 bg-gradient-to-b from-blue-600/20 via-card to-teal-500/15 border border-primary/20 shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full rounded-2.5xl overflow-hidden bg-muted">
                <Image
                  src="/images/healing-doctor.jpg"
                  alt="Senior Medical Specialist Consulting with Patient"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />

                {/* Soft Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/25 pointer-events-none" />

                {/* Top Doctor Verified Badge */}
                <div className="absolute top-4 left-4 bg-card/95 dark:bg-card/90 backdrop-blur-md border border-border shadow-md rounded-full px-3.5 py-1.5 flex items-center gap-1.5 z-10">
                  <MdVerified className="text-blue-600 dark:text-blue-400 text-sm" />
                  <span className="text-xs font-bold text-foreground">Verified Specialist Protocol</span>
                </div>

                {/* Bottom Stats Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-card/95 dark:bg-card/90 backdrop-blur-xl border border-border/90 shadow-2xl rounded-2.5xl p-4.5 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 animate-pulse" />
                      <span className="text-xs sm:text-sm font-bold text-foreground">Continuous Monitoring</span>
                    </div>
                    <span className="text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-teal-500 px-3 py-1 rounded-full shadow-xs">
                      92% Success
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-tight">
                    Milestone photography & responsive dynamic dose adaptation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
