"use client";

import { motion } from "framer-motion";
import { CheckCircle, Home, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeVsClinicCare() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background-soft to-background">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground"
        >
          Home Care vs Clinic Care
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="text-muted-foreground max-w-2xl mx-auto mt-4"
        >
          Understand which treatment mode suits your lifestyle, condition severity,
          comfort and long-term healing goals.
        </motion.p>
      </section>

      {/* COMPARISON SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">

          {/* HOME CARE */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="p-7 rounded-3xl bg-card/60 backdrop-blur-xl border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <Home className="text-primary" size={26} />
              <h2 className="text-xl font-semibold text-foreground">Home Care</h2>
            </div>

            <ul className="space-y-3">
              {[
                "Ideal for mild to moderate conditions",
                "Doctor consultation via video or phone",
                "Convenient for busy schedules",
                "Medicines delivered to your home",
                "Follow-up monitoring through digital check-ins",
                "Great for long-term maintenance and lifestyle improvements"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1" size={18} />
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CLINIC CARE */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55 }}
            className="p-7 rounded-3xl bg-card/60 backdrop-blur-xl border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <Building2 className="text-accent" size={26} />
              <h2 className="text-xl font-semibold text-foreground">Clinic Care</h2>
            </div>

            <ul className="space-y-3">
              {[
                "Recommended for moderate to severe cases",
                "Face-to-face doctor evaluation",
                "More accurate scalp/skin/physical assessments",
                "Advanced diagnostic tools available",
                "Immediate adjustments to treatment plans",
                "Higher success rate for complex health issues"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-accent mt-1" size={18} />
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>


      {/* Shadow Divider */}
      <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


      {/* DETAILED SEPARATOR CARD */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="
            p-10 rounded-3xl bg-secondary/20 backdrop-blur-xl 
            border border-border shadow-md
          "
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">
            Which One Should You Choose?
          </h3>

          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-6">
            Your doctor will guide you based on the intensity of your symptoms,
            lifestyle, treatment goals, and comfort level. Most patients begin with
            home-based care and transition to clinic visits if needed.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Choose Home Care If",
                points: [
                  "Your symptoms are mild",
                  "You prefer remote check-ins",
                  "You want convenience & flexibility",
                ],
              },
              {
                title: "Choose Clinic Care If",
                points: [
                  "Your symptoms are severe",
                  "You need physical analysis",
                  "You want faster recovery support",
                ],
              },
              {
                title: "Hybrid Model",
                points: [
                  "Start from home",
                  "Visit clinic occasionally",
                  "Best long-term results",
                ],
              },
            ].map((block, i) => (
              <div key={i} className="p-5 rounded-2xl bg-background backdrop-blur-xl border border-border">
                <h4 className="text-lg font-semibold text-foreground mb-4">{block.title}</h4>
                <ul className="space-y-2">
                  {block.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* Shadow Divider */}
      <div className="w-full h-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)]" />


      {/* CTA SECTION */}
      <section className="py-10 text-center">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Need help choosing the right approach?
          </h3>

          <p className="text-muted-foreground mt-4">
            Our doctors can help you decide which plan is best for your health condition.
          </p>

          <Link href="/HairGrowth/register">
            <button className="mt-6 px-8 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary-dark transition flex items-center mx-auto gap-2">
              Book Consultation <ArrowRight size={18} />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
