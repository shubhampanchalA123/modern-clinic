"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaCheckCircle, 
  FaGraduationCap, 
  FaAward, 
  FaCalendarCheck, 
  FaArrowRight, 
  FaStar, 
  FaQuoteLeft,
  FaShieldAlt
} from "react-icons/fa";
import { MdOutlineMedicalServices, MdSelfImprovement, MdVerified, MdOutlineScience } from "react-icons/md";
import { GiStethoscope } from "react-icons/gi";
import { Sparkles, ChevronRight, Clock, MapPin, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";
import VideoReels from "@/components/VideoReels";

export default function DoctorProfile() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Our Doctor</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Dr. Devendra Rathore</span>
        </nav>

        {/* ================= HERO SPOTLIGHT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3.5xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-2xl overflow-hidden mb-16"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5">
                <MdVerified className="text-teal-500 text-sm" />
                <span>Lead Medical Consultant & Trichologist</span>
                <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
              </div>

              <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                Dr. Devendra{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Rathore
                </span>
              </h1>

              <p className="text-sm sm:text-base font-semibold text-teal-600 dark:text-teal-400 mt-2">
                BHMS (Reg. Medical Practitioner) • Root-Cause Holistic Specialist
              </p>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                With over a decade of specialized experience treating complex hair fall, stubborn dermatological conditions, and metabolic imbalances, Dr. Rathore combines individualized Homeopathy, nutritional medicine, and clinical lifestyle therapy for permanent recovery without steroid rebound.
              </p>

              {/* Metric Badges */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 my-7 w-full max-w-lg">
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-primary">10,000+</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Treated Patients</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-teal-500">10+ Years</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">OPD Experience</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-indigo-500">92%</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Success Rate</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
                <Link
                  href="/HairGrowth/register"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-102 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FaCalendarCheck className="text-sm" />
                  <span>Book Consultation</span>
                  <FaArrowRight className="text-xs" />
                </Link>

                <Link
                  href="/doctor/experience"
                  className="px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold text-xs sm:text-sm hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs"
                >
                  Clinical Experience →
                </Link>

                <Link
                  href="/doctor/certificates"
                  className="px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold text-xs sm:text-sm hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs"
                >
                  Certificates & Degrees →
                </Link>
              </div>
            </div>

            {/* Right Side: Portrait Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3.5xl overflow-hidden border-2 border-primary/25 shadow-2xl bg-card">
                <Image
                  src="/images/doctor1.png"
                  alt="Dr. Devendra Rathore"
                  fill
                  unoptimized
                  className="object-cover object-top hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-white/20 mb-2">
                    <MdVerified />
                    <span>Certified Senior Practitioner</span>
                  </div>
                  <h3 className="text-xl font-bold">Dr. Devendra Rathore</h3>
                  <p className="text-xs text-slate-200 mt-0.5">BHMS • Modern Clinic Senior Specialist</p>
                </div>

                <div className="absolute top-4 right-4 bg-card/95 dark:bg-card/90 backdrop-blur-xl p-3 rounded-2xl border border-border shadow-xl text-center">
                  <p className="text-lg font-black text-primary leading-none">10+</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">Years Exp.</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= QUALIFICATIONS & EXPERTISE ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20" 
          id="qualification"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <FaGraduationCap className="w-3.5 h-3.5 text-primary" />
              <span>Medical Credentials</span>
            </div>
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              Qualifications & Expertise
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Formal medical education and specialized clinical accreditations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <FaGraduationCap size={22} className="text-white" />, 
                title: "BHMS Degree",
                sub: "Bachelor of Homeopathic Medicine & Surgery",
                desc: "5.5-year rigorous medical curriculum encompassing Clinical Medicine, Pathology, Pharmacology, and Constitutional Therapeutics.",
                gradient: "from-blue-600 to-indigo-600"
              },
              { 
                icon: <MdOutlineMedicalServices size={22} className="text-white" />, 
                title: "Clinical Trichology Specialist",
                sub: "Advanced Scalp & Follicle Diagnostics",
                desc: "Certified expertise in digital trichoscopy mapping, follicular revitalisation protocols, and non-steroidal hair regrowth.",
                gradient: "from-indigo-600 to-purple-600"
              },
              { 
                icon: <FaAward size={22} className="text-white" />, 
                title: "Holistic Health & Nutrition",
                sub: "Cellular & Lifestyle Medicine",
                desc: "Post-graduate training in metabolic nutrition, hormonal optimization, gut microbiome balancing, and stress-axis regulation.",
                gradient: "from-teal-500 to-emerald-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md mb-5`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-primary mb-3">
                    {item.sub}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/70 flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Medical Council Licensure</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= HOLISTIC TREATMENT APPROACH ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
              <span>3-Step Healing Process</span>
            </div>
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              Holistic Treatment Approach
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              A comprehensive system designed to eliminate root triggers rather than masking symptoms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                icon: <GiStethoscope size={24} className="text-white" />,
                title: "Constitutional Diagnosis",
                desc: "Deep evaluation of hormonal levels, gut microbiome health, genetics, and metabolic triggers.",
                gradient: "from-blue-600 to-indigo-600"
              },
              {
                num: "02",
                icon: <FaCheckCircle size={24} className="text-white" />,
                title: "Nutrition & Cellular Detox",
                desc: "Targeted botanical restorers and micro-nutrient optimization to nourish cellular repair mechanisms.",
                gradient: "from-indigo-600 to-purple-600"
              },
              {
                num: "03",
                icon: <MdSelfImprovement size={24} className="text-white" />,
                title: "Stress & Lifestyle Healing",
                desc: "Balancing adrenal cortisol spikes, resetting sleep cycles, and revitalizing natural biological rhythm.",
                gradient: "from-teal-500 to-emerald-600"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-md`}>
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-muted-foreground px-3 py-1 rounded-full bg-muted">
                    STEP {step.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary">
                  <Link href="/treatment-approach/how-homeopathy-works" className="hover:underline flex items-center gap-1">
                    <span>Explore Methodology</span>
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= DOCTOR VIDEO REELS ================= */}
        <div className="mb-20">
          <VideoReels />
        </div>

        {/* ================= PATIENT SUCCESS STORIES ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <FaStar className="w-3.5 h-3.5 text-amber-500" />
              <span>Verified Patient Reviews</span>
            </div>
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              Patient Success Stories
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Real recovery journeys under the clinical care of Dr. Devendra Rathore.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ritika S.",
                city: "Indore",
                treatment: "Hair Regrowth Program",
                quote: "After years of trying commercial products, Dr. Rathore identified my hormonal trigger. Real follicular regrowth started in 8 weeks!"
              },
              {
                name: "Karan M.",
                city: "Mumbai",
                treatment: "Chronic Scalp & Skin Care",
                quote: "His holistic approach helped me fix stress, sleep & gut health. My severe hair shedding reduced by over 80% without any side effects."
              },
              {
                name: "Simran K.",
                city: "Delhi NCR",
                treatment: "PCOS & Metabolic Reset",
                quote: "The personalized 3-step program was life-changing. My scalp density and energy levels improved drastically."
              }
            ].map((t, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                    <p className="text-[11px] text-muted-foreground">{t.city} • {t.treatment}</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-teal-500/15 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <MdVerified size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= BOTTOM CTA BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 lg:p-14 rounded-3.5xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-teal-500/10 border border-primary/20 backdrop-blur-2xl text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/15 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
            Schedule a Consultation with Dr. Devendra Rathore
          </h3>
          
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
            In-clinic consultations available in Indore. Tele-consultations available Pan-India and internationally.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/HairGrowth/register"
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-lg shadow-blue-500/25 hover:scale-103 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <FaCalendarCheck />
              <span>Book Priority Consultation</span>
            </Link>
            
            <Link
              href="/doctor/experience"
              className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-card border border-border text-foreground hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs"
            >
              View 10+ Years Experience Timeline →
            </Link>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
