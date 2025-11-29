"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Camera,
  BrainCircuit,
  Stethoscope,
  FileSearch,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Building2,
} from "lucide-react";

export default function DigitalDiagnosisMethod() {
  const fadeUp = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  const steps = [
    {
      icon: <Camera size={22} />,
      title: "1. Upload Photos",
      desc: "Patients securely upload affected-area photos (skin/hair/scalp) through our portal.",
    },
    {
      icon: <BrainCircuit size={22} />,
      title: "2. AI-Assisted Analysis",
      desc: "Advanced AI scans images for inflammation, density, pigmentation & pattern changes.",
    },
    {
      icon: <Stethoscope size={22} />,
      title: "3. Doctor Evaluation",
      desc: "Our specialist reviews the AI insights alongside medical history & symptoms.",
    },
    {
      icon: <FileSearch size={22} />,
      title: "4. Digital Report",
      desc: "A detailed report is generated outlining diagnosis, triggers & recommended care plan.",
    }
  ];

  const tools = [
    {
      icon: <Camera size={26} className="text-primary" />,
      title: "High-Resolution Photo Capture",
      desc: "Accurate tracking of scalp, skin & symptom progression.",
    },
    {
      icon: <BrainCircuit size={26} className="text-primary" />,
      title: "AI Pattern Recognition",
      desc: "Detects density, texture irregularities & inflammation patterns.",
    },
    {
      icon: <Stethoscope size={26} className="text-primary" />,
      title: "Doctor-Verified Review",
      desc: "All findings validated manually by certified homeopathic doctors.",
    }
  ];

  const comparison = [
    {
      icon: <Smartphone size={22} className="text-primary" />,
      type: "Digital (Remote)",
      points: [
        "Upload photos anytime",
        "AI + doctor review",
        "No travel required",
        "Ideal for mild to moderate conditions",
      ],
    },
    {
      icon: <Building2 size={22} className="text-accent" />,
      type: "In-Clinic (Physical)",
      points: [
        "In-depth scalp/skin analysis",
        "Real-time doctor evaluation",
        "Physical examination tools",
        "Best for severe/complex cases",
      ],
    }
  ];

  const heroImage = "/images/hero.png";

  return (
    <div className="bg-gradient-to-b from-background via-background-soft to-background-muted">

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <p className="text-sm text-primary font-medium">Digital Diagnosis Method</p>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-foreground">
            Modern <span className="text-primary">Digital Diagnosis</span> for Precision Treatment
          </h1>

          <p className="text-muted-foreground mt-4 max-w-xl">
            Our clinic combines AI-assisted imaging with doctor expertise to deliver
            accurate assessments — even remotely. Fast, precise, and scientifically informed.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Link href="/HairGrowth/register">
              <button className="rounded-xl px-5 py-3 bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition">
                Start Diagnosis
              </button>
            </Link>

            <a className="text-sm font-medium text-accent hover:underline" href="#flow">
              How it works
            </a>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="relative rounded-2xl overflow-hidden shadow-medium bg-card"
        >
          <div className="aspect-[4/3] relative">
            <Image src={heroImage} alt="Digital Diagnosis" fill className="object-cover" />
          </div>
        </motion.div>
      </header>


      {/* Shadow Divider */}
      <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


      {/* DIAGNOSTIC FLOW */}
      <section id="flow" className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">
          How Our Digital Diagnosis Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card/70 border border-border backdrop-blur-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                {s.icon}
              </div>
              <h4 className="text-lg font-semibold text-foreground">{s.title}</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Shadow Divider */}
      <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


      {/* TOOLS USED */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">
          Tools We Use for Diagnosis
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-background border border-border backdrop-blur-xl shadow-sm"
            >
              <div className="mb-4">{t.icon}</div>
              <h4 className="text-lg font-semibold text-foreground">{t.title}</h4>
              <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Shadow Divider */}
      <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


      {/* REMOTE VS CLINIC */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">
          Remote vs In-Clinic Diagnosis
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {comparison.map((c, i) => (
            <motion.div
              key={c.type}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-7 rounded-2xl bg-card/70 border border-border backdrop-blur-xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {c.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{c.type}</h3>
              </div>

              <ul className="space-y-3">
                {c.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Start Your Digital Diagnosis Today
          </h3>
          <p className="text-muted-foreground mt-4">
            Upload photos & get your doctor-reviewed report within 24 hours.
          </p>

          <Link href="/HairGrowth/register">
            <button className="mt-6 px-8 py-3 rounded-xl bg-primary text-primary-foreground flex items-center gap-2 mx-auto">
              Begin Now <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      {/* <div style={{ height: 120 }} /> */}
    </div>
  );
}
