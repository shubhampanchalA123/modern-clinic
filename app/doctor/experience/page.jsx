"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaCalendarCheck, 
  FaArrowRight, 
  FaStar, 
  FaShieldAlt, 
  FaAward, 
  FaUserMd, 
  FaCheckCircle,
  FaQuoteLeft,
  FaGraduationCap
} from "react-icons/fa";
import { 
  MdVerified, 
  MdOutlineScience, 
  MdHealthAndSafety, 
  MdTimeline, 
  MdLocalHospital, 
  MdPsychology, 
  MdHealing 
} from "react-icons/md";
import { 
  Sparkles, 
  Stethoscope, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Activity, 
  Users, 
  Trophy, 
  HeartHandshake,
  FileCheck2,
  PhoneCall
} from "lucide-react";

export default function DoctorExperiencePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      
      {/* ================= BREADCRUMBS & NAVIGATION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/doctor" className="hover:text-primary transition-colors">Our Doctor</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Clinical Experience</span>
        </nav>

        {/* ================= HERO SPOTLIGHT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3.5xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-2xl overflow-hidden mb-16"
        >
          {/* Ambient Background Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Content (Text Alignment & Badges) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5"
              >
                <MdVerified className="text-teal-500 text-sm" />
                <span>10+ Years of Senior Medical & Clinical Practice</span>
                <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                A Decade of{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Clinical Mastery
                </span>{" "}
                & Root-Cause Healing
              </h1>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                Dr. Devendra Rathore (BHMS) combines over 10 years of hospital residency, specialized trichology & dermatology practice, and advanced homeopathic constitutional science to deliver permanent, steroid-free patient recoveries.
              </p>

              {/* Quick Highlight Stats Row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 my-7 w-full max-w-lg">
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-primary">10,000+</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Treated Patients</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-teal-500">92%</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Recovery Rate</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-indigo-500">100%</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Zero Steroids</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
                <Link
                  href="/HairGrowth/register"
                  className="px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-102 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FaCalendarCheck className="text-sm" />
                  <span>Book 1-on-1 Consultation</span>
                  <FaArrowRight className="text-xs" />
                </Link>

                <Link
                  href="/doctor/certificates"
                  className="px-5 sm:px-7 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold text-xs sm:text-sm hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs flex items-center gap-2"
                >
                  <FaGraduationCap className="text-teal-500 text-sm" />
                  <span>View Certificates & Degrees</span>
                </Link>
              </div>

            </div>

            {/* Right Side: Doctor Visual Showcase & Floating Badges */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3.5xl overflow-hidden border-2 border-primary/25 shadow-2xl bg-card">
                
                {/* Doctor Main Image */}
                <Image
                  src="/images/doctor-hero-new.jpg"
                  alt="Dr. Devendra Rathore - Senior Clinical Specialist"
                  fill
                  unoptimized
                  className="object-cover object-top hover:scale-103 transition-transform duration-700"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-white/20 mb-2">
                    <MdVerified />
                    <span>Lead Clinical Consultant</span>
                  </div>
                  <h3 className="text-xl font-bold">Dr. Devendra Rathore</h3>
                  <p className="text-xs text-slate-200 mt-0.5">BHMS • Reg. Medical Practitioner (RMP)</p>
                </div>

                {/* Floating Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute top-4 right-4 bg-card/95 dark:bg-card/90 backdrop-blur-xl p-3 rounded-2xl border border-border shadow-xl text-center"
                >
                  <p className="text-lg font-black text-primary leading-none">10+</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">Years Exp.</p>
                </motion.div>

                {/* Floating Verified Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute top-4 left-4 bg-card/95 dark:bg-card/90 backdrop-blur-xl px-3 py-2 rounded-2xl border border-border shadow-xl flex items-center gap-1.5"
                >
                  <FaShieldAlt className="text-teal-500 text-xs" />
                  <span className="text-[11px] font-bold text-foreground">Verified RMP</span>
                </motion.div>

              </div>
            </div>

          </div>
        </motion.div>


        {/* ================= SECTION 2: KEY CLINICAL METRICS GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-20"
        >
          {[
            {
              icon: <Clock className="w-6 h-6 text-blue-600" />,
              metric: "10+ Years",
              label: "Clinical Experience",
              desc: "Continuous hospital & OPD consultation history since 2012.",
              gradient: "from-blue-600 to-indigo-600",
            },
            {
              icon: <Users className="w-6 h-6 text-indigo-600" />,
              metric: "10,000+",
              label: "Recovered Patients",
              desc: "Documented success stories across hair, skin, and chronic health.",
              gradient: "from-indigo-600 to-purple-600",
            },
            {
              icon: <Trophy className="w-6 h-6 text-teal-500" />,
              metric: "92%",
              label: "Success Rate",
              desc: "Clinically proven follicular regrowth and lasting symptom relief.",
              gradient: "from-teal-500 to-emerald-600",
            },
            {
              icon: <FaShieldAlt className="w-5 h-5 text-emerald-500" />,
              metric: "100%",
              label: "Safe & Non-Toxic",
              desc: "Zero steroids, zero side effects, German Pharmacopoeia standards.",
              gradient: "from-emerald-500 to-teal-600",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-xl hover:border-primary/40 transition-all relative overflow-hidden flex flex-col justify-between group"
            >
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${stat.gradient}`} />
              
              <div>
                <div className="w-12 h-12 rounded-2xl bg-muted/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <p className={`text-3.5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-mono tracking-tight`}>
                  {stat.metric}
                </p>
                <h3 className="text-base font-bold text-foreground mt-1">{stat.label}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{stat.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                <span>Clinically Verified</span>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* ================= SECTION 3: DOCTOR PHILOSOPHY & CLINICAL APPROACH ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 p-8 sm:p-12 rounded-3.5xl bg-card border border-border shadow-xl"
        >
          {/* Clinic Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-lg">
              <Image
                src="/images/why-clinic.jpg"
                alt="Modern Clinic Consultation Setup"
                fill
                unoptimized
                className="object-cover hover:scale-104 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-300">Modern Integrative Facility</p>
                <p className="text-sm font-semibold">Evidence-Based Homeopathy & Digital Diagnostics</p>
              </div>
            </div>
          </div>

          {/* Philosophy Text & Principles */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 mb-3.5 w-fit">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Doctor's Clinical Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-foreground tracking-tight leading-snug">
              "We Don't Suppress Symptoms, We Heal the Root Cause."
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4">
              Over the last decade, Dr. Devendra Rathore observed that conventional treatments for hair loss and chronic skin conditions often rely on temporary steroids that trigger severe rebounds once stopped. At Modern Clinic, every case is evaluated with constitutional depth:
            </p>

            <div className="grid sm:grid-cols-2 gap-3.5 mt-6">
              {[
                { title: "Root-Cause Diagnosis", text: "Evaluating hormonal, gut, stress & metabolic triggers." },
                { title: "Digital Trichoscopy", text: "High-magnification follicle scan & density mapping." },
                { title: "Constitutional Potencies", text: "Tailored remedies aligned with individual biological profile." },
                { title: "Long-Term Immunity", text: "Strengthening natural cellular defense without dependency." },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-muted/50 border border-border/70 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground">{item.title}</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>


        {/* ================= SECTION 4: CHRONOLOGICAL CAREER TIMELINE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Career Milestones</span>
            </div>
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              10+ Years Timeline & Practice History
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Step-by-step career progression, medical residencies, and leadership in integrative healthcare.
            </p>
          </div>

          <div className="relative border-l-2 border-primary/30 max-w-3xl mx-auto space-y-12 pl-6 sm:pl-10">
            {[
              {
                period: "2020 – Present",
                role: "Founder & Senior Clinical Director",
                org: "Modern Clinic, Indore & Pan-India Consultations",
                desc: "Established an advanced integrative clinical facility combining classical constitutional homeopathy with modern digital trichoscopy, metabolic nutrition, and hormonal profiling. Personally treated over 6,000+ complex hair, skin, and chronic health patients with zero steroids.",
                highlights: [
                  "Pioneered Non-Steroidal Multi-Stage Hair Fall Treatment Protocol",
                  "Introduced High-Resolution Digital Scalp Follicle Density Scans in Indore",
                  "Expanded Tele-Consultation services to Pan-India & Global NRI Patients"
                ]
              },
              {
                period: "2016 – 2020",
                role: "Senior Consultant Homeopath & Trichology Specialist",
                org: "Specialty Clinical Centers, Central India",
                desc: "Led multi-specialty OPD clinics focused on stubborn dermatological and chronic autoimmune disorders including severe cystic acne, plaque psoriasis, atopic eczema, and hormonal PCOS-related hair thinning.",
                highlights: [
                  "Conducted 15,000+ Patient OPD Consultations and case documentations",
                  "Formulated individualized constitutional potencies for autoimmune disorders",
                  "Presented clinical case studies on chronic allergic rhinitis recovery"
                ]
              },
              {
                period: "2012 – 2016",
                role: "Resident Clinical Medical Officer & Associate Physician",
                org: "Homeopathic Medical Hospitals & Research Centers",
                desc: "Completed extensive medical residency and hands-on hospital training across General Medicine, Pediatric Care, and Chronic Disease Management under renowned senior medical practitioners.",
                highlights: [
                  "Managed intensive inpatient & outpatient medical departments",
                  "Graduated with honors in Bachelor of Homeopathic Medicine & Surgery (BHMS)",
                  "Specialized focus in pediatric immunity and constitutional prescribing"
                ]
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Glowing Node Dot on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 border-4 border-background shadow-md shadow-blue-500/50 group-hover:scale-125 transition-transform" />

                <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-md group-hover:border-primary/40 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-500" />
                      {item.org}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.role}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2.5 mb-4">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-3.5 border-t border-border/60">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2.5 text-xs font-medium text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* ================= SECTION 5: SPECIALTY DOMAINS (ANIMATED CARDS) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Clinical Specializations</span>
            </div>
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              Primary Practice Domains & Expertise
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Proven clinical protocols backed by individualized homeopathic prescribing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Stethoscope size={22} className="text-white" />,
                title: "Trichology & Hair Regrowth",
                gradient: "from-blue-600 to-indigo-600",
                cases: "5,000+ Cases Treated",
                desc: "Expertise in arresting male & female pattern androgenic alopecia, alopecia areata patch recovery, and persistent scalp dermatitis."
              },
              {
                icon: <MdHealing size={22} className="text-white" />,
                title: "Clinical Dermatology",
                gradient: "from-indigo-600 to-purple-600",
                cases: "3,500+ Cases Treated",
                desc: "Targeted, steroid-free therapy for refractory adult acne, atopic eczema, psoriasis flare-ups, and chronic allergic urticaria."
              },
              {
                icon: <MdOutlineScience size={22} className="text-white" />,
                title: "Metabolic & Hormonal Health",
                gradient: "from-teal-500 to-emerald-600",
                cases: "2,000+ Cases Treated",
                desc: "Root-cause constitutional management of PCOS/PCOD, hypothyroidism, insulin resistance, and metabolic weight challenges."
              },
              {
                icon: <MdHealthAndSafety size={22} className="text-white" />,
                title: "Airway & Respiratory Care",
                gradient: "from-sky-500 to-blue-600",
                cases: "1,800+ Cases Treated",
                desc: "Long-term airway mucosal desensitization for bronchial asthma, chronic allergic rhinitis, and recurrent sinus attacks."
              },
              {
                icon: <MdPsychology size={22} className="text-white" />,
                title: "Stress, Anxiety & Sleep Science",
                gradient: "from-violet-600 to-purple-600",
                cases: "1,200+ Cases Treated",
                desc: "Gentle homeopathic nervine therapeutics for chronic stress burnout, anxiety symptoms, and sleep cycle disruption."
              },
              {
                icon: <FaShieldAlt size={20} className="text-white" />,
                title: "Pediatric Wellness & Immunity",
                gradient: "from-amber-500 to-orange-500",
                cases: "1,500+ Cases Treated",
                desc: "Non-toxic, safe remedies for recurrent childhood infections, low immunity, allergies, and adeno-tonsillar enlargement."
              }
            ].map((spec, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-3.5xl bg-card border border-border shadow-md hover:shadow-2xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${spec.gradient} flex items-center justify-center shadow-md`}>
                      {spec.icon}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {spec.cases}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {spec.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                    {spec.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary">
                  <Link href="/HairGrowth/register" className="hover:underline flex items-center gap-1 group">
                    <span>Book Appointment with Dr. Devendra</span>
                    <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* ================= SECTION 6: BOTTOM CONSULTATION CTA BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 lg:p-14 rounded-3.5xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-teal-500/10 border border-primary/20 backdrop-blur-2xl text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Orb */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/15 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
            Consult Directly with Dr. Devendra Rathore
          </h3>
          
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
            Experience 1-on-1 personalized medical attention. Book an in-clinic consultation at Indore or schedule a digital tele-consultation from anywhere.
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
              href="/doctor/certificates"
              className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-card border border-border text-foreground hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs flex items-center gap-2"
            >
              <FileCheck2 className="w-4 h-4 text-teal-500" />
              <span>Verify Medical Certificates & Accreditations</span>
            </Link>
          </div>
        </motion.div>

      </div>

    </div>
  );
}
