"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({
  slides = [],
  autoPlay = true,
  duration = 4000,
  height = "h-screen",
}) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, duration);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className={`relative w-full ${height} overflow-hidden bg-background`}>
      {/* STACKED SLIDES — perfect crossfade */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === current;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slide.img}
                alt="slide"
                fill
                className="object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

              {/* text only on active slide */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-24 lg:px-32 text-white"
                >
                  <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-lg text-white/90">
                    {slide.subtitle}
                  </p>

                  {slide.buttons !== false && (
                    <div className="mt-8 flex gap-4">
                      <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                        Book Consultation
                      </button>

                      <button className="px-6 py-3 rounded-xl bg-white/20 text-white border border-white/40 hover:bg-white/30 transition backdrop-blur-xl">
                        View Treatments
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="
          absolute left-5 top-1/2 -translate-y-1/2 
          p-3 rounded-full bg-black/40 border border-white/30 
          backdrop-blur-md text-white hover:bg-black/60 transition
        "
      >
        <ChevronLeft size={28} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="
          absolute right-5 top-1/2 -translate-y-1/2 
          p-3 rounded-full bg-black/40 border border-white/30 
          backdrop-blur-md text-white hover:bg-black/60 transition
        "
      >
        <ChevronRight size={28} />
      </button>

      {/* PAGINATION DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              w-3 h-3 rounded-full cursor-pointer transition
              ${current === index ? "bg-primary shadow-md" : "bg-white/40 hover:bg-white"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
