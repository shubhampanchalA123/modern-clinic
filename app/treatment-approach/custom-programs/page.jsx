"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Testimonials from "@/components/Testimonials";

export default function CustomProgramsPage() {
  const fadeUp = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  const programs = [
    {
      title: "Starter Care",
      desc: "1:1 Doctor consultation, basic homeopathic protocol & 4-week follow-up",
      price: "₹1,499"
    },
    {
      title: "Rebuild Program",
      desc: "Deep assessment, dietary plan, targeted medicines & 12-week monitoring",
      price: "₹4,999"
    },
    {
      title: "Advanced Regrowth",
      desc: "Comprehensive diagnostics, personalized combos & monthly clinic visits",
      price: "₹12,999"
    }
  ];

  const steps = [
    {
      title: "1. Personalized Assessment",
      desc: "Detailed history, photos, and if required, in-clinic diagnostics."
    },
    {
      title: "2. Tailored Treatment Plan",
      desc: "Custom homeopathic medicines + nutrition & lifestyle plan."
    },
    {
      title: "3. Ongoing Optimization",
      desc: "Regular follow-ups, progress tracking and plan adjustments."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background-soft to-background-muted">
      {/* HERO */}
      <header className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-primary font-medium">Custom Programs</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-foreground">
              Personalized <span className="text-primary">treatment plans</span> built around you
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Every patient is unique — our Custom Programs blend clinical expertise, diagnostics and lifestyle support
              to craft plans that fit your needs, time and budget.
            </p>

            <div className="mt-6 flex gap-4 items-center">
              <Link href="/HairGrowth/register">
                <button className="rounded-xl px-5 py-3 bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition">
                  Book a Consultation
                </button>
              </Link>

              <a href="#programs" className="text-sm text-accent font-medium hover:underline">See Programs</a>
            </div>

            <div className="mt-6 flex gap-3 text-sm">
              <div className="bg-secondary/40 p-3 rounded-lg shadow-soft text-foreground">Doctor-led plans</div>
              <div className="bg-secondary/40 p-3 rounded-lg shadow-soft text-foreground">Flexible payment options</div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="relative rounded-2xl overflow-hidden shadow-medium bg-card"
          >
            <div className="aspect-[4/3] relative">
              {/* Using uploaded local file path as hero image */}
              <Image
                src={"/images/hero.png"}
                alt="Custom Programs Hero"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </header>


      {/* Shadow Divider */}
      <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


      {/* PROGRAM CARDS */}
      <section id="programs" className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground">Choose a program that fits you</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Start with a focused plan or pick a comprehensive program for long-term results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-60 rounded-t-2xl"></div>

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <div className="text-sm font-bold text-foreground">{p.price}</div>
              </div>

              <p className="text-muted-foreground mt-3">{p.desc}</p>

              <ul className="mt-4 space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-primary mt-1" />
                  <span>Initial doctor consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-primary mt-1" />
                  <span>Personalized medicine plan</span>
                </li>
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <Link href="/HairGrowth/register">
                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition">
                    Select
                  </button>
                </Link>
                <a className="text-sm text-accent hover:underline flex items-center gap-2">
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Shadow Divider */}
      <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


      {/* CUSTOMIZATION FLOW */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-3xl font-bold text-foreground">How we customise your plan</h3>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Our customization process is simple, transparent and evidence-based. We combine clinical assessment with
              lifestyle analysis and patient goals to build a plan you'll follow happily.
            </p>

            <div className="mt-6 space-y-4">
              {steps.map((st, idx) => (
                <div key={st.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="font-semibold">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{st.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl bg-secondary/20 backdrop-blur-xl p-6 border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Customizer</h4>

              <form className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">Primary Concern</label>
                  <select className="w-full mt-2 p-3 rounded-lg bg-card border border-border">
                    <option>Hair fall</option>
                    <option>Acne</option>
                    <option>Sleep issues</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Goal</label>
                  <select className="w-full mt-2 p-3 rounded-lg bg-card border border-border">
                    <option>Regrowth</option>
                    <option>Reduced episodes</option>
                    <option>Improve sleep</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Timeline</label>
                  <select className="w-full mt-2 p-3 rounded-lg bg-card border border-border">
                    <option>1 month</option>
                    <option>3 months</option>
                    <option>6 months</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button type="button" className="w-full rounded-lg px-4 py-3 bg-primary text-primary-foreground">
                    Get Suggested Plan
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Shadow Divider */}
      <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


      {/* PRICING / TIERS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground">Pricing & Packages</h3>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Transparent pricing for every need — no hidden charges.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border text-foreground">
            <div className="text-sm font-semibold text-muted-foreground">Basic</div>
            <div className="text-2xl font-bold mt-3">₹1,499</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-3"><CheckCircle size={14} className="text-primary mt-1" /> 1 consultation</li>
              <li className="flex items-start gap-3"><CheckCircle size={14} className="text-primary mt-1" /> 4-week plan</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border text-foreground">
            <div className="text-sm font-semibold text-muted-foreground">Popular</div>
            <div className="text-2xl font-bold mt-3">₹4,999</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-3"><CheckCircle size={14} className="text-primary mt-1" /> Detailed assessment</li>
              <li className="flex items-start gap-3"><CheckCircle size={14} className="text-primary mt-1" /> 3-month support</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border text-foreground">
            <div className="text-sm font-semibold text-muted-foreground">Comprehensive</div>
            <div className="text-2xl font-bold mt-3">₹12,999</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-3"><CheckCircle size={14} className="text-primary mt-1" /> Clinic diagnostics</li>
              <li className="flex items-start gap-3"><CheckCircle size={14} className="text-primary mt-1" /> 6-month support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="max-w-7xl mx-auto px-6 py-14">
        <Testimonials />
      </section> */}

      {/* CTA */}
      <section className="py-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground">Ready to begin your custom program?</h3>
          <p className="text-muted-foreground mt-3">Book a consultation and we’ll design a plan that fits your life.</p>
          <Link href="/HairGrowth/register">
            <button className="mt-6 px-8 py-3 rounded-xl bg-primary text-primary-foreground flex items-center gap-2 mx-auto">
              Book Consultation <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      {/* <div style={{ height: 120 }} /> */}
    </div>
  );
}
