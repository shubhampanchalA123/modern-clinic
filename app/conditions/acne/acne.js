// /app/conditions/acne/acne.js

import { MdPsychology, MdHealthAndSafety } from "react-icons/md";
import { GiChemicalDrop, GiBodyBalance, GiFruitBowl } from "react-icons/gi";

export const acneContent = {
  title: "Acne",
  subtitle:
    "A holistic, doctor-guided treatment plan that targets internal triggers such as hormones, digestion, stress, and inflammation to permanently reduce acne and prevent future breakouts.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led personalised treatment",
    "Root-cause based acne control"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Hormonal & Internal Balancing",
      desc: "Helps regulate hormonal fluctuations, inflammation and oil gland activity responsible for acne.",
      icon: <GiChemicalDrop size={28} className="text-background" />
    },
    {
      title: "Gut Health & Detox Support",
      desc: "Improves digestion, reduces acne-causing toxins and enhances nutrient absorption.",
      icon: <GiFruitBowl size={28} className="text-background" />
    },
    {
      title: "Lifestyle, Diet & Stress Healing",
      desc: "Reduces triggers such as sugar, stress, late nights, and poor skincare habits.",
      icon: <MdPsychology size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Hormonal Fluctuation",
      desc: "Increased androgen activity raises oil secretion, leading to acne.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Excess Sebum Production",
      desc: "Oily skin clogs pores and triggers acne formation.",
      icon: <GiBodyBalance size={32} className="text-primary" />
    },
    {
      title: "Gut Imbalance",
      desc: "Poor digestion leads to toxin buildup, which surfaces as acne.",
      icon: <GiFruitBowl size={32} className="text-primary" />
    },
    {
      title: "Stress",
      desc: "Stress hormones increase oil levels and inflammation.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Bacterial Overgrowth",
      desc: "P. Acnes bacteria infect clogged pores, causing redness and swelling.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Whiteheads",
    "Blackheads",
    "Painful cystic acne",
    "Red swollen pimples",
    "Dark spots & pigmentation",
    "Acne scars",
    "Oily or greasy skin"
  ],

  // BENEFITS
  benefits: [
    "Reduces active acne naturally",
    "Balances hormones & oil production",
    "Detoxifies the body internally",
    "Lightens dark spots & scars over time",
    "Prevents future breakouts",
    "Safe for sensitive skin"
  ],

  beforeAfter: [],

  videos: []
};
