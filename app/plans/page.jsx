"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const planTemplates = [
  { id: "mild", title: "Mild Care", summary: "Topical + Supplements", includes: ["Trichoscopy", "Topical serum", "Supplements"] },
  { id: "moderate", title: "Moderate Plan", summary: "PRP + Topical", includes: ["PRP sessions", "Targeted serum", "Follow-up"] },
  { id: "severe", title: "Advanced Transplant", summary: "FUE Transplant + Aftercare", includes: ["FUE", "Post-op care", "1 year follow-up"] }
];

export default function Plans() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [qs, setQs] = useState(null);

  // Convert App Router searchParams → object
  useEffect(() => {
    const obj = {};
    searchParams.forEach((value, key) => {
      obj[key] = value;
    });
    setQs(obj);
  }, [searchParams]);

  if (!qs) return <div className="p-12">Loading...</div>;

  // stage logic preserved
  const stage = Number(qs.stage || 0);
  const plans =
    stage === 0
      ? planTemplates.slice(0, 2)
      : stage === 1
      ? planTemplates.slice(1, 3)
      : planTemplates;

  function selectPlan(plan) {
    const qs2 = new URLSearchParams({ ...qs, plan: plan.id }).toString();
    router.push(`/coach?${qs2}`);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold">Plans for you</h2>
        <p className="text-gray-600 mt-2">
          Based on your selected stage, here are the recommended plans.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow p-4 flex flex-col">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100 mb-3">
                <Image
                  src={`/images/plans/${p.id}.svg`}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{p.summary}</p>

              <ul className="mt-3 text-sm text-gray-600 space-y-1 flex-1">
                {p.includes.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>

              <div className="mt-4">
                <Button onClick={() => selectPlan(p)}>Get Guidance</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
