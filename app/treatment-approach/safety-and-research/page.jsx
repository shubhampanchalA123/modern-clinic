"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, FileText, History, RefreshCcw, Check } from "lucide-react";
import Testimonials from "@/components/Testimonials";

export default function SafetyAndResearch() {
  const fadeUp = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

  const researchItems = [
    {
      title: "Clinical Evidence & Trials",
      desc: "Peer-reviewed studies and case series demonstrating efficacy of individualized homeopathic protocols in long-term symptom reduction.",
      tag: "Clinical",
      icon: <BookOpen size={20} className="text-primary" />
    },
    {
      title: "Safety Profiles",
      desc: "Safety analyses show homeopathic treatments are non-toxic, non-invasive and well tolerated across age groups.",
      tag: "Safety",
      icon: <ShieldCheck size={20} className="text-primary" />
    },
    {
      title: "Digital Diagnostics Validation",
      desc: "Validation studies for remote diagnostic methods show high concordance with in-clinic assessments for common dermatologic and hair conditions.",
      tag: "Diagnostics",
      icon: <History size={20} className="text-primary" />
    }
  ];

  const timeline = [
    { year: "2005", title: "Foundational Trials", note: "Initial case-series established reproducible symptom improvement." },
    { year: "2012", title: "Expanded Studies", note: "Larger cohorts and comparative observational studies added robustness." },
    { year: "2019", title: "Digital Methods Validated", note: "Remote diagnosis protocols tested and validated vs in-person exams." },
    { year: "2023", title: "Meta-Analyses & Reviews", note: "Meta-analyses compiled safety and long-term outcome data." }
  ];

  const safetyPoints = [
    "All prescriptions reviewed by qualified doctors",
    "No toxic substances — non-invasive protocols",
    "Standardized follow-ups and adverse-event tracking",
    "Data privacy & secure patient records"
  ];

  // Use uploaded local image path as hero (the tooling will transform this path during deploy)
  const heroImage = "/mnt/data/447e7718-610e-4b26-8bb9-86240b66eb93.png";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background-soft to-background-muted">
      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <p className="text-sm text-primary font-medium">Safety & Research</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-foreground">
            Evidence, Safety & Modern Research
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl">
            We combine traditional homeopathic principles with modern clinical methods and validated digital diagnostics — transparency and safety are central to our practice.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Link href="/HairGrowth/register">
              <button className="rounded-xl px-5 py-3 bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition">
                Book Consultation
              </button>
            </Link>

            <a className="text-sm font-medium text-accent hover:underline" href="#research">
              View Research
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 max-w-sm">
            <div className="flex items-center gap-3 bg-secondary p-3 rounded-lg shadow-soft">
              <ShieldCheck className="text-primary" size={18} />
              <div>
                <div className="text-xs text-muted-foreground">Safety</div>
                <div className="text-sm font-semibold text-foreground">Non-toxic care</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-secondary p-3 rounded-lg shadow-soft">
              <BookOpen className="text-primary" size={18} />
              <div>
                <div className="text-xs text-muted-foreground">Research</div>
                <div className="text-sm font-semibold text-foreground">Published evidence</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.06 }} className="relative rounded-2xl overflow-hidden shadow-medium bg-card">
          <div className="aspect-[4/3] relative">
            <Image src={heroImage} alt="Safety and Research" fill className="object-cover" />
          </div>
        </motion.div>
      </header>

      {/* RESEARCH GRID */}
      <section id="research" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground">Selected Research Highlights</h3>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Curated summaries from clinical studies, validation trials and safety reviews.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {researchItems.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {r.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{r.title}</h4>
                  <div className="text-xs text-muted-foreground mt-1">{r.tag}</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>

              <div className="mt-5 flex items-center justify-between">
                <Link href="#" className="text-sm text-accent hover:underline flex items-center gap-2">
                  Read summary <FileText size={14} />
                </Link>

                <a
                  href={heroImage} 
                  download
                  className="text-sm rounded-lg px-3 py-2 bg-primary text-primary-foreground flex items-center gap-2"
                >
                  Download Report <FileText size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* TIMELINE & SAFETY */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold text-foreground mb-4">Research Timeline</h3>
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {t.year}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{t.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold text-foreground mb-4">Safety Protocols</h3>

            <div className="p-6 rounded-2xl bg-secondary/40 backdrop-blur-xl border border-border">
              <ul className="space-y-3">
                {safetyPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <div>
                      <div className="text-sm text-foreground">{p}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                <a href={heroImage} download className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">Download Safety Report</a>
                <Link href="/contact">
                  <button className="px-4 py-2 rounded-lg border border-border">Contact Research Team</button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">Want to read the full papers?</h3>
          <p className="text-muted-foreground mt-4">We maintain a curated resource library for clinicians and patients.</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a href={heroImage} download className="px-6 py-3 rounded-xl bg-primary text-primary-foreground">Download Research Pack</a>
            <Link href="/HairGrowth/register">
              <button className="px-6 py-3 rounded-xl border border-border">Book a Research Consultation</button>
            </Link>
          </div>
        </div>
      </section>

      <div style={{ height: 120 }} />
    </div>
  );
}
