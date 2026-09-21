"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaUserMd, FaRegSmileBeam, FaLeaf, FaWeight, FaArrowRight } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineScience, MdVerified } from "react-icons/md";
import { Sparkles, ShieldCheck, Stethoscope, Award, CheckCircle2 } from "lucide-react";
import CompactHeroSlider from "@/components/shared/CompactHeroSlider";
import WhyModernClinic from "@/components/WhyModernClinic";
import WhatWeTreat from "@/components/WhatWeTreat";
import HealingProcess from "@/components/HealingProcess";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AppointmentForm from "@/components/AppointmentForm";

export default function HomePage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <CompactHeroSlider />


            {/* Subtle Clean Section Flow Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />


            {/* 2. WHY MODERN CLINIC */}
            <WhyModernClinic />


            {/* Subtle Clean Section Flow Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />


            {/* 3. WHAT WE TREAT (CONDITIONS) */}
            <WhatWeTreat />


            {/* Subtle Clean Section Flow Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />


            {/* 4. HOW IT WORKS / HEALING PROCESS */}
            <HealingProcess />


            {/* Subtle Clean Section Flow Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />


            {/* 5. TRANSFORMATIONS / TESTIMONIALS */}
            <Testimonials />


            {/* Subtle Clean Section Flow Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />


            {/* 6. WHY CHOOSE OUR CLINIC (4 EDITORIAL PILLARS) */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="py-20 sm:py-26 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden"
            >
                {/* Background Ambient Glows */}
                <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                    <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/8 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-indigo-500/8 via-teal-500/5 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-teal-500/10 text-primary dark:text-blue-400 border border-primary/20 shadow-xs mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-600 to-teal-500" />
                        </span>
                        <span>Patient-First Medical Excellence</span>
                        <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                    </div>

                    {/* Headline */}
                    <h2 className="text-3.5xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14]">
                        Why Choose{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                            Our Clinic
                        </span>
                        <span className="relative inline-block text-foreground ml-1">
                            ?
                            <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 rounded-full opacity-80" />
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Setting the standard in holistic healthcare — combining doctor-led expertise, personalized formulations, and evidence-based root-cause recovery.
                    </p>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            num: "01",
                            icon: <FaUserMd size={20} />,
                            iconGradient: "from-blue-600 to-indigo-600 text-white",
                            tag: "15+ Doctors",
                            tagBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
                            title: "Certified Specialists",
                            link: "/doctor",
                            desc: "Senior homeopathic doctors with 10+ years experience guiding your entire journey from root cause diagnosis to recovery.",
                            bullets: [
                                "1-on-1 Senior Doctor Consultations",
                                "Continuous Dosages Supervision",
                                "10+ Years Specialized Experience"
                            ],
                            highlight: "Meet Our Specialists",
                            accentGradient: "from-blue-600 to-indigo-600",
                            indicatorDot: "bg-blue-600"
                        },
                        {
                            num: "02",
                            icon: <MdOutlineScience size={22} />,
                            iconGradient: "from-indigo-600 to-purple-600 text-white",
                            tag: "Evidence-Backed",
                            tagBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
                            title: "Science + Holistic Synergy",
                            link: "/treatment-approach/safety-and-research",
                            desc: "Integrating scientific diagnostic mapping with clinical-grade homeopathy, targeted nutrition, and cellular restorers.",
                            bullets: [
                                "Zero Harsh Chemicals or Steroids",
                                "Metabolic & Hormonal Mapping",
                                "Cellular Nutritional Restorers"
                            ],
                            highlight: "Explore Research & Safety",
                            accentGradient: "from-indigo-600 to-purple-600",
                            indicatorDot: "bg-indigo-600"
                        },
                        {
                            num: "03",
                            icon: <FaLeaf size={18} />,
                            iconGradient: "from-teal-500 to-emerald-600 text-white",
                            tag: "Root Cause",
                            tagBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
                            title: "Deep Root-Cause Healing",
                            link: "/treatment-approach/digital-diagnosis-method",
                            desc: "We diagnose and reverse deep metabolic, hormonal, and genetic triggers instead of temporarily masking symptoms.",
                            bullets: [
                                "Permanent Symptom Reversal",
                                "Long-Term Scalp & Body Immunity",
                                "No Temporary Masking"
                            ],
                            highlight: "View Diagnostic Method",
                            accentGradient: "from-teal-500 to-emerald-600",
                            indicatorDot: "bg-teal-500"
                        },
                        {
                            num: "04",
                            icon: <MdHealthAndSafety size={22} />,
                            iconGradient: "from-emerald-500 to-cyan-600 text-white",
                            tag: "92% Success",
                            tagBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                            title: "Safe & Personalized",
                            link: "/testimonials",
                            desc: "100% customized micro-dose formulations created specifically for your body profile with zero side effects.",
                            bullets: [
                                "Custom Micro-Dose Protocols",
                                "100% Non-Steroidal Formulations",
                                "Zero Long-Term Dependence"
                            ],
                            highlight: "View Patient Stories",
                            accentGradient: "from-emerald-500 to-cyan-600",
                            indicatorDot: "bg-emerald-500"
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <Link
                                href={item.link}
                                className="group relative p-6 sm:p-7 rounded-3.5xl bg-card/90 dark:bg-card/75 backdrop-blur-xl border border-border/90 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
                            >
                                {/* Top Gradient Accent Line */}
                                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.accentGradient}`} />

                                {/* Card Ambient Glow on Hover */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/10 via-teal-500/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div>
                                    {/* Top Row: Icon + Ghost Number + Tag */}
                                    <div className="flex items-center justify-between mb-5 relative z-10">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br ${item.iconGradient} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                            {item.icon}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${item.tagBg}`}>
                                                {item.tag}
                                            </span>
                                            <span className="text-2xl font-mono font-extrabold text-foreground/15">
                                                {item.num}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors leading-snug relative z-10">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed mb-4 relative z-10">
                                        {item.desc}
                                    </p>

                                    {/* Checklist Points */}
                                    <div className="pt-3 border-t border-border/70 space-y-2 mb-4 relative z-10">
                                        {item.bullets.map((bullet, bIdx) => (
                                            <div key={bIdx} className="flex items-center gap-2 text-xs text-foreground/85 font-medium">
                                                <span className={`w-1.5 h-1.5 rounded-full ${item.indicatorDot} shrink-0`} />
                                                <span className="truncate">{bullet}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Highlight Action */}
                                <div className="pt-3.5 border-t border-border/70 flex items-center justify-between text-xs relative z-10">
                                    <span className="font-semibold text-primary flex items-center gap-1.5 group-hover:underline">
                                        <span className={`w-1.5 h-1.5 rounded-full ${item.indicatorDot}`} />
                                        {item.highlight}
                                    </span>
                                    <span className="text-primary group-hover:translate-x-1.5 transition-transform duration-200 font-bold">
                                        →
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Highlights Strip with Gradient Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-14 p-6 sm:p-7 rounded-3.5xl bg-card/90 dark:bg-card/75 backdrop-blur-2xl border border-border/90 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                >
                    <div className="px-3 border-r border-border/60 last:border-r-0">
                        <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-mono tracking-tight">10,000+</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold mt-1">Happy Patients</p>
                    </div>
                    <div className="px-3 md:border-r border-border/60">
                        <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-mono tracking-tight">15+ Doctors</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold mt-1">Certified Specialists</p>
                    </div>
                    <div className="px-3 border-r border-border/60 last:border-r-0">
                        <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent font-mono tracking-tight">92% Success</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold mt-1">Verified Protocol</p>
                    </div>
                    <div className="px-3">
                        <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent font-mono tracking-tight">0% Side Effects</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold mt-1">Safe & Non-Steroidal</p>
                    </div>
                </motion.div>
            </motion.section>


            {/* Subtle Clean Section Flow Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />


            {/* 7. ONLINE APPOINTMENT & LOCATION MAP */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="py-20 sm:py-26 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden"
            >
                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full pointer-events-none -z-10 overflow-hidden">
                    <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/8 to-teal-500/5 rounded-full blur-3xl" />
                </div>

                <div className="text-center mb-14 sm:mb-18 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-teal-500/10 text-primary dark:text-blue-400 border border-primary/20 shadow-xs mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                        <span>Direct Clinical Access</span>
                    </div>

                    <h2 className="text-3.5xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14]">
                        Book Your{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                            Appointment
                        </span>{" "}
                        & Visit Us
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg mt-3.5">
                        Schedule a 1-on-1 doctor consultation or visit our certified clinic in Indore.
                    </p>
                </div>

                <AppointmentForm />
            </motion.section>


            {/* Subtle Clean Section Flow Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />


            {/* 8. OUR SPECIALIZED TREATMENTS (3 MAIN SERVICES) */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="py-20 sm:py-26 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden"
            >
                {/* Background Ambient Glow */}
                <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                    <div className="absolute bottom-10 left-1/3 w-[550px] h-[350px] bg-gradient-to-r from-blue-600/6 to-teal-500/6 rounded-full blur-3xl" />
                </div>

                <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-teal-500/10 text-primary dark:text-blue-400 border border-primary/20 shadow-xs mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-600 to-teal-500" />
                        </span>
                        <span>Signature Clinical Divisions</span>
                        <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                    </div>

                    <h2 className="text-3.5xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14]">
                        Our{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                            Specialized
                        </span>{" "}
                        Treatments
                        <span className="relative inline-block text-foreground ml-1">
                            .
                            <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 rounded-full opacity-80" />
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-muted-foreground mt-3.5 max-w-xl mx-auto">
                        Focused clinical programs engineered to target underlying metabolic, follicular, and dermatological causes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Hair Growth Treatments",
                            tag: "Trichology Care",
                            icon: <FaLeaf size={22} className="text-white" />,
                            iconGradient: "from-blue-600 to-cyan-500",
                            link: "/HairGrowth",
                            desc: "Specialized root-cause hair restoration protocols for hair fall, alopecia, and scalp health.",
                            accentGradient: "from-blue-600 to-cyan-500"
                        },
                        {
                            title: "Skin Care & Glow Treatments",
                            tag: "Dermatology Care",
                            icon: <FaRegSmileBeam size={22} className="text-white" />,
                            iconGradient: "from-indigo-600 to-rose-500",
                            link: "/SkinCare",
                            desc: "Steroid-free clinical treatments for acne, eczema, psoriasis, pigmentation, and skin barrier repair.",
                            accentGradient: "from-indigo-600 to-rose-500"
                        },
                        {
                            title: "Weight Loss & Metabolism Programs",
                            tag: "Metabolic Care",
                            icon: <FaWeight size={22} className="text-white" />,
                            iconGradient: "from-teal-500 to-emerald-600",
                            link: "/WeightLoss",
                            desc: "Doctor-guided metabolic reset to ignite natural fat burning and overcome stubborn weight plateaus.",
                            accentGradient: "from-teal-500 to-emerald-600"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={item.link}
                                className="group relative p-8 sm:p-9 rounded-3.5xl bg-card/90 dark:bg-card/75 backdrop-blur-2xl border border-border/90 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
                            >
                                {/* Top Gradient Line */}
                                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.accentGradient}`} />

                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`w-14 h-14 rounded-2.5xl flex items-center justify-center shadow-lg bg-gradient-to-br ${item.iconGradient} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                            {item.icon}
                                        </div>

                                        <span className="text-xs font-bold px-3.5 py-1.5 rounded-full border border-border/80 bg-background/80 backdrop-blur-md shadow-2xs text-foreground/85">
                                            {item.tag}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="pt-4.5 border-t border-border/70 flex items-center justify-between text-xs sm:text-sm font-bold text-primary">
                                    <span>Explore Division</span>
                                    <span className="group-hover:translate-x-2 transition-transform duration-200 font-bold">
                                        →
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>


            {/* Subtle Clean Section Flow Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />


            {/* 9. FAQ SECTION */}
            <FAQ limit={4} />

        </div>
    );
}

