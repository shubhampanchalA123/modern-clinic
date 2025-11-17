"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Coach() {
  const params = useSearchParams();
  const qs = Object.fromEntries(params.entries());

  // Generate readable stage label
  const stageLabels = [
    "Stage 1 (Mild)",
    "Stage 2 (Moderate)",
    "Stage 3 (Severe)"
  ];

  // Convert qs.stage → readable label
  const selectedStageText = stageLabels[Number(qs.stage)] || "Not Selected";


  const doctor = {
    name: "Dr. Devendra Rathore",
    bio: "Hair & Wellness Expert guiding root-cause based natural treatments.",
    img: "/images/doctor1.png",
  };

  const detailBox = (label, value) => (
    <div className="bg-gray-50 p-4 rounded-xl border flex flex-col justify-center">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-800 mt-1 break-words">{value || "—"}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {/* Doctor Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden relative shadow-md">
            <Image src={doctor.img} alt="Doctor" fill className="object-cover" />
          </div>

          <h3 className="text-lg font-semibold mt-4 text-center">{doctor.name}</h3>
          <p className="text-sm text-gray-500 text-center mt-1">{doctor.bio}</p>

          <button className="mt-5 bg-emerald-600 hover:bg-emerald-700 transition text-white px-6 py-2 rounded-lg w-full">
            Start Chat
          </button>
        </div>

        {/* Journey + Summary Container */}
        <div className="md:col-span-2 flex flex-col gap-8">

          {/* Journey */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold text-lg">Your Hair Growth Journey</h3>
            <p className="text-sm text-gray-600 mt-1">
              Your personalised timeline designed by the doctor.
            </p>

            <div className="mt-5 space-y-3">
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                Week 1–4: Fall reduction & internal healing
              </div>
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                Week 5–10: Visible new growth & scalp strengthening
              </div>
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                Week 10–16: Thickening & long-term root repair
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="font-semibold text-xl">Your Assessment Summary</h2>

            {/* Basic Info Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-5">
              {detailBox("Name", qs.name)}
              {detailBox("Phone", qs.phone)}
              {detailBox("Age", qs.age)}
              {detailBox("Gender", qs.gender)}
              {detailBox("Stage Selected", selectedStageText)}
            </div>


            {/* Hair Health */}
            <h3 className="font-semibold text-lg mt-10">Hair Health</h3>
            <div className="mt-3 grid gap-3">
              {Object.entries(qs)
                .filter(([key]) => key.startsWith("hair_"))
                .map(([key, val]) => (
                  <div key={key}>
                    {detailBox(
                      key.replace("hair_", "").replace(/_/g, " ").toUpperCase(),
                      val
                    )}
                  </div>
                ))}
            </div>


            {/* Internal Health */}
            <h3 className="font-semibold text-lg mt-10">Internal Health</h3>
            <div className="mt-3 grid gap-3">
              {Object.entries(qs)
                .filter(([key]) => key.startsWith("internal_"))
                .map(([key, val]) => (
                  <div key={key}>
                    {detailBox(
                      key.replace("internal_", "").replace(/_/g, " ").toUpperCase(),
                      val
                    )}
                  </div>
                ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

