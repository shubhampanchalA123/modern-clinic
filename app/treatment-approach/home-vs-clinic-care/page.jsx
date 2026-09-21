"use client";

import { motion } from "framer-motion";
import { CheckCircle, Home, Building2, ArrowRight, Sparkles, ChevronRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { FaCalendarCheck, FaBuilding, FaHome } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function HomeVsClinicCare() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Treatment Approach</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Home vs Clinic Care</span>
        </nav>

        {/* ================= HERO SPOTLIGHT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3.5xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-2xl overflow-hidden mb-18 text-center"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
              <span>Comparative Treatment Modes</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
            </div>

            <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Home Tele-Care vs{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                In-Clinic Consultation
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Understand which clinical pathway suits your lifestyle, condition severity, geographical convenience, and long-term recovery goals.
            </p>
          </div>
        </motion.div>

        {/* ================= COMPARISON DUAL CARDS ================= */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* HOME CARE CARD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-8 sm:p-10 rounded-3.5xl bg-card border border-border shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                    <Home size={26} />
                  </div>
                  <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    DIGITAL CARE
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-2">Remote Home Care</h2>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                  Best for patients outside Indore, busy professionals, and chronic maintenance cases.
                </p>

                <ul className="space-y-3.5 text-xs sm:text-sm">
                  {[
                    "1-on-1 Doctor consultation via high-definition video or phone",
                    "High-resolution digital photo & diagnostic report evaluation",
                    "Custom constitutional remedies delivered directly to your doorstep",
                    "Weekly progress check-ins and dedicated WhatsApp care support",
                    "100% Zero travel hassle — accessible across Pan-India and overseas"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  href="/pricing/online-consultation"
                  className="w-full py-3.5 rounded-full font-bold text-xs sm:text-sm bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2 shadow-md transition"
                >
                  <FaCalendarCheck className="text-xs" />
                  <span>Choose Online Home Care</span>
                </Link>
              </div>
            </motion.div>

            {/* IN-CLINIC CARE CARD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-8 sm:p-10 rounded-3.5xl bg-card border border-primary/40 ring-2 ring-primary/20 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                    <Building2 size={26} />
                  </div>
                  <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">
                    INDORE FACILITY
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-2">In-Clinic Care</h2>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                  Best for severe alopecia patches, stubborn cystic dermatosis, and comprehensive physical exams.
                </p>

                <ul className="space-y-3.5 text-xs sm:text-sm">
                  {[
                    "Face-to-face in-depth physical examination with Dr. Devendra Rathore",
                    "Onsite high-magnification Digital Trichoscopy & Dermoscopy scans",
                    "Immediate diagnostic interpretation and personalized prescription",
                    "Hands-on clinical progress monitoring and follicle density mapping",
                    "Direct onsite medicine dispensing from clinic pharmacy"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  href="/pricing/clinic-consultation"
                  className="w-full py-3.5 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-md hover:opacity-95 flex items-center justify-center gap-2 transition"
                >
                  <FaCalendarCheck className="text-xs" />
                  <span>Choose In-Clinic Visit</span>
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

      </div>

      <Testimonials />
      <FAQ limit={4} />

    </div>
  );
}
