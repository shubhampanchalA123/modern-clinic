"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUserMd, FaRegSmileBeam, FaLeaf, FaWeight } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineScience } from "react-icons/md";
import Slider from "@/components/ui/Slider";
import FlipCard from "@/components/ui/FlipCard";


export default function HomePage() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;


    const heroSlides = [
        {
            img: "/images/hero/slide1.jpg",
            title: "Expert Hair, Skin & Wellness Care",
            subtitle: "Personalized holistic treatments backed by medical science.",
        },
        {
            img: "/images/hero/slide2.jpg",
            title: "Hair Growth Treatments That Work",
            subtitle: "Root-cause healing for long-term results.",
        },
        {
            img: "/images/hero/slide3.jpg",
            title: "Achieve Healthy, Glowing Skin",
            subtitle: "Revitalize your skin naturally and safely.",
        },
    ];



    return (
        <div className="bg-background text-foreground">

            {/*  HERO SECTION - SLIDER */}
            <Slider slides={heroSlides} height="h-screen" />


            {/* WHY CHOOSE US (FLIP CARDS) */}

            <section className="py-20 px-6 md:px-16 lg:px-24">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* LEFT TEXT SIDE */}
                    <div>
                        <h2 className="text-5xl font-bold mb-8">Why Modern Clinic?</h2>

                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Our clinic combines medical expertise with holistic healing science.
                            We focus on treating the root cause and creating truly personalized
                            wellness programs.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            With certified specialists, modern diagnostic tools, and thousands
                            of successful treatments — we ensure safe, natural, and long-lasting
                            results for hair, skin, and overall wellness.
                        </p>
                    </div>

                    {/* RIGHT GRID OF FLIP CARDS */}
                    <div className="grid grid-cols-2 gap-6">
                        <FlipCard
                            bg="hsl(var(--secondary))"
                            front={{
                                number: "10,000+",
                                label: "happy patients",
                            }}
                            back={{
                                desc: "Our clinic has helped thousands restore their confidence through holistic treatments tailored to their needs.",
                            }}
                        />

                        <FlipCard
                            bg="hsl(var(--muted))"
                            front={{
                                number: "15+",
                                label: "medical specialists",
                            }}
                            back={{
                                desc: "Experienced doctors, certified therapists and wellness experts working together for your transformation.",
                            }}
                        />

                        <FlipCard
                            bg="hsl(var(--accent) / 0.6)"
                            front={{
                                number: "7+",
                                label: "years of excellence",
                            }}
                            back={{
                                desc: "We combine scientific approaches with holistic healing for long-lasting, natural wellness solutions.",
                            }}
                        />

                        <FlipCard
                            bg="hsl(var(--primary) / 0.25)"
                            front={{
                                number: "92%",
                                label: "success rate",
                            }}
                            back={{
                                desc: "Consistent results backed by detailed assessments, progress tracking and personalized treatment planning.",
                            }}
                        />
                    </div>

                </div>
            </section>



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
