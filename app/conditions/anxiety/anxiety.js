// /app/conditions/anxiety/anxiety.js

import { MdPsychology, MdOutlineWaterDrop, MdHealthAndSafety } from "react-icons/md";
import { GiBrain, GiChemicalDrop } from "react-icons/gi";

export const anxietyContent = {
  title: "Anxiety",
  subtitle:
    "A holistic, doctor-guided program that helps reduce anxiety, overthinking, panic tendencies and emotional imbalance using Homeopathy, Nervous System Support and Lifestyle Healing.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led emotional wellness care",
    "Safe and natural mind–body healing"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Calming Emotional Turbulence",
      desc: "Homeopathic medicines help stabilise emotional sensitivity, reduce overthinking and calm mental restlessness.",
      icon: <MdPsychology size={28} className="text-background" />
    },
    {
      title: "Nervous System Support",
      desc: "Strengthens the nervous system, reducing panic-like symptoms such as chest tightness and heart racing.",
      icon: <GiBrain size={28} className="text-background" />
    },
    {
      title: "Sleep & Hormonal Balance",
      desc: "Improves sleep cycles and balances cortisol — the stress hormone responsible for anxiety spikes.",
      icon: <GiChemicalDrop size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Overactive Stress Response",
      desc: "Anxiety leads to constant fight–flight activation causing restlessness and panic.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Nervous System Hypersensitivity",
      desc: "An overly sensitive nervous system reacts strongly to emotional or physical triggers.",
      icon: <GiBrain size={32} className="text-primary" />
    },
    {
      title: "Hormonal & Chemical Imbalance",
      desc: "Imbalances in stress hormones and neurotransmitters worsen anxiety symptoms.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Sleep Disturbances",
      desc: "Poor sleep increases irritability, fear-based thinking and anxiety spikes.",
      icon: <MdOutlineWaterDrop size={32} className="text-primary" />
    },
    {
      title: "Physical Stress Reactions",
      desc: "Chest tightness, fast heartbeat and shortness of breath occur due to anxiety loops.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Overthinking & excessive worry",
    "Restlessness",
    "Racing thoughts",
    "Sleep disturbance",
    "Chest tightness or fast heartbeat",
    "Feeling overwhelmed",
    "Panic-like sensations"
  ],

  // BENEFITS
  benefits: [
    "Reduces overthinking & worry",
    "Calms emotional triggers naturally",
    "Stabilises nervous system response",
    "Improves sleep and daily functioning",
    "Balances stress hormones",
    "Safe long-term emotional healing"
  ],

  beforeAfter: [],

  videos: []
};
