"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProgressTabs from "@/components/Register/ProgressTabs";
import QuestionCard from "@/components/Register/QuestionCard";
import PhotoUploader from "@/components/Register/PhotoUploader";

export default function RegisterFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    stage: null,

    hair: {},
    internal: {},
    scalpPhoto: null,
  });

  // VALIDATION
  function validateStep() {
    let err = {};

    if (step === 0) {
      if (!form.name.trim()) err.name = "Name is required";
      if (!form.phone.trim()) err.phone = "Phone is required";
      if (!form.age) err.age = "Age is required";
      if (!form.gender) err.gender = "Gender is required";
    }

    if (step === 1) {
      if (form.stage === null) err.stage = "Please choose your stage";
    }

    if (step === 3) {
      if (!form.scalpPhoto) err.scalpPhoto = "Scalp photo is required";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function next() {
    if (!validateStep()) return;
    setStep((p) => p + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function prev() {
    setStep((p) => Math.max(0, p - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function updateNested(section, id, value) {
    setForm((prev) => ({
      ...prev,
      [section]: { ...prev[section], [id]: value },
    }));
  }

  // SUBMIT
  function submit() {
    if (!validateStep()) return;

    const params = new URLSearchParams();

    Object.entries(form).forEach(([key, val]) => {
      if (key !== "hair" && key !== "internal" && key !== "scalpPhoto") {
        params.set(key, val);
      }
    });

    Object.entries(form.hair || {}).forEach(([key, val]) =>
      params.set("hair_" + key, val)
    );

    Object.entries(form.internal || {}).forEach(([key, val]) =>
      params.set("internal_" + key, val)
    );

    params.set("scalpPhoto", form.scalpPhoto?.name || "");

    router.push("/coach?" + params.toString());
  }

  const hairQuestions = [
    {
      id: "family",
      q: "Do you have a family history of hair loss?",
      options: [
        "Mother or mother's side",
        "Father or father's side",
        "Both",
        "None",
      ],
    },
    {
      id: "dandruff",
      q: "Do you have Dandruff?",
      options: [
        "No Dandruff",
        "Mild Dandruff",
        "Heavy Dandruff",
        "Psoriasis / Seborrheic Dermatitis",
      ],
    },
  ];

  const internalQuestions = [
    {
      id: "sleep",
      q: "How well do you sleep?",
      options: [
        "Peacefully 6-8 hours",
        "Disturbed sleep",
        "Difficulty sleeping",
      ],
    },
    {
      id: "stress",
      q: "How stressed are you?",
      options: ["None", "Low", "Moderate", "High"],
    },
    {
      id: "constipation",
      q: "Do you feel constipated?",
      options: [
        "No",
        "Yes (fewer than 3 stools/week)",
        "Unsatisfied after stools",
        "IBS",
      ],
    },
    {
      id: "gas",
      q: "Gas, Acidity, or Bloating?",
      options: ["No", "Sometimes", "Often"],
    },
    {
      id: "energy",
      q: "How is your energy during the day?",
      options: [
        "Normal",
        "Low in morning",
        "Low afternoon",
        "Low evening",
        "Always low",
      ],
    },
    {
      id: "supplements",
      q: "Are you taking supplements?",
      options: ["Yes", "No"],
    },
  ];

  const stageData = {
    male: [
      { id: 0, label: "Stage 1 (Mild)", img: "/images/stages/male-stage1.png" },
      { id: 1, label: "Stage 2 (Moderate)", img: "/images/stages/male-stage2.png" },
      { id: 2, label: "Stage 3 (Severe)", img: "/images/stages/male-stage3.png" },
    ],
    female: [
      { id: 0, label: "Stage 1 (Mild)", img: "/images/stages/female-stage1.png" },
      { id: 1, label: "Stage 2 (Moderate)", img: "/images/stages/female-stage2.png" },
      { id: 2, label: "Stage 3 (Severe)", img: "/images/stages/female-stage3.png" },
    ],
  };

  const gender = form.gender || "male";
  const stageImages = stageData[gender];

  return (
    <div className="min-h-screen py-8 bg-background-soft">
      <main className="max-w-4xl mx-auto px-6">

        {/* Top Bar */}
        <div className="flex justify-between mb-4 text-sm text-muted-foreground">
          {step > 0 ? <button onClick={prev}>← Previous</button> : <span />}
          <Link href="/" className="hover:text-accent">Exit</Link>
        </div>

        <ProgressTabs step={step} />

        {/* CARD WRAPPER */}
        <div className="bg-card mt-6 rounded-2xl shadow-soft border border-border p-6">

          {/* STEP 0 — ABOUT YOU */}
          {step === 0 && (
            <>
              <h2 className="text-4xl text-center font-bold mb-8 text-foreground">
                Tell us about you
              </h2>

              {/* Name */}
              <div className="mb-4">
                <label className="font-medium text-foreground">Full Name</label>
                <input
                  className="w-full border border-border bg-background px-3 py-2 rounded mt-1 text-foreground"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="font-medium text-foreground">Phone Number</label>
                <input
                  className="w-full border border-border bg-background px-3 py-2 rounded mt-1 text-foreground"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Age */}
              <div className="mb-4">
                <label className="font-medium text-foreground">Age</label>
                <input
                  type="number"
                  className="w-full border border-border bg-background px-3 py-2 rounded mt-1 text-foreground"
                  value={form.age}
                  onChange={(e) => updateField("age", e.target.value)}
                />
                {errors.age && (
                  <p className="text-red-600 text-sm mt-1">{errors.age}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="font-medium text-foreground">Gender</label>

                <div className="flex gap-3 mt-2">
                  {["male", "female"].map((g) => (
                    <button
                      key={g}
                      onClick={() => updateField("gender", g)}
                      className={`px-5 py-2 rounded border 
                        ${
                          form.gender === g
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground border-border"
                        }`}
                    >
                      {g.toUpperCase()}
                    </button>
                  ))}
                </div>

                {errors.gender && (
                  <p className="text-red-600 text-sm mt-1">{errors.gender}</p>
                )}
              </div>
            </>
          )}

          {/* STEP 1 — HAIR HEALTH */}
          {step === 1 && (
            <>
              <h2 className="text-4xl text-center font-bold mb-8 text-foreground">
                Hair Health
              </h2>

              {/* Stage Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stageImages.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => updateField("stage", s.id)}
                    className={`rounded-xl border p-4 cursor-pointer transition 
                      ${
                        form.stage === s.id
                          ? "ring-2 ring-primary bg-primary/10"
                          : "border-border bg-muted"
                      }`}
                  >
                    <img src={s.img} className="w-full mb-3 rounded" />
                    <p className="font-medium text-foreground">{s.label}</p>
                  </div>
                ))}
              </div>

              {errors.stage && (
                <p className="text-red-600 text-sm mt-2">{errors.stage}</p>
              )}

              {/* Hair Questions */}
              <div className="mt-6 space-y-6">
                {hairQuestions.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q.q}
                    options={q.options}
                    value={form.hair[q.id]}
                    onChange={(v) => updateNested("hair", q.id, v)}
                  />
                ))}
              </div>
            </>
          )}

          {/* STEP 2 — INTERNAL HEALTH */}
          {step === 2 && (
            <>
              <h2 className="text-4xl text-center font-bold mb-8 text-foreground">
                Internal Health
              </h2>

              <div className="space-y-6">
                {internalQuestions.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q.q}
                    options={q.options}
                    value={form.internal[q.id]}
                    onChange={(v) => updateNested("internal", q.id, v)}
                  />
                ))}
              </div>
            </>
          )}

          {/* STEP 3 — SCALP PHOTO */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-4 text-foreground">
                Upload your scalp picture
              </h2>

              <PhotoUploader
                file={form.scalpPhoto}
                onChange={(file) => updateField("scalpPhoto", file)}
              />

              {errors.scalpPhoto && (
                <p className="text-red-600 text-sm mt-2">{errors.scalpPhoto}</p>
              )}
            </>
          )}

          {/* BUTTONS */}
          <div className="flex justify-end mt-6">
            {step < 3 ? (
              <button
                onClick={next}
                className="px-6 py-2 bg-primary text-primary-foreground rounded shadow-soft hover:bg-primary-dark"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={submit}
                className="px-6 py-2 bg-accent text-accent-foreground rounded shadow-soft hover:bg-accent/80"
              >
                Submit Assessment
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
