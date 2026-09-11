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
import { Sparkles, ShieldCheck } from "lucide-react";

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
    tagBg: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    iconBg: "bg-red-500/10 text-red-600 dark:text-red-400",
    accentColor: "border-t-red-500",
    stepBadge: "bg-red-500 text-white",
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
    tagBg: "bg-primary/10 text-primary border-primary/20",
    iconBg: "bg-primary/10 text-primary",
    accentColor: "border-t-primary",
    stepBadge: "bg-primary text-white",
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
    tagBg: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    iconBg: "bg-red-500/10 text-red-600 dark:text-red-400",
    accentColor: "border-t-red-500",
    stepBadge: "bg-red-500 text-white",
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
    iconBg: "bg-primary/10 text-primary",
    accentColor: "border-t-primary",
    stepBadge: "bg-primary text-white",
  },
];

export default function HealingProcess() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-background relative overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 shadow-xs mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span>Evidence-Based Healing Protocol</span>
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18]">
            How Your <span className="text-primary">Healing Journey</span>{" "}
            <span className="relative inline-block text-foreground">
              Works
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-full" />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            A transparent, doctor-guided 4-step medical roadmap designed to identify your root cause, reverse stubborn symptoms, and deliver permanent health recovery.
          </p>
        </div>


        {/* ================= 2-COLUMN GRID (CARDS + IMAGE - SCROLLS NATURALLY) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT SIDE: 4 COMPACT CARDS IN 2x2 GRID */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {steps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className={`group relative rounded-2xl border border-border bg-card/85 dark:bg-card/75 backdrop-blur-xl p-4 sm:p-5 shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between border-t-3 ${item.accentColor}`}
                  >
                    <div>
                      {/* Card Top: Step Badge + Icon */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${item.stepBadge} shadow-2xs`}>
                          Step {item.step}
                        </span>

                        <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xs`}>
                          <Icon size={18} />
                        </div>
                      </div>

                      {/* Phase Tag */}
                      <div className="mb-2">
                        <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-2xs ${item.tagBg}`}>
                          {item.phase}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {item.desc}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="pt-2.5 border-t border-border/70 space-y-1.5">
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-1.5 text-[11px] text-foreground/85 font-medium">
                          <FaCheckCircle className="text-primary text-[10px] shrink-0" />
                          <span className="truncate">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Bar below cards */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="#appointment-form">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:bg-primary/95 transition-all duration-200 group cursor-pointer">
                  <FaCalendarCheck className="text-primary-foreground/90 text-xs" />
                  <span>Book Doctor Assessment</span>
                  <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </Link>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>Doctor-supervised from Day 1</span>
              </div>
            </div>
          </div>


          {/* RIGHT SIDE: REAL MEDICAL DOCTOR VISUAL */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/3.8] rounded-[2.2rem] p-2 bg-gradient-to-b from-primary/20 via-card to-red-500/10 border border-primary/20 shadow-xl overflow-hidden group">
              <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
                <Image
                  src="/images/healing-doctor.jpg"
                  alt="Senior Medical Specialist Consulting with Patient"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  sizes="(max-width: 1024px) 100vw, 460px"
                />

                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

                {/* Top Doctor Verified Badge */}
                <div className="absolute top-3.5 left-3.5 bg-card/90 backdrop-blur-md border border-border shadow-md rounded-full px-3 py-1 flex items-center gap-1.5 z-10">
                  <MdVerified className="text-primary text-sm" />
                  <span className="text-xs font-bold text-foreground">Verified Specialist Protocol</span>
                </div>

                {/* Bottom Stats Badge on Image */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-card/95 backdrop-blur-md border border-border shadow-lg rounded-xl p-3 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold text-foreground">Personalized Root-Cause Care</span>
                  </div>
                  <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                    92% Success
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


