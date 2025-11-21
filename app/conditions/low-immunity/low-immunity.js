// /app/conditions/low-immunity/low-immunity.js

import { MdHealthAndSafety, MdOutlineWaterDrop } from "react-icons/md";
import { GiChemicalDrop, GiFruitBowl, GiBodyBalance } from "react-icons/gi";

export const lowImmunityContent = {
  title: "Low Immunity (Children)",
  subtitle:
    "A doctor-guided natural immunity-building program for children to reduce frequent infections, improve strength, energy and overall resistance using Homeopathy, Nutrition & Lifestyle support.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Child-safe natural immunity boosting",
    "Reduce frequent cold, cough & fever"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Immune Strengthening Medicines",
      desc: "Homeopathic medicines help build long-term resistance to infections and improve overall vitality.",
      icon: <MdHealthAndSafety size={28} className="text-background" />
    },
    {
      title: "Nutritional Improvement",
      desc: "Enhances vitamin absorption, gut health, appetite and energy levels for stronger immunity.",
      icon: <GiFruitBowl size={28} className="text-background" />
    },
    {
      title: "Lifestyle & Sleep Support",
      desc: "Balanced routines, hydration and sleep patterns help stabilize the child's natural defense system.",
      icon: <MdOutlineWaterDrop size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Weak Immune Defense",
      desc: "Children with lower immunity frequently fall sick and recover slowly from minor infections.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    },
    {
      title: "Recurrent Infections",
      desc: "Cold, cough, fever and throat infections occur frequently when the immune system is weak.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Nutritional Deficiencies",
      desc: "Low levels of Vitamin D, iron, zinc and essential nutrients weaken resistance.",
      icon: <GiFruitBowl size={32} className="text-primary" />
    },
    {
      title: "Lifestyle & Sleep Imbalance",
      desc: "Poor sleep, excess screen time and dehydration reduce immunity over time.",
      icon: <MdOutlineWaterDrop size={32} className="text-primary" />
    },
    {
      title: "Low Energy & Poor Appetite",
      desc: "Children with low vitality struggle with slow growth, low energy and frequent tiredness.",
      icon: <GiBodyBalance size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Frequent cold, cough & fever",
    "Low appetite",
    "Fatigue or low energy",
    "Slow recovery after illness",
    "Recurring tonsillitis",
    "Poor concentration in school",
    "Digestive issues"
  ],

  // BENEFITS
  benefits: [
    "Boosts child’s natural immunity",
    "Reduces recurrent infections",
    "Improves appetite & digestion",
    "Enhances sleep & overall growth",
    "Safe for long-term use",
    "Strengthens overall vitality"
  ],

  beforeAfter: [],

  videos: []
};
