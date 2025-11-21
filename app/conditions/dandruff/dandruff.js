// /app/conditions/dandruff/dandruff.js

import { MdPsychology, MdHealthAndSafety } from "react-icons/md";
import { GiChemicalDrop, GiFruitBowl, GiBodyBalance } from "react-icons/gi";

export const dandruffContent = {
  title: "Dandruff",
  subtitle:
    "A doctor-guided treatment approach that targets the root causes of dandruff, scalp flaking, itching and inflammation using Homeopathy, Nutrition and Scalp Health Management.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led personalised treatment",
    "Balances scalp health naturally"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Internal Homeopathic Treatment",
      desc: "Helps control scalp inflammation, dryness or oil imbalance responsible for dandruff.",
      icon: <GiBodyBalance size={28} className="text-background" />
    },
    {
      title: "Nutrition & Gut Support",
      desc: "Improves digestion, nutrient absorption & reduces fungal overgrowth triggers.",
      icon: <GiFruitBowl size={28} className="text-background" />
    },
    {
      title: "Lifestyle & Scalp Hygiene",
      desc: "Builds a routine that reduces flare-ups, irritation and recurrence.",
      icon: <MdPsychology size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Dry or Oily Scalp",
      desc: "Sebum imbalance leads to flaking, itching and irritation.",
      icon: <GiBodyBalance size={32} className="text-primary" />
    },
    {
      title: "Fungal Overgrowth",
      desc: "Malassezia fungus can cause persistent dandruff and scaling.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Stress & Lifestyle",
      desc: "Stress increases scalp oil production and triggers flare-ups.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Low Immunity",
      desc: "Weak immune response causes frequent recurrence of dandruff.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    },
    {
      title: "Diet & Nutrition",
      desc: "Low hydration, poor nutrition and excess sugar worsen scalp health.",
      icon: <GiFruitBowl size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "White or yellow scalp flakes",
    "Itchy & irritated scalp",
    "Redness or scalp inflammation",
    "Greasy scalp patches",
    "Hair fall due to itching",
    "Recurrent flare-ups"
  ],

  // BENEFITS
  benefits: [
    "Reduces dandruff from the root cause",
    "Calms scalp inflammation",
    "Controls fungal overgrowth naturally",
    "Reduces itching & irritation",
    "Improves scalp hydration & pH",
    "Prevents recurrence long-term"
  ],

  beforeAfter: [],

  videos: []
};
