// /app/conditions/allergies/allergies.js

import { FaAllergies } from "react-icons/fa";
import { GiChemicalDrop, GiFruitBowl } from "react-icons/gi";
import { MdHealthAndSafety, MdPsychology, MdOutlineWaterDrop } from "react-icons/md";

export const allergiesContent = {
  title: "Allergies",
  subtitle:
    "Doctor-guided allergy management to identify triggers, calm immune overreactions and restore long-term tolerance using Homeopathy, nutrition and lifestyle modifications.",

  // using the uploaded local image path (will be transformed to a URL by your tooling)
  heroImage: "/mnt/data/447e7718-610e-4b26-8bb9-86240b66eb93.png",

  highlights: [
    "Targeted trigger identification",
    "Safe, long-term allergy control"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Trigger Identification",
      desc: "Detailed history and testing to discover environmental, food or contact triggers.",
      icon: <FaAllergies size={28} className="text-background" />
    },
    {
      title: "Immune Modulation",
      desc: "Homeopathic prescriptions aim to calm immune overreaction and reduce symptomatic episodes.",
      icon: <MdHealthAndSafety size={28} className="text-background" />
    },
    {
      title: "Nutrition & Lifestyle Support",
      desc: "Dietary guidance and lifestyle adjustments to reduce sensitivity and improve resilience.",
      icon: <GiFruitBowl size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES (icons used instead of images)
  rootCauses: [
    {
      title: "Environmental Triggers",
      desc: "Dust, pollen, pet dander and pollution often provoke allergic responses.",
      icon: <FaAllergies size={32} className="text-primary" />
    },
    {
      title: "Immune Hypersensitivity",
      desc: "An over-reactive immune system responds excessively to harmless substances.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    },
    {
      title: "Inflammatory Response",
      desc: "Chemical mediators released during allergy cause itching, sneezing and swelling.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Dietary Triggers",
      desc: "Certain foods can trigger or worsen allergic symptoms in sensitive individuals.",
      icon: <GiFruitBowl size={32} className="text-primary" />
    },
    {
      title: "Stress & Lifestyle",
      desc: "Stress and poor sleep lower resistance and increase flare frequency.",
      icon: <MdPsychology size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Sneezing & runny nose",
    "Itchy, watery eyes",
    "Skin rashes or hives",
    "Wheezing or breathlessness (in some cases)",
    "Nasal congestion & post-nasal drip",
    "Swelling around eyes or face",
    "Recurring sinus or cough symptoms"
  ],

  // BENEFITS
  benefits: [
    "Identifies and removes triggers where possible",
    "Reduces frequency & severity of allergic episodes",
    "Calms immune overreaction naturally",
    "Improves breathing & sleep",
    "Reduces need for continuous symptomatic medicines",
    "Safe, individualized long-term plan"
  ],

  beforeAfter: [],

  videos: []
};
