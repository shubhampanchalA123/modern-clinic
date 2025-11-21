// /app/conditions/stress/stress.js

import { MdPsychology, MdOutlineWaterDrop, MdHealthAndSafety } from "react-icons/md";
import { GiBrain, GiChemicalDrop, GiBodyBalance } from "react-icons/gi";

export const stressContent = {
  title: "Stress",
  subtitle:
    "A doctor-guided holistic program that helps reduce stress, anxiety, fatigue, sleep disturbances and emotional overload using Homeopathy, Mind-Body Healing and Lifestyle Correction.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led emotional wellness program",
    "Safe and natural mind–body balancing"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Emotional & Stress Regulation",
      desc: "Homeopathic medicines help calm the mind, reduce overthinking, irritability and emotional sensitivity.",
      icon: <MdPsychology size={28} className="text-background" />
    },
    {
      title: "Nervous System Reset",
      desc: "Stabilises the nervous system and reduces physical symptoms like headaches, chest tightness and fatigue.",
      icon: <GiBrain size={28} className="text-background" />
    },
    {
      title: "Sleep & Hormonal Balance",
      desc: "Improves sleep cycles, lowers cortisol levels and restores overall mind–body balance.",
      icon: <GiChemicalDrop size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Mental Overload",
      desc: "Chronic overthinking, pressure and emotional strain disrupt mental clarity and wellbeing.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Nervous System Exhaustion",
      desc: "Stress weakens the nervous system, causing fatigue, irritability, headaches and burnout.",
      icon: <GiBrain size={32} className="text-primary" />
    },
    {
      title: "Hormonal Imbalance",
      desc: "Stress hormones like cortisol rise, causing mood swings, anxiety and sleep issues.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Low Immunity",
      desc: "Chronic stress weakens immunity, making the body more prone to illness.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    },
    {
      title: "Lifestyle & Sleep Disturbances",
      desc: "Poor sleep, dehydration and irregular routines worsen stress response.",
      icon: <MdOutlineWaterDrop size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Overthinking / racing thoughts",
    "Irritability or mood swings",
    "Sleep disturbance",
    "Fatigue or low energy",
    "Difficulty concentrating",
    "Muscle tension / headaches",
    "Restlessness or worry"
  ],

  // BENEFITS
  benefits: [
    "Calms stress & overthinking naturally",
    "Improves sleep quality",
    "Balances stress hormones",
    "Supports nervous system healing",
    "Boosts mental clarity & resilience",
    "Safe for long-term emotional wellness"
  ],

  beforeAfter: [],

  videos: []
};
