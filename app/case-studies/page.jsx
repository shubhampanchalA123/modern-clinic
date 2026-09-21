"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { caseStudies } from "./case-data";
import { ArrowRight, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Results</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Clinical Case Studies</span>
        </nav>

        {/* ================= HERO SPOTLIGHT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3.5xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-2xl overflow-hidden mb-16 text-center"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5">
              <MdVerified className="text-teal-500 text-sm" />
              <span>Documented Medical Histories</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
            </div>

            <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Clinical Case Studies &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                Recovery Reports
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              In-depth clinical documentations showing root cause identification, homeopathic constitutional prescription, dietary interventions, and chronological recovery timelines.
            </p>
          </div>
        </motion.div>

        {/* ================= CASE STUDIES GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.slug || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-3.5xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                  <Image src={c.before} alt={c.title} fill unoptimized className="object-cover group-hover:scale-104 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 text-[11px] font-semibold text-teal-300 border border-white/20">
                    {c.condition} • {c.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span className="font-semibold text-primary">{c.category || "Clinical Case"}</span>
                    <span>Patient Age: {c.age} yrs</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {c.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-border/70 flex items-center justify-between">
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="text-xs sm:text-sm font-bold text-primary hover:underline flex items-center gap-1.5"
                >
                  <span>Read Full Case Report</span>
                  <ArrowRight size={14} />
                </Link>
                <div className="w-6 h-6 rounded-full bg-teal-500/15 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <CheckCircle2 size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </main>

      <Testimonials />
      <FAQ limit={4} />

    </div>
  );
}
