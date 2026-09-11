"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaUserMd, FaRegSmileBeam, FaLeaf, FaWeight } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineScience } from "react-icons/md";
import Slider from "@/components/shared/Slider";
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


    const heroSlides = [
        {
            img: "/images/slider/weight.png",
            title: "Expert Hair, Skin & Wellness Care",
            subtitle: "Personalized holistic treatments backed by medical science.",
        },
        {
            img: "/images/slider/hair.png",
            title: "Hair Growth Treatments That Work",
            subtitle: "Root-cause healing for long-term results.",
        },
        {
            img: "/images/slider/skin.png",
            title: "Achieve Healthy, Glowing Skin",
            subtitle: "Revitalize your skin naturally and safely.",
        },
    ];



    return (
        <div className="bg-background text-foreground">

            {/*  HERO SECTION - SLIDER */}
            {/* <Slider slides={heroSlides} height="h-screen" /> */}
            <CompactHeroSlider />


            {/* Shadow Divider */}
            <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


            {/* WHY MODERN CLINIC */}
            <WhyModernClinic />


            {/* Shadow Divider */}
            <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


            {/* WHAT WE TREAT */}
            <WhatWeTreat />


            {/* Shadow Divider */}
            <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


            {/* HOW IT WORKS / HEALING PROCESS */}
            <HealingProcess />


            {/* Shadow Divider */}
            <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


            <Testimonials />


            {/* Shadow Divider */}
            <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


            {/* WHY CHOOSE US (4 CARDS) */}
            <section className="py-16 sm:py-22 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative">
                {/* Background Ambient Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
                    <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-red-500/6 rounded-full blur-3xl" />
                </div>

                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 shadow-xs mb-3.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span>Patient-First Medical Excellence</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18]">
                        Why Choose <span className="text-primary">Our Clinic</span>
                        <span className="relative inline-block text-foreground ml-1">
                            ?
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-full" />
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Setting the standard in holistic healthcare — combining doctor-led expertise, personalized formulations, and evidence-based root-cause recovery.
                    </p>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            num: "01",
                            icon: <FaUserMd size={22} />,
                            iconBg: "bg-primary/10 text-primary border-primary/20",
                            tag: "15+ Doctors",
                            tagBg: "bg-primary/10 text-primary border-primary/20",
                            title: "Certified Specialists",
                            link: "/doctor",
                            desc: "Senior homeopathic doctors with 10+ years experience guiding your entire journey from root cause diagnosis to recovery.",
                            bullets: [
                                "1-on-1 Senior Doctor Consultations",
                                "Continuous Dosages Supervision",
                                "10+ Years Specialized Experience"
                            ],
                            highlight: "Meet Our Specialists",
                            accentBorder: "border-t-primary",
                            indicatorColor: "bg-primary"
                        },
                        {
                            num: "02",
                            icon: <MdOutlineScience size={24} />,
                            iconBg: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
                            tag: "Evidence-Backed",
                            tagBg: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
                            title: "Science + Holistic Synergy",
                            link: "/treatment-approach/safety-and-research",
                            desc: "Integrating scientific diagnostic mapping with clinical-grade homeopathy, targeted nutrition, and cellular restorers.",
                            bullets: [
                                "Zero Harsh Chemicals or Steroids",
                                "Metabolic & Hormonal Mapping",
                                "Cellular Nutritional Restorers"
                            ],
                            highlight: "Explore Research & Safety",
                            accentBorder: "border-t-red-500",
                            indicatorColor: "bg-red-500"
                        },
                        {
                            num: "03",
                            icon: <FaLeaf size={20} />,
                            iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                            tag: "Root Cause",
                            tagBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                            title: "Deep Root-Cause Healing",
                            link: "/treatment-approach/digital-diagnosis-method",
                            desc: "We diagnose and reverse deep metabolic, hormonal, and genetic triggers instead of temporarily masking symptoms.",
                            bullets: [
                                "Permanent Symptom Reversal",
                                "Long-Term Scalp & Body Immunity",
                                "No Temporary Masking"
                            ],
                            highlight: "View Diagnostic Method",
                            accentBorder: "border-t-emerald-500",
                            indicatorColor: "bg-emerald-500"
                        },
                        {
                            num: "04",
                            icon: <MdHealthAndSafety size={24} />,
                            iconBg: "bg-primary/10 text-primary border-primary/20",
                            tag: "92% Success",
                            tagBg: "bg-primary/10 text-primary border-primary/20",
                            title: "Safe & Personalized",
                            link: "/testimonials",
                            desc: "100% customized micro-dose formulations created specifically for your body profile with zero side effects.",
                            bullets: [
                                "Custom Micro-Dose Protocols",
                                "100% Non-Steroidal Formulations",
                                "Zero Long-Term Dependence"
                            ],
                            highlight: "View Patient Stories",
                            accentBorder: "border-t-primary",
                            indicatorColor: "bg-primary"
                        },
                    ].map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            className={`
                            group relative p-6 sm:p-7 rounded-3xl bg-card/85 dark:bg-card/75 backdrop-blur-xl 
                            border border-border/80 shadow-md hover:shadow-2xl hover:border-primary/40
                            transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between
                            border-t-4 ${item.accentBorder} overflow-hidden block cursor-pointer
                            `}
                        >
                            {/* Card Ambient Glow on Hover */}
                            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-primary/15 via-red-500/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div>
                                {/* Top Row: Icon + Ghost Number + Phase Tag */}
                                <div className="flex items-center justify-between mb-4 relative z-10">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs border transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}>
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
                                            <span className={`w-1.5 h-1.5 rounded-full ${item.indicatorColor} shrink-0`} />
                                            <span className="truncate">{bullet}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Highlight Badge */}
                            <div className="pt-3 border-t border-border/70 flex items-center justify-between text-[11px] relative z-10">
                                <span className="font-semibold text-primary flex items-center gap-1.5 group-hover:underline">
                                    <span className={`w-1.5 h-1.5 rounded-full ${item.indicatorColor}`} />
                                    {item.highlight}
                                </span>
                                <span className="text-primary group-hover:translate-x-1 transition-transform duration-200 font-bold">
                                    →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom Trust Highlights Strip */}
                <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-card/70 dark:bg-card/50 backdrop-blur-xl border border-border shadow-md grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="px-3 border-r border-border/60 last:border-r-0">
                        <p className="text-lg sm:text-xl font-extrabold text-primary font-mono">10,000+</p>
                        <p className="text-[11px] sm:text-xs text-muted-foreground font-medium">Happy Patients</p>
                    </div>
                    <div className="px-3 md:border-r border-border/60">
                        <p className="text-lg sm:text-xl font-extrabold text-red-600 dark:text-red-400 font-mono">15+ Doctors</p>
                        <p className="text-[11px] sm:text-xs text-muted-foreground font-medium">Certified Specialists</p>
                    </div>
                    <div className="px-3 border-r border-border/60 last:border-r-0">
                        <p className="text-lg sm:text-xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">92% Success</p>
                        <p className="text-[11px] sm:text-xs text-muted-foreground font-medium">Verified Protocol</p>
                    </div>
                    <div className="px-3">
                        <p className="text-lg sm:text-xl font-extrabold text-primary font-mono">0% Side Effects</p>
                        <p className="text-[11px] sm:text-xs text-muted-foreground font-medium">Safe & Non-Steroidal</p>
                    </div>
                </div>
            </section>


            {/* Shadow Divider */}
            <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


            {/* Online Appointment & Location Map */}
            <div className="py-14 sm:py-18 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
                <div className="text-center mb-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                        Book Your <span className="text-primary">Appointment</span> & Visit Us
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base mt-2">
                        Schedule a 1-on-1 doctor consultation or visit our certified clinic in Indore.
                    </p>
                </div>
                <AppointmentForm />
            </div>


            {/* OUR TREATMENTS (3 MAIN SERVICES) */}
            <section className="py-16 px-6 md:px-16 lg:px-24">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    Our <span className="text-primary">Specialized</span> Treatments
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Hair Growth Treatments",
                            icon: <FaLeaf size={24} className="text-background" />,
                            link: "/HairGrowth"
                        },
                        {
                            title: "Skin Care & Glow Treatments",
                            icon: <FaRegSmileBeam size={24} className="text-background" />,
                            link: "/SkinCare"
                        },
                        {
                            title: "Weight Loss & Metabolism Programs",
                            icon: <FaWeight size={24} className="text-background" />,
                            link: "/WeightLoss"
                        }
                    ].map((item, index) => (
                        <a
                            href={item.link}
                            key={index}
                            className="
                            group p-6 rounded-2xl bg-background backdrop-blur-xl 
                            border border-border shadow-lg hover:shadow-medium
                            transition-all hover:-translate-y-1 block
                            "
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md mb-5">
                                {item.icon}
                            </div>

                            <h4 className="font-semibold text-xl text-foreground">{item.title}</h4>

                            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-5 transition-all duration-500"></div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Shadow Divider */}
            <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />

            {/* FAQ SECTION */}
            <FAQ limit={4} />

        </div>
    );
}

