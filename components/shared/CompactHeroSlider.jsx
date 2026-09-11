"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUserMd, FaStar, FaShieldAlt, FaCalendarCheck, FaArrowRight, FaPlus } from "react-icons/fa";
import { MdOutlineScience, MdVerified } from "react-icons/md";
import { Sparkles } from "lucide-react";

export default function CompactHeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-4 pb-8 md:pt-6 md:pb-10 lg:pt-8 lg:pb-10 min-h-[480px] lg:min-h-[520px] flex items-center">
      {/* ================= RIGHT SIDE: Large Clear & Vibrant Background Visual ================= */}
      <div className="absolute top-0 right-0 bottom-0 w-[42%] xl:w-[45%] 2xl:w-[47%] hidden lg:block pointer-events-none select-none z-0 overflow-hidden">
        {/* Crisp Medical Photograph as Background Visual */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-top xl:bg-center opacity-95 dark:opacity-90"
          style={{
            backgroundImage: "url('/images/hero.png')",
          }}
        />

        {/* Minimal Soft Left-Edge Fade (only on the leftmost edge, keeping doctor crisp and clear) */}
        <div className="absolute inset-y-0 left-0 w-24 xl:w-36 bg-gradient-to-r from-background to-transparent z-10" />

        {/* Subtle Top and Bottom Edge Blends */}
        <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-background/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background/50 to-transparent z-10" />
      </div>

      {/* ================= BACKGROUND ANIMATED GLOWS & PARTICLES ================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10 overflow-hidden">
        {/* Animated Medical Blue radial glow */}
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            x: [0, 25, 0],
            y: [0, -20, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 left-1/6 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        />

        {/* Animated Warm Red accent glow */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            x: [0, -20, 0],
            y: [0, 25, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -top-16 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"
        />

        {/* Animated Soft Aqua/Secondary glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-6 left-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-3xl"
        />

        {/* Subtle Floating Medical Plus Particles */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-12 left-1/12 text-primary/20 text-sm"
        >
          <FaPlus />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -22, 0],
            opacity: [0.15, 0.45, 0.15],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-16 left-1/4 text-red-500/20 text-xs"
        >
          <FaPlus />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-20 left-1/2 text-primary/20 text-base"
        >
          <Sparkles className="w-4 h-4 text-primary/20" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ================= LEFT SIDE: Doctor Profile (Shifted Leftward with Breathing Space) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-4 xl:col-span-3 flex-col items-center text-center lg:-ml-2 xl:-ml-6"
          >
            {/* Organic Arch Frame for Doctor Image */}
            <div className="relative w-full max-w-[240px] xl:max-w-[260px] aspect-[4/4.5] rounded-t-[115px] rounded-b-[28px] p-2 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent border border-primary/20 shadow-[0_12px_30px_rgba(31,77,160,0.12)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.4)] overflow-hidden group">
              
              {/* Inner Soft Gradient Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-primary/5 to-background rounded-t-[110px] rounded-b-[24px]" />

              {/* Doctor Image */}
              <div className="relative w-full h-full rounded-t-[110px] rounded-b-[24px] overflow-hidden">
                <Image
                  src="/images/doctor-hero-new.jpg"
                  alt="Dr. Devendra Rathore"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 240px, 260px"
                />
              </div>

              {/* Subtle Floating Verified Pill at bottom right of image */}
              <div className="absolute bottom-2.5 right-2.5 bg-card/95 backdrop-blur-md border border-border shadow-md rounded-full px-2.5 py-0.5 flex items-center gap-1">
                <MdVerified className="text-primary text-xs" />
                <span className="text-[10px] font-semibold text-foreground">Verified Expert</span>
              </div>
            </div>

            {/* Doctor Details Section - Completely Visible Below Image */}
            <div className="mt-3 w-full max-w-[240px] xl:max-w-[260px] flex flex-col items-center text-center">
              {/* Doctor Name */}
              <h3 className="text-base xl:text-lg font-bold text-foreground flex items-center justify-center gap-1.5 leading-snug">
                Dr. Devendra Rathore
              </h3>

              {/* Qualification & Specialty */}
              <p className="text-[11px] xl:text-xs font-semibold text-primary mt-0.5">
                BHMS • Hair & Wellness Specialist
              </p>

              {/* Badges / Experience Highlights */}
              <div className="flex items-center justify-center gap-1.5 mt-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                  10+ Yrs Exp
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-secondary/15 text-foreground border border-border">
                  <FaStar className="text-amber-500 text-[9px]" /> 5,000+ Treated
                </span>
              </div>

              {/* Clean View Profile CTA */}
              <Link href="/doctor" className="mt-2.5 group/btn">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-xs">
                  <span>View Profile</span>
                  <FaArrowRight className="text-[9px] transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </motion.div>


          {/* ================= CENTER AREA: Hero Typography & CTAs (Spacious & Balanced) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-8 xl:col-span-6 flex flex-col items-center text-center px-2 sm:px-4 lg:px-6 max-w-2xl mx-auto lg:mx-0"
          >
            {/* Top Pill Badge with subtle Red Accent */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 shadow-sm mb-3 sm:mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span>Holistic Healthcare & Medical Science</span>
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
            </motion.div>

            {/* Large Prominent Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[2.45rem] xl:text-[2.85rem] font-extrabold text-foreground tracking-tight leading-[1.15]">
              Personalized Care for{" "}
              <span className="text-primary underline decoration-primary/25 decoration-wavy decoration-2">
                Hair, Skin
              </span>{" "}
              &{" "}
              <span className="relative inline-block text-foreground">
                Chronic Health
                {/* Subtle Red Underline Accent */}
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-full" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Experience modern, evidence-based homeopathic treatments designed around your unique symptoms.
              Root-cause healing tailored for long-term recovery.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full sm:w-auto">
              {/* Primary CTA */}
              <Link href="#appointment-form" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group">
                  <FaCalendarCheck className="text-primary-foreground/90 text-sm" />
                  <span>Book Appointment</span>
                  <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </Link>

              {/* Secondary CTA */}
              <Link href="#what-we-treat" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground font-semibold text-sm sm:text-base hover:bg-muted/70 hover:border-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                  <span>Explore Treatments</span>
                </button>
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-6 pt-5 border-t border-border/80 w-full max-w-xl grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-1 text-xs">
                  <MdOutlineScience size={14} />
                </div>
                <span className="text-xs font-semibold text-foreground">Root-Cause</span>
                <span className="text-[10px] text-muted-foreground hidden sm:inline">Diagnostic Care</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-1 text-xs">
                  <FaShieldAlt size={12} />
                </div>
                <span className="text-xs font-semibold text-foreground">100% Safe</span>
                <span className="text-[10px] text-muted-foreground hidden sm:inline">Gentle & Natural</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-secondary/20 text-primary dark:text-secondary flex items-center justify-center mb-1 text-xs">
                  <FaStar size={12} />
                </div>
                <span className="text-xs font-semibold text-foreground">10,000+</span>
                <span className="text-[10px] text-muted-foreground hidden sm:inline">Happy Patients</span>
              </div>
            </div>

            {/* Mobile / Tablet View: Doctor Profile & Clinic Highlights Cards */}
            <div className="mt-6 w-full max-w-md lg:hidden space-y-3.5">
              {/* Doctor Profile Card for Mobile */}
              <div className="p-3.5 rounded-2xl bg-card border border-border shadow-md flex items-center gap-3.5 text-left">
                <div className="relative w-18 h-22 rounded-2xl overflow-hidden shrink-0 border border-primary/20 bg-primary/5">
                  <Image
                    src="/images/doctor1.png"
                    alt="Dr. Devendra Rathore"
                    fill
                    className="object-cover object-top"
                    sizes="75px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <h3 className="text-sm font-bold text-foreground truncate">Dr. Devendra Rathore</h3>
                    <MdVerified className="text-primary text-sm shrink-0" />
                  </div>
                  <p className="text-xs text-primary font-medium mt-0.5">BHMS • Hair & Wellness Expert</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">10+ Yrs Exp • 5,000+ Patients</p>
                  <Link href="/doctor" className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                    View Profile <FaArrowRight className="text-[9px]" />
                  </Link>
                </div>
              </div>

              {/* Clinic / Treatment Visual for Mobile */}
              <div className="relative h-40 rounded-2xl overflow-hidden border border-border shadow-md">
                <Image
                  src="/images/hero.png"
                  alt="Modern Clinic Facility & Care"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground bg-background/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-border shadow-xs">
                    🔬 Advanced Clinical Care
                  </span>
                  <span className="text-xs font-semibold text-primary bg-primary/10 backdrop-blur-md px-2 py-0.5 rounded-full border border-primary/20">
                    92% Recovery
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Subtle Blue Bottom Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/45 to-transparent pointer-events-none" />
    </section>
  );
}
