"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const stageImages = {
  male: [
    "/images/stages/male-1.svg",
    "/images/stages/male-2.svg",
    "/images/stages/male-3.svg",
  ],
  female: [
    "/images/stages/female-1.svg",
    "/images/stages/female-2.svg",
    "/images/stages/female-3.svg",
  ],
  other: [
    "/images/stages/other-1.svg",
    "/images/stages/other-2.svg",
    "/images/stages/other-3.svg",
  ],
};

export default function Stage() {
  const params = useSearchParams();
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const obj = Object.fromEntries(params.entries());
    setData(obj);
  }, [params]);

  if (!data) return <div className="p-12 text-muted-foreground">Loading...</div>;

  const gender = data.gender || "male";
  const imgs = stageImages[gender];

  function goPlans() {
    const qs = new URLSearchParams({ ...data, stage: selected }).toString();
    window.location.href = `/plans?${qs}`;
  }

  return (
    <div className="min-h-screen bg-background-soft py-12">
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-foreground">
          Choose Your Hair Loss Stage
        </h2>

        <p className="text-muted-foreground mt-2">
          Helps us identify severity so the doctor can personalise your treatment.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {imgs.map((src, idx) => (
            <div
              key={src}
              onClick={() => setSelected(idx)}
              className={`cursor-pointer bg-card rounded-2xl overflow-hidden border border-border shadow-soft transition 
                  ${
                    selected === idx
                      ? "ring-4 ring-primary bg-primary/10"
                      : "hover:shadow-medium"
                  }`}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={src}
                  alt={`stage-${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-foreground">
                  Stage {idx + 1}
                </h4>

                <p className="text-sm text-muted-foreground mt-1">
                  {idx === 0
                    ? "Early Hair Fall"
                    : idx === 1
                    ? "Thinning / Moderate"
                    : "Visible Scalp / Severe"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            onClick={goPlans}
            className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-soft"
          >
            See Plans
          </Button>
        </div>
      </main>
    </div>
  );
}
