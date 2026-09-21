"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaStar, 
  FaShieldAlt, 
  FaCalendarCheck, 
  FaArrowRight, 
  FaCheckCircle 
} from "react-icons/fa";
import { MdOutlineScience, MdVerified, MdHealthAndSafety } from "react-icons/md";
import { Sparkles } from "lucide-react";

export default function CompactHeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-8 pb-16 sm:pt-12 sm:pb-22 lg:pt-16 lg:pb-24 min-h-[620px] lg:min-h-[670px] flex items-center">
      
      {/* ================= CLEAN NEUTRAL AMBIENT MESH ================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Very subtle neutral soft light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-muted/40 rounded-full blur-3xl" />
        
        {/* Delicate subtle geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ================= LEFT CONTENT: HERO TYPOGRAPHY & CTAs ================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top Pill Badge with Animated Glow & Shimmer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-primary/10 text-primary dark:text-blue-400 border border-primary/20 shadow-xs mb-6 backdrop-blur-md cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-blue-600 to-teal-500" />
              </span>
              <span className="tracking-wide">Holistic Healthcare & Medical Science</span>
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4 text-teal-500 shrink-0" />
              </motion.div>
            </motion.div>

            {/* Headline with Rich Fluid Typography & Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3.5xl sm:text-5xl md:text-5.5xl lg:text-[3.55rem] font-extrabold text-foreground tracking-tight leading-[1.12]"
            >
              Personalized Care for{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                Hair, Skin
              </span>{" "}
              &{" "}
              <span className="relative inline-block text-foreground">
                Chronic Health
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-1.5 left-0 h-1.5 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 rounded-full opacity-85"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal"
            >
              Experience modern, evidence-based homeopathic treatments designed around your unique symptoms.
              Root-cause healing tailored for long-term recovery.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA with Magnetic Hover Glow */}
              <Link href="#appointment-form" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-indigo-600 hover:from-primary/95 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 transition-all duration-300 group cursor-pointer border border-white/15"
                >
                  <FaCalendarCheck className="text-white/90 text-sm" />
                  <span>Book Appointment</span>
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1.5" />
                </motion.button>
              </Link>

              {/* Secondary CTA */}
              <Link href="#what-we-treat" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-card/90 dark:bg-card/75 backdrop-blur-xl border border-border text-foreground font-semibold text-sm sm:text-base hover:bg-muted/80 hover:border-primary/40 transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <span>Explore Treatments</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick Trust Highlights Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 pt-7 border-t border-border/80 w-full max-w-xl grid grid-cols-3 gap-4"
            >
              <motion.div whileHover={{ y: -2 }} className="flex flex-col items-center lg:items-start transition-all">
                <div className="flex items-center gap-1.5 text-primary dark:text-blue-400 mb-1">
                  <div className="w-7 h-7 rounded-xl bg-primary/10 flex items-center justify-center shadow-xs">
                    <MdOutlineScience className="text-sm" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-foreground">Root-Cause</span>
                </div>
                <span className="text-[11px] text-muted-foreground">Diagnostic Care</span>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} className="flex flex-col items-center lg:items-start transition-all">
                <div className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400 mb-1">
                  <div className="w-7 h-7 rounded-xl bg-teal-500/10 flex items-center justify-center shadow-xs">
                    <FaShieldAlt className="text-xs" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-foreground">100% Safe</span>
                </div>
                <span className="text-[11px] text-muted-foreground">Gentle & Natural</span>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} className="flex flex-col items-center lg:items-start transition-all">
                <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                  <div className="w-7 h-7 rounded-xl bg-amber-500/10 flex items-center justify-center shadow-xs">
                    <FaStar className="text-xs" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-foreground">10,000+</span>
                </div>
                <span className="text-[11px] text-muted-foreground">Happy Patients</span>
              </motion.div>
            </motion.div>

          </motion.div>


          {/* ================= RIGHT CONTENT: CLEAN LUXURY DOCTOR SHOWCASE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Outer Clean Container */}
            <div className="relative w-full max-w-[460px] sm:max-w-[490px]">
              
              {/* Main Card Frame - Clean & Seamless */}
              <div className="relative rounded-3.5xl p-3 sm:p-3.5 bg-card dark:bg-card/90 backdrop-blur-xl border border-border shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                
                {/* Doctor Showcase Image with Zoom Interaction */}
                <div className="relative w-full aspect-[4/4.3] rounded-2.5xl overflow-hidden bg-muted">
                  <Image
                    src="/images/doctor-hero-new.jpg"
                    alt="Dr. Devendra Rathore - Senior Specialist at Modern Clinic"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 460px, 490px"
                  />

                  {/* Gentle gradient scrim at bottom for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Verified Accreditation Badge */}
                  <div className="absolute top-4 left-4 bg-card/95 dark:bg-card/90 backdrop-blur-md border border-border shadow-md rounded-full px-3.5 py-1.5 flex items-center gap-1.5 z-10">
                    <MdVerified className="text-teal-600 dark:text-teal-400 text-sm" />
                    <span className="text-xs font-bold text-foreground">Verified Senior Specialist</span>
                  </div>

                  {/* Top Right Experience Pill */}
                  <div className="absolute top-4 right-4 bg-foreground/90 text-background font-mono font-bold text-xs px-3.5 py-1 rounded-full shadow-md z-10 border border-border/40">
                    10+ Yrs Exp
                  </div>

                  {/* Floating Doctor Profile Bar at Bottom of Image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-card/95 dark:bg-card/90 backdrop-blur-xl border border-border shadow-2xl rounded-2.5xl p-4 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-1.5 leading-tight">
                          Dr. Devendra Rathore
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent mt-0.5">
                          BHMS • Hair & Wellness Specialist
                        </p>
                      </div>

                      <Link href="/doctor" className="group/btn shrink-0">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20 hover:bg-primary hover:text-white transition-all duration-200 shadow-xs cursor-pointer"
                        >
                          <span>Profile</span>
                          <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                        </motion.span>
                      </Link>
                    </div>

                    <div className="flex items-center gap-3 mt-2 pt-2 border-t border-border/70 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FaStar className="text-amber-500 text-xs" /> 5,000+ Healed
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <FaCheckCircle className="text-xs" /> 92% Recovery Rate
                      </span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Floating Clinical Feature Pill (Left Offset) with Float Animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-3 sm:-left-5 bg-card/95 dark:bg-card/90 backdrop-blur-xl border border-border shadow-xl rounded-2.5xl px-4 py-2.5 flex items-center gap-3 z-20 select-none hidden sm:flex"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 flex items-center justify-center shrink-0">
                  <MdHealthAndSafety size={19} />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">100% Non-Steroidal</p>
                  <p className="text-[10px] text-muted-foreground">Safe & Personalized Care</p>
                </div>
              </motion.div>

              {/* Floating Clinical Feature Pill (Right Offset) with Float Animation */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-3 -right-2 sm:-right-3 bg-card/95 dark:bg-card/90 backdrop-blur-xl border border-border shadow-xl rounded-2xl px-3.5 py-2 flex items-center gap-2 z-20 select-none hidden sm:flex"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-foreground">Indore Clinic Active</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
