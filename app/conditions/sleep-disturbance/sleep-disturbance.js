// /app/conditions/sleep-disturbance/sleep-disturbance.js

import { MdOutlineBedtime, MdOutlineWaterDrop, MdPsychology } from "react-icons/md";
import { GiBrain, GiChemicalDrop } from "react-icons/gi";

export const sleepDisturbanceContent = {
  title: "Sleep Disturbance",
  subtitle:
    "A holistic, doctor-guided treatment program to improve sleep quality, reduce insomnia, calm the mind, and restore natural sleep cycles using Homeopathy and Lifestyle Healing.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led sleep restoration",
    "Natural mind–body balancing"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Mind & Stress Relaxation",
      desc: "Calms the mind, reduces nighttime anxiety, and stabilizes emotional restlessness.",
      icon: <MdPsychology size={28} className="text-background" />
    },
    {
      title: "Nervous System Stabilization",
      desc: "Supports the nervous system to reduce overactivity and nighttime alertness.",
      icon: <GiBrain size={28} className="text-background" />
    },
    {
      title: "Sleep Cycle & Hormonal Balance",
      desc: "Improves melatonin rhythm, reduces cortisol spikes and restores natural sleep patterns.",
      icon: <GiChemicalDrop size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Mind Overactivity",
      desc: "Racing thoughts, overthinking and emotional stress disrupt natural sleep flow.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Nervous System Imbalance",
      desc: "An over-alert nervous system prevents the body from entering deep rest.",
      icon: <GiBrain size={32} className="text-primary" />
    },
    {
      title: "Hormonal Disruption",
      desc: "Imbalance of melatonin and cortisol leads to delayed or broken sleep.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Lifestyle & Sleep Hygiene",
      desc: "Irregular routines, screens and late nights contribute heavily to sleep issues.",
      icon: <MdOutlineWaterDrop size={32} className="text-primary" />
    },
    {
      title: "Insomnia Patterns",
      desc: "Prolonged sleep disturbance forms a habit loop of light, disturbed sleep.",
      icon: <MdOutlineBedtime size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Difficulty falling asleep",
    "Light or broken sleep",
    "Waking up frequently at night",
    "Feeling tired even after sleep",
    "Overthinking at bedtime",
    "Morning headache or heaviness",
    "Lack of focus during the day"
  ],

  // BENEFITS
  benefits: [
    "Improves sleep quality & duration",
    "Reduces nighttime overthinking",
    "Balances sleep–wake hormones",
    "Calms the nervous system",
    "Restores natural circadian rhythm",
    "Enhances energy & mental clarity"
  ],

  beforeAfter: [],

  videos: []
};
