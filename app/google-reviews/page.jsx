"use client";

import { motion } from "framer-motion";
import { googleReviews } from "./reviews-data";
import { Star, User, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { FaStar, FaGoogle, FaCalendarCheck } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function GoogleReviewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Results</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Google Reviews</span>
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
              <FaGoogle className="text-teal-500 text-xs" />
              <span>4.9 / 5.0 Star Rated Clinic</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
            </div>

            <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Verified Google{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                Patient Reviews
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Read authentic feedback from patients who underwent root-cause homeopathic treatments for hair fall, dermatological conditions, and chronic health recovery.
            </p>
          </div>
        </motion.div>

        {/* ================= MARQUEE TICKER ================= */}
        <div className="mb-14 overflow-hidden py-3">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {googleReviews.concat(googleReviews).map((r, i) => (
              <div key={i} className="flex items-center gap-4 bg-card border border-border shadow-md rounded-2xl px-5 py-3.5 mr-3 min-w-[320px]">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {r.name?.charAt(0) || "P"}
                </div>
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <div className="font-bold text-foreground text-sm truncate">{r.name}</div>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      <FaStar size={11} /> {r.rating}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground truncate">{r.text}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================= GRID OF REVIEWS ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {googleReviews.map((r, i) => (
            <motion.article
              key={r.id || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-7 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                      {r.name?.charAt(0) || "P"}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm leading-tight">{r.name}</h3>
                      <p className="text-[11px] text-muted-foreground">{r.date || "Verified Patient"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} size={12} />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                  "{r.text}"
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-border/70 flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
                <MdVerified size={16} />
                <span>Verified Google Review</span>
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
