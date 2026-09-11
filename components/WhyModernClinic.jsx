"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaUsers, 
  FaUserMd, 
  FaRegStar, 
  FaChartLine, 
  FaCheckCircle, 
  FaChevronLeft, 
  FaChevronRight 
} from "react-icons/fa";
import { MdOutlineScience, MdVerified } from "react-icons/md";
import { Sparkles } from "lucide-react";

const stats = [
  {
    icon: FaUsers,
    number: "10,000+",
    label: "Happy Patients",
    desc: "Thousands transformed their hair, skin & wellness through holistic science-backed plans.",
    iconBg: "bg-primary/10 text-primary",
    badge: "10k+ Healed",
    tagBg: "bg-primary/10 text-primary border-primary/20",
    accentGlow: "from-primary/15 via-transparent to-transparent",
    indicatorColor: "bg-primary",
  },
  {
    icon: FaUserMd,
    number: "15+",
    label: "Certified Doctors",
    desc: "A multidisciplinary team including Homeopaths, Nutritionists & Lifestyle Experts.",
    iconBg: "bg-red-500/10 text-red-600 dark:text-red-400",
    badge: "Specialist Team",
    tagBg: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    accentGlow: "from-red-500/15 via-transparent to-transparent",
    indicatorColor: "bg-red-500",
  },
  {
    icon: FaRegStar,
    number: "7+",
    label: "Years of Excellence",
    desc: "Trusted for premium care using modern technology and evidence-based treatment.",
    iconBg: "bg-secondary/20 text-primary dark:text-secondary",
    badge: "Since 2017",
    tagBg: "bg-secondary/15 text-foreground border-border",
    accentGlow: "from-secondary/15 via-transparent to-transparent",
    indicatorColor: "bg-secondary",
  },
  {
    icon: FaChartLine,
    number: "92%",
    label: "Success Rate",
    desc: "Results tracked via progress reports to ensure sustainable, long-term improvement.",
    iconBg: "bg-primary/10 text-primary",
    badge: "Clinical Results",
    tagBg: "bg-primary/10 text-primary border-primary/20",
    accentGlow: "from-primary/15 via-transparent to-transparent",
    indicatorColor: "bg-primary",
  },
];

