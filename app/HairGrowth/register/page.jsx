"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import ProgressTabs from "@/components/Register/ProgressTabs";
import QuestionCard from "@/components/Register/QuestionCard";
import PhotoUploader from "@/components/Register/PhotoUploader";
import PlanSelector from "@/components/PlanSelector";
import { auth } from "@/lib/firebase";
import useBaseURL from "@/hooks/useBaseURL";
import { MapPin, ChevronDown } from "lucide-react";
import { registerUser, verifyUser, submitData, createOrder, clearApiState } from "@/redux/slices/registerSlice";

export default function RegisterFlow() {
  const router = useRouter();
  const dispatch = useDispatch();

  // Redux state
  const { loading, error, registerSuccess, verifySuccess, submitSuccess, createOrderSuccess, orderDetails, consultantId } = useSelector(
    (state) => state.register
  );

  console.log("Register State:", { loading, error, registerSuccess, verifySuccess, submitSuccess, consultantId });
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    region: "",
    gender: "",
    healthIssue: "Hair Treatment",
    stage: null,
    hair: {},
    internal: {},
    scalpPhoto: null,
    plan: "",
    planPrice: 0,
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  const baseURL = useBaseURL();

  const regionList = [
    "India",
    "Asia",
    "Europe, Australia",
    "USA, Canada",
    "South America, Africa"
  ];

  const healthIssues = [
    "Hair Treatment",
    "Respiratory",
    "Skin Disorders",
    "Gastrointestinal",
    "Mental & Emotional Health",
    "Musculoskeletal",
    "ENT Problems",
    "Women’s Health",
    "Children’s Health",
    "Chronic Conditions",
    "Lifestyle-Related Problems",
    "Obesity"
  ];



  // Handle registration success → proceed to next step
  useEffect(() => {
    if (registerSuccess && consultantId) {
      console.log("Registration successful! ConsultantId:", consultantId);
      localStorage.setItem("consultantId", consultantId);
      setStep(form.healthIssue === "Hair Treatment" ? 1 : 4);
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(clearApiState());
    }
  }, [registerSuccess, consultantId, form.healthIssue]);


  // Handle submit success → create order
  useEffect(() => {
    if (submitSuccess) {
      const currentConsultantId = consultantId || localStorage.getItem("consultantId");
      dispatch(createOrder({
        consultantId: currentConsultantId,
        amount: form.planPrice
      }));
      dispatch(clearApiState());
    }
  }, [submitSuccess]);

  // Handle create order success → redirect to payment
  useEffect(() => {
    if (createOrderSuccess && orderDetails) {
      const params = new URLSearchParams({
        orderId: orderDetails.orderId,
        amount: orderDetails.amount,
        currency: orderDetails.currency,
        key: orderDetails.key,
        consultantId: consultantId || localStorage.getItem("consultantId")
      });
      router.push(`/payment-method/online?${params.toString()}`);
      dispatch(clearApiState());
    }
  }, [createOrderSuccess, orderDetails]);

  // Handle errors
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearApiState());
    }
  }, [error]);


  // Validation
  function validateStep() {
    let err = {};

    if (step === 0) {
      if (!form.name.trim()) err.name = "Name is required";
      if (!form.phone.trim()) err.phone = "Phone is required";
      else if (!/^[6-9]\d{9}$/.test(form.phone)) err.phone = "Please enter a valid 10-digit mobile number starting with 6-9";
      if (!form.age) err.age = "Age is required";
      if (!form.gender) err.gender = "Gender is required";
      if (!form.region) err.region = "Region is required";
    }

    if (step === 1) {
      if (form.stage === null) err.stage = "Please choose your stage";
    }

    if (step === 3) {
      if (!form.scalpPhoto) err.scalpPhoto = "Scalp photo is required";
    }

    if (step === 4) {
      if (!form.plan) err.plan = "Please select a plan";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function next() {
    if (!validateStep()) return;

    if (step === 0) {
      // Dispatch Redux register action
      dispatch(
        registerUser({
          name: form.name,
          mobile: form.phone,
          age: form.age,
          gender: form.gender,
          region: form.region,
          healthIssue: form.healthIssue,
        })
      );
      return;
    }

    setStep((p) => p + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function prev() {
    if (step === 1) {
      setStep(0);
    } else if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    } else if (step === 4) {
      if (form.healthIssue === "Hair Treatment") {
        setStep(3);
      } else {
        setStep(0);
      }
    }
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

  // Submit final assessment
  function submit() {
    if (!validateStep()) return;

    const currentConsultantId = consultantId || localStorage.getItem("consultantId");
    if (!currentConsultantId) {
      alert("Please complete registration and verification first");
      setStep(0);
      return;
    }

    const consultationData = {
      hairHealth: {
        stage: form.stage,
        familyHistory: form.hair?.family || "",
        dandruff: form.hair?.dandruff || "",
        selectedStage: form.stage
      },
      internalHealth: form.internal || {},
      scalpAssessment: {
        scalpPhoto: form.scalpPhoto?.name || null
      },
      plan: form.plan
    };

    dispatch(submitData({
      consultantId: currentConsultantId,
      consultationData: consultationData,
      scalpPhoto: form.scalpPhoto
    }));
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

  const DropdownShell = ({ children }) => (
    <div className="absolute top-full left-0 w-full mt-2 bg-card border border-border shadow-lg rounded-xl p-2 z-20">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen py-8 bg-background-soft">
      <main className="max-w-4xl mx-auto px-6">

        {/* Top Bar */}
        <div className="flex justify-between mb-4 text-sm text-muted-foreground">
          {step > 0 ? <button onClick={prev}>← Previous</button> : <span />}
          <Link href="/" className="hover:text-accent">Exit</Link>
        </div>

        <ProgressTabs step={step} healthIssue={form.healthIssue} />

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
                  onChange={(e) => updateField("phone", e.target.value.replace(/\D/g, '').slice(0,10))}
                  placeholder="9999999999"
                  maxLength={10}
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
                        ${form.gender === g
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

              {/* REGION */}
              <div className="flex flex-col relative mt-4">
                <label className="text-sm font-medium text-foreground mb-1">
                  Region
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === "region" ? null : "region")
                  }
                  className="flex items-center justify-between bg-background border border-border px-3 py-2 rounded-xl w-full text-foreground"
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    {form.region || "Select Region"}
                  </div>
                  <ChevronDown size={16} className="text-muted-foreground" />
                </button>

                {openDropdown === "region" && (
                  <DropdownShell>
                    {regionList.map((r) => (
                      <div
                        key={r}
                        onClick={() => {
                          updateField("region", r);
                          setOpenDropdown(null);
                        }}
                        className="px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm text-foreground"
                      >
                        {r}
                      </div>
                    ))}
                  </DropdownShell>
                )}

                {errors.region && (
                  <p className="text-red-600 text-sm mt-1">{errors.region}</p>
                )}
              </div>

              {/* HEALTH ISSUE */}
              <div className="flex flex-col relative mt-4">
                <label className="text-sm font-medium text-foreground mb-1">
                  Health Issue
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === "health" ? null : "health")
                  }
                  className="flex items-center justify-between bg-background border border-border px-3 py-2 rounded-xl w-full text-foreground"
                >
                  <div className="flex items-center gap-2">
                    <span>{form.healthIssue || "Select Health Issue"}</span>
                  </div>
                  <ChevronDown size={16} className="text-muted-foreground" />
                </button>

                {openDropdown === "health" && (
                  <DropdownShell>
                    {healthIssues.map((h) => (
                      <div
                        key={h}
                        onClick={() => {
                          updateField("healthIssue", h.toLowerCase());
                          setOpenDropdown(null);
                        }}
                        className="px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm text-foreground"
                      >
                        {h}
                      </div>
                    ))}
                  </DropdownShell>
                )}
              </div>
            </>
          )}

          {/* STEP 1 — HAIR HEALTH */}
          {step === 1 && form.healthIssue === "Hair Treatment" && (
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
                      ${form.stage === s.id
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
          {step === 2 && form.healthIssue === "Hair Treatment" && (
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
          {step === 3 && form.healthIssue === "Hair Treatment" && (
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

          {/* STEP 4 — PLAN SELECTION */}
          {step === 4 && (
            <>
              <h2 className="text-4xl text-center font-bold mb-8 text-foreground">
                Choose Your Plan
              </h2>

              <PlanSelector
                selectedPlan={form.plan}
                onSelect={(plan) => {
                  updateField("plan", plan.id);
                  updateField("planPrice", plan.price);
                }}
              />

              {errors.plan && (
                <p className="text-red-600 text-sm mt-4 text-center">{errors.plan}</p>
              )}
            </>
          )}

          {/* BUTTONS */}
          <div className="flex justify-end mt-6">
            {step < 4 ? (
              <button
                onClick={next}
                disabled={loading}
                className="px-6 py-2 bg-primary text-primary-foreground rounded shadow-soft hover:bg-primary-dark disabled:opacity-50"
              >
                {loading ? "Processing..." : "Next →"}
              </button>
            ) : (
              <button
                onClick={submit}
                className="px-6 py-2 bg-accent text-accent-foreground rounded shadow-soft hover:bg-accent/80"
              >
                Proceed to Payment
              </button>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}