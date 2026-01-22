import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";


export default function PlanSelector({
  planType,
  onSelect,
  selectedPlan,
  userType,
  title
})

{
  console.log("🔍 PlanSelector planType:", planType);
  const {
    generalPlans,
    hairTreatmentPlans,
    addonPlans
  } = useSelector((state) => state.plans);

  console.log("hairTreatmentPlans:", hairTreatmentPlans);
  // 🔑 choose correct bucket
  let plans = [];
  if (planType === "HAIR_TREATMENT") plans = hairTreatmentPlans;

  const isIndia = userType === "india";

  if (!plans || plans.length === 0) {
    return (
      <div className="mt-6 text-center text-muted-foreground">
        No plans available right now.
      </div>
    );
  }

  return (
    <div className="mt-6">
      {title && (
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => {
          const isSelected = selectedPlan === p._id;
          const price = isIndia ? p.prices?.india : p.prices?.foreign;
          const isAvailable = isIndia || p.prices?.foreign;

          return (
            <div
              key={p._id}
              className={`relative bg-card rounded-2xl shadow-md border p-6 flex flex-col ${
                isSelected
                  ? "border-primary bg-secondary/20"
                  : "border-border"
              }`}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-foreground">{p.title}</h3>
                {isAvailable ? (
                  <span className="text-xl font-bold text-foreground">
                    {isIndia ? "₹" : "$"}
                    {price}
                  </span>
                ) : (
                  <span className="text-sm text-red-500">Not available</span>
                )}
              </div>

              <p className="text-sm text-muted-foreground mt-2">
                {p.description}
              </p>

              <ul className="mt-4 text-sm text-foreground space-y-2 flex-1">
                {p.features?.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <Button
                className="w-full mt-5"
                disabled={!isAvailable}
                onClick={() => onSelect(p)}
              >
                Book
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
