"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCalendarCheck, 
  FaArrowRight, 
  FaGraduationCap, 
  FaAward, 
  FaShieldAlt, 
  FaFileAlt,
  FaCheckCircle,
  FaCertificate,
  FaUniversity,
  FaStamp,
  FaExternalLinkAlt,
  FaTimes,
  FaDownload,
  FaQrcode,
  FaUserCheck,
  FaHospitalAlt
} from "react-icons/fa";
import { 
  MdVerified, 
  MdOutlineMedicalServices, 
  MdHealthAndSafety, 
  MdSecurity, 
  MdOutlineGavel,
  MdLocalHospital,
  MdOutlineScience,
  MdStars 
} from "react-icons/md";
import { 
  Sparkles, 
  Stethoscope, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck, 
  Award, 
  Lock,
  Eye,
  BadgeCheck,
  Building2,
  Calendar,
  Layers,
  Check
} from "lucide-react";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const CERTIFICATES_DATA = [
  {
    id: "bhms-degree",
    category: "degree",
    title: "Bachelor of Homeopathic Medicine & Surgery (BHMS)",
    shortName: "BHMS Clinical Degree",
    regNo: "NCH/2014/BHMS-4482",
    issuingAuthority: "National Commission for Homoeopathy (NCH) & Central Medical Council",
    conferralDate: "Graduated with Clinical Honors • 2014",
    duration: "5.5 Years Full-Time + 1-Year Hospital Internship",
    gradient: "from-blue-600 via-indigo-600 to-blue-700",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    glowColor: "group-hover:shadow-blue-500/20",
    icon: <FaGraduationCap className="text-2xl text-white" />,
    summary: "Comprehensive 5.5-year clinical curriculum encompassing Clinical Pathology, General Surgery, Pharmacology, Diagnostics, Obstetrics & Gynecology, Forensics, and Constitutional Therapeutics.",
    highlights: [
      "1-Year Mandatory Rotatory Hospital Internship in General Medicine & Emergency Triage",
      "Rigorous bedside diagnostics under senior institutional medical officers",
      "Full licensure for independent medical practice, clinical prescription & patient management"
    ],
    verifiedBy: "Central Council of Homeopathy / Ministry of AYUSH",
    sealText: "GOVT. MEDICAL DEGREE"
  },
  {
    id: "rmp-license",
    category: "degree",
    title: "Registered Medical Practitioner (RMP) Licensure",
    shortName: "State Medical Council License",
    regNo: "RMP-HOM-58190",
    issuingAuthority: "State Council of Homeopathic Medicine",
    conferralDate: "Active Registration • Renewed & In Good Standing",
    duration: "Permanent Active Legal Practice Standing",
    gradient: "from-teal-500 via-emerald-500 to-teal-600",
    badgeColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    glowColor: "group-hover:shadow-teal-500/20",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    summary: "Official state board regulatory licensure conferring complete legal authorization to conduct clinical diagnostic examinations, prescribe potentized remedies, and deliver healthcare.",
    highlights: [
      "Full compliance with National Clinical Establishment Acts and Medical Ethics",
      "Authorized for physical in-clinic consultations and encrypted tele-health medicine",
      "Registered with State Practitioner Registry for ethical medical governance"
    ],
    verifiedBy: "State Medical Council Registration Authority",
    sealText: "ACTIVE STATE LICENSE"
  },
  {
    id: "trichology-spec",
    category: "specialization",
    title: "Advanced Fellowship in Clinical Trichology & Scalp Science",
    shortName: "Clinical Trichology Specialist",
    regNo: "TRICH-2018-912-ADV",
    issuingAuthority: "Advanced Institute of Hair & Scalp Science",
    conferralDate: "Certified Specialist • 2018",
    duration: "Postgraduate Specialization & 500+ Hours Clinical Trichoscopy",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    glowColor: "group-hover:shadow-cyan-500/20",
    icon: <MdOutlineScience className="text-2xl text-white" />,
    summary: "Postgraduate clinical mastery in high-resolution digital trichoscopy, follicle density analysis, androgenic alopecia grading, and non-steroidal follicle revival protocols.",
    highlights: [
      "Digital polariscope scalp diagnostics & micro-follicle health mapping",
      "DHT-sensitivity reversal using constitutional homeopathic bio-stimulants",
      "Over 4,500+ clinical alopecia & hair thinning cases successfully resolved"
    ],
    verifiedBy: "International Trichological Board & Clinical Research Forum",
    sealText: "TRICHOLOGY BOARD CERTIFIED"
  },
  {
    id: "dermatology-spec",
    category: "specialization",
    title: "Postgraduate Certification in Clinical Dermatology & Skin Pathology",
    shortName: "Clinical Dermatology Course",
    regNo: "DERM-2019-440-CLIN",
    issuingAuthority: "Dermatological & Holistic Care Alliance",
    conferralDate: "Advanced Clinical Certification • 2019",
    duration: "Advanced Skin Barrier & Chronic Dermal Disorder Curriculum",
    gradient: "from-indigo-600 via-purple-600 to-indigo-700",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    glowColor: "group-hover:shadow-indigo-500/20",
    icon: <FaShieldAlt className="text-2xl text-white" />,
    summary: "Specialized clinical training in autoimmune dermatological conditions, steroid-damaged skin barrier repair, psoriasis flare control, and recalcitrant eczema healing.",
    highlights: [
      "Steroid-free protocol for severe atopic dermatitis & stubborn adult acne",
      "Cellular skin microbiome restoration through internal systemic medicine",
      "Zero dependence on topical corticosteroids or suppressive ointments"
    ],
    verifiedBy: "Holistic Dermatology Society & Medical Standards Board",
    sealText: "DERMATOLOGY ACCREDITED"
  },
  {
    id: "metabolic-spec",
    category: "specialization",
    title: "Metabolic Nutrition & Functional Endocrinology Certification",
    shortName: "Metabolic Health & Nutrition",
    regNo: "FN-MET-2021-308",
    issuingAuthority: "Integrative Health & Functional Medicine Society",
    conferralDate: "Certified Functional Practitioner • 2021",
    duration: "Clinical Nutrition, Hormonal Regulation & Insulin Sensitivity",
    gradient: "from-emerald-500 via-teal-500 to-emerald-600",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    glowColor: "group-hover:shadow-emerald-500/20",
    icon: <MdOutlineMedicalServices className="text-2xl text-white" />,
    summary: "Advanced specialization focusing on insulin resistance reversal, thyroid axis optimization (Hypothyroidism/PCOS), lipid profile normalization, and safe metabolic weight regulation.",
    highlights: [
      "Targeted micronutrient balancing without starvation diets or synthetic stimulants",
      "PCOS, hormonal acne, and metabolic weight-gain clinical management protocols",
      "Synergistic integration of individualized homeopathy with circadian lifestyle"
    ],
    verifiedBy: "Society for Clinical Metabolic & Functional Health",
    sealText: "METABOLIC HEALTH CERTIFIED"
  },
  {
    id: "classical-miasm",
    category: "specialization",
    title: "Mastery in Classical Constitutional Homeopathy & Miasmatics",
    shortName: "Classical Constitutional Homeopathy",
    regNo: "NCAH-2016-118-MST",
    issuingAuthority: "National Academy of Homeopathy",
    conferralDate: "Master Practitioner • 2016",
    duration: "Advanced Miasmatic Case Taking & High-Potency Selection",
    gradient: "from-purple-600 via-pink-600 to-purple-700",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    glowColor: "group-hover:shadow-purple-500/20",
    icon: <FaAward className="text-2xl text-white" />,
    summary: "Master-level clinical certification in deep chronic case taking, psychological-somatic disease mapping, miasmatic taint neutralization, and precision remedy repertorization.",
    highlights: [
      "Classical single-remedy constitutional prescribing for long-standing diseases",
      "Root-cause eradication avoiding superficial symptom masking",
      "Trained directly under veteran international classical homeopaths"
    ],
    verifiedBy: "National Classical Homeopathy Council",
    sealText: "MASTER PRACTITIONER SEAL"
  },
  {
    id: "pharmacopoeia-safety",
    category: "safety",
    title: "Good Clinical Practice (GCP) & HPI Pharmacopoeia Purity Standard",
    shortName: "Pharmacopoeia & Safety Standards",
    regNo: "GCP-HPI-SAFETY-882",
    issuingAuthority: "Homeopathic Pharmacopoeia of India (HPI) & Quality Board",
    conferralDate: "Standard of Clinical Excellence • Continuous Compliance",
    duration: "Annual Quality Assurance & Potency Integrity Audit",
    gradient: "from-amber-500 via-orange-500 to-amber-600",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    glowColor: "group-hover:shadow-amber-500/20",
    icon: <MdHealthAndSafety className="text-2xl text-white" />,
    summary: "Standardized clinical protocols verifying all dispensed remedies strictly adhere to the Homoeopathic Pharmacopoeia of India (HPI) and German purity benchmarks.",
    highlights: [
      "100% free of heavy metal contamination, adulteration, or synthetic sterols",
      "Highest quality dispensing in pharmaceutical-grade glass amber bottles",
      "Tamper-proof sealed clinical dispatch with batch-level testing assurance"
    ],
    verifiedBy: "AYUSH Pharmacopoeial Laboratory Standards",
    sealText: "100% PURE & AUDITED"
  },
  {
    id: "telehealth-protocol",
    category: "safety",
    title: "Digital Clinical Diagnosis & Tele-Medicine Patient Privacy Protocol",
    shortName: "Encrypted Tele-Health Protocol",
    regNo: "TELE-SEC-2022-771",
    issuingAuthority: "Healthcare Quality & Tele-Medicine Compliance Council",
    conferralDate: "Certified Tele-Health System • 2022",
    duration: "Data Security, Encryption & Remote Clinical Triage Standard",
    gradient: "from-teal-600 via-cyan-600 to-blue-600",
    badgeColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    glowColor: "group-hover:shadow-cyan-500/20",
    icon: <MdSecurity className="text-2xl text-white" />,
    summary: "Certified telemedicine workflow utilizing 256-bit SSL encrypted digital health records, secure diagnostic photo evaluations, and confidential physician-patient communication channels.",
    highlights: [
      "Fully compliant with National Tele-Medicine Practice Guidelines",
      "End-to-end encrypted medical record storage preserving doctor-patient privilege",
      "Global remote consultation infrastructure serving patients across 15+ countries"
    ],
    verifiedBy: "Digital Healthcare Safety & Ethics Board",
    sealText: "SECURE TELE-HEALTH"
  }
];

