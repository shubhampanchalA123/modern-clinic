"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { conditionList } from "@/lib/conditionsData";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { ChevronRight, Sparkles } from "lucide-react";

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

export default function ConditionsIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Breadcrumb */}
      <div className="w-full border-b border-border/70 bg-card/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60 shrink-0" />
            <span className="text-foreground font-semibold text-primary">Conditions</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-border/80 relative overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/6 rounded-full blur-3xl pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 mb-4 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span>Evidence-Based Holistic Medicine</span>
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Conditions <span className="text-primary">We Treat</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our specialized medical programs. Learn about symptoms, root causes, diagnostic assessments, and doctor-guided personalized treatment plans.
          </p>
        </motion.div>
      </section>

      {/* Grid of All Conditions */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {conditionList.map((item, idx) => (
            <motion.div key={idx} variants={cardVariants} className="h-full">
              <Link
                href={item.href}
                className="group rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl flex flex-col justify-between h-full cursor-pointer"
              >
                <div className="relative w-full h-56 overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="absolute top-3.5 left-3.5 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-foreground border border-border shadow-xs">
                    {item.badge}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block mb-1.5">
                      {item.tag}
                    </span>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                      {item.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/70 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary group-hover:translate-x-1.5 transition-transform duration-200">
                      <span>View Condition</span>
                      <FaArrowRight className="text-[11px]" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
