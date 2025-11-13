"use client";

export default function FAQ() {
  const faqs = [
    {
      q: "Is hair transplant safe?",
      a: "Yes, we use modern FUE methods with minimal downtime and high graft survival rates."
    },
    {
      q: "How soon will I see results?",
      a: "You’ll begin seeing regrowth after 3–4 months, with full results in 9–12 months."
    },
    {
      q: "Do you provide EMI or installment options?",
      a: "Yes, flexible payment plans are available."
    },
    {
      q: "Are your treatments only surgical?",
      a: "No, we also offer non-surgical options like PRP, topical serums, and supplements."
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-3">Frequently Asked Questions</h2>
      <p className="text-gray-600 text-center mb-8">Answers to the most common queries.</p>

      <div className="space-y-4">
        {faqs.map((f, idx) => (
          <details key={idx} className="bg-white p-4 rounded-2xl shadow">
            <summary className="font-semibold text-lg">{f.q}</summary>
            <p className="text-gray-600 mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
