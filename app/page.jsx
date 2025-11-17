"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import VideoReels from "@/components/VideoReels";
import { GiMedicines, GiFruitBowl } from "react-icons/gi";
import { MdSelfImprovement } from "react-icons/md";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">

      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>

          <p className="text-sm text-emerald-600 font-medium">Holistic • Doctor Guided • Natural Healing</p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Doctor-Guided Hair Regrowth
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl">
            Treat hair fall from its root cause with a holistic, doctor-led program combining
            Homeopathy, Nutrition & Stress Healing for long-term natural results.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Link href="/register"><Button className="shadow-lg">Book Consultation</Button></Link>
            <a href="#how" className="text-sm font-medium text-indigo-600 hover:underline">How It Works</a>
          </div>

          <div className="mt-6 flex gap-3 text-sm">
            <div className="bg-white p-3 rounded-lg shadow-sm">Doctor-led personalised treatment</div>
            <div className="bg-white p-3 rounded-lg shadow-sm">Natural, safe & non-invasive</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
            <div className="aspect-[4/3] relative">
              <Image src="/images/hero.png" alt="hero" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </motion.div>
      </main>

      {/* HOW IT WORKS */}
      <section id="how" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h3 className="text-3xl font-bold">How Our Holistic Treatment Works</h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A 3-step medically guided process designed to fix your hair fall from the root.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Homeopathic Treatment",
              desc: "Corrects internal triggers such as stress, hormones, digestion & metabolism.",
              icon: <GiMedicines size={28} className="text-white" />
            },
            {
              title: "Nutrition Therapy",
              desc: "Strengthens roots with nutrient support that boosts scalp circulation.",
              icon: <GiFruitBowl size={28} className="text-white" />
            },
            {
              title: "Lifestyle & Stress Healing",
              desc: "Improves sleep, reduces stress levels, balances cortisol & restores hair growth cycle.",
              icon: <MdSelfImprovement size={28} className="text-white" />
            }
          ].map((step, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 bg-white/60 backdrop-blur-xl border border-gray-100 
                   shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Icon Circle */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 
                        flex items-center justify-center shadow-md mx-auto mb-5">
                {step.icon}
              </div>

              <h4 className="font-semibold text-lg text-center">{step.title}</h4>
              <p className="text-gray-600 mt-2 text-sm text-center leading-relaxed">
                {step.desc}
              </p>

              {/* Hover underline */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500 to-emerald-400 
                        mx-auto mt-5 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>



      <VideoReels />

      {/* ROOT CAUSES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h3 className="text-3xl font-bold">What’s Causing Your Hair Fall?</h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Hair fall happens due to multiple internal & external triggers. Our doctor identifies
            your exact root cause and personalizes your treatment.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Stress & Anxiety",
              desc: "High cortisol disrupts the hair growth cycle and causes sudden shedding.",
              icon: "/images/icons/stress.png"
            },
            {
              title: "Hormonal Imbalance",
              desc: "PCOS, thyroid and DHT sensitivity weaken follicles and accelerate thinning.",
              icon: "/images/icons/hormones.png"
            },
            {
              title: "Nutritional Deficiencies",
              desc: "Low protein, iron, vitamin D & biotin directly weaken hair roots.",
              icon: "/images/icons/nutrition.png"
            },
            {
              title: "Scalp Health Issues",
              desc: "Dandruff, buildup & low circulation reduce oxygen supply to hair roots.",
              icon: "/images/icons/scalp.png"
            },
            {
              title: "Lifestyle & Sleep",
              desc: "Late nights, dehydration and poor routines harm your scalp environment.",
              icon: "/images/icons/lifestyle.png"
            },
            {
              title: "Genetics & Age",
              desc: "Some have natural DHT sensitivity, leading to patterned hair loss.",
              icon: "/images/icons/genetics.png"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 bg-white/60 backdrop-blur-xl border border-gray-100 
                   shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-xl  
                        flex items-center justify-center shadow-md mx-auto mb-4">
                <img src={item.icon} alt={item.title} className="w-15 h-15" />
              </div>

              <h4 className="font-semibold text-lg text-center">{item.title}</h4>
              <p className="text-gray-600 mt-2 text-sm text-center leading-relaxed">
                {item.desc}
              </p>

              {/* Hover line */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-emerald-400 to-indigo-500 
                        mx-auto mt-4 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>



      <Testimonials />
      <FAQ />
    </div>
  );
}








{/* <section id="how" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">How it works</h3>
        <p className="text-gray-600 mt-2">Simple 3-step flow: Register → Select stage → Choose plan → Meet your coach.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Register', desc: 'Share basic details and hair history.' },
            { title: 'Choose stage', desc: 'Select the visual stage that matches you.' },
            { title: 'Get personalised plan', desc: 'Pick a plan and meet your hair coach.' }
          ].map((s) => (
            <div key={s.title} className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">{s.title}</h4>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section> */}