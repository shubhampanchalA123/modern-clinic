"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import ProgressBar from "@/components/shared/ProgressBar";

export default function Register() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    location: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function next() {
    if (step === 3) {
      const qs = new URLSearchParams(form).toString();
      router.push(`/stage?${qs}`);
    } else setStep((s) => s + 1);
  }

  function prev() {
    setStep((s) => Math.max(1, s - 1));
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow">
        <h2 className="text-2xl font-bold">Free Assessment</h2>
        <p className="text-gray-600 mt-2">
          Complete this quick form so we can personalise your plan.
        </p>

        <div className="mt-6">
          <ProgressBar step={step} />

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
            {step === 1 && (
              <div className="space-y-4 mt-4">
                <div>
                  <Label>Name</Label>
                  <Input name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    required
                  />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input name="phone" value={form.phone} onChange={handleChange} required />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 mt-4">
                <div>
                  <Label>Age</Label>
                  <Input
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    type="number"
                  />
                </div>
                <div>
                  <Label>Gender</Label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Label>Location</Label>
                  <Input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 mt-4">
                <div>
                  <Label>Any hair/health concerns (optional)</Label>
                  <textarea
                    name="concerns"
                    value={form.concerns || ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows={4}
                  />
                </div>

                <div className="text-sm text-gray-500">
                  After submitting, you'll pick your hair-loss stage.
                  We'll show plans relevant to that stage.
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-6 flex items-center gap-3">
              {step > 1 && (
                <Button variant="ghost" onClick={prev}>
                  Back
                </Button>
              )}
              <Button onClick={next}>
                {step === 3 ? "Proceed to Stage" : "Next"}
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
