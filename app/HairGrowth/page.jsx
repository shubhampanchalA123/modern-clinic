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
    <div className="min-h-screen bg-gradient-to-b from-background via-background-soft to-background-muted">

      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="text-sm text-primary font-medium">
            Holistic • Doctor Guided • Natural Healing
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-foreground">
            Doctor-Guided Hair Regrowth
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl">
            Treat hair fall from its root cause with a holistic, doctor-led program combining
            Homeopathy, Nutrition & Stress Healing for long-term natural results.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Link href="/HairGrowth/register">
              <Button className="shadow-soft bg-primary text-primary-foreground hover:bg-primary-dark">
                Book Consultation
              </Button>
            </Link>

            <a className="text-sm font-medium text-accent hover:underline" href="#how">
              How It Works
            </a>
          </div>

          <div className="mt-6 flex gap-3 text-sm">
            <div className="bg-secondary/40 p-3 rounded-lg shadow-soft text-foreground">
              Doctor-led personalised treatment
            </div>
            <div className="bg-secondary/40 p-3 rounded-lg shadow-soft text-foreground">
              Natural, safe & non-invasive
            </div>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-medium bg-card">
            <div className="aspect-[4/3] relative">
              <Image src="/images/hair-hero.png" alt="hero" fill className="object-cover" />
            </div>
          </div>
        </motion.div>
      </main>

      {/* HOW IT WORKS */}
      <section id="how" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground">
            How Our Holistic Treatment Works
          </h3>

          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            A 3-step medically guided process designed to fix your hair fall from the root.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Homeopathic Treatment",
              desc: "Corrects internal triggers such as stress, hormones, digestion & metabolism.",
              icon: <GiMedicines size={28} className="text-background" />
            },
            {
              title: "Nutrition Therapy",
              desc: "Strengthens roots with nutrient support that boosts scalp circulation.",
              icon: <GiFruitBowl size={28} className="text-background" />
            },
            {
              title: "Lifestyle & Stress Healing",
              desc: "Improves sleep, reduces stress levels, balances cortisol & restores hair growth cycle.",
              icon: <MdSelfImprovement size={28} className="text-background" />
            }
          ].map((step, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 bg-background backdrop-blur-xl border border-border 
                   shadow-lg hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Icon Circle */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent 
                        flex items-center justify-center shadow-md mx-auto mb-5">
                {step.icon}
              </div>

              <h4 className="font-semibold text-lg text-center text-foreground">{step.title}</h4>
              <p className="text-muted-foreground mt-2 text-sm text-center leading-relaxed">
                {step.desc}
              </p>

              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent 
                        mx-auto mt-5 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      <VideoReels />

      {/* ROOT CAUSES */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground">
            What’s Causing Your Hair Fall?
          </h3>

          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
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
              className="group rounded-2xl p-6 bg-background backdrop-blur-xl border border-border 
                   shadow-lg hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-md 
                        mx-auto mb-4">
                <img src={item.icon} alt={item.title} className="w-20 h-20 rounded-2xl" />
              </div>

              <h4 className="font-semibold text-lg text-center text-foreground">{item.title}</h4>
              <p className="text-muted-foreground mt-2 text-sm text-center leading-relaxed">
                {item.desc}
              </p>

              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent 
                        mx-auto mt-4 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <FAQ limit={4} />
    </div>
  );
}
