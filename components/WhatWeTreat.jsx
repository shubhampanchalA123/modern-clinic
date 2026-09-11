"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineScience, MdVerified } from "react-icons/md";
import { Sparkles } from "lucide-react";
import { conditionList } from "@/lib/conditionsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WhatWeTreat() {
  const featuredConditions = conditionList.filter((c) => c.isLarge);
  const regularConditions = conditionList.filter((c) => !c.isLarge);

  return (
    <section id="what-we-treat" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-background relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/6 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      {/* ================= SECTION HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        {/* Medical Badge with Subtle Red Accent */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 mb-3.5 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span>Clinical Care & Diagnostics</span>
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18]">
          Conditions <span className="text-primary">We Treat</span>
          <span className="relative inline-block text-foreground ml-1">
            .
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-full" />
          </span>
        </h2>

        {/* Supporting Description */}
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Explore evidence-informed care programs. Learn about symptoms, underlying root causes, clinical assessment methods, and personalized treatment approaches tailored for your recovery.
        </p>
      </motion.div>

      {/* ================= EDITORIAL GRID LAYOUT ================= */}
      <div className="space-y-6 sm:space-y-8">
        
        {/* TOP ROW: 2 Primary Featured Conditions (Hair Loss & Skin Disorders) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {featuredConditions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={item.href}
                className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col sm:flex-row cursor-pointer h-full"
              >
                {/* Image Container */}
                <div className="relative w-full sm:w-1/2 min-h-[250px] sm:min-h-[300px] overflow-hidden shrink-0 bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Category Badge overlay on image */}
                  <div className="absolute top-3.5 left-3.5 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-foreground border border-border shadow-xs">
                    {item.badge}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>{item.tag}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary group-hover:translate-x-1.5 transition-transform duration-200">
                      <span>View Condition</span>
                      <FaArrowRight className="text-[11px]" />
                    </span>
                    <span className="text-[11px] text-muted-foreground font-medium hidden sm:inline">
                      Learn more
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* SECONDARY ROW: 6 Condition Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {regularConditions.map((item, idx) => (
            <motion.div key={idx} variants={cardVariants} className="h-full">
              <Link
                href={item.href}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-lg flex flex-col justify-between h-full cursor-pointer"
              >
                {/* Card Image */}
                <div className="relative w-full h-44 overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Category Badge overlay on image */}
                  <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-foreground border border-border shadow-xs">
                    {item.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>{item.tag}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-1.5">
                      {item.name}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/70 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:translate-x-1.5 transition-transform duration-200">
                      <span>View Condition</span>
                      <FaArrowRight className="text-[10px]" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}
