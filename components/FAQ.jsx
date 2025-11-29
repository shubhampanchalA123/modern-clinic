"use client";

import { FaChevronDown } from "react-icons/fa";

export default function FAQ({ limit }) {
  const faqs = [
    {
      q: "Is homeopathy effective for hair fall?",
      a: "Yes. It treats internal causes such as stress, hormones and digestion for long-term regrowth.",
    },
    {
      q: "How long before I see results?",
      a: "Most patients experience fall control within 3–4 weeks and new growth from 5–10 weeks.",
    },
    {
      q: "Is this treatment safe for women?",
      a: "100% safe for PCOS, postpartum, thyroid-related hair fall and hormonal imbalance.",
    },
    {
      q: "How is Modern Clinic different?",
      a: "We combine Homeopathy, Nutrition and Stress Healing to correct the root cause naturally.",
    },
    {
      q: "Can homeopathy regrow hair in bald patches?",
      a: "Yes, especially in Alopecia Areata and stress-triggered patches. Early treatment gives better results.",
    },
    {
      q: "Does homeopathy stop dandruff and scalp itching?",
      a: "Yes. Homeopathy reduces scalp inflammation, flaking and fungal imbalance without chemicals.",
    },
    {
      q: "Do I need to take medicines lifelong?",
      a: "No. Once the root cause is corrected, your hair cycle stabilizes and you won’t need long-term medicines.",
    },
    {
      q: "Can homeopathy help if I have thyroid or PCOS?",
      a: "Absolutely. These are common causes of hair fall and respond very well to holistic homeopathic care.",
    },
    {
      q: "Are there any side effects?",
      a: "Homeopathy is free from chemical toxicity and does not cause weight gain, dependency or hormonal disturbance.",
    },
    {
      q: "Do I have to change my diet?",
      a: "Minor improvements may be suggested to support faster regrowth, but no harsh diets are required.",
    },
    {
      q: "What if I am already taking allopathic medicines?",
      a: "Homeopathy can be safely taken alongside existing medicines. They can be tapered only if required.",
    },
    {
      q: "Will I get a customized treatment plan?",
      a: "Yes. Every patient receives a personalized plan based on stress, sleep, hormones, metabolism and scalp analysis.",
    },
    {
      q: "Is homeopathy slow?",
      a: "No. Hair fall control is usually quick. The time for regrowth depends on severity and scalp condition.",
    },
    {
      q: "Do you provide online consultations?",
      a: "Yes, video consultations are available along with doorstep delivery of medicines.",
    },
    {
      q: "How often do I need follow-ups?",
      a: "Regular follow-ups every 3–4 weeks help track progress and adjust treatment for the best outcome.",
    }
  ];

  const visibleFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="bg-background py-8">
      <main className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
           <span className="text-primary">Frequently </span>Asked Questions
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Clear answers to the most common questions about our holistic, doctor-guided treatment programs.
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {visibleFaqs.map((f, idx) => (
            <details
              key={idx}
              className="
            group
            rounded-2xl
            border border-border
            bg-card/70
            backdrop-blur-xl
            shadow-[0_4px_20px_rgba(0,0,0,0.05)]
            p-5
            transition-all
          "
            >
              <summary
                className="
              flex items-center justify-between
              cursor-pointer select-none
              text-lg md:text-xl font-semibold text-foreground
              list-none
            "
              >
                <span>{f.q}</span>

                {/* Rotating Arrow */}
                <span
                  className="
                text-primary 
                transition-transform duration-300
                group-open:rotate-180
              "
                >
                  <FaChevronDown />
                </span>
              </summary>

              {/* Answer */}
              <p
                className="
              text-muted-foreground mt-3 leading-relaxed
              text-[15px]
            "
              >
                {f.a}
              </p>
            </details>
          ))}
        </div>

        {/* Show More Option (only when limited) */}
        {limit && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => window.location.href = "/faq"}
              className="text-primary font-semibold hover:underline flex items-center gap-1"
            >
              Show More FAQs →
            </button>
          </div>
        )}

      </main>
    </div>

  );
}
