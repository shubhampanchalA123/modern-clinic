"use client";

import Link from "next/link";
import { ChevronRight, Sparkles, HelpCircle } from "lucide-react";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Help & Support</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Frequently Asked Questions</span>
        </nav>

        {/* ================= HERO SPOTLIGHT SECTION ================= */}
        <div className="relative rounded-3.5xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-2xl overflow-hidden mb-12 text-center">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5">
              <HelpCircle className="w-3.5 h-3.5 text-teal-500" />
              <span>Got Questions? We Have Answers</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
            </div>

            <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Everything you need to know about our homeopathic treatments, consultation protocols, medicine deliveries, safety standards, and expected recovery timelines.
            </p>
          </div>
        </div>

      </div>

      <FAQ />

    </div>
  );
}
