// /app/conditions/eczema/eczema.js

import {
  MdHealthAndSafety,
  MdOutlineWaterDrop,
  MdPsychology,
} from "react-icons/md";
import { GiChemicalDrop } from "react-icons/gi";
import { FaAllergies } from "react-icons/fa";

export const eczemaContent = {
  title: "Eczema",
  subtitle:
    "A holistic, doctor-guided treatment program that heals eczema from the root by balancing immunity, reducing inflammation, and restoring the skin barrier naturally.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led personalised treatment",
    "Natural immune-balancing skin healing"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Internal Homeopathic Healing",
      desc: "Targets inflammation, itching, redness, and immune hypersensitivity from within.",
      icon: <MdHealthAndSafety size={28} className="text-background" />
    },
    {
      title: "Diet & Gut Repair Therapy",
      desc: "Corrects gut imbalance, food triggers and nutrient deficiencies that worsen eczema.",
      icon: <GiChemicalDrop size={28} className="text-background" />
    },
    {
      title: "Lifestyle & Stress Regulation",
      desc: "Minimises flare-ups by managing stress, sleep cycles, and environmental triggers.",
      icon: <MdPsychology size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES (React Icons only — FIXED)
  rootCauses: [
    {
      title: "Immune Overreaction",
      desc: "Eczema is strongly linked to immune hypersensitivity causing flare-ups.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    },
    {
      title: "Skin Barrier Damage",
      desc: "Weak moisture barrier leads to dryness, cracks, and itching.",
      icon: <MdOutlineWaterDrop size={32} className="text-primary" />
    },
    {
      title: "Inflammation",
      desc: "Chronic inflammation under the skin causes redness and swelling.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Allergy Triggers",
      desc: "Dust, foods, soaps, and fabrics can trigger sudden flare-ups.",
      icon: <FaAllergies size={32} className="text-primary" />
    },
    {
      title: "Stress & Emotional Triggers",
      desc: "Stress weakens immunity and directly increases eczema severity.",
      icon: <MdPsychology size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Red, inflamed skin",
    "Dry or cracked patches",
    "Severe itching",
    "Fluid-filled bumps",
    "Skin discoloration",
    "Recurring flare-ups",
    "Thickened, sensitive skin"
  ],

  // BENEFITS
  benefits: [
    "Reduces itching & inflammation naturally",
    "Strengthens skin barrier",
    "Controls allergy reactions",
    "Improves hydration levels",
    "Prevents recurring flare-ups",
    "Safe & holistic long-term recovery"
  ],

  beforeAfter: [],

  videos: []
};
