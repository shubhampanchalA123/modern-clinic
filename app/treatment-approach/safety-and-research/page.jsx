"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, FileText, History, RefreshCcw, Check, Sparkles, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { FaCalendarCheck, FaShieldAlt } from "react-icons/fa";
import { MdVerified, MdOutlineScience } from "react-icons/md";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function SafetyAndResearch() {
  const researchItems = [
    {
      title: "Clinical Evidence & Case Documentation",
      desc: "Over 10,000 documented recovery cases across chronic alopecia, cystic acne, atopic eczema, and metabolic imbalances.",
      tag: "Clinical Validation",
      icon: <BookOpen size={22} className="text-white" />,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "German Pharmacopoeia Standards",
      desc: "All homeopathic potencies adhere strictly to Homoeopathic Pharmacopoeia of India (HPI) and German standards — 100% steroid-free.",
      tag: "Safety & Purity",
      icon: <ShieldCheck size={22} className="text-white" />,
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Digital Trichoscopy Concordance",
      desc: "High-magnification remote scalp diagnostic scans showing over 90% diagnostic concordance with physical dermatological checks.",
      tag: "Diagnostic Precision",
      icon: <History size={22} className="text-white" />,
      gradient: "from-teal-500 to-emerald-600"
    }
  ];

  const timeline = [
    { year: "2012", title: "Residency & Hospital Clinical Base", note: "Extensive hospital medical training and clinical research in chronic ailments." },
    { year: "2016", title: "Non-Steroidal Trichology Protocols", note: "Formulation of multi-stage biological scalp revival systems." },
    { year: "2020", title: "Modern Clinic Integrative Establishment", note: "Integration of high-density follicle scanning with constitutional potencies." },
    { year: "Present", title: "10,000+ Treated Patients & Tele-Medicine", note: "Pan-India and NRI global treatment network with zero adverse rebounds." }
  ];

  const safetyPoints = [
    "100% Zero steroids, heavy metals, or toxic chemical additives",
    "All prescriptions personally formulated by registered BHMS practitioners",
    "Safe for children, pregnant & lactating women, and elderly patients",
    "No habit formation, dependency, or withdrawal rebound flares",
    "Encrypted data privacy and confidential electronic health records"
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
          <span className="text-primary font-semibold">Safety & Research</span>
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
                <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                <span>Evidence-Guided & Certified Safe Medicine</span>
                <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
              </div>

              <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                Clinical Evidence,{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Safety & Research
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                We combine classical homeopathic constitutional prescribing with modern clinical diagnostics and strict safety standards — transparency, purity, and patient recovery are central to our medical mission.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8">
                <Link
                  href="/HairGrowth/register"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-102 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FaCalendarCheck className="text-sm" />
                  <span>Consult Medical Specialist</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/doctor/certificates"
                  className="px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold text-xs sm:text-sm hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs"
                >
                  Doctor Accreditations →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/3] rounded-3.5xl overflow-hidden border-2 border-primary/25 shadow-2xl bg-card">
                <Image
                  src="/images/why-clinic.jpg"
                  alt="Safety & Research"
                  fill
                  unoptimized
                  className="object-cover hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-white/20 mb-1">
                    <FaShieldAlt className="text-xs" />
                    <span>100% Non-Toxic Guarantee</span>
                  </div>
                  <h3 className="text-lg font-bold">Standardized Pharmacopoeia</h3>
                  <p className="text-xs text-slate-200">Zero steroids • Natural biological restoration</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= RESEARCH PILLARS ================= */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              Evidence Pillars & Methodology
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Our clinical practice is built on reproducible outcomes and scientific integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {researchItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}>
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/70 flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Clinical Standard Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SAFETY PROTOCOLS CHECKLIST ================= */}
        <section className="mb-20 p-8 sm:p-12 rounded-3.5xl bg-card border border-border shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Safety Assurance</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Our 5-Point Patient Safety Guarantee
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {safetyPoints.map((point, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-muted/50 border border-border/70 flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      <Testimonials />
      <FAQ limit={4} />

    </div>
  );
}
