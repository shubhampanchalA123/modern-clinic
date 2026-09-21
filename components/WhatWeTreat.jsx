"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, CheckCircle2, Stethoscope, ArrowRight } from "lucide-react";

const conditions = [
  {
    slug: "hair-loss",
    title: "Hair Loss",
    subtitle: "Trichology & Scalp Health",
    desc: "Personalized clinical treatment for hair fall, alopecia areata, dandruff & scalp vitality.",
    img: "/images/conditions/hair-loss.jpg",
    fallbackImg: "/images/conditions/hair.webp",
    href: "/conditions/hair-loss",
    category: "trichology",
    badge: "Trichology",
    stat: "92% Follicle Revival",
    borderGradient: "from-blue-500 via-indigo-500 to-cyan-400",
    badgeBg: "bg-blue-600 text-white",
    glowColor: "shadow-blue-500/25",
  },
  {
    slug: "skin-disorders",
    title: "Skin Disorders",
    subtitle: "Clinical Dermatology",
    desc: "Holistic, non-steroidal care for acne, eczema, psoriasis, pigmentation & skin allergies.",
    img: "/images/conditions/skin-disorders.jpg",
    fallbackImg: "/images/conditions/skin.jpg",
    href: "/conditions/skin-disorders",
    category: "trichology",
    badge: "Dermatology",
    stat: "94% Symptom Relief",
    borderGradient: "from-indigo-500 via-purple-500 to-rose-400",
    badgeBg: "bg-indigo-600 text-white",
    glowColor: "shadow-indigo-500/25",
  },
  {
    slug: "respiratory",
    title: "Respiratory Care",
    subtitle: "Airway & Pulmonology",
    desc: "Evidence-informed care for asthma, bronchitis, sinus congestion & chronic cough.",
    img: "/images/conditions/respiratory.jpg",
    fallbackImg: "/images/conditions/respiratory.jpg",
    href: "/conditions/respiratory",
    category: "metabolic",
    badge: "Pulmonology",
    stat: "91% Airway Relief",
    borderGradient: "from-sky-500 via-blue-500 to-teal-400",
    badgeBg: "bg-sky-600 text-white",
    glowColor: "shadow-sky-500/25",
  },
  {
    slug: "child-health",
    title: "Child Health",
    subtitle: "Gentle Pediatrics",
    desc: "Safe & gentle pediatric care for recurrent colds, low immunity & child wellness.",
    img: "/images/conditions/child-health.jpg",
    fallbackImg: "/images/conditions/child.jpg",
    href: "/conditions/child-health",
    category: "pediatric",
    badge: "Pediatrics",
    stat: "100% Sweet & Safe",
    borderGradient: "from-amber-500 via-orange-500 to-yellow-400",
    badgeBg: "bg-amber-600 text-white",
    glowColor: "shadow-amber-500/25",
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    subtitle: "Endocrine & Hormones",
    desc: "Natural hormonal balance for PCOS/PCOD, thyroid irregularities & menstrual health.",
    img: "/images/conditions/womens-health.jpg",
    fallbackImg: "/images/conditions/women.jpg",
    href: "/conditions/womens-health",
    category: "metabolic",
    badge: "Endocrine",
    stat: "93% Cycle Regularity",
    borderGradient: "from-purple-500 via-pink-500 to-rose-400",
    badgeBg: "bg-purple-600 text-white",
    glowColor: "shadow-purple-500/25",
  },
  {
    slug: "diabetes-management",
    title: "Diabetes Management",
    subtitle: "Metabolic & Glycemic",
    desc: "Supportive clinical care for blood sugar stability, energy & long-term organ defense.",
    img: "/images/conditions/diabetes-management.jpg",
    fallbackImg: "/images/conditions/diabetes.jpg",
    href: "/conditions/diabetes-management",
    category: "metabolic",
    badge: "Metabolic Care",
    stat: "Organ Defense Focus",
    borderGradient: "from-emerald-500 via-teal-500 to-cyan-400",
    badgeBg: "bg-emerald-600 text-white",
    glowColor: "shadow-emerald-500/25",
  },
  {
    slug: "weight-management",
    title: "Weight Management",
    subtitle: "Metabolic Reset",
    desc: "Root-cause metabolic support for sustainable, natural fat loss and vitality.",
    img: "/images/conditions/weight-management.jpg",
    fallbackImg: "/images/conditions/weight.webp",
    href: "/conditions/weight-management",
    category: "metabolic",
    badge: "Metabolism",
    stat: "Metabolic Reset",
    borderGradient: "from-blue-500 via-indigo-500 to-teal-400",
    badgeBg: "bg-blue-600 text-white",
    glowColor: "shadow-teal-500/25",
  },
  {
    slug: "mental-health",
    title: "Mental Health",
    subtitle: "Mind & Emotional Science",
    desc: "Homeopathic support for anxiety, chronic stress, insomnia & emotional balance.",
    img: "/images/conditions/mental-health.jpg",
    fallbackImg: "/images/conditions/mental.jpg",
    href: "/conditions/mental-health",
    category: "pediatric",
    badge: "Mind Science",
    stat: "Non-Sedative Relief",
    borderGradient: "from-violet-500 via-purple-500 to-indigo-400",
    badgeBg: "bg-violet-600 text-white",
    glowColor: "shadow-violet-500/25",
  },
];

