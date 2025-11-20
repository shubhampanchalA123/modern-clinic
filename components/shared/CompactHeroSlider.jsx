"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Advanced Homeopathy for Hair Fall & Baldness",
    desc: "Clinically proven root-cause treatment with personalized care.",
    img: "/images/slider/hair.png",
  },
  {
    title: "Safe & Effective Skin Treatment",
    desc: "Psoriasis, eczema, acne & more — gentle and long-term results.",
    img: "/images/slider/skin.png",
  },
  {
    title: "Holistic Treatment for Weight Loss",
    desc: "Treating the person, not just the disease.",
    img: "/images/slider/weight.png",
  },
];

export default function CompactHeroSlider() {
  return (
    <section
      className="
        w-full 
        px-6 md:px-12 lg:px-20
        pt-16 pb-12
        bg-gradient-to-br from-background via-secondary/10 to-background
      "
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* ---- LEFT SIDE — Unified Look ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative z-20
            p-2 rounded-xl
            before:absolute before:inset-0 
            before:bg-primary/5 before:blur-3xl before:rounded-full 
            before:-z-10
          "
        >
          <span className="text-sm tracking-wide text-primary font-medium">
            Trusted Homeopathy Since 1995
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2">
            Personalized Treatment for Hair, Skin & Chronic Conditions
          </h2>

          <p className="text-muted-foreground mt-4 max-w-md">
            Our doctors create customized treatment plans based on your symptoms,
            lifestyle & medical history.
          </p>

          <div className="flex gap-3 pt-6 flex-wrap">
            <button className="px-5 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition font-medium">
              Book Consultation
            </button>

            <button className="px-5 py-3 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 transition font-medium">
              View Conditions
            </button>
          </div>
        </motion.div>

        {/* ---- RIGHT SLIDER — Blended Into Same Section ---- */}
        <div
          className="
    relative w-full h-[45vh] md:h-[55vh] 
    rounded-[2rem] overflow-hidden 
    shadow-[0_15px_40px_rgba(0,0,0,0.12)]
    
    before:content-[''] before:absolute before:inset-0 
    before:rounded-[2rem] before:shadow-[inset_0_0_40px_rgba(0,0,0,0.25)]
    before:pointer-events-none
    
    after:content-[''] after:absolute after:inset-0 
    after:bg-gradient-to-br from-background/40 via-background/20 to-transparent
    after:rounded-[2rem] after:pointer-events-none
  "
        >


          {/* Soft overlay to unify both sides visually */}
          <div className="absolute inset-0 bg-gradient-to-l from-background/40 via-background/10 to-transparent z-30 pointer-events-none" />

          <Swiper
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            autoplay={{ delay: 3500 }}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            loop
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent z-10" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute left-0 top-0 bottom-0 flex flex-col justify-center px-6 md:px-10 lg:px-14 z-20"
                  >
                    <h2 className="text-xl md:text-2xl font-semibold text-white max-w-xs drop-shadow">
                      {slide.title}
                    </h2>

                    <p className="text-white/90 mt-2 max-w-sm text-sm md:text-base">
                      {slide.desc}
                    </p>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