export default function WhyModernClinic() {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  // Navigate to slide
  const paginate = (newDirection) => {
    setCurrentIndex(([prev]) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = stats.length - 1;
      if (nextIndex >= stats.length) nextIndex = 0;
      return [nextIndex, newDirection];
    });
  };

  const setIndex = (index) => {
    setCurrentIndex(([prev]) => [index, index > prev ? 1 : -1]);
  };

  // Auto-play carousel gently
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  const currentStat = stats[currentIndex];
  const Icon = currentStat.icon;

  return (
    <section className="py-14 sm:py-18 px-4 sm:px-6 md:px-12 lg:px-20 bg-background relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      {/* TOP — SECTION HEADING & DESCRIPTIONS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center mb-12 sm:mb-14"
      >
        {/* Top Pill Badge with subtle Red Indicator Dot */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 shadow-xs mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span>Holistic Medical Excellence</span>
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
        </div>

        {/* Clean, Elegant Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-extrabold text-foreground mb-5 leading-tight tracking-tight">
          Why <span className="text-primary">Modern Clinic?</span>
        </h2>

        {/* Two Descriptive Paragraphs */}
        <p className="text-muted-foreground mb-3.5 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
          Experience a new generation of holistic care where science meets
          compassion. We design treatments, not templates.
        </p>

        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
          Every plan is fully personalized, trackable, and crafted for long-term
          results using medical-grade diagnostics & expert-led strategies.
        </p>
      </motion.div>

      {/* ================= SECTION CONTENT: FIXED VISUAL (LEFT) + 1-CARD HORIZONTAL CAROUSEL (RIGHT) ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT: FIXED CONTAINED MEDICAL VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex justify-center w-full"
        >
          <div className="relative w-full max-w-lg aspect-[4/3.1] rounded-[2rem] p-2 bg-gradient-to-b from-primary/15 via-card to-red-500/10 border border-primary/20 shadow-xl overflow-hidden group">
            {/* The Fresh Medical Visual */}
            <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
              <Image
                src="/images/why-clinic.jpg"
                alt="Modern Medical Consultation & Diagnostic Care"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 550px"
              />

              {/* Soft Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent pointer-events-none" />

              {/* Top Verified Clinic Badge */}
              <div className="absolute top-3.5 left-3.5 bg-card/90 backdrop-blur-md border border-border shadow-md rounded-full px-3 py-1 flex items-center gap-1.5 z-10">
                <MdVerified className="text-primary text-sm" />
                <span className="text-xs font-bold text-foreground">Doctor-Guided Science</span>
              </div>

              {/* Bottom Floating Stats Highlight */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-card/95 backdrop-blur-md border border-border shadow-lg rounded-xl p-3 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold text-foreground">Evidence-Based Care</span>
                </div>
                <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                  92% Success
                </span>
              </div>
            </div>
          </div>
        </motion.div>


        {/* RIGHT: ONE-CARD AT A TIME HORIZONTAL CAROUSEL */}
        <div className="lg:col-span-5 flex flex-col items-center w-full">
          {/* Carousel Viewport Container (Shows strictly 1 card at a time with fixed compact width) */}
          <div className="relative w-full max-w-[340px] sm:max-w-[370px] min-h-[260px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -100 || offset.x < -60) {
                    paginate(1);
                  } else if (swipe > 100 || offset.x > 60) {
                    paginate(-1);
                  }
                }}
                className="w-full cursor-grab active:cursor-grabbing"
              >
                {/* Compact Premium Statistic Card */}
                <div className="relative w-full rounded-2xl border border-border bg-card/95 dark:bg-card/90 backdrop-blur-xl p-6 sm:p-7 shadow-lg overflow-hidden select-none">
                  {/* Subtle Card Ambient Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${currentStat.accentGlow} rounded-full blur-2xl pointer-events-none`} />

                  {/* Card Header: Icon + Tag */}
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className={`w-12 h-12 rounded-xl ${currentStat.iconBg} flex items-center justify-center shadow-xs`}>
                      <Icon size={22} />
                    </div>

                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-xs ${currentStat.tagBg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${currentStat.indicatorColor}`} />
                      {currentStat.badge}
                    </span>
                  </div>

                  {/* Big Bold Metric & Label */}
                  <div className="relative z-10 mb-3">
                    <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-none">
                      {currentStat.number}
                    </div>
                    <div className="text-base font-bold text-foreground/90 mt-1.5">
                      {currentStat.label}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed relative z-10 mb-4">
                    {currentStat.desc}
                  </p>

                  {/* Bottom Verification Accent */}
                  <div className="pt-3 border-t border-border/70 flex items-center justify-between text-[11px] text-primary font-semibold">
                    <span className="flex items-center gap-1">
                      <FaCheckCircle className="text-xs text-primary" /> Verified Metric
                    </span>
                    <span className="text-muted-foreground text-[10px] font-mono">
                      {currentIndex + 1} / {stats.length}
                    </span>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 inset-x-0 h-1 ${currentStat.indicatorColor}`} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= CAROUSEL CONTROLS & DOTS ================= */}
          <div className="flex items-center justify-between w-full max-w-[340px] sm:max-w-[370px] mt-5 px-1">
            {/* Prev Button */}
            <button
              onClick={() => paginate(-1)}
              className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 hover:bg-muted/70 transition-all duration-200 shadow-xs active:scale-95"
              aria-label="Previous statistic"
            >
              <FaChevronLeft className="text-xs -ml-0.5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {stats.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-7 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to statistic ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => paginate(1)}
              className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 hover:bg-muted/70 transition-all duration-200 shadow-xs active:scale-95"
              aria-label="Next statistic"
            >
              <FaChevronRight className="text-xs -mr-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