const filterTabs = [
  { id: "all", label: "All Conditions", count: 8 },
  { id: "trichology", label: "Hair & Dermatology", count: 2 },
  { id: "metabolic", label: "Metabolic & Hormonal", count: 4 },
  { id: "pediatric", label: "Pediatrics & Mind", count: 2 },
];

export default function WhatWeTreat() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredConditions = conditions.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <section id="what-we-treat" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-background relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-indigo-500/8 to-teal-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/8 via-purple-500/6 to-transparent rounded-full blur-3xl" />
      </div>

      {/* ================= SECTION HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-teal-500/10 text-primary dark:text-blue-400 border border-primary/20 mb-4 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-600 to-teal-500" />
          </span>
          <span>Clinical Care & Diagnostics</span>
          <Sparkles className="w-3.5 h-3.5 text-teal-500" />
        </div>

        {/* Section Heading */}
        <h2 className="text-3.5xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14]">
          Conditions{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
            We Treat
          </span>
          <span className="relative inline-block text-foreground ml-1">
            .
            <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 rounded-full opacity-80" />
          </span>
        </h2>

        {/* Supporting Description */}
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Explore evidence-informed care programs. Learn about symptoms, underlying root causes, clinical assessment methods, and personalized treatment approaches tailored for your recovery.
        </p>

        {/* Interactive Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 flex-wrap">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "text-white shadow-lg shadow-blue-500/25 scale-102"
                    : "bg-card/80 backdrop-blur-md border border-border text-foreground/80 hover:bg-muted hover:border-primary/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterTabIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ================= PROMINENT LUXURY IMAGE CARDS WITH GLOWING BORDER ================= */}
      <motion.div 
        layout 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
      >
        <AnimatePresence mode="popLayout">
          {filteredConditions.map((item, idx) => (
            <motion.div
              key={item.slug}
              layout
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              {/* Outer Illuminated Border Wrap */}
              <Link
                href={item.href}
                className={`group relative h-full flex flex-col justify-between rounded-[28px] p-[2.5px] bg-gradient-to-b from-border via-border/50 to-border hover:bg-gradient-to-b hover:${item.borderGradient} transition-all duration-500 hover:-translate-y-2.5 shadow-md hover:shadow-2xl ${item.glowColor} cursor-pointer block overflow-hidden`}
              >
                {/* Inner Card Container */}
                <div className="rounded-[25.5px] bg-card dark:bg-card/95 backdrop-blur-2xl overflow-hidden h-full flex flex-col justify-between">
                  
                  {/* Top Image Box */}
                  <div>
                    <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-muted/60">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        unoptimized
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-112"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Multi-Tone Gradient Scrim Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Top Badges: Category Pill + Action Circle */}
                      <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                        <span className={`text-[11px] font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md border border-white/20 ${item.badgeBg}`}>
                          {item.badge}
                        </span>

                        <div className="w-8.5 h-8.5 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-md border border-white/30 flex items-center justify-center text-foreground group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-teal-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md">
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                      {/* Bottom Image Stat Chip */}
                      <div className="absolute bottom-3 left-3.5 z-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/25 text-white text-[11px] font-bold shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span>{item.stat}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content Middle */}
                    <div className="p-5 sm:p-5.5">
                      {/* Category Subtitle */}
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary dark:text-teal-400 block mb-1">
                        {item.subtitle}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Action Strip */}
                  <div className="px-5 pb-5 pt-3.5 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    <span className="group-hover:underline">Explore Clinical Care</span>
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5 group-hover:bg-primary group-hover:text-white">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ================= ASSISTANCE & EXPLORE FOOTER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3.5xl bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-teal-500/5 border border-primary/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg"
      >
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25">
            <Stethoscope className="w-6.5 h-6.5" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-foreground">
              Not sure which specialist is right for your symptoms?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Book a direct consultation with Dr. Devendra Rathore for a comprehensive root-cause assessment.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
          <Link
            href="/appointment"
            className="px-5.5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-md shadow-blue-500/25 hover:shadow-xl hover:scale-103 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/conditions"
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-card border border-border text-foreground hover:bg-muted hover:border-primary/40 transition-all cursor-pointer"
          >
            View All Conditions
          </Link>
        </div>
      </motion.div>

    </section>
  );
}



