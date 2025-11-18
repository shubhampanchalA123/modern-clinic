"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import Link from "next/link";

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
      clinic: "Koramangala, Bengaluru",
      feedback:
        "After years of hair thinning, my scalp finally started showing baby hair. The treatment improved density and reduced shedding significantly.",
    },
    {
      before: "/images/before-after/female1-before.png",
      after: "/images/before-after/female1-after.png",
      name: "Sneha Verma",
      treatment: "Female Pattern Hair Loss",
      duration: "12 Sessions",
      clinic: "Indiranagar, Bengaluru",
      feedback:
        "My hair volume improved and my hair fall reduced dramatically. I finally feel confident again!",
    },
    {
      before: "/images/before-after/male1-before.png",
      after: "/images/before-after/male1-after.png",
      name: "Aditya Menon",
      treatment: "Male Pattern Baldness",
      duration: "8 Sessions",
      clinic: "HSR Layout, Bengaluru",
      feedback:
        "The holistic approach helped me regain my lost hairline. The results were visible much sooner than expected.",
    },
    {
      before: "/images/before-after/male2-before.png",
      after: "/images/before-after/male2-after.png",
      name: "Siddharth Rao",
      treatment: "Scalp Strengthening Program",
      duration: "6 Sessions",
      clinic: "Whitefield, Bengaluru",
      feedback:
        "My scalp became healthier and the constant shedding finally stopped. I can see new thickness forming.",
    },
    {
      before: "/images/before-after/female2-before.png",
      after: "/images/before-after/female2-after.png",
      name: "Pooja Reddy",
      treatment: "PCOS-related Hair Loss",
      duration: "14 Sessions",
      clinic: "BTM Layout, Bengaluru",
      feedback:
        "Due to hormonal imbalance, my hair was extremely thin. This treatment restored strength and improved overall volume.",
    },
    {
      before: "/images/before-after/male4-before.png",
      after: "/images/before-after/male4-after.png",
      name: "Vivek Sharma",
      treatment: "Stress & Nutrition Therapy",
      duration: "7 Sessions",
      clinic: "Jayanagar, Bengaluru",
      feedback:
        "Fixing my sleep and nutrition reduced my shedding by almost 70%. The hair texture also improved significantly.",
    },
    {
      before: "/images/before-after/male5-before.png",
      after: "/images/before-after/male5-after.png",
      name: "Nikhil Shetty",
      treatment: "Hair Density Booster Program",
      duration: "9 Sessions",
      clinic: "Marathahalli, Bengaluru",
      feedback:
        "New hair growth started appearing around the crown area. This gave me a huge confidence boost!",
    },
  ];

  const showGallery = pathname === "/testimonials";

  return (
    <div className="bg-muted py-12">
      <main className="max-w-7xl mx-auto px-6">

        {/* Success Stories */}
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">
          Success Stories
        </h2>

        <p className="text-muted-foreground text-center mb-10">
          Real transformations from people who healed their hair naturally with our program.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                bg-card 
                text-foreground 
                rounded-2xl 
                shadow-sm 
                border border-border 
                p-5 
                hover:shadow 
                hover:-translate-y-1 
                transition-all
              "
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-24 h-24 rounded-xl overflow-hidden relative">
                  <Image src={t.before} alt="before" fill className="object-cover" />
                </div>
                <div className="w-24 h-24 rounded-xl overflow-hidden relative">
                  <Image src={t.after} alt="after" fill className="object-cover" />
                </div>
              </div>

              <p className="italic text-muted-foreground text-sm">“{t.quote}”</p>

              <div className="mt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button (Only on home page) */}
        {pathname === "/" && (
          <div className="flex justify-center mt-10">
            <Link
              href="/testimonials"
              className="text-primary font-semibold hover:underline flex items-center gap-1"
            >
              Show More Testimonials
              <span className="text-lg">→</span>
            </Link>
          </div>
        )}

        {/* Before & After Detailed Slider Section */}
        {showGallery && (
          <>
            <h2 className="text-2xl font-bold text-center mt-16 mb-6 text-foreground">
              Before & After Transformations
            </h2>

            <BeforeAfterCard data={patientData} />
          </>
        )}
      </main>
    </div>
  );
}
