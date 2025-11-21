// /app/conditions/arthritis/arthritis.js

import { GiKneeCap, GiChemicalDrop, GiBodyBalance } from "react-icons/gi";
import { MdHealthAndSafety, MdPsychology } from "react-icons/md";

export const arthritisContent = {
  title: "Arthritis",
  subtitle:
    "A holistic doctor-guided program to reduce joint pain, stiffness, inflammation and improve mobility using Homeopathy, Nutrition and Lifestyle Healing.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led chronic pain management",
    "Safe & long-term joint support"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Inflammation Control",
      desc: "Homeopathic medicines help reduce swelling, stiffness and inflammatory pain in joints.",
      icon: <GiChemicalDrop size={28} className="text-background" />
    },
    {
      title: "Joint Strength & Mobility",
      desc: "Supports cartilage health, improves flexibility and reduces stiffness.",
      icon: <GiBodyBalance size={28} className="text-background" />
    },
    {
      title: "Lifestyle & Stress Healing",
      desc: "Stress worsens arthritis pain; treatment includes sleep, stress and routine optimization.",
      icon: <MdPsychology size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Inflammation",
      desc: "Chronic inflammation leads to pain, swelling and joint stiffness.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Autoimmune Reaction (Rheumatoid)",
      desc: "The immune system mistakenly attacks joint tissues causing severe pain.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    },
    {
      title: "Joint Wear & Tear (Osteoarthritis)",
      desc: "Breakdown of cartilage reduces joint cushioning and mobility.",
      icon: <GiKneeCap size={32} className="text-primary" />
    },
    {
      title: "Lifestyle & Stress",
      desc: "Stress increases inflammation and worsens pain perception.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Low Physical Activity",
      desc: "Lack of movement leads to stiffness and reduced joint fluid circulation.",
      icon: <GiBodyBalance size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Joint pain & swelling",
    "Morning stiffness",
    "Reduced mobility",
    "Warm or tender joints",
    "Difficulty walking or bending",
    "Chronic fatigue",
    "Cracking or grinding feeling"
  ],

  // BENEFITS
  benefits: [
    "Reduces joint inflammation naturally",
    "Improves flexibility & movement",
    "Decreases pain intensity",
    "Strengthens joints & cartilage",
    "Slows progression of chronic arthritis",
    "Safe for long-term management"
  ],

  beforeAfter: [],

  videos: []
};
