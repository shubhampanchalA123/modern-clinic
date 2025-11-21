// /app/conditions/thyroid/thyroid.js

import { GiChemicalDrop, GiBodyBalance } from "react-icons/gi";
import { MdHealthAndSafety, MdOutlineWaterDrop, MdPsychology } from "react-icons/md";

export const thyroidContent = {
  title: "Thyroid",
  subtitle:
    "Doctor-guided treatment focusing on hormonal balance, metabolism correction, stress healing and long-term natural thyroid management using Homeopathy & Nutrition.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led hormonal balancing",
    "Natural long-term thyroid support"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Hormonal Regulation",
      desc: "Homeopathic medicines help balance TSH, T3 & T4 levels and improve thyroid gland function.",
      icon: <GiChemicalDrop size={28} className="text-background" />
    },
    {
      title: "Metabolism & Energy Boost",
      desc: "Improves digestion, metabolism and cellular energy affected in thyroid imbalance.",
      icon: <GiBodyBalance size={28} className="text-background" />
    },
    {
      title: "Stress & Emotional Healing",
      desc: "Stress is a major thyroid trigger; treatment supports emotional balance and adrenal health.",
      icon: <MdPsychology size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES (icons only)
  rootCauses: [
    {
      title: "Hormonal Imbalance",
      desc: "Thyroid hormones regulate metabolism, energy and body temperature. Imbalance causes multiple symptoms.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Autoimmune Reaction (Hashimoto’s)",
      desc: "The immune system may attack the thyroid gland, reducing hormone production.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    },
    {
      title: "Nutritional Deficiencies",
      desc: "Low iodine, selenium, B12 and iron affect thyroid hormone conversion.",
      icon: <MdOutlineWaterDrop size={32} className="text-primary" />
    },
    {
      title: "Stress & Cortisol Imbalance",
      desc: "Chronic stress lowers thyroid hormone conversion and slows metabolism.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Slow Metabolism",
      desc: "A sluggish metabolism causes weight gain, fatigue and hair fall.",
      icon: <GiBodyBalance size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Fatigue and low energy",
    "Unexplained weight gain or loss",
    "Hair fall and thinning",
    "Dry skin",
    "Mood swings or irritability",
    "Irregular periods",
    "Constipation",
    "Cold sensitivity"
  ],

  // BENEFITS
  benefits: [
    "Balances thyroid hormones naturally",
    "Improves metabolism and energy",
    "Reduces hair fall and skin issues",
    "Restores hormonal and emotional health",
    "Safe for long-term management",
    "Supports better sleep and mood"
  ],

  beforeAfter: [],

  videos: []
};