export default function DoctorCertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalCert, setActiveModalCert] = useState(null);

  const filteredCertificates = CERTIFICATES_DATA.filter((cert) => {
    if (selectedCategory === "all") return true;
    return cert.category === selectedCategory;
  });

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      
      {/* ================= BREADCRUMBS & NAVIGATION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8"
        >
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/doctor" className="hover:text-primary transition-colors">Our Doctor</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Certificates & Accreditations</span>
        </motion.nav>

        {/* ================= HERO SPOTLIGHT SECTION WITH RICH ANIMATIONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3.5xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-2xl overflow-hidden mb-16"
        >
          {/* Ambient Glowing Animated Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1],
              opacity: [0.12, 0.22, 0.12],
              x: [0, 20, 0],
              y: [0, -15, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
              x: [0, -20, 0],
              y: [0, 15, 0]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5 cursor-default backdrop-blur-md"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ShieldCheck className="w-4 h-4 text-teal-500" />
                </motion.div>
                <span>Verified Medical Qualifications & Licensure</span>
                <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]"
              >
                Medical Degrees &{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Official Accreditations
                </span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal"
              >
                Dr. Devendra Rathore holds government-recognized clinical degrees (BHMS), active State Medical Council licensure (RMP), and postgraduate certifications in Clinical Trichology, Dermatology, and Metabolic Health.
              </motion.p>

              {/* Quick Trust Verification Badges with Interactive Hover Bounce */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-3 sm:gap-4 my-7 w-full max-w-lg"
              >
                <motion.div 
                  whileHover={{ y: -5, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center shadow-xs group"
                >
                  <p className="text-xl sm:text-2xl font-black text-primary group-hover:scale-105 transition-transform">BHMS</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">5.5 Yrs Degree</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center shadow-xs group"
                >
                  <p className="text-xl sm:text-2xl font-black text-teal-500 group-hover:scale-105 transition-transform">RMP</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">State Licensure</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center shadow-xs group"
                >
                  <p className="text-xl sm:text-2xl font-black text-indigo-500 group-hover:scale-105 transition-transform">100%</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Steroid-Free</p>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/HairGrowth/register"
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <FaCalendarCheck className="text-sm" />
                    <span>Book Verified Consultation</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/doctor/experience"
                    className="px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold text-xs sm:text-sm hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs flex items-center gap-2"
                  >
                    <BadgeCheck className="w-4 h-4 text-teal-500" />
                    <span>10+ Years Practice Timeline</span>
                  </Link>
                </motion.div>
              </motion.div>

            </motion.div>

            {/* Right Side: Doctor Visual with Floating Animated Seals */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center lg:justify-end relative"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3.5xl overflow-hidden border-2 border-primary/25 shadow-2xl bg-card group">
                
                <Image
                  src="/images/doctor-hero-new.jpg"
                  alt="Dr. Devendra Rathore - Certified Medical Specialist & Homeopathic Physician"
                  fill
                  unoptimized
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-white/20 mb-2"
                  >
                    <MdVerified />
                    <span>State Registered Medical Practitioner</span>
                  </motion.div>
                  <h3 className="text-xl font-bold">Dr. Devendra Rathore</h3>
                  <p className="text-xs text-slate-200 mt-0.5">BHMS • Central Council of Homeopathy</p>
                </div>

                {/* Floating Seal Badge with Continuous Floating Motion */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, -6, 0]
                  }}
                  transition={{ 
                    opacity: { delay: 0.3, duration: 0.6 },
                    x: { delay: 0.3, duration: 0.6 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-4 right-4 bg-card/95 dark:bg-card/90 backdrop-blur-xl p-3 rounded-2xl border border-border shadow-xl text-center z-10"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FaStamp className="text-teal-500 text-lg mx-auto mb-0.5" />
                  </motion.div>
                  <p className="text-[10px] font-bold text-foreground uppercase tracking-wider">Govt. Certified</p>
                </motion.div>

                {/* Floating Licensure Badge with Counter Floating Motion */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, 6, 0]
                  }}
                  transition={{ 
                    opacity: { delay: 0.4, duration: 0.6 },
                    x: { delay: 0.4, duration: 0.6 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-4 left-4 bg-card/95 dark:bg-card/90 backdrop-blur-xl px-3 py-2 rounded-2xl border border-border shadow-xl flex items-center gap-1.5 z-10"
                >
                  <ShieldCheck className="text-teal-500 text-sm" />
                  <span className="text-[11px] font-bold text-foreground">Verified Credentials</span>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </motion.div>


        {/* ================= CATEGORY FILTER TABS WITH ANIMATED SLIDING PILL ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-12"
        >
          {[
            { id: "all", label: "All Credentials", count: CERTIFICATES_DATA.length, icon: Layers },
            { id: "degree", label: "Degrees & Licensures", count: 2, icon: FaGraduationCap },
            { id: "specialization", label: "Specialized Certifications", count: 4, icon: Award },
            { id: "safety", label: "Safety & Pharmacopoeia", count: 2, icon: ShieldCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedCategory === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground shadow-xs"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 text-[10px] rounded-full font-mono font-bold transition-colors ${
                  isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {tab.count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>


        {/* ================= CERTIFICATES & DIPLOMAS GRID WITH STAGGER & HOVER LIFT ================= */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ 
                  duration: 0.45, 
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.015,
                  transition: { duration: 0.25, ease: "easeOut" }
                }}
                className={`relative rounded-3.5xl bg-card border border-border/90 shadow-md hover:shadow-2xl hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group p-6 sm:p-8 ${cert.glowColor}`}
              >
                {/* Top Animated Accent Strip */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${cert.gradient}`} />

                {/* Inner Watermark Certificate Background Effect */}
                <div className="absolute right-3 bottom-3 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-500">
                  <FaStamp size={140} />
                </div>

                <div>
                  {/* Header: Icon, Reg No & Seal Badge */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <motion.div 
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className={`w-13 h-13 rounded-2.5xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-lg shrink-0`}
                      >
                        {cert.icon}
                      </motion.div>
                      <div>
                        <span className={`text-[11px] font-mono font-bold px-3 py-0.5 rounded-full border ${cert.badgeColor}`}>
                          Reg: {cert.regNo}
                        </span>
                        <p className="text-[11px] text-muted-foreground font-medium mt-1">
                          {cert.duration}
                        </p>
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                      <MdVerified /> {cert.sealText}
                    </span>
                  </div>

                  {/* Title & Issuing Body */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 mt-1.5 mb-4">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{cert.issuingAuthority}</span>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    {cert.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 bg-muted/40 group-hover:bg-muted/60 transition-colors p-4 rounded-2.5xl border border-border/60">
                    <p className="text-[11px] font-bold text-foreground uppercase tracking-wider">
                      Verified Clinical Competencies:
                    </p>
                    {cert.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Controls: Verified by & Interactive Modal Trigger */}
                <div className="pt-4 border-t border-border/70 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <MdVerified className="text-teal-500 text-sm" />
                    <span className="text-[11px]">Validated: {cert.conferralDate}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveModalCert(cert)}
                    className="px-4 py-2 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Official Certificate</span>
                  </motion.button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


        {/* ================= COMPLIANCE & PHARMACOPOEIA STANDARDS GUARANTEE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 rounded-3.5xl bg-card border border-border shadow-2xl max-w-5xl mx-auto mb-20 relative overflow-hidden"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.18, 0.08]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 relative z-10">
            <div className="flex items-center gap-3.5">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="w-13 h-13 rounded-2.5xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center shadow-sm shrink-0"
              >
                <MdSecurity size={30} />
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Clinical Safety & Ethical Pharmacopoeia Standards
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  100% compliant with standard medical ethics and homeopathic pharmacopoeia
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold border border-teal-500/20 shadow-xs">
              <CheckCircle2 size={14} />
              <span>AYUSH & HPI Certified</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 pt-6 border-t border-border/70 text-xs sm:text-sm relative z-10">
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-5 rounded-2.5xl bg-muted/50 border border-border/60 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-2 font-bold text-foreground text-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                <span>0% Steroid Guarantee</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Zero minoxidil, finasteride, or cortisone dependence. No harsh rebound or withdrawal flares.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-5 rounded-2.5xl bg-muted/50 border border-border/60 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-2 font-bold text-foreground text-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                <span>HPI & German Standards</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Formulations adhere strictly to Homoeopathic Pharmacopoeia of India & international purity benchmarks.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-5 rounded-2.5xl bg-muted/50 border border-border/60 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-2 font-bold text-foreground text-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                <span>Encrypted Privacy</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                256-bit SSL encrypted digital health records maintaining complete doctor-patient confidentiality.
              </p>
            </motion.div>
          </div>
        </motion.div>


        {/* ================= BOTTOM APPOINTMENT CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 lg:p-14 rounded-3.5xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-teal-500/10 border border-primary/20 backdrop-blur-2xl text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden mb-16"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/25 rounded-full blur-2xl pointer-events-none" 
          />

          <h3 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
            Consult Dr. Devendra Rathore with Confidence
          </h3>
          
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
            Experience verified, certified, and doctor-guided root-cause healing tailored specifically for your body and constitution.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/HairGrowth/register"
                className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FaCalendarCheck />
                <span>Book Doctor Appointment</span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/doctor/experience"
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-card border border-border text-foreground hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs"
              >
                Read Clinical Experience →
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>


      {/* ================= INTERACTIVE OFFICIAL CERTIFICATE MODAL ================= */}
      <AnimatePresence>
        {activeModalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 25 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl rounded-3.5xl bg-card border-2 border-primary/30 shadow-2xl overflow-hidden p-6 sm:p-10 my-8 text-foreground"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveModalCert(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-muted/80 hover:bg-muted text-foreground flex items-center justify-center transition-colors cursor-pointer border border-border z-20"
                aria-label="Close Certificate Preview"
              >
                <FaTimes size={16} />
              </motion.button>

              {/* Certificate Diploma Visual Frame */}
              <div className="relative border-4 border-double border-amber-500/40 rounded-2.5xl p-6 sm:p-8 bg-gradient-to-b from-card via-amber-500/5 to-card">
                
                {/* Gold Crest Header */}
                <div className="text-center mb-6">
                  <motion.div 
                    initial={{ rotate: -20, scale: 0.7 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-amber-950 flex items-center justify-center mx-auto shadow-lg mb-3"
                  >
                    <FaStamp size={28} />
                  </motion.div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">
                    Official Medical Credential Record
                  </p>
                  <h2 className="text-xl sm:text-2.5xl font-black text-foreground mt-1">
                    {activeModalCert.title}
                  </h2>
                  <p className="text-xs font-semibold text-muted-foreground mt-1">
                    Issued By: {activeModalCert.issuingAuthority}
                  </p>
                </div>

                {/* Candidate & Registration Details */}
                <div className="bg-muted/50 rounded-2xl p-5 border border-border/80 my-5 text-xs sm:text-sm space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/60 pb-2">
                    <span className="text-muted-foreground font-medium">Physician Name:</span>
                    <span className="font-extrabold text-foreground">Dr. Devendra Rathore</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/60 pb-2">
                    <span className="text-muted-foreground font-medium">Registration / Credential ID:</span>
                    <span className="font-mono font-bold text-primary">{activeModalCert.regNo}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/60 pb-2">
                    <span className="text-muted-foreground font-medium">Curriculum Scope:</span>
                    <span className="font-semibold text-foreground">{activeModalCert.duration}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-muted-foreground font-medium">Validation Status:</span>
                    <span className="font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1">
                      <MdVerified /> Active, Validated & Verified
                    </span>
                  </div>
                </div>

                {/* Scope Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed my-4 text-center italic">
                  "{activeModalCert.summary}"
                </p>

                {/* Verification Seal & Signatures */}
                <div className="pt-6 border-t-2 border-border/80 flex items-center justify-between gap-4 mt-6 text-[11px]">
                  <div className="text-left">
                    <div className="w-24 h-0.5 bg-muted-foreground/40 mb-1" />
                    <p className="font-bold text-foreground">Medical Registrar</p>
                    <p className="text-[10px] text-muted-foreground">Governing Examination Board</p>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-bold text-[11px]">
                    <FaStamp />
                    <span>{activeModalCert.sealText}</span>
                  </div>

                  <div className="text-right">
                    <div className="w-24 h-0.5 bg-muted-foreground/40 mb-1 ml-auto" />
                    <p className="font-bold text-foreground">Accreditation Dean</p>
                    <p className="text-[10px] text-muted-foreground">{activeModalCert.verifiedBy}</p>
                  </div>
                </div>

              </div>

              {/* Action Buttons in Modal */}
              <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveModalCert(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-muted hover:bg-muted/80 text-foreground transition-colors cursor-pointer"
                >
                  Close Preview
                </motion.button>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/HairGrowth/register"
                    onClick={() => setActiveModalCert(null)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white hover:opacity-95 transition-all flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <FaCalendarCheck />
                    <span>Book Consultation With Doctor</span>
                  </Link>
                </motion.div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Testimonials />
      <FAQ limit={4} />

    </div>
  );
}
