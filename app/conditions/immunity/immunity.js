// /app/conditions/immunity/immunity.js

import { MdHealthAndSafety, MdOutlineWaterDrop, MdPsychology } from "react-icons/md";
import { GiChemicalDrop, GiBodyBalance } from "react-icons/gi";

export const immunityContent = {
  title: "Low Immunity",
  subtitle:
    "A holistic doctor-guided program that helps strengthen natural immunity, reduce frequent infections, improve energy and restore long-term health using Homeopathy, Nutrition and Lifestyle Healing.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led holistic immunity care",
    "Natural protection against infections"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Immune System Strengthening",
      desc: "Homeopathic medicines help boost immune response and improve natural defense against infections.",
      icon: <MdHealthAndSafety size={28} className="text-background" />
    },
    {
      title: "Nutritional & Gut Boost",
      desc: "Improves nutrient absorption, gut balance, and essential immunity-building vitamins.",
      icon: <GiBodyBalance size={28} className="text-background" />
    },
    {
      title: "Stress & Lifestyle Balance",
      desc: "Stress weakens immunity. Treatment helps regulate cortisol and improve daily wellbeing.",
      icon: <MdPsychology size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Weak Immune Response",
      desc: "A compromised immune system struggles to fight viruses, bacteria and infections.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    },
    {
      title: "Recurrent Infections",
      desc: "Cold, cough, fever and tonsillitis frequently occur when immunity drops.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Poor Nutrition",
      desc: "Low levels of Vitamin D, C, B12, zinc and protein weaken immunity.",
      icon: <GiBodyBalance size={32} className="text-primary" />
    },
    {
      title: "Stress & Hormonal Impact",
      desc: "Chronic stress lowers immune strength and increases illness frequency.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Lifestyle Imbalance",
      desc: "Poor sleep, dehydration, and irregular routines reduce immune efficiency.",
      icon: <MdOutlineWaterDrop size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Frequent cold & cough",
    "Low energy or fatigue",
    "Slow recovery after illness",
    "Weak resistance to infections",
    "Allergies or recurring fever",
    "Digestive issues",
    "Poor concentration"
  ],

  // BENEFITS
  benefits: [
    "Boosts natural immune strength",
    "Reduces frequent infections",
    "Improves energy & vitality",
    "Balances stress hormones",
    "Supports long-term wellness",
    "Safe & natural for all ages"
  ],

  beforeAfter: [],

  videos: []
};
