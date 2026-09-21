"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Camera,
  BrainCircuit,
  Stethoscope,
  FileSearch,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  PhoneCall
} from "lucide-react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function DigitalDiagnosisMethod() {
  const steps = [
    {
      num: "01",
      icon: <Camera size={22} className="text-white" />,
      title: "Secure Photo Upload",
      desc: "Patients securely upload high-resolution photos of the scalp, skin lesions, or symptom areas through our encrypted portal.",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      num: "02",
      icon: <BrainCircuit size={22} className="text-white" />,
      title: "AI Follicular & Dermal Scan",
      desc: "Advanced visual algorithms detect hair follicle density, erythema severity, pigmentation boundaries, and miniaturization patterns.",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      num: "03",
      icon: <Stethoscope size={22} className="text-white" />,
      title: "Senior Doctor Verification",
      desc: "Our lead homeopathic medical specialist manually verifies AI findings alongside constitutional history, medical reports, and blood markers.",
      gradient: "from-teal-500 to-emerald-600"
    },
    {
      num: "04",
      icon: <FileSearch size={22} className="text-white" />,
      title: "Personalized Digital Report",
      desc: "A comprehensive digital diagnostic report is delivered with root causes, recovery milestones, and customized German homeopathic formulations.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Treatment Approach</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Digital Diagnosis Method</span>
        </nav>

        {/* ================= HERO SPOTLIGHT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3.5xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-2xl overflow-hidden mb-18"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5">
                <BrainCircuit className="w-3.5 h-3.5 text-teal-500" />
                <span>AI-Enhanced Clinical Tele-Diagnostics</span>
                <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
              </div>

              <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                Digital Scalp & Skin{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Diagnosis Method
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                How our clinic combines computer-vision follicle density scanning with experienced senior doctor evaluations for precise remote diagnosis from the comfort of your home.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8">
                <Link
                  href="/HairGrowth/register"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-102 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FaCalendarCheck className="text-sm" />
                  <span>Start Digital Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/treatment-approach/safety-and-research"
                  className="px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold text-xs sm:text-sm hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs"
                >
                  Safety & Research Validation →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/3] rounded-3.5xl overflow-hidden border-2 border-primary/25 shadow-2xl bg-card">
                <Image
                  src="/images/why-clinic.jpg"
                  alt="Digital Diagnosis"
                  fill
                  unoptimized
                  className="object-cover hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-white/20 mb-1">
                    <Lock className="w-3 h-3" />
                    <span>256-Bit Encrypted Portal</span>
                  </div>
                  <h3 className="text-lg font-bold">100% Doctor-Verified</h3>
                  <p className="text-xs text-slate-200">AI metrics confirmed by senior practitioners</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= 4-STEP WORKFLOW ================= */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              4-Step Digital Diagnostic Workflow
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              From photo upload to custom formulation dispatch within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-md`}>
                      {s.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground px-3 py-1 rounded-full bg-muted">
                      STEP {s.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/70 flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Clinical Protocol</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      <Testimonials />
      <FAQ limit={4} />

    </div>
  );
}
