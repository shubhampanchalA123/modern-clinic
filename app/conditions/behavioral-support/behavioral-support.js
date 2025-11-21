// /app/conditions/behavioral-support/behavioral-support.js

import { MdPsychology, MdOutlineWaterDrop, MdHealthAndSafety } from "react-icons/md";
import { GiBrain, GiBodyBalance } from "react-icons/gi";

export const behavioralSupportContent = {
  title: "Behavioral Support (Children)",
  subtitle:
    "Holistic doctor-guided behavioral support to help children with emotional regulation, focus issues, mood changes, irritability, confidence and overall mental–emotional balance.",

  heroImage: "/images/hair-hero.png",

  highlights: [
    "Child-safe emotional & behavioral support",
    "Improves focus, mood & social behavior"
  ],

  // HOW TREATMENT WORKS
  treatmentSteps: [
    {
      title: "Emotional Regulation",
      desc: "Homeopathic medicines help calm emotional hypersensitivity, irritability and mood swings.",
      icon: <MdPsychology size={28} className="text-background" />
    },
    {
      title: "Focus & Cognitive Support",
      desc: "Improves concentration, reduces restlessness and supports healthy learning patterns.",
      icon: <GiBrain size={28} className="text-background" />
    },
    {
      title: "Routine & Lifestyle Balancing",
      desc: "Helps develop daily habits that stabilize sleep, energy, behavior and overall wellbeing.",
      icon: <MdOutlineWaterDrop size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Emotional Imbalance",
      desc: "Children may react strongly to stress, changes or emotional triggers.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Cognitive Overload or Understimulation",
      desc: "Irregular focus, restlessness and difficulty following instructions.",
      icon: <GiBrain size={32} className="text-primary" />
    },
    {
      title: "Lifestyle & Sleep Issues",
      desc: "Poor routines, screen exposure and inadequate sleep affect behavior heavily.",
      icon: <MdOutlineWaterDrop size={32} className="text-primary" />
    },
    {
      title: "Low Confidence or Social Stress",
      desc: "Difficulty interacting socially, expressing feelings, or adjusting to environments.",
      icon: <GiBodyBalance size={32} className="text-primary" />
    },
    {
      title: "Physical Stress & Fatigue",
      desc: "High irritability or frustration due to low energy, discomfort or nutritional imbalance.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Irritability or emotional outbursts",
    "Low focus or difficulty concentrating",
    "Restlessness or hyperactivity",
    "Frequent mood changes",
    "Difficulty expressing feelings",
    "Sleep disturbances",
    "Social discomfort or low confidence"
  ],

  // BENEFITS
  benefits: [
    "Improves emotional balance",
    "Helps children stay calm and stable",
    "Enhances focus and learning ability",
    "Boosts confidence and social interaction",
    "Improves sleep and daily functioning",
    "Safe holistic support for long-term wellbeing"
  ],

  beforeAfter: [],

  videos: []
};
