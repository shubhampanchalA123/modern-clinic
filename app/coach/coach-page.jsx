"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function CoachPage() {
  const searchParams = useSearchParams();
  const [qs, setQs] = useState(null);

  useEffect(() => {
    const obj = {};
    searchParams.forEach((value, key) => {
      obj[key] = value;
    });
    setQs(obj);
  }, [searchParams]);

  if (!qs) return <div className="p-12">Loading...</div>;

  const coach = {
    name: "Dr. Mira Rao",
    bio: "Board-certified trichologist with 10+ years experience.",
    img: "/images/coach.svg",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="max-w-5xl mx-auto p-6 grid md:grid-cols-3 gap-6">

        {/* Coach Card */}
        <div className="md:col-span-1 bg-white rounded-2xl p-6 shadow">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto relative">
            <Image src={coach.img} alt="coach" fill style={{ objectFit: "cover" }} />
          </div>
          <h3 className="text-center font-semibold mt-4">{coach.name}</h3>
          <p className="text-sm text-gray-600 mt-2 text-center">{coach.bio}</p>

          <div className="mt-6 text-center">
            <Button variant="ghost">Start Chat</Button>
          </div>
        </div>

        {/* Journey + Plan */}
        <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow">
          <h3 className="font-semibold">Your Hair Growth Journey</h3>
          <p className="text-sm text-gray-600 mt-2">
            Tips, timeline, and messaging with your coach will appear here.
          </p>

          <div className="mt-4 space-y-3">
            <div className="p-4 bg-emerald-50 rounded">Week 0–2: Prep & Scalp care</div>
            <div className="p-4 bg-emerald-50 rounded">Week 3–12: Early regrowth & PRP sessions (if any)</div>
            <div className="p-4 bg-emerald-50 rounded">Month 3–9: Visible improvement — follow-up visits</div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Selected plan & details</h4>
            <pre className="text-sm bg-gray-100 p-4 rounded mt-2">
              {JSON.stringify(qs, null, 2)}
            </pre>
          </div>
        </div>

      </main>
    </div>
  );
}
