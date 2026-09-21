"use client";

import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FAQ({ limit }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is homeopathy effective for hair fall?",
      a: "Yes. It treats internal causes such as stress, hormones and digestion for long-term regrowth.",
    },
    {
      q: "How long before I see results?",
      a: "Most patients experience fall control within 3–4 weeks and new growth from 5–10 weeks.",
    },
    {
      q: "Is this treatment safe for women?",
      a: "100% safe for PCOS, postpartum, thyroid-related hair fall and hormonal imbalance.",
    },
    {
      q: "How is Modern Clinic different?",
      a: "We combine Homeopathy, Nutrition and Stress Healing to correct the root cause naturally.",
    },
    {
      q: "Can homeopathy regrow hair in bald patches?",
      a: "Yes, especially in Alopecia Areata and stress-triggered patches. Early treatment gives better results.",
    },
    {
      q: "Does homeopathy stop dandruff and scalp itching?",
      a: "Yes. Homeopathy reduces scalp inflammation, flaking and fungal imbalance without chemicals.",
    },
    {
      q: "Do I need to take medicines lifelong?",
      a: "No. Once the root cause is corrected, your hair cycle stabilizes and you won’t need long-term medicines.",
    },
    {
      q: "Can homeopathy help if I have thyroid or PCOS?",
      a: "Absolutely. These are common causes of hair fall and respond very well to holistic homeopathic care.",
    },
    {
      q: "Are there any side effects?",
      a: "Homeopathy is free from chemical toxicity and does not cause weight gain, dependency or hormonal disturbance.",
    },
    {
      q: "Do I have to change my diet?",
      a: "Minor improvements may be suggested to support faster regrowth, but no harsh diets are required.",
    },
    {
      q: "What if I am already taking allopathic medicines?",
      a: "Homeopathy can be safely taken alongside existing medicines. They can be tapered only if required.",
    },
    {
      q: "Will I get a customized treatment plan?",
      a: "Yes. Every patient receives a personalized plan based on stress, sleep, hormones, metabolism and scalp analysis.",
    },
    {
      q: "Is homeopathy slow?",
      a: "No. Hair fall control is usually quick. The time for regrowth depends on severity and scalp condition.",
    },
    {
      q: "Do you provide online consultations?",
      a: "Yes, video consultations are available along with doorstep delivery of medicines.",
    },
    {
      q: "How often do I need follow-ups?",
      a: "Regular follow-ups every 3–4 weeks help track progress and adjust treatment for the best outcome.",
    }
  ];

  const visibleFaqs = limit ? faqs.slice(0, limit) : faqs;

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-18 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-background relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-r from-blue-600/8 via-teal-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-teal-500/10 text-primary dark:text-blue-400 border border-primary/20 shadow-xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-600 to-teal-500" />
            </span>
            <span>Patient Guidance & Clarity</span>
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
          </div>

          <h2 className="text-3.5xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14]">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
              Frequently
            </span>{" "}
            Asked Questions
            <span className="relative inline-block text-foreground ml-1">
              .
              <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 rounded-full opacity-80" />
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Clear answers to the most common questions about our holistic, doctor-guided treatment programs.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {visibleFaqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`
                  rounded-3xl border transition-all duration-300 overflow-hidden
                  ${isOpen 
                    ? "bg-card/95 dark:bg-card/85 border-primary/40 shadow-xl ring-1 ring-primary/25" 
                    : "bg-card/80 dark:bg-card/65 border-border/80 hover:border-primary/30 hover:bg-card shadow-sm"
                  }
                `}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer select-none"
                >
                  <span className="text-base sm:text-lg font-bold text-foreground pr-4 leading-snug flex items-center gap-3.5">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-300 ${isOpen ? "bg-gradient-to-r from-blue-600 to-teal-500 shadow-xs scale-110" : "bg-muted-foreground/30"}`} />
                    <span>{f.q}</span>
                  </span>

                  <span
                    className={`
                      w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 shadow-2xs
                      ${isOpen 
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent rotate-180" 
                        : "bg-background border-border text-muted-foreground"
                      }
                    `}
                  >
                    <FaChevronDown className="text-xs" />
                  </span>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0"
                  >
                    <div className="pt-3.5 border-t border-border/70">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Show More Option (only when limited) */}
        {limit && (
          <div className="flex justify-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-white font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/20 group"
            >
              <span>Show More FAQs</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
