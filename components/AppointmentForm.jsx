"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/lib/firebase";
import { registerAppointment, clearApiState } from "@/redux/slices/appointmentSlice";
import AppointmentSelector from "@/components/AppointmentSelector";
import {
    User,
    Mail,
    Phone,
    MapPin,
    HeartPulse,
    ChevronDown,
} from "lucide-react";

export default function AppointmentForm() {
    const router = useRouter();
    const dispatch = useDispatch();

    const { loading, error, registerAppointmentSuccess, verifyAppointmentSuccess, appointmentId } = useSelector(
        (state) => state.appointment
    );

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        region: "",
        disease: "",
    });

    const [openDropdown, setOpenDropdown] = useState(null);
    const [errors, setErrors] = useState({});
    const [showPlanSelector, setShowPlanSelector] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const dropdownRef = useRef(null);

    /* RESET STATE ON MOUNT */
    useEffect(() => {
        setSelectedPlan(null);
        setErrors({});
        dispatch(clearApiState());
    }, [dispatch]);

    /* HANDLE CLICK OUTSIDE */
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);




    // Handle errors
    useEffect(() => {
        if (error) {
            console.log("Appointment error occurred:", error);
            // Only alert if we are in the appointment flow (showPlanSelector)
            if (showPlanSelector) {
                alert(error);
            }
            dispatch(clearApiState());
        }
    }, [error, dispatch, showPlanSelector]);


    function validateForm() {
        let err = {};

        if (!form.name.trim()) err.name = "Name is required";
        if (!form.email.trim()) err.email = "Email is required";
        if (!form.phone.trim()) err.phone = "Phone is required";
        else if (!/^[6-9]\d{9}$/.test(form.phone)) err.phone = "Please enter a valid 10-digit mobile number starting with 6-9";
        if (!form.region) err.region = "Region is required";
        if (!form.disease) err.disease = "Condition is required";

        setErrors(err);
        return Object.keys(err).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!validateForm()) return;

        dispatch(registerAppointment({
            name: form.name,
            email: form.email,
            phone: form.phone,
            region: form.region,
            condition: form.disease,
        }));
        setShowPlanSelector(true);
    }

    const diseaseCategories = [
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
        "Obesity",
    ];

    const regionList = [
        "India",
        "Asia",
        "Europe, Australia",
        "USA, Canada",
        "South America, Africa",
    ];

    const fade = {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
    };


    return (
        <motion.div
            {...fade}
            id="appointment-form"
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-card/70 backdrop-blur-xl border border-border shadow-lg rounded-3xl p-6 md:p-8 mt-10"
            ref={dropdownRef}
        >
            {/* HEADER */}
            <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex justify-center gap-2">
                    <HeartPulse className="text-primary" /> Book an <span className="text-primary">Online</span>Appointment
                </h2>
                <p className="text-muted-foreground mt-2">
                    Get a consultation with our doctor within 24 hours.
                </p>
            </div>

            {!showPlanSelector && (
                <form onSubmit={handleSubmit}>
                    {/* FORM GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">

                {/* NAME */}
                <div>
                    <InputField
                        icon={<User size={18} className="text-primary" />}
                        label="Name"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                        }}
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* EMAIL */}
                <div>
                    <InputField
                        icon={<Mail size={18} className="text-primary" />}
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={form.email}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                        }}
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* PHONE */}
                <div>
                    <InputField
                        icon={<Phone size={18} className="text-primary" />}
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="9999999999"
                        value={form.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0,10);
                          setForm((prev) => ({ ...prev, phone: value }));
                          if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                        }}
                        maxLength={10}
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* REGION DROPDOWN */}
                <div className="flex flex-col relative">
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
                        <ChevronDown size={16} />
                    </button>

                    {/* DROPDOWN BOX */}
                    {openDropdown === "region" && (
                        <DropdownShell>
                            {regionList.map((r) => (
                              <div
                                key={r}
                                onClick={() => {
                                  setForm({ ...form, region: r });
                                  setOpenDropdown(null);
                                  if (errors.region) setErrors(prev => ({ ...prev, region: undefined }));
                                }}
                                className="px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm"
                              >
                                {r}
                              </div>
                            ))}
                        </DropdownShell>
                    )}

                    {errors.region && <p className="text-red-600 text-sm mt-1">{errors.region}</p>}
                </div>

                {/* DISEASE DROPDOWN */}
                <div className="md:col-span-2 flex flex-col relative">
                    <label className="text-sm font-medium text-foreground mb-1">
                        Condition
                    </label>

                    <button
                        type="button"
                        onClick={() =>
                            setOpenDropdown(openDropdown === "disease" ? null : "disease")
                        }
                        className="flex items-center justify-between bg-background border border-border px-3 py-3 rounded-xl w-full text-foreground"
                    >
                        {form.disease || "Select Condition"}
                        <ChevronDown size={16} />
                    </button>

                    {/* DROPDOWN BOX */}
                    {openDropdown === "disease" && (
                        <DropdownShell>
                            {diseaseCategories.map((d) => (
                              <div
                                key={d}
                                onClick={() => {
                                  setForm({ ...form, disease: d });
                                  setOpenDropdown(null);
                                  if (errors.disease) setErrors(prev => ({ ...prev, disease: undefined }));
                                }}
                                className="px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm"
                              >
                                {d}
                              </div>
                            ))}
                        </DropdownShell>
                    )}

                    {errors.disease && <p className="text-red-600 text-sm mt-1">{errors.disease}</p>}
                </div>
            </div>

                    {/* CTA BUTTON */}
                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition disabled:opacity-50"
                        >
                            {loading ? "Processing..." : "Next Step"}
                        </button>
                    </div>
                </form>
            )}

            {/* PLAN SELECTOR */}
                {showPlanSelector && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-center mb-6">Choose Your Appointment Plan</h3>
                        <AppointmentSelector
                            selectedPlan={selectedPlan}
                            onSelect={(plan) => {
                                setSelectedPlan(plan.id);
                                const data = {
                                    amount: plan.price,
                                    appointmentId: appointmentId,
                                    timestamp: Date.now()
                                };
                                localStorage.setItem("appointmentData", JSON.stringify(data));
                            }}
                        />
                        {selectedPlan && (
                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={() => {
                                        setShowPlanSelector(false);
                                        router.push("/payment-method");
                                    }}
                                    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition"
                                >
                                    Proceed to Payment
                                </button>
                            </div>
                        )}
                    </div>
                )}

        </motion.div>
    );
}

/* INPUT FIELD */
function InputField({ icon, label, name, setForm, value, onChange, ...rest }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-foreground mb-1">
                {label}
            </label>
            <div className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-xl">
                {icon}
                <input
                    name={name}
                    value={value}
                    onChange={onChange || ((e) => setForm((prev) => ({ ...prev, [name]: e.target.value })))}
                    className="bg-transparent w-full outline-none text-foreground"
                    {...rest}
                />
            </div>
        </div>
    );
}

/* DROPDOWN SHELL */
function DropdownShell({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="
            absolute top-full left-0 
            mt-2 z-40 w-full 
            bg-card/90 backdrop-blur-xl 
            border border-border 
            rounded-2xl shadow-xl 
            p-2 
            max-h-48 overflow-y-auto
            "
        >
            {children}
        </motion.div>
    );
}

