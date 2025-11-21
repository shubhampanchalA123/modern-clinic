"use client";

import Image from "next/image";
import { FaCheckCircle, FaGraduationCap, FaAward } from "react-icons/fa";
import { MdOutlineMedicalServices, MdSelfImprovement } from "react-icons/md";
import { GiStethoscope } from "react-icons/gi";
import VideoReels from "@/components/VideoReels";

export default function DoctorProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background-soft to-background-muted py-16">
      <main className="max-w-7xl mx-auto px-6">

        {/* HEADER SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Doctor Image */}
          <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-medium bg-card">
            <Image
              src="/images/doctor1.png"
              alt="Dr. Devendra Rathore"
              fill
              className="object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Dr. Devendra Rathore
            </h1>

            <p className="text-muted-foreground mt-2 text-lg">
              Hair & Wellness Expert • Root-Cause Hair Fall Specialist
            </p>

            <p className="mt-6 text-foreground/80 leading-relaxed">
              With years of experience treating complex hair fall cases using a
              holistic and medically guided approach, Dr. Rathore focuses on
              long-term, natural, and root-cause based recovery combining
              Homeopathy, Nutrition, and Lifestyle Medicine.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                5000+ Patients Treated
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                10+ Years Experience
              </span>
            </div>
          </div>

        </div>

        {/* QUALIFICATIONS */}
        <section className="mt-20" id="qualification">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Qualifications</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {[
              { icon: <FaGraduationCap size={24} className="text-background" />, text: "BHMS - Bachelor of Homeopathic Medicine" },
              { icon: <MdOutlineMedicalServices size={24} className="text-background" />, text: "Certified Hair Restoration & Wellness Specialist" },
              { icon: <FaAward size={24} className="text-background" />, text: "Holistic Health & Lifestyle Medicine Training" }
            ].map((item, index) => (
              <div
                key={index}
                className="
        group 
        p-6 
        rounded-2xl 
        bg-secondary/60 
        backdrop-blur-xl 
        border border-border 
        shadow-lg 
        hover:shadow-medium 
        transition-all 
        duration-300 
        hover:-translate-y-1
      "
              >
                {/* Gradient Icon Bubble */}
                <div
                  className="
          w-12
          h-12
          rounded-xl
          bg-gradient-to-br
          from-primary
          to-accent
          flex
          items-center
          justify-center
          shadow-md
          mb-4
        "
                >
                  {item.icon}
                </div>

                {/* Text */}
                <p className="font-medium text-foreground leading-relaxed">
                  {item.text}
                </p>

                {/* Hover Underline */}
                <div
                  className="
          w-0 
          group-hover:w-full 
          h-0.5 
          bg-gradient-to-r 
          from-primary 
          to-accent
          mx-auto 
          mt-5 
          transition-all 
          duration-500
        "
                />
              </div>
            ))}
          </div>

        </section>

        {/* EXPERIENCE TIMELINE */}
        <section className="mt-20" id="experience">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Experience</h2>

          <div className="space-y-6 border-l-2 border-primary/40 pl-6">
            {[
              { year: "2012 - 2015", text: "Worked with leading homeopathic clinics treating chronic hair fall conditions." },
              { year: "2016 - 2019", text: "Specialized in nutrition science & metabolic health for hair restoration." },
              { year: "2020 - Present", text: "Founded an advanced root-cause hair treatment program integrating Homeopathy + Nutrition + Lifestyle medicine." }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-primary rounded-full"></div>

                <h4 className="font-semibold text-primary">{item.year}</h4>
                <p className="text-muted-foreground mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Holistic Treatment Approach</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {[
              {
                icon: <GiStethoscope size={28} className="text-background" />,
                title: "Homeopathic Diagnosis",
                desc: "Identifying internal triggers like hormones, stress & metabolism."
              },
              {
                icon: <FaCheckCircle size={28} className="text-background" />,
                title: "Nutrition Optimization",
                desc: "Improving scalp nourishment & correcting deficiencies."
              },
              {
                icon: <MdSelfImprovement size={28} className="text-background" />,
                title: "Stress & Lifestyle Healing",
                desc: "Balancing cortisol, improving sleep & restoring hair growth cycles."
              }
            ].map((step, index) => (
              <div
                key={index}
                className="
        group 
        p-6 
        rounded-2xl 
        bg-secondary/60 
        backdrop-blur-xl 
        border border-border 
        shadow-lg 
        hover:shadow-medium 
        transition-all 
        duration-300 
        hover:-translate-y-1
      "
              >
                {/* Gradient Icon Bubble */}
                <div
                  className="
          w-14 
          h-14 
          rounded-xl 
          bg-gradient-to-br 
          from-primary 
          to-accent 
          flex 
          items-center 
          justify-center 
          shadow-md 
          mb-5
        "
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Hover Underline Accent */}
                <div
                  className="
          w-0 
          group-hover:w-full 
          h-0.5 
          bg-gradient-to-r 
          from-primary 
          to-accent
          mx-auto 
          mt-5 
          transition-all 
          duration-500
        "
                />
              </div>
            ))}
          </div>

        </section>

        {/* VIDEO REELS */}
        <VideoReels />

        {/* SUCCESS STORIES */}
        <section className="mt-20 mb-20">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Patient Success Stories</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {[
              {
                name: "Ritika S.",
                quote: "After years of trying products, Dr. Rathore identified my root cause. Real regrowth started in 8 weeks!"
              },
              {
                name: "Karan M.",
                quote: "His holistic approach helped me fix stress, sleep & nutrition — my hair fall reduced by 80%."
              },
              {
                name: "Simran K.",
                quote: "The 3-step program was life-changing. My scalp health improved drastically."
              }
            ].map((t, index) => (
              <div
                key={index}
                className="
        group
        p-6 
        rounded-2xl 
        bg-secondary/60 
        backdrop-blur-xl 
        border border-border 
        shadow-lg 
        hover:shadow-medium 
        transition-all 
        duration-300 
        hover:-translate-y-1
      "
              >
                {/* QUOTE */}
                <p className="italic text-center text-muted-foreground leading-relaxed">
                  “{t.quote}”
                </p>

                {/* NAME */}
                <p className="mt-4 font-semibold text-center text-foreground">
                  {t.name}
                </p>

                {/* ACCENT LINE */}
                <div
                  className="
          w-0 
          group-hover:w-full 
          h-0.5 
          bg-gradient-to-r 
          from-primary 
          to-accent 
          mx-auto 
          mt-5 
          transition-all 
          duration-500
        "
                />
              </div>
            ))}
          </div>

        </section>

      </main>
    </div>
  );
}
