"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaUsers, 
  FaUserMd, 
  FaRegStar, 
  FaChartLine, 
  FaCheckCircle 
} from "react-icons/fa";
import { MdOutlineScience, MdVerified } from "react-icons/md";
import { Sparkles, ShieldCheck, Activity, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: FaUsers,
    number: "10,000+",
    label: "Happy Patients",
    desc: "Thousands transformed their hair, skin & wellness through holistic science-backed plans.",
    iconGradient: "from-blue-600 to-indigo-600 text-white",
    cardGlow: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    badge: "10k+ Healed",
    tagStyle: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    accentGradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: FaUserMd,
    number: "15+",
    label: "Certified Doctors",
    desc: "A multidisciplinary team including Homeopaths, Nutritionists & Lifestyle Experts.",
    iconGradient: "from-indigo-600 to-teal-500 text-white",
    cardGlow: "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
    badge: "Specialist Team",
    tagStyle: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    accentGradient: "from-indigo-600 to-teal-500",
  },
  {
    icon: FaRegStar,
    number: "7+",
    label: "Years of Excellence",
    desc: "Trusted for premium care using modern technology and evidence-based treatment.",
    iconGradient: "from-teal-500 to-emerald-600 text-white",
    cardGlow: "hover:border-teal-500/50 hover:shadow-teal-500/10",
    badge: "Since 2017",
    tagStyle: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    accentGradient: "from-teal-500 to-emerald-600",
  },
  {
    icon: FaChartLine,
    number: "92%",
    label: "Success Rate",
    desc: "Results tracked via progress reports to ensure sustainable, long-term improvement.",
    iconGradient: "from-emerald-500 to-cyan-600 text-white",
    cardGlow: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    badge: "Clinical Results",
    tagStyle: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    accentGradient: "from-emerald-500 to-cyan-600",
  },
];

export default function WhyModernClinic() {
  return (
    <section className="py-20 sm:py-26 px-4 sm:px-6 md:px-12 lg:px-20 bg-background relative overflow-hidden">
      {/* Background Decorative Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-5 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/8 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 w-[450px] h-[450px] bg-gradient-to-tl from-teal-500/8 via-indigo-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* TOP — SECTION HEADING & EDITORIAL STORY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-20"
        >
          {/* Top Pill Badge with Gradient */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-teal-500/10 text-primary dark:text-blue-400 border border-primary/20 shadow-xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-600 to-teal-500" />
            </span>
            <span>Holistic Medical Excellence</span>
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
          </div>

          {/* Heading */}
          <h2 className="text-3.5xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14] mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
              Modern Clinic?
            </span>
          </h2>

          {/* Two Descriptive Paragraphs */}
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed max-w-2xl mx-auto mb-2.5 font-medium">
            Experience a new generation of holistic care where science meets
            compassion. We design treatments, not templates.
          </p>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every plan is fully personalized, trackable, and crafted for long-term
            results using medical-grade diagnostics & expert-led strategies.
          </p>
        </motion.div>

        {/* ================= EDITORIAL LAYOUT: CLINICAL IMAGE (LEFT) + 4 RICH PILLARS (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: EDITORIAL CLINICAL PHOTOGRAPHY SHOWCASE WITH HOVER REVEAL */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/4.7] rounded-3.5xl p-3.5 bg-gradient-to-b from-blue-600/20 via-card to-teal-500/15 border border-primary/20 shadow-2xl overflow-hidden group">
              
              <div className="relative w-full h-full rounded-2.5xl overflow-hidden bg-muted">
                <Image
                  src="/images/why-clinic.jpg"
                  alt="Modern Medical Consultation & Diagnostic Care"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />

                {/* Soft Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/25 pointer-events-none" />

                {/* Top Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-4 left-4 bg-card/95 dark:bg-card/90 backdrop-blur-md border border-border shadow-md rounded-full px-3.5 py-1.5 flex items-center gap-1.5 z-10 cursor-default"
                >
                  <MdVerified className="text-blue-600 dark:text-blue-400 text-sm" />
                  <span className="text-xs font-bold text-foreground">Doctor-Guided Science</span>
                </motion.div>

                {/* Bottom Overlay Info Banner with Gradient Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-card/95 dark:bg-card/90 backdrop-blur-xl border border-border/90 shadow-2xl rounded-2.5xl p-4.5 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 animate-pulse" />
                      <span className="text-xs sm:text-sm font-bold text-foreground">Evidence-Based Care</span>
                    </div>
                    <span className="text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-teal-500 px-3 py-1 rounded-full shadow-xs">
                      92% Success
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-tight">
                    Custom diagnostic mapping & non-steroidal treatment protocols.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>


          {/* RIGHT: 4 PILLARS IN A CLEAN 2x2 EDITORIAL BENTO GRID WITH STAGGER */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className={`group relative rounded-3.5xl bg-card/90 dark:bg-card/75 backdrop-blur-xl border border-border/90 p-6 sm:p-7 shadow-lg hover:shadow-2xl ${item.cardGlow} transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default`}
                >
                  {/* Top Gradient Accent Line */}
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.accentGradient}`} />

                  <div>
                    {/* Header: Icon + Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-13 h-13 rounded-2.5xl flex items-center justify-center shadow-lg bg-gradient-to-br ${item.iconGradient} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <Icon size={22} />
                      </div>

                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-xs ${item.tagStyle}`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Metric Number & Label */}
                    <div className="mb-2.5">
                      <h3 className="text-3.5xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-none font-mono">
                        {item.number}
                      </h3>
                      <p className="text-sm sm:text-base font-bold text-foreground/90 mt-1.5">
                        {item.label}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Verification Label */}
                  <div className="mt-5 pt-3.5 border-t border-border/70 flex items-center justify-between text-xs text-foreground/75 font-medium">
                    <span className="flex items-center gap-1.5 text-primary dark:text-blue-400 font-semibold">
                      <FaCheckCircle className="text-teal-500 text-xs" />
                      <span>Verified Metric</span>
                    </span>
                    <span className="text-muted-foreground font-mono text-[11px]">
                      0{idx + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
