"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaCalendarCheck, 
  FaArrowRight, 
  FaCheckCircle, 
  FaShieldAlt, 
  FaSpa, 
  FaLeaf 
} from "react-icons/fa";
import { MdHealing, MdVerified, MdOutlineScience } from "react-icons/md";
import { Sparkles, ChevronRight, Stethoscope, CheckCircle2, ShieldCheck, HeartPulse } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function SkinCarePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Services</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Clinical Dermatology & Skin Care</span>
        </nav>

        {/* ================= HERO SPOTLIGHT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3.5xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-2xl overflow-hidden mb-18"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5">
                <MdVerified className="text-teal-500 text-sm" />
                <span>Non-Steroidal Clinical Dermatology</span>
                <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
              </div>

              <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                Root-Cause Healing For{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Skin Disorders
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                Permanent, gentle recovery from stubborn acne, eczema, psoriasis, pigmentation, and chronic hives using constitutional homeopathic medicine and skin barrier restoration.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 my-7 w-full max-w-lg">
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-primary">3,500+</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Skin Cases Treated</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-teal-500">100%</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Steroid-Free</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 text-center">
                  <p className="text-xl sm:text-2xl font-black text-indigo-500">90%+</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">Clearance Rate</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
                <Link
                  href="/HairGrowth/register"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-102 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FaCalendarCheck className="text-sm" />
                  <span>Book Skin Consultation</span>
                  <FaArrowRight className="text-xs" />
                </Link>

                <Link
                  href="/conditions/skin-disorders"
                  className="px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold text-xs sm:text-sm hover:bg-muted hover:border-primary/40 transition-all cursor-pointer shadow-xs"
                >
                  Explore Conditions We Treat →
                </Link>
              </div>
            </div>

            {/* Right Side Image Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/3] sm:aspect-square rounded-3.5xl overflow-hidden border-2 border-primary/25 shadow-2xl bg-card">
                <Image
                  src="/images/slider/skin.png"
                  alt="Clinical Dermatology & Skin Healing"
                  fill
                  unoptimized
                  className="object-cover hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-white/20 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Holistic Dermato-Therapy</span>
                  </div>
                  <h3 className="text-lg font-bold">Natural Skin Barrier Restoration</h3>
                  <p className="text-xs text-slate-200">Zero steroid rebounds • Safe cellular healing</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= SPECIALIZED SKIN PROTOCOLS ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <MdHealing className="w-3.5 h-3.5 text-primary" />
              <span>Comprehensive Dermatology</span>
            </div>
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-foreground tracking-tight">
              Clinical Skin Conditions We Treat
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Individualized homeopathic protocols that clear active flare-ups and stabilize the immune response.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Stubborn Adult & Teen Acne",
                desc: "Treating deep cystic acne, hormonal jawline breakouts, and chronic inflammation from within without drying chemicals.",
                gradient: "from-blue-600 to-indigo-600"
              },
              {
                title: "Atopic Eczema & Dermatitis",
                desc: "Calming chronic itching, skin redness, and dry flaking by repairing gut permeability and immune hypersensitivity.",
                gradient: "from-indigo-600 to-purple-600"
              },
              {
                title: "Plaque Psoriasis Management",
                desc: "Long-term cellular stabilization to slow down rapid epidermal cell turnover and prevent recurring plaque flare-ups.",
                gradient: "from-teal-500 to-emerald-600"
              },
              {
                title: "Melasma & Hyperpigmentation",
                desc: "Correcting liver-adrenal hormonal axes that trigger excess melanin deposition for clear, luminous skin tone.",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                title: "Urticaria & Chronic Hives",
                desc: "Desensitizing mast-cell histamine release to eliminate sudden allergic welts, swelling, and burning sensations.",
                gradient: "from-sky-500 to-blue-600"
              },
              {
                title: "Fungal Infections & Ringworm",
                desc: "Strengthening natural cutaneous immunity to eradicate stubborn tinea infections without liver-toxic anti-fungals.",
                gradient: "from-emerald-500 to-teal-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-3.5xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md mb-5 text-white`}>
                    <MdHealing size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-primary">
                  <Link href="/conditions/skin-disorders" className="hover:underline flex items-center gap-1">
                    <span>Explore Treatment Plan</span>
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>

      <Testimonials />
      <FAQ limit={4} />

    </div>
  );
}
