"use client";

import { useState } from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function BeforeAfterCard({ data }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((i) => (i + 1) % data.length);
  const prevSlide = () => setIndex((i) => (i - 1 + data.length) % data.length);

  const t = data[index];

  return (
    <div className="w-full bg-background-soft rounded-3xl p-6 md:p-10 shadow-soft border border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT — Before/After slider */}
        <div>
          <BeforeAfterSlider before={t.before} after={t.after} />
          <p className="text-center text-xs text-muted-foreground mt-2">
            *Real patient images
          </p>
        </div>

        {/* RIGHT — Patient Details */}
        <div className="bg-card shadow-medium border border-border rounded-3xl p-6 relative">

          {/* Quote Icon */}
          <Quote className="absolute top-5 left-5 w-10 h-10 text-muted-foreground/20" />

          <div className="space-y-3 mt-10 text-sm leading-relaxed text-foreground">
            <p>
              <strong>Patient Name – </strong> {t.name}
            </p>
            <p>
              <strong>Treatment Name – </strong> {t.treatment}
            </p>
            <p>
              <strong>Duration – </strong>
              <span className="font-semibold">{t.duration}</span>
            </p>
            <p>
              <strong>Clinic – </strong> {t.clinic}
            </p>

            <p className="text-foreground">
              {t.feedback}
              <span className="text-primary cursor-pointer">...read more</span>
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={prevSlide}
              className="
                w-10 h-10 rounded-full border border-primary text-primary 
                flex items-center justify-center 
                hover:bg-primary/10 transition
              "
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="
                w-10 h-10 rounded-full border border-primary text-primary 
                flex items-center justify-center 
                hover:bg-primary/10 transition
              "
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
