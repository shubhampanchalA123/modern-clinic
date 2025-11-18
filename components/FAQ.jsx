"use client";

export default function FAQ() {
  const faqs = [
    {
      q: "Is homeopathy effective for hair fall?",
      a: "Yes. It treats internal causes such as stress, hormones & digestion for long-term regrowth.",
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
      a: "We combine Homeopathy + Nutrition + Stress Healing to correct the root cause of hair fall naturally.",
    },
  ];

  return (
    <div className="bg-muted py-12">
      <main className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">
          Frequently Asked Questions
        </h2>

        <p className="text-muted-foreground text-center mb-8">
          Answers to the most common concerns about our natural, doctor-guided program.
        </p>

        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <details
              key={idx}
              className="
                p-4 
                bg-card 
                text-foreground 
                rounded-2xl 
                shadow-sm 
                border 
                border-border 
                cursor-pointer
              "
            >
              <summary className="font-semibold text-lg">
                {f.q}
              </summary>
              <p className="text-muted-foreground mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </main>
    </div>
  );
}
