"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const plansList = [
  {
    id: "starter",
    title: "Holistic Starter Program",
    summary: "For early hair fall, stress & nutritional imbalance.",
    includes: ["Homeopathic remedies", "Basic nutrition plan", "Weekly doctor review"],
  },
  {
    id: "intensive",
    title: "Intensive Regrowth Program",
    summary: "For thinning, shedding & visible scalp.",
    includes: ["Advanced Homeopathy", "Customized diet", "Stress healing", "Bi-monthly monitoring"],
  },
  {
    id: "complete",
    title: "Complete Restoration Program",
    summary: "For severe hair loss & long-term regrowth stabilization.",
    includes: ["Root-cause reversal", "Lifestyle therapy", "1-on-1 doctor guidance", "Full holistic correction"],
  },
];

export default function Plans() {
  const params = useSearchParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(Object.fromEntries(params.entries()));
  }, [params]);

  if (!data) return <div className="p-12 text-muted-foreground">Loading...</div>;

  const stage = Number(data.stage);
  const plans =
    stage === 0 ? plansList.slice(0, 2) :
    stage === 1 ? plansList.slice(1, 3) :
    plansList;

  function selectPlan(plan) {
    const qs = new URLSearchParams({ ...data, plan: plan.id }).toString();
    window.location.href = `/coach?${qs}`;
  }

  return (
    <div className="min-h-screen bg-background-soft py-12">
      <main className="max-w-6xl mx-auto p-6">

        <h2 className="text-2xl font-bold text-foreground">Recommended Plans</h2>
        <p className="text-muted-foreground mt-2">
          Based on your stage, here are suitable doctor-designed treatment plans.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.id}
              className="bg-card rounded-2xl shadow-soft border border-border p-4 flex flex-col"
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-muted mb-3">
                <Image
                  src={`/images/plans/${p.id}.svg`}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-semibold text-foreground">{p.title}</h3>

              <p classnmae="text-sm text-muted-foreground mt-2">
                {p.summary}
              </p>

              <ul className="mt-3 text-sm text-muted-foreground space-y-1 flex-1">
                {p.includes.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>

              <div className="mt-4">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-dark shadow-soft"
                  onClick={() => selectPlan(p)}
                >
                  Get Guidance
                </Button>
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
