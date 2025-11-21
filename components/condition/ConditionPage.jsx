import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import VideoReels from "@/components/VideoReels";

// Reusable Condition Page Component
// Location: /components/condition/ConditionPage.jsx
// Default export as requested

/**
 * Props shape (recommended):
 * {
 *   title, subtitle, heroImage, highlights: [],
 *   treatmentSteps: [{title, desc, icon}],
 *   rootCauses: [{title, desc, icon}],
 *   symptoms: [string],
 *   benefits: [string],
 *   beforeAfter: [{before, after, alt}],
 *   videos: [{id, title, thumb}],
 * }
 */

export default function ConditionPage(props) {
  const {
    title = "Condition",
    subtitle = "Doctor-Guided Program",
    // default hero uses the uploaded file path provided in the chat history
    heroImage = "/mnt/data/924498da-20ab-4ed6-9788-e7d6499fabde.png",
    highlights = [],
    treatmentSteps = [],
    rootCauses = [],
    symptoms = [],
    benefits = [],
    beforeAfter = [],
    videos = [],
  } = props || {};

  const fadeUp = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background-soft to-background-muted">
      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <p className="text-sm text-primary font-medium">{highlights[0] ?? "Holistic • Doctor Guided • Natural Healing"}</p>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-foreground">{title}</h1>

          <p className="text-muted-foreground mt-4 max-w-xl">{subtitle}</p>

          <div className="mt-6 flex items-center gap-4">
            <Link href="/HairGrowth/register">
              <Button className="shadow-soft bg-primary text-primary-foreground hover:bg-primary-dark">Book Consultation</Button>
            </Link>

            <a className="text-sm font-medium text-accent hover:underline" href="#how">
              How It Works
            </a>
          </div>

          {highlights.length > 0 && (
            <div className="mt-6 flex gap-3 text-sm">
              {highlights.slice(0, 2).map((h, i) => (
                <div key={i} className="bg-secondary p-3 rounded-lg shadow-soft text-foreground">{h}</div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.06 }} className="relative">
          <div className="rounded-2xl overflow-hidden shadow-medium bg-card">
            <div className="aspect-[4/3] relative">
              <Image src={heroImage} alt={title} fill className="object-cover" />
            </div>
          </div>
        </motion.div>
      </main>

      {/* HOW IT WORKS / TREATMENT STEPS */}
      <section id="how" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground">How Our Treatment Works</h3>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">A medically guided step-by-step plan tailored for this condition.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {(treatmentSteps.length > 0 ? treatmentSteps : [
            { title: "Doctor Assessment", desc: "Comprehensive evaluation by our specialists.", icon: null },
            { title: "Personalized Treatment", desc: "Custom homeopathic prescriptions & plan.", icon: null },
            { title: "Nutrition & Lifestyle", desc: "Dietary and lifestyle changes for long-term results.", icon: null }
          ]).map((step, i) => (
            <div key={i} className="group rounded-2xl p-6 bg-secondary/60 backdrop-blur-xl border border-border shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md mx-auto mb-5">
                {step.icon ?? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/></svg>}
              </div>

              <h4 className="font-semibold text-lg text-center text-foreground">{step.title}</h4>
              <p className="text-muted-foreground mt-2 text-sm text-center leading-relaxed">{step.desc}</p>

              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-5 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ROOT CAUSES */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground">What’s Causing This Condition?</h3>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">We diagnose underlying triggers and address the root causes, not just symptoms.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(rootCauses.length > 0 ? rootCauses : [
            { title: "Genetic Factors", desc: "Inherited susceptibility that affects outcomes.", icon: "/images/icons/genetics.png" },
            { title: "Lifestyle", desc: "Diet, sleep and stress play a big role.", icon: "/images/icons/lifestyle.png" },
            { title: "Nutrition", desc: "Deficiencies that weaken recovery.", icon: "/images/icons/nutrition.png" }
          ]).map((item, idx) => (
            <div key={idx} className="group rounded-2xl p-6 bg-secondary/60 backdrop-blur-xl border border-border shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-md mx-auto mb-4">
                {typeof item.icon === "string" ? (
                <img src={item.icon} alt={item.title} className="w-20 h-20 rounded-2xl" />
              ) : (
                <div className="text-primary text-4xl flex items-center justify-center">
                  {item.icon}
                </div>
              )}
              </div>

              <h4 className="font-semibold text-lg text-center text-foreground">{item.title}</h4>
              <p className="text-muted-foreground mt-2 text-sm text-center leading-relaxed">{item.desc}</p>

              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* SYMPTOMS */}
<section className="max-w-7xl mx-auto px-6 py-10 md:py-16">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-foreground">Common Symptoms</h3>
    <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
      Symptoms vary from person to person — here are the most commonly reported ones.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {(symptoms.length > 0 ? symptoms : ["Symptom 1", "Symptom 2", "Symptom 3"])
      .map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          viewport={{ once: true }}
          className="
            group relative p-5 rounded-2xl bg-card/60 backdrop-blur-xl 
            border border-border shadow-sm hover:shadow-md 
            transition-all duration-300 hover:-translate-y-1
          "
        >
          {/* The animated gradient dot */}
          <div className="
            w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent 
            mb-3 transition-all duration-500 group-hover:scale-110
          "></div>

          {/* The symptom text */}
          <h4 className="text-base font-medium text-foreground leading-relaxed">
            {s}
          </h4>

          {/* Bottom animated underline */}
          <div className="
            w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-primary to-accent 
            mt-4 transition-all duration-500
          "></div>
        </motion.div>
      ))}
  </div>
</section>


      

      {/* BENEFITS */}
<section className="max-w-7xl mx-auto px-6 py-10 md:py-16">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-foreground">Benefits of Our Approach</h3>
    <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
      Why patients trust us for long-term healing.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {(benefits.length > 0 ? benefits : ["Root-cause treatment", "Safe & non-invasive", "Personalized plan"])
      .map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          viewport={{ once: true }}
          className="
            group relative p-6 rounded-2xl overflow-hidden 
            bg-card/60 backdrop-blur-xl border border-border 
            shadow-sm hover:shadow-md transition-all duration-300 
            hover:-translate-y-1
          "
        >
          {/* Gradient Accent Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-70"></div>

          {/* Soft Icon Placeholder */}
          <div className="
            w-12 h-12 mb-4 flex items-center justify-center 
            rounded-xl bg-primary/10 text-primary
            group-hover:bg-primary/20 transition
          ">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="9" />
              <path d="M7 12l2 2 5-5" />
            </svg>
          </div>

          <h4 className="font-semibold text-lg">{b}</h4>

          {/* Subtle underline animation */}
          <div className="
            w-0 group-hover:w-20 h-0.5 bg-gradient-to-r from-primary to-accent 
            mt-3 transition-all duration-500
          "></div>
        </motion.div>
      ))}
  </div>
</section>


      {/* VIDEOS (optional) */}
      {videos && videos.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground">Videos & Case Studies</h3>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Watch short reels and case study clips.</p>
          </div>

          <VideoReels videos={videos} />
        </section>
      )}

      {/* TESTIMONIALS (global) */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <Testimonials />
      </section>

      {/* FAQ (global short) */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <FAQ limit={4} />
      </section>

      {/* BOOK CTA */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 max-w-3xl w-full px-6">
        <div className="bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-4 flex items-center justify-between shadow-md">
          <div>
            <div className="text-sm text-muted-foreground">Ready to get started?</div>
            <div className="font-semibold text-foreground">Book a consultation for {title}</div>
          </div>
          <div>
            <Link href="/HairGrowth/register">
              <Button className="bg-primary hover:bg-primary-dark">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ height: 120 }} />
    </div>
  );
}
