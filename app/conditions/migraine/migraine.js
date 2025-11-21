// /app/conditions/migraine/migraine.js

import { GiBrain, GiChemicalDrop, GiBodyBalance } from "react-icons/gi";
import { MdPsychology, MdHealthAndSafety } from "react-icons/md";

export const migraineContent = {
  title: "Migraine",
  subtitle:
    "A doctor-guided holistic program that reduces migraine intensity, frequency, triggers and nerve sensitivity through Homeopathy, Stress Healing and Lifestyle Correction.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led neurological care",
    "Natural relief from chronic migraine"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Pain & Nerve Sensitivity Reduction",
      desc: "Homeopathic medicines calm nerve pathways and reduce migraine intensity over time.",
      icon: <GiBrain size={28} className="text-background" />
    },
    {
      title: "Trigger Identification & Management",
      desc: "Helps identify food, lifestyle and emotional triggers that initiate migraine episodes.",
      icon: <MdHealthAndSafety size={28} className="text-background" />
    },
    {
      title: "Stress & Hormonal Balance",
      desc: "Stress imbalance is a major cause of migraine; treatment supports emotional and hormonal stability.",
      icon: <MdPsychology size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Nerve Hypersensitivity",
      desc: "Overactive nerves in the brain cause severe throbbing pain and nausea.",
      icon: <GiBrain size={32} className="text-primary" />
    },
    {
      title: "Stress & Emotional Triggers",
      desc: "Stress disrupts neurotransmitters and directly triggers migraines.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Hormonal Imbalance",
      desc: "Fluctuating hormones—especially in women—can trigger severe migraines.",
      icon: <GiBodyBalance size={32} className="text-primary" />
    },
    {
      title: "Inflammation & Blood Vessel Changes",
      desc: "Inflamed blood vessels and chemical signals contribute to migraine pain.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Lifestyle & Sleep Disturbances",
      desc: "Low sleep, dehydration, and irregular routines worsen migraine frequency.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Throbbing one-sided headache",
    "Nausea or vomiting",
    "Sensitivity to light & sound",
    "Visual disturbances (aura)",
    "Neck stiffness",
    "Fatigue or dizziness",
    "Irritability before episodes"
  ],

  // BENEFITS
  benefits: [
    "Reduces migraine intensity & frequency",
    "Identifies and manages triggers",
    "Improves sleep & reduces stress",
    "Balances hormones naturally",
    "Safe long-term neurological healing",
    "Improves daily functioning & productivity"
  ],

  beforeAfter: [],

  videos: []
};
