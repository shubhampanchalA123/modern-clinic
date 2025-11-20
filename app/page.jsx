"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUserMd, FaRegSmileBeam, FaLeaf, FaWeight } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineScience } from "react-icons/md";
import Slider from "@/components/shared/Slider";
import FlipCard from "@/components/shared/FlipCard";
import { FaUsers, FaRegStar, FaChartLine } from "react-icons/fa";
import CompactHeroSlider from "@/components/shared/CompactHeroSlider";
import WhatWeTreat from "@/components/WhatWeTreat";


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

<div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


            {/* WHY MODERN CLINIC */}

            <section className="py-20 px-6 md:px-16 lg:px-24">

                {/* TOP — TEXT */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 leading-tight">
                        Why <span className="text-primary">Modern Clinic?</span>
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-md">
                        Experience a new generation of holistic care where science meets
                        compassion. We design treatments, not templates.
                    </p>

                    <p className="text-muted-foreground leading-relaxed text-md">
                        Every plan is fully personalized, trackable, and crafted for long-term
                        results using medical-grade diagnostics & expert-led strategies.
                    </p>
                </div>

                {/* BOTTOM — FLIPCARDS */}
                <div
                    className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-8 
      max-w-6xl 
      mx-auto
    "
                >
                    <FlipCard
                        bg="hsl(var(--secondary) / 0.55)"
                        Icon={FaUsers}
                        front={{ number: "10,000+", label: "Happy Patients" }}
                        back={{ desc: "Thousands transformed their hair, skin & wellness through holistic science-backed plans." }}
                    />

                    <FlipCard
                        bg="hsl(var(--muted) / 0.55)"
                        Icon={FaUserMd}
                        front={{ number: "15+", label: "Certified Doctors" }}
                        back={{ desc: "A multidisciplinary team including Homeopaths, Nutritionists & Lifestyle Experts." }}
                    />

                    <FlipCard
                        bg="hsl(var(--accent) / 0.4)"
                        Icon={FaRegStar}
                        front={{ number: "7+", label: "Years of Excellence" }}
                        back={{ desc: "Trusted for premium care using modern technology and evidence-based treatment." }}
                    />

                    <FlipCard
                        bg="hsl(var(--primary) / 0.3)"
                        Icon={FaChartLine}
                        front={{ number: "92%", label: "Success Rate" }}
                        back={{ desc: "Results tracked via progress reports to ensure sustainable, long-term improvement." }}
                    />
                </div>

            </section>

            <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


            {/* WHAT WE TREAT */}
            <WhatWeTreat />

<div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


            {/* WHY CHOOSE US (4 CARDS) */}
            <section className="py-20 px-6 md:px-16 lg:px-24">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    Why Choose Our Clinic
                </h2>

                <div className="grid md:grid-cols-4 gap-10">
                    {[
                        { icon: <FaUserMd size={26} className="text-background" />, title: "Certified Specialists" },
                        { icon: <MdOutlineScience size={26} className="text-background" />, title: "Science + Holistic Approach" },
                        { icon: <FaLeaf size={26} className="text-background" />, title: "Root-Cause Healing" },
                        { icon: <MdHealthAndSafety size={26} className="text-background" />, title: "Safe & Personalized" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="
                group p-6 rounded-2xl bg-secondary/60 backdrop-blur-xl 
                shadow-lg hover:shadow-medium border border-border
                transition-all hover:-translate-y-1
              "
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md mb-5">
                                {item.icon}
                            </div>

                            <h4 className="font-semibold text-lg text-foreground text-center">{item.title}</h4>

                            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </section>

<div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


            {/* OUR TREATMENTS (3 MAIN SERVICES) */}
            <section className="py-20 px-6 md:px-16 lg:px-24">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    Our Specialized Treatments
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
                group p-6 rounded-2xl bg-secondary/60 backdrop-blur-xl 
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

        </div>
    );
}
