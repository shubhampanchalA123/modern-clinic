"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const conditions = [
    {
        title: "Hair Loss",
        desc: "Personalized treatment for hair fall, dandruff, alopecia & scalp health.",
        img: "/images/conditions/hair.webp",
        href: "/conditions/hair-loss"
    },
    {
        title: "Skin Disorders",
        desc: "Holistic care for acne, eczema, psoriasis, pigmentation & more.",
        img: "/images/conditions/skin.jpg",
        href: "/conditions/skin-disorders"
    },
    {
        title: "Respiratory",
        desc: "Scientific & steroid-free approach for asthma, bronchitis & allergies.",
        img: "/images/conditions/respiratory.jpg",
        href: "/conditions/respiratory"
    },
    {
        title: "Child Health",
        desc: "Safe & gentle pediatric care for immunity, allergies & behavioral health.",
        img: "/images/conditions/child.jpg",
        href: "/conditions/child-health"
    },
    {
        title: "Women's Health",
        desc: "Care for PCOS, hormonal imbalance, menopause, thyroid & fertility issues.",
        img: "/images/conditions/women.jpg",
        href: "/conditions/womens-health"
    },
    {
        title: "Diabetes Management",
        desc: "Comprehensive support for stable sugar levels & long-term wellness.",
        img: "/images/conditions/diabetes.jpg",
        href: "/conditions/diabetes-management"
    },
    {
        title: "Weight Management",
        desc: "Holistic weight-loss programs tailored to metabolism & lifestyle.",
        img: "/images/conditions/weight.webp",
        href: "/conditions/weight-management"
    },
    {
        title: "Mental Health",
        desc: "Homeopathic support for anxiety, stress, sleep & emotional balance.",
        img: "/images/conditions/mental.jpg",
        href: "/conditions/mental-health"
    },
];

export default function WhatWeTreat() {
    return (
        <section className="py-20 px-6 md:px-16 lg:px-24 bg-background">

            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-4xl font-bold text-foreground">
                    What We <span className="text-primary">Treat</span>?
                </h2>

                <p className="mt-4 text-xl font-medium text-foreground">
                    Every Symptom Tells a Story. We’re Here to Listen to Yours.
                </p>

                <p className="text-muted-foreground mt-4">
                    Behind every concern is a person with dreams, worries and hopes. Whether it’s
                    hair, skin, respiratory or chronic conditions — we see you, we hear you, and we’re here for you.
                </p>
            </div>

            {/* Cards Grid (4 + 4 Layout) */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {conditions.map((item, idx) => (
                    <Link key={idx} href={item.href}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.07 }}
                            className="
      relative group cursor-pointer
      rounded-t-[3rem] overflow-hidden
      shadow-lg bg-card
      transition-all duration-300
      hover:shadow-xl
    "
                        >
                            {/* IMAGE */}
                            <div className="relative h-64 w-full">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="
    object-cover 
    transition-all duration-500 
    group-hover:scale-105
    group-hover:blur-[2px]
    group-hover:brightness-75
  "
                                />

                                <div className="
  absolute inset-0 
  bg-black/30 
  opacity-0 group-hover:opacity-100
  transition-all duration-300
"></div>

                            </div>

                            {/* CENTERED TEXT BLOCK */}
                            <div
                                className="
    absolute inset-0 flex flex-col items-center justify-center 
    px-6 text-center z-20
    text-white
    transition-all duration-300
  "
                            >
                                {/* TITLE */}
                                <h3
                                    className="
      text-xl font-semibold leading-none
      transition-all duration-300
      group-hover:-translate-y-2
    "
                                >
                                    {item.title}
                                </h3>

                                {/* DESCRIPTION (Hidden initially) */}
                                <p
                                    className="
      text-sm text-white/90 max-w-xs leading-snug 
      opacity-0 
      transition-all duration-300
      group-hover:opacity-100 
      group-hover:translate-y-1 
      my-2
    "
                                >
                                    {item.desc}
                                </p>

                                {/* LEARN MORE */}
                                <span
                                    className="
      text-white/90 text-sm font-medium
      underline underline-offset-4
      leading-none
      transition-all duration-300
      group-hover:translate-y-2
    "
                                >
                                    Learn more →
                                </span>
                            </div>

                        </motion.div>
                    </Link>


                ))}

            </div>
        </section>
    );
}
