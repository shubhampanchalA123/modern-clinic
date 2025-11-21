// /app/conditions/_content/hair-fall.js

import { MdPsychology, MdOutlineWaterDrop, MdHealthAndSafety } from "react-icons/md";
import { GiChemicalDrop, GiFruitBowl, GiBodyBalance } from "react-icons/gi";

export const hairFallContent = {
  title: "Hair Fall",
  subtitle:
    "A doctor-guided, holistic program combining Homeopathy, Nutrition & Stress Healing to treat hair fall from its root cause.",
  
  heroImage: "/images/hair-hero.png",

  highlights: [
    "Doctor-led personalised treatment",
    "Natural, safe & non-invasive"
  ],

  // HOW TREATMENT WORKS (3 Steps)
  treatmentSteps: [
    {
      title: "Homeopathic Treatment",
      desc: "Corrects internal triggers such as stress, hormones, digestion & metabolism.",
      icon: <GiChemicalDrop size={28} className="text-background" />
    },
    {
      title: "Nutrition Therapy",
      desc: "Strengthens roots with nutrient support that boosts scalp circulation.",
      icon: <GiFruitBowl size={28} className="text-background" />
    },
    {
      title: "Lifestyle & Stress Healing",
      desc: "Improves sleep, reduces stress, balances cortisol & restores healthy hair cycle.",
      icon: <MdPsychology size={28} className="text-background" />
    }
  ],

  // ROOT CAUSES
  rootCauses: [
    {
      title: "Stress & Anxiety",
      desc: "High cortisol disrupts the natural hair cycle and leads to sudden shedding.",
      icon: <MdPsychology size={32} className="text-primary" />
    },
    {
      title: "Hormonal Imbalance",
      desc: "Conditions like PCOS, thyroid issues & DHT sensitivity weaken follicles.",
      icon: <GiChemicalDrop size={32} className="text-primary" />
    },
    {
      title: "Nutritional Deficiencies",
      desc: "Low iron, protein, Vitamin D & biotin reduce scalp strength and hair density.",
      icon: <GiFruitBowl size={32} className="text-primary" />
    },
    {
      title: "Scalp Health Issues",
      desc: "Dandruff, oil buildup & poor scalp circulation weaken hair roots.",
      icon: <GiBodyBalance size={32} className="text-primary" />
    },
    {
      title: "Lifestyle & Sleep",
      desc: "Irregular sleep, dehydration & poor routines affect hair growth conditions.",
      icon: <MdOutlineWaterDrop size={32} className="text-primary" />
    },
    {
      title: "Genetics & Age",
      desc: "Natural DHT sensitivity & ageing can accelerate patterned hair thinning.",
      icon: <MdHealthAndSafety size={32} className="text-primary" />
    }
  ],

  // SYMPTOMS
  symptoms: [
    "Hair thinning",
    "Scalp visibility increasing",
    "Excessive hair fall while combing",
    "Receding hairline",
    "Widening hair part",
    "Sudden shedding due to stress",
    "Weak & brittle hair"
  ],

  // BENEFITS
  benefits: [
    "Treats hair fall from the root cause",
    "Balances hormones naturally",
    "Boosts scalp circulation",
    "Improves hair density & texture",
    "Strengthens hair roots",
    "Safe, non-surgical & holistic"
  ],

  beforeAfter: [],

  videos: []
};
