"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Hair Transplant Patient",
      before: "/images/stages/male-1.svg",
      after: "/images/stages/male-3.svg",
      quote:
        "I had tried everything before coming here. The transplant was smooth and now my hairline looks natural. Totally worth it!",
    },
    {
      name: "Sneha Patil",
      role: "Hair Growth Therapy",
      before: "/images/stages/female-1.svg",
      after: "/images/stages/female-3.svg",
      quote:
        "The PRP and topical plan really worked for me. I feel confident again, and their coach support is amazing.",
    },
    {
      name: "Amit Sharma",
      role: "Non-surgical Plan",
      before: "/images/stages/male-2.svg",
      after: "/images/stages/male-3.svg",
      quote:
        "The hair coach explained everything clearly. My shedding reduced in just 2 months.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
          <main className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-2">Success Stories</h2>
            <p className="text-gray-600 text-center mb-10">
              Real transformations from our happy clients.
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow p-5"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-24 h-24 rounded-xl overflow-hidden relative">
                      <Image
                        src={t.before}
                        alt="before"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="w-24 h-24 rounded-xl overflow-hidden relative">
                      <Image
                        src={t.after}
                        alt="after"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
    
                  <p className="italic text-gray-700 text-sm">“{t.quote}”</p>
    
                  <div className="mt-4">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
  );
}
