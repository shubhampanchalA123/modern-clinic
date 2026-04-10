"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Trash2, Edit2, Loader } from "lucide-react";
import {
  getAdminPlans,
  createPlan,
  updatePlan,
  deletePlan,
  clearAdminPlanState,
} from "@/redux/slices/adminPlanSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PLAN_TYPES = ["GENERAL", "HAIR_TREATMENT", "ADDON", "APPOINTMENT"];
const DURATIONS = ["ONE_TIME", "1_MONTH", "3_MONTH", "6_MONTH", "12_MONTH"];

export default function AdminPlanManagement() {
  const dispatch = useDispatch();
  const { plans, loading, error, success } = useSelector((state) => state.adminPlans);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    type: "GENERAL",
    stage: 1,
    title: "",
    description: "",
    durationTime: "ONE_TIME",
    prices: { india: 0, foreign: 0 },
    features: "",
  });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    dispatch(getAdminPlans());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setShowForm(false);
      setFormData({
        type: "GENERAL",
        stage: 1,
        title: "",
        description: "",
        durationTime: "ONE_TIME",
        prices: { india: 0, foreign: 0 },
        features: "",
      });
      setEditingId(null);
      dispatch(clearAdminPlanState());
      setTimeout(() => dispatch(getAdminPlans()), 500);
    }
  }, [success, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("prices.")) {
      const priceKey = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        prices: { ...prev.prices, [priceKey]: parseFloat(value) || 0 },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    setFormError("");

    if (!formData.title.trim()) {
      setFormError("Plan title adalah wajib");
      return false;
    }

    if (formData.prices.india <= 0) {
      setFormError("India price harus lebih dari 0");
      return false;
    }

    if (formData.type === "HAIR_TREATMENT" && !formData.stage) {
      setFormError("Stage wajib untuk HAIR_TREATMENT plans");
      return false;
    }

    if (!formData.features.trim()) {
      setFormError("Minimal satu feature diperlukan");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const submitData = {
      ...formData,
      features: formData.features
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f),
    };

    try {
      if (editingId) {
        dispatch(updatePlan({ planId: editingId, planData: submitData }));
      } else {
        dispatch(createPlan(submitData));
      }
    } catch (err) {
      setFormError("Error saving plan");
    }
  };

  const handleEdit = (plan) => {
    setFormData({
      type: plan.type,
      stage: plan.stage || 1,
      title: plan.title,
      description: plan.description || "",
      durationTime: plan.durationTime,
      prices: plan.prices,
      features: plan.features?.join(", ") || "",
    });
    setEditingId(plan._id);
    setShowForm(true);
  };

  const handleDelete = (planId) => {
    if (confirm("Kya aap is plan ko delete karna chahte ho?")) {
      dispatch(deletePlan(planId));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Plans Management</h2>
          <p className="mt-1 text-sm text-slate-400">Create aur manage karo treatment plans</p>
        </div>
        <Button
          onClick={() => {
            setShowForm(!showForm);
            if (showForm) {
              setEditingId(null);
              setFormData({
                type: "GENERAL",
                stage: 1,
                title: "",
                description: "",
                durationTime: "ONE_TIME",
                prices: { india: 0, foreign: 0 },
                features: "",
              });
            }
          }}
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          {showForm ? "Cancel" : "New Plan"}
        </Button>
      </div>

      {/* Form Section */}
      {showForm && (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="mb-4 text-lg font-semibold text-white">
            {editingId ? "Edit Plan" : "Create New Plan"}
          </h3>

          {formError && (
            <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
              {formError}
            </div>
          )}

          {error && (
            <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label className="text-white">Plan Type</Label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500"
                >
                  {PLAN_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label className="text-white">Duration</Label>
                <select
                  name="durationTime"
                  value={formData.durationTime}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500"
                >
                  {DURATIONS.map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
              </div>

              {formData.type === "HAIR_TREATMENT" && (
                <div>
                  <Label className="text-white">Stage</Label>
                  <Input
                    type="number"
                    name="stage"
                    value={formData.stage}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/5 border-white/10 text-white"
                    min="1"
                  />
                </div>
              )}
            </div>

            <div>
              <Label className="text-white">Plan Title</Label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Basic Hair Treatment"
                className="mt-2 bg-white/5 border-white/10 text-white"
              />
            </div>

            <div>
              <Label className="text-white">Description</Label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Plan description..."
                rows="3"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label className="text-white">Price (India) - INR</Label>
                <Input
                  type="number"
                  name="prices.india"
                  value={formData.prices.india}
                  onChange={handleInputChange}
                  placeholder="5000"
                  className="mt-2 bg-white/5 border-white/10 text-white"
                  min="0"
                />
              </div>

              <div>
                <Label className="text-white">Price (Foreign) - USD</Label>
                <Input
                  type="number"
                  name="prices.foreign"
                  value={formData.prices.foreign}
                  onChange={handleInputChange}
                  placeholder="100"
                  className="mt-2 bg-white/5 border-white/10 text-white"
                  min="0"
                />
              </div>
            </div>

            <div>
              <Label className="text-white">Features (comma-separated)</Label>
              <textarea
                name="features"
                value={formData.features}
                onChange={handleInputChange}
                placeholder="Feature 1, Feature 2, Feature 3"
                rows="2"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full gap-2"
            >
              {loading ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                editingId ? "Update Plan" : "Create Plan"
              )}
            </Button>
          </form>
        </div>
      )}

      {/* Plans List */}
      <div className="space-y-3">
        {loading && !plans.length ? (
          <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8">
            <Loader className="h-5 w-5 animate-spin text-emerald-400" />
            <span className="ml-2 text-slate-300">Loading plans...</span>
          </div>
        ) : plans.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-slate-400">
            Koi plan nahi hai. Pehla plan create karo!
          </div>
        ) : (
          plans.map((plan) => (
            <div
              key={plan._id}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">{plan.title}</h3>
                    <span className="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                      {plan.type}
                    </span>
                    {plan.stage && (
                      <span className="inline-flex rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-300">
                        Stage {plan.stage}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{plan.description}</p>
                  <div className="mt-3 grid gap-2 grid-cols-3 sm:gap-4">
                    <div>
                      <p className="text-xs text-slate-500">Duration</p>
                      <p className="text-sm font-medium text-white">{plan.durationTime}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">India Price</p>
                      <p className="text-sm font-medium text-emerald-300">₹ {plan.prices.india}</p>
                    </div>
                    {plan.prices.foreign && (
                      <div>
                        <p className="text-xs text-slate-500">Foreign Price</p>
                        <p className="text-sm font-medium text-blue-300">${ plan.prices.foreign}</p>
                      </div>
                    )}
                  </div>
                  {plan.features?.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs text-slate-500">Features</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {plan.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-block text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 sm:flex-col">
                  <Button
                    onClick={() => handleEdit(plan)}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Edit2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Edit</span>
                  </Button>
                  <Button
                    onClick={() => handleDelete(plan._id)}
                    variant="outline"
                    size="sm"
                    className="gap-2 text-red-400 border-red-400/30 hover:bg-red-400/10"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Delete</span>
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
