// /app/conditions/alopecia/alopecia.js

import { MdPsychology, MdHealthAndSafety } from "react-icons/md";
import { GiChemicalDrop, GiBodyBalance, GiFruitBowl } from "react-icons/gi";

export const alopeciaContent = {
  title: "Alopecia",
  subtitle:
    "A personalised, doctor-guided program to manage alopecia areata and related hair loss conditions using Homeopathy, Nutrition and Stress Healing.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led personalised treatment",
    "Safe & natural immune-balancing therapy"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Immune System Regulation",
      desc: "Homeopathic medicines are selected to stabilise immune overactivity responsible for patchy hair loss.",
      icon: <MdHealthAndSafety size={28} className="text-background" />
    },
    {
      title: "Nutrition & Blood Support",
      desc: "Addresses iron, vitamin D, biotin and protein deficiencies that worsen alopecia.",
      icon: <GiFruitBowl size={28} className="text-background" />
    },
    {
      title: "Stress & Hormonal Balance",
      desc: "Calms the nervous system and reduces stress-triggered flare-ups.",
      icon: <MdPsychology size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Autoimmune Reaction",
      desc: "The immune system mistakenly attacks hair follicles, causing sudden bald patches.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    },
    {
      title: "Stress Triggers",
      desc: "Emotional stress is one of the biggest triggers for alopecia flare-ups.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Genetic Predisposition",
      desc: "A strong hereditary link increases the risk of alopecia areata.",
      icon: <GiBodyBalance size={32} className="text-primary" />
    },
    {
      title: "Hormonal Changes",
      desc: "Thyroid issues and hormonal imbalance worsen alopecia severity.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Vitamin Deficiencies",
      desc: "Low Vitamin D, B12, Iron and Zinc affect hair follicle strength.",
      icon: <GiFruitBowl size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Sudden round or oval bald patches",
    "Rapid hair fall in clusters",
    "Exclamation mark hair around patches",
    "Eyebrow or beard hair loss",
    "Nail ridges or pitting",
    "Recurrent episodes of patchy loss"
  ],

  // BENEFITS
  benefits: [
    "Balances immune response naturally",
    "Reduces patch formation",
    "Helps regrow lost hair",
    "Prevents recurrent episodes",
    "Improves scalp health",
    "Holistic long-term recovery"
  ],

  beforeAfter: [],

  videos: []
};
