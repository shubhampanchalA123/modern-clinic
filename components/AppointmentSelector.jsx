import { Button } from "@/components/ui/button";

export const treatmentPlans = [
  {
    id: "1-month",
    title: "1 Month Plan",
    price: 1999,
    summary: "Starter plan for continuous treatment support",
    includes: [
      "Doctor consultation",
      "1 Month medication",
      "Basic WhatsApp Support",
      "Weekly follow-up check",
    ],
  },

  {
    id: "3-months",
    title: "3 Months Plan (Recommended)",
    price: 3499,
    summary: "Recommended for consistent improvement and monitoring",
    includes: [
      "Unlimited doctor consultations",
      "3 Months medication",
      "Priority WhatsApp Support",
      "Monthly progress analysis",
      "Personalized treatment adjustments",
    ],
  },

  {
    id: "6-months",
    title: "6 Months Plan",
    price: 6499,
    summary: "Long-term treatment plan for maximum results",
    includes: [
      "Unlimited consultations",
      "6 Months medication",
      "Premium WhatsApp Support",
      "Diet + lifestyle guidance",
      "Bi-monthly progress review",
      "Custom booster plan",
    ],
  },

  {
    id: "12-months",
    title: "1 Year Complete Plan",
    price: 10999,
    summary: "Comprehensive year-long care with full support",
    includes: [
      "Unlimited consultations",
      "12 Months medication",
      "VIP WhatsApp Support",
      "Quarterly doctor review",
      "Detailed progress monitoring",
      "Personalized maintenance plan",
      "Lifestyle & wellness program",
    ],
  },
];


export default function AppointmentSelector({ plans: propPlans, onSelect, selectedPlan }) {
  const displayPlans = propPlans || treatmentPlans;

  const handleSelect = (plan) => {
    onSelect(plan);
  };

  return (
  <div className="mt-6 grid grid-cols-2 gap-6 auto-rows-fr">
    {displayPlans.map((p) => {
      const isSelected = selectedPlan === p.id;

      return (
        <div
          key={p.id}
          className={`relative bg-white rounded-2xl shadow-md border p-6 flex flex-col transition-all ${
            isSelected ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <span className="text-xl font-bold">₹{p.price}</span>
          </div>

          <p className="text-sm text-gray-600 mt-2">{p.summary}</p>

          <ul className="mt-4 text-sm text-gray-700 space-y-2 flex-1">
            {p.includes.map((item) => (
              <li key={item} className="flex gap-2">
                <span>✔</span> {item}
              </li>
            ))}
          </ul>

          <Button
            className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => handleSelect(p)}
          >
            Add
          </Button>
        </div>
      );
    })}
  </div>
);

}
