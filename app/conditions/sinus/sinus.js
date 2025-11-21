// /app/conditions/sinus/sinus.js

import { GiNoseSide, GiChemicalDrop } from "react-icons/gi";
import { MdHealthAndSafety, MdPsychology } from "react-icons/md";
import { FaAllergies } from "react-icons/fa";

export const sinusContent = {
  title: "Sinusitis",
  subtitle:
    "Doctor-guided homeopathic treatment to relieve sinus pressure, headaches, nasal blockage, allergies, and recurrent infections by treating the root causes.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led personalised sinus care",
    "Natural solution for chronic sinusitis"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Inflammation & Infection Control",
      desc: "Homeopathic medicines reduce sinus swelling, mucus buildup and recurrent infections.",
      icon: <GiChemicalDrop size={28} className="text-background" />
    },
    {
      title: "Allergy & Trigger Management",
      desc: "Treats allergic tendencies that worsen sinus blockage and headaches.",
      icon: <FaAllergies size={28} className="text-background" />
    },
    {
      title: "Strengthening Immunity",
      desc: "Improves immune response to reduce frequent cold, cough and sinus flare-ups.",
      icon: <MdHealthAndSafety size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Sinus Inflammation",
      desc: "Swollen sinus lining blocks drainage and causes pressure & pain.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Allergies",
      desc: "Dust, pollen, food sensitivities and pollution trigger sinus blockage.",
      icon: <FaAllergies size={32} className="text-primary" />
    },
    {
      title: "Weak Immunity",
      desc: "Low immunity leads to recurrent infections and frequent sinus attacks.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    },
    {
      title: "Nasal Blockage",
      desc: "Congestion, excess mucus or nasal polyps block airflow.",
      icon: <GiNoseSide size={32} className="text-primary" />
    },
    {
      title: "Stress & Lifestyle",
      desc: "Stress weakens immunity and increases sinus headaches.",
      icon: <MdPsychology size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Nasal congestion & blockage",
    "Headache & facial pressure",
    "Thick mucus or post-nasal drip",
    "Recurring sneezing",
    "Reduced smell or taste",
    "Cough & throat irritation",
    "Heavy feeling around eyes & forehead"
  ],

  // BENEFITS
  benefits: [
    "Reduces sinus pressure & headaches",
    "Clears nasal congestion naturally",
    "Improves immunity & reduces infections",
    "Controls allergy triggers",
    "Prevents frequent sinus flare-ups",
    "Safe long-term holistic recovery"
  ],

  beforeAfter: [],

  videos: []
};
