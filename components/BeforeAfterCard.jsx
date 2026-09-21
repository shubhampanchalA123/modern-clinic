"use client";

import { useState } from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { ChevronLeft, ChevronRight, Quote, ShieldCheck, Star } from "lucide-react";
import { MdVerified } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function BeforeAfterCard({ data }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () =>
    setIndex((i) => (i + 1) % data.length);

  const prevSlide = () =>
    setIndex((i) => (i - 1 + data.length) % data.length);

  const t = data[index];

  return (
    <div className="w-full bg-card/90 dark:bg-card/80 backdrop-blur-2xl rounded-3.5xl p-6 sm:p-8 md:p-10 shadow-2xl border border-border/90 relative overflow-hidden">
      
      {/* Ambient background glow inside card */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

        {/* LEFT: SLIDER COMPONENT WITH VERIFIED TAG */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="relative rounded-2.5xl overflow-hidden border border-border/90 shadow-xl bg-muted">
            <BeforeAfterSlider before={t.before} after={t.after} />
            
            {/* Top Verified Result Tag with Gradient */}
            <div className="absolute top-3.5 left-3.5 bg-card/95 dark:bg-card/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-foreground border border-border shadow-md flex items-center gap-2 z-20">
              <MdVerified className="text-blue-600 dark:text-blue-400 text-sm" />
              <span>Verified Clinical Result</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3.5 px-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-teal-500" /> Real Patient Transformation
            </span>
            <span className="font-mono text-xs font-semibold">
              Case {index + 1} of {data.length}
            </span>
          </div>
        </div>

        {/* RIGHT: PATIENT DETAILS & CLINICAL OUTCOME */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full bg-slate-50/70 dark:bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-border/70 relative">
          
          <Quote className="absolute top-5 right-5 w-14 h-14 text-primary/8 pointer-events-none" />

          <div>
            {/* Patient Name & Rating */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {t.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-0.5">
                  {t.treatment}
                </p>
              </div>

              <div className="flex text-amber-400 text-sm">
                {"★".repeat(5)}
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5 p-3.5 rounded-2xl bg-card border border-border/70 text-xs shadow-xs">
              <div>
                <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-wider">Duration</span>
                <span className="font-extrabold text-foreground text-sm">{t.duration}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-wider">Clinic Location</span>
                <span className="font-extrabold text-foreground text-sm">{t.clinic}</span>
              </div>
            </div>

            {/* Feedback / Quote */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
              “{t.feedback}”
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-7 pt-4.5 border-t border-border/70">
            {/* Dots indicator with Gradient */}
            <div className="flex items-center gap-2">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === i ? "w-7 bg-gradient-to-r from-blue-600 to-teal-500" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to case ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-2xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 text-foreground hover:text-primary flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
                aria-label="Previous case"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-2xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 text-foreground hover:text-primary flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
                aria-label="Next case"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
