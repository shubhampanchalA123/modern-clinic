"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarCheck,
  FaArrowRight,
  FaChevronDown,
  FaShieldAlt,
  FaHeartbeat,
  FaUserMd,
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";
import { MdOutlineScience, MdVerified, MdOutlineHealthAndSafety } from "react-icons/md";
import { Sparkles, Activity, Clock, ShieldCheck, ChevronRight } from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardPop = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ConditionDetailView({ data }) {
  const [openFaq, setOpenFaq] = useState(0);

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <h2 className="text-2xl font-bold text-foreground">Condition Not Found</h2>
        <p className="text-muted-foreground mt-2">The requested condition page could not be located.</p>
        <Link href="/" className="mt-6 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
          Return to Home
        </Link>
      </div>
    );
  }

  const {
    name,
    category,
    headline,
    shortDesc,
    image,
    imageAlt,
    badge,
    stats = [],
    about = {},
    symptoms = [],
    causes = [],
    assessment = [],
    treatmentApproach = [],
    timeline = [],
    lifestyleTips = [],
    whenToConsult = [],
    faqs = [],
  } = data;

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      
      {/* ================= 1. BREADCRUMB ================= */}
      <div className="w-full border-b border-border/70 bg-card/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1 font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60 shrink-0" />
            <Link href="/conditions" className="hover:text-primary transition-colors font-medium">
              Conditions
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60 shrink-0" />
            <span className="text-foreground font-semibold truncate text-primary">{name}</span>
          </nav>
        </div>
      </div>

      {/* ================= 2. HERO SECTION ================= */}
      <section className="relative pt-8 pb-14 md:pt-14 md:pb-20 overflow-hidden border-b border-border/80">
        
        {/* Ambient Subtle Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              
              {/* Category & Verified Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 shadow-xs mb-4"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span>{category || "Clinical Care"}</span>
                <span className="text-border">|</span>
                <span className="text-muted-foreground font-medium flex items-center gap-1">
                  <MdVerified className="text-primary text-xs" /> Doctor-Led Protocol
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]"
              >
                {headline || name}
              </motion.h1>

              {/* Short Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
              >
                {shortDesc}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
              >
                <Link href="/appointment" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer">
                    <FaCalendarCheck className="text-primary-foreground/90 text-sm" />
                    <span>Book Consultation</span>
                    <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </Link>

                <a href="#about" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-sm sm:text-base hover:bg-muted/70 hover:border-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
                    <span>Explore Treatment Approach</span>
                  </button>
                </a>
              </motion.div>

              {/* Key Trust Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-8 pt-6 border-t border-border/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-left"
              >
                {stats.map((st, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-card/70 border border-border/80 shadow-2xs hover:border-primary/30 transition-colors">
                    <div className="text-xs text-muted-foreground">{st.label}</div>
                    <div className="text-sm sm:text-base font-bold text-foreground mt-0.5">{st.value}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: High-Res Medical Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-card group">
                <div className="relative aspect-[4/3] sm:aspect-[4/3.5] w-full">
                  <Image
                    src={image || "/images/conditions/hair-loss.jpg"}
                    alt={imageAlt || name}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating pill over image */}
                <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-md border border-border p-3.5 rounded-2xl shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                      <FaUserMd size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Dr. Devendra Rathore</div>
                      <div className="text-[11px] text-muted-foreground">BHMS • Senior Specialist</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                    10+ Yrs Exp
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 3. ABOUT THE CONDITION ================= */}
      <section id="about" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Condition Overview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              {about.title || `What Is ${name}?`}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {about.content}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xs hover:border-primary/30 transition-colors">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                Key Clinical Focus Points
              </h3>
              <div className="space-y-3.5">
                {(about.keyPoints || []).map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-start gap-3 text-sm text-foreground/90"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 4. COMMON SYMPTOMS ================= */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Clinical Indicators</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            Common Symptoms of <span className="text-primary">{name}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Symptoms often develop gradually and vary in intensity. Here are the primary signs to observe:
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {symptoms.map((sym, idx) => (
            <motion.div
              key={idx}
              variants={cardPop}
              className="p-5 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 group-hover:scale-125 transition-transform" />
                  <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">{sym.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {sym.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= 5. CAUSES & CONTRIBUTING FACTORS ================= */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Root-Cause Analysis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            Causes & Contributing Triggers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            We look beyond surface manifestations to identify the biological and environmental triggers.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {causes.map((c, idx) => (
            <motion.div
              key={idx}
              variants={cardPop}
              className="p-5 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 shadow-xs flex flex-col group"
            >
              <span className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">
                {c.category}
              </span>
              <h3 className="text-base font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {c.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-auto">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= 6. HOW WE ASSESS ================= */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Diagnostic Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            How We Assess Your Condition
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            A precise, unhurried 4-step diagnostic framework to map your root-cause profile.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {assessment.map((as, idx) => (
            <motion.div
              key={idx}
              variants={cardPop}
              className="relative p-6 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary font-mono font-extrabold text-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {as.step}
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{as.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{as.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= 7. TREATMENT APPROACH ================= */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Holistic Protocol</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            Our Treatment & Management Approach
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Customized micro-dose homeopathy synergized with clinical nutrition and medical supervision.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {treatmentApproach.map((tr, idx) => (
            <motion.div
              key={idx}
              variants={cardPop}
              className="p-6 sm:p-7 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <MdOutlineScience size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{tr.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{tr.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= 8. WHAT PATIENTS CAN EXPECT (TIMELINE) ================= */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Recovery Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            What You Can Expect
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Healing takes structured, phase-by-phase care. Here is the typical progression timeline:
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {timeline.map((tm, idx) => (
            <motion.div
              key={idx}
              variants={cardPop}
              className="p-6 rounded-2xl bg-card border border-border shadow-xs relative hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-3">
                {tm.phase}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{tm.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{tm.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= 9 & 10. LIFESTYLE CARE & WHEN TO CONSULT ================= */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Lifestyle Care */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xs hover:border-primary/30 transition-colors"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <FaLightbulb className="text-amber-500" />
              <span>Supportive Guidance</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Lifestyle & Supportive Care
            </h3>
            <div className="space-y-3">
              {lifestyleTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </span>
                  <span className="leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* When to Consult a Doctor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-card border border-red-500/20 shadow-xs hover:border-red-500/40 transition-colors"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-3">
              <FaExclamationTriangle />
              <span>Medical Advisory</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              When to Consult a Doctor
            </h3>
            <div className="space-y-3">
              {whenToConsult.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90">
                  <span className="w-4 h-4 rounded-full bg-red-500/15 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    !
                  </span>
                  <span className="leading-relaxed">{adv}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 11. FAQ SECTION ================= */}
      <section className="py-14 sm:py-18 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Clear, honest answers regarding treatment for {name}.
          </p>
        </motion.div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-card ${
                  isOpen ? "border-primary/50 shadow-xs" : "border-border hover:border-border/90"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="font-bold text-sm sm:text-base text-foreground leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <FaChevronDown size={11} />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= 12. FINAL CONSULTATION CTA ================= */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-card border border-border p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-lg"
        >
          
          {/* Subtle Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Personalized Clinical Attention</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              Take the Next Step Toward Better Health
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Schedule a one-on-one consultation with Dr. Devendra Rathore. Experience root-cause diagnostic mapping and safe, personalized holistic treatment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/appointment" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
                  <FaCalendarCheck />
                  <span>Book Consultation</span>
                  <FaArrowRight className="text-xs" />
                </button>
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1"><FaCheckCircle className="text-emerald-500" /> 1-on-1 Senior Doctor</span>
              <span className="flex items-center gap-1"><FaCheckCircle className="text-emerald-500" /> Safe & Non-Steroidal</span>
              <span className="flex items-center gap-1"><FaCheckCircle className="text-emerald-500" /> 10+ Years Experience</span>
            </div>
          </div>

        </motion.div>
      </section>

    </div>
  );
}
