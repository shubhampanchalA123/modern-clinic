"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const pathname = usePathname();

  const testimonials = [
    {
      name: "Ritika S.",
      role: "Hair Fall Recovery",
      before: "/images/before-after/female1-before.png",
      after: "/images/before-after/female1-after.png",
      quote:
        "After years of trying shampoos and serums, Modern Clinic helped me find the real cause of my hair fall. My confidence is back!",
    },
    {
      name: "Karan M.",
      role: "Regrowth Program",
      before: "/images/before-after/male4-before.png",
      after: "/images/before-after/male4-after.png",
      quote:
        "In just 3 months, I saw baby hair and major improvement. Dr. Devendra’s holistic approach truly works.",
    },
    {
      name: "Simran K.",
      role: "Stress & Nutrition Therapy",
      before: "/images/before-after/female2-before.png",
      after: "/images/before-after/female2-after.png",
      quote:
        "Fixing my stress & sleep changed everything. My scalp feels healthier and shedding reduced drastically.",
    },
  ];

  const patientData = [
    {
      before: "/images/before-after/male3-before.png",
      after: "/images/before-after/male3-after.png",
      name: "Rohit Kumar",
      treatment: "Advanced Hair Regrowth",
      duration: "10 Sessions",
      clinic: "Indore",
      feedback:
        "After years of hair thinning, my scalp finally started showing baby hair. The treatment improved density and reduced shedding significantly.",
    },
    {
      before: "/images/before-after/female1-before.png",
      after: "/images/before-after/female1-after.png",
      name: "Sneha Verma",
      treatment: "Female Pattern Hair Loss",
      duration: "12 Sessions",
      clinic: "Indore",
      feedback:
        "My hair volume improved and my hair fall reduced dramatically. I finally feel confident again!",
    },
    {
      before: "/images/before-after/male1-before.png",
      after: "/images/before-after/male1-after.png",
      name: "Aditya Menon",
      treatment: "Male Pattern Baldness",
      duration: "8 Sessions",
      clinic: "Indore",
      feedback:
        "The holistic approach helped me regain my lost hairline. The results were visible much sooner than expected.",
    },
    {
      before: "/images/before-after/male2-before.png",
      after: "/images/before-after/male2-after.png",
      name: "Siddharth Rao",
      treatment: "Scalp Strengthening Program",
      duration: "6 Sessions",
      clinic: "Indore",
      feedback:
        "My scalp became healthier and the constant shedding finally stopped. I can see new thickness forming.",
    },
    {
      before: "/images/before-after/female2-before.png",
      after: "/images/before-after/female2-after.png",
      name: "Pooja Reddy",
      treatment: "PCOS-related Hair Loss",
      duration: "14 Sessions",
      clinic: "Indore",
      feedback:
        "Due to hormonal imbalance, my hair was extremely thin. This treatment restored strength and improved overall volume.",
    },
    {
      before: "/images/before-after/male4-before.png",
      after: "/images/before-after/male4-after.png",
      name: "Vivek Sharma",
      treatment: "Stress & Nutrition Therapy",
      duration: "7 Sessions",
      clinic: "Indore",
      feedback:
        "Fixing my sleep and nutrition reduced my shedding by almost 70%. The hair texture also improved significantly.",
    },
    {
      before: "/images/before-after/male5-before.png",
      after: "/images/before-after/male5-after.png",
      name: "Nikhil Shetty",
      treatment: "Hair Density Booster Program",
      duration: "9 Sessions",
      clinic: "Indore",
      feedback:
        "New hair growth started appearing around the crown area. This gave me a huge confidence boost!",
    },
  ];

  const showGallery = pathname === "/testimonials";

  return (
    <section className="py-18 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-background relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-r from-blue-600/8 via-teal-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-teal-500/10 text-primary dark:text-blue-400 border border-primary/20 shadow-xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-600 to-teal-500" />
            </span>
            <span>Real Clinical Outcomes</span>
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
          </div>

          <h2 className="text-3.5xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14]">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
              Before & After
            </span>{" "}
            Transformations
            <span className="relative inline-block text-foreground ml-1">
              .
              <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 rounded-full opacity-80" />
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explore authentic recovery milestones achieved through doctor-guided holistic care and individualized root-cause protocols.
          </p>
        </div>

        {/* Before & After Interactive Card */}
        <BeforeAfterCard data={patientData} />

        {/* Show More Button (Only on home page & landing pages) */}
        {(pathname === "/" || pathname === "/HairGrowth") && (
          <div className="flex justify-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-white font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/20 group"
            >
              <span>Show More Testimonials</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        )}

        {/* Success Stories Gallery for /testimonials page */}
        {showGallery && (
          <div className="mt-20 pt-16 border-t border-border">
            <h2 className="text-2.5xl sm:text-3xl font-bold text-center mb-3 text-foreground">
              Success Stories
            </h2>

            <p className="text-muted-foreground text-center text-sm max-w-xl mx-auto mb-12">
              Real transformations from people who healed naturally with our personalized care programs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-3xl p-7 bg-card/90 dark:bg-card/75 backdrop-blur-xl border border-border shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* BEFORE/AFTER IMAGE WRAPPER */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md border border-border relative bg-muted">
                        <Image src={t.before} alt="before" fill className="object-cover" />
                        <span className="absolute bottom-1.5 left-1.5 bg-slate-950/70 text-[9px] text-white px-2 py-0.5 rounded font-semibold">Before</span>
                      </div>
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md border border-border relative bg-muted">
                        <Image src={t.after} alt="after" fill className="object-cover" />
                        <span className="absolute bottom-1.5 left-1.5 bg-gradient-to-r from-blue-600 to-teal-500 text-[9px] text-white px-2 py-0.5 rounded font-semibold shadow-xs">After</span>
                      </div>
                    </div>

                    {/* QUOTE */}
                    <p className="text-xs sm:text-sm text-center italic text-muted-foreground leading-relaxed mb-5">
                      “{t.quote}”
                    </p>
                  </div>

                  {/* NAME + ROLE */}
                  <div className="pt-4 border-t border-border/70 text-center">
                    <p className="font-bold text-base text-foreground">{t.name}</p>
                    <p className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-0.5">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
