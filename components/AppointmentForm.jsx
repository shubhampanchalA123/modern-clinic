"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { registerAppointment, clearApiState, createAppointmentOrder } from "@/redux/slices/appointmentSlice";
import { getPlans } from "@/redux/slices/planslice";
import AppointmentSelector from "@/components/AppointmentSelector";
import OtherTreatmentPlan from "@/components/OtherTreatmentPlan";
import {
    User,
    Mail,
    Phone,
    MapPin,
    HeartPulse,
    ChevronDown,
    Clock,
    Star,
    ExternalLink,
    Navigation,
    ShieldCheck,
    Sparkles,
    CalendarCheck,
    CheckCircle2
} from "lucide-react";

export default function AppointmentForm() {
    const router = useRouter();
    const dispatch = useDispatch();

    const { loading, error, registerAppointmentSuccess, verifyAppointmentSuccess, appointmentId, createAppointmentOrderSuccess, orderDetails } = useSelector(
        (state) => state.appointment
    );

    const { appointmentPlans } = useSelector((state) => state.plans);

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
    const [otherAddons, setOtherAddons] = useState([]);
    const [otherTotal, setOtherTotal] = useState(0);
    const [otherBasePlan, setOtherBasePlan] = useState(null);
    const dropdownRef = useRef(null);

    const userType = form.region === "India" ? "india" : "foreign";

    /* RESET STATE ON MOUNT */
    useEffect(() => {
        setSelectedPlan(null);
        setErrors({});
        dispatch(clearApiState());
    }, [dispatch]);

    /* FETCH PLANS ON APPOINTMENT SUCCESS */
    useEffect(() => {
        if (registerAppointmentSuccess && showPlanSelector) {
            const userType = form.region === "India" ? "india" : "foreign";
            dispatch(getPlans({ type: "APPOINTMENT", region: form.region }));
            if (form.disease === "other") {
                dispatch(getPlans({ type: "GENERAL", region: form.region }));
                dispatch(getPlans({ type: "ADDON", region: form.region }));
            }
        }
    }, [registerAppointmentSuccess, showPlanSelector, form.region, form.disease, dispatch]);

    /* HANDLE CREATE ORDER SUCCESS */
    useEffect(() => {
        if (createAppointmentOrderSuccess && orderDetails) {
            localStorage.setItem("appointmentOrderData", JSON.stringify({ ...orderDetails, appointmentId, flow: "appointment" }));
            router.push("/payment-method");
        }
    }, [createAppointmentOrderSuccess, orderDetails, appointmentId, router]);

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
        "Obesity",
        "Skin Disorders",
        "Chronic Health",
        "other"
    ];

    const regionList = [
        "India",
        "Asia",
        "Europe, Australia",
        "USA, Canada",
        "South America, Africa",
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id="appointment-form"
            className="w-full max-w-7xl mx-auto"
            ref={dropdownRef}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                
                {/* ================= LEFT SIDE: APPOINTMENT FORM ================= */}
                <div className="lg:col-span-7 flex flex-col">
                    <div className="h-full bg-card/90 dark:bg-card/80 backdrop-blur-2xl border border-border/90 shadow-2xl rounded-3.5xl p-7 sm:p-9 lg:p-11 flex flex-col justify-between relative overflow-hidden">
                        
                        {/* Ambient glow in form */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-600/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                        <div>
                            {/* FORM HEADER */}
                            <div className="mb-7">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-primary dark:text-blue-400 border border-primary/20 mb-3.5 shadow-xs">
                                    <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                                    <span>Fast & Confirmed Scheduling</span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center gap-2.5">
                                    <HeartPulse className="text-teal-500 w-7 h-7 shrink-0" />
                                    <span>Book <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">Doctor Consultation</span></span>
                                </h3>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-2 leading-relaxed">
                                    Fill in your details below. Our senior medical specialist will consult with you within 24 hours.
                                </p>
                            </div>

                            {!showPlanSelector ? (
                                <form onSubmit={handleSubmit} className="space-y-4.5">
                                    {/* FORM GRID */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 relative">

                                        {/* NAME */}
                                        <div>
                                            <InputField
                                                icon={<User size={18} className="text-primary dark:text-blue-400 shrink-0" />}
                                                label="Full Name *"
                                                name="name"
                                                placeholder="Enter your full name"
                                                value={form.name}
                                                onChange={(e) => {
                                                    setForm((prev) => ({ ...prev, name: e.target.value }));
                                                    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                                                }}
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
                                        </div>

                                        {/* PHONE */}
                                        <div>
                                            <InputField
                                                icon={<Phone size={18} className="text-primary dark:text-blue-400 shrink-0" />}
                                                label="Phone Number *"
                                                name="phone"
                                                type="tel"
                                                placeholder="10-digit mobile number"
                                                value={form.phone}
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                                    setForm((prev) => ({ ...prev, phone: value }));
                                                    if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                                                }}
                                                maxLength={10}
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
                                        </div>

                                        {/* EMAIL */}
                                        <div className="sm:col-span-2">
                                            <InputField
                                                icon={<Mail size={18} className="text-primary dark:text-blue-400 shrink-0" />}
                                                label="Email Address *"
                                                name="email"
                                                type="email"
                                                placeholder="example@gmail.com"
                                                value={form.email}
                                                onChange={(e) => {
                                                    setForm((prev) => ({ ...prev, email: e.target.value }));
                                                    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                                                }}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                                        </div>

                                        {/* REGION DROPDOWN */}
                                        <div className="flex flex-col relative">
                                            <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                                                Country / Region *
                                            </label>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenDropdown(openDropdown === "region" ? null : "region")
                                                }
                                                className="flex items-center justify-between bg-background border border-border px-4 py-3 rounded-2xl w-full text-foreground text-sm hover:border-primary/50 transition shadow-2xs cursor-pointer"
                                            >
                                                <div className="flex items-center gap-2 truncate">
                                                    <MapPin size={16} className="text-primary dark:text-blue-400 shrink-0" />
                                                    <span className={form.region ? "text-foreground font-medium" : "text-muted-foreground"}>
                                                        {form.region || "Select Region"}
                                                    </span>
                                                </div>
                                                <ChevronDown size={16} className={`text-muted-foreground transition-transform duration-200 ${openDropdown === "region" ? "rotate-180" : ""}`} />
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
                                                            className="px-3.5 py-2.5 hover:bg-primary/10 hover:text-primary rounded-xl cursor-pointer text-xs sm:text-sm font-medium transition"
                                                        >
                                                            {r}
                                                        </div>
                                                    ))}
                                                </DropdownShell>
                                            )}

                                            {errors.region && <p className="text-red-500 text-xs mt-1 font-medium">{errors.region}</p>}
                                        </div>

                                        {/* DISEASE / CONDITION DROPDOWN */}
                                        <div className="flex flex-col relative">
                                            <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                                                Health Concern / Service *
                                            </label>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenDropdown(openDropdown === "disease" ? null : "disease")
                                                }
                                                className="flex items-center justify-between bg-background border border-border px-4 py-3 rounded-2xl w-full text-foreground text-sm hover:border-primary/50 transition shadow-2xs cursor-pointer"
                                            >
                                                <div className="flex items-center gap-2 truncate">
                                                    <HeartPulse size={16} className="text-teal-500 shrink-0" />
                                                    <span className={form.disease ? "text-foreground font-medium" : "text-muted-foreground"}>
                                                        {form.disease || "Select Condition"}
                                                    </span>
                                                </div>
                                                <ChevronDown size={16} className={`text-muted-foreground transition-transform duration-200 ${openDropdown === "disease" ? "rotate-180" : ""}`} />
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
                                                            className="px-3.5 py-2.5 hover:bg-primary/10 hover:text-primary rounded-xl cursor-pointer text-xs sm:text-sm font-medium transition"
                                                        >
                                                            {d === "other" ? "Other Health Condition" : d}
                                                        </div>
                                                    ))}
                                                </DropdownShell>
                                            )}

                                            {errors.disease && <p className="text-red-500 text-xs mt-1 font-medium">{errors.disease}</p>}
                                        </div>

                                    </div>

                                    {/* TRUST BADGE */}
                                    <div className="pt-2.5 flex items-center gap-2 text-xs text-muted-foreground">
                                        <ShieldCheck className="w-4 h-4 text-teal-500 shrink-0" />
                                        <span>100% Confidential & Secure Doctor-Patient Protocol</span>
                                    </div>

                                    {/* CTA BUTTON WITH LUXURY GRADIENT */}
                                    <div className="pt-3.5">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-4 px-7 rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-indigo-600 hover:from-primary/90 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 transition-all duration-200 flex items-center justify-center gap-2.5 disabled:opacity-60 cursor-pointer border border-white/15"
                                        >
                                            {loading ? (
                                                <span>Processing Appointment...</span>
                                            ) : (
                                                <>
                                                    <CalendarCheck className="w-4 h-4" />
                                                    <span>Proceed to Choose Plan & Slot</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                /* PLAN SELECTOR */
                                <div className="mt-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
                                        {form.disease === "other" ? "Choose Your Treatment Plan" : "Choose Your Appointment Plan"}
                                    </h3>
                                    {form.disease === "other" ? (
                                        <OtherTreatmentPlan
                                            userType={userType}
                                            onChange={(addons, total, basePlan) => {
                                                setOtherAddons(addons);
                                                setOtherTotal(total);
                                                setOtherBasePlan(basePlan);
                                            }}
                                        />
                                    ) : (
                                        <AppointmentSelector
                                            plans={appointmentPlans}
                                            userType={userType}
                                            selectedPlan={selectedPlan}
                                            onSelect={(plan) => {
                                                setSelectedPlan(plan.id);
                                            }}
                                        />
                                    )}
                                    <div className="mt-6 flex justify-between items-center">
                                        <button
                                            onClick={() => setShowPlanSelector(false)}
                                            className="px-4 py-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition font-medium cursor-pointer"
                                        >
                                            ← Back to Form
                                        </button>
                                        {(selectedPlan || (form.disease === "other" && otherBasePlan)) && (
                                            <button
                                                onClick={() => {
                                                    const selectedPlans = form.disease === "other"
                                                        ? [
                                                            { planId: otherBasePlan._id },
                                                            ...otherAddons.map(addon => ({ planId: addon._id }))
                                                        ]
                                                        : [{ planId: selectedPlan }];
                                                    const returnUrl =
                                                        typeof window !== "undefined"
                                                            ? `${window.location.origin}/payment-method/online?gateway=cashfree&appointmentId=${appointmentId}`
                                                            : undefined;
                                                    dispatch(createAppointmentOrder({
                                                        appointmentId,
                                                        selectedPlans,
                                                        userType,
                                                        returnUrl
                                                    }));
                                                }}
                                                disabled={loading}
                                                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl hover:shadow-2xl transition disabled:opacity-50 cursor-pointer"
                                            >
                                                {loading ? "Creating Order..." : "Proceed to Payment"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>


                {/* ================= RIGHT SIDE: CONTACT INFO + REAL GOOGLE MAP ================= */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4.5">
                    
                    {/* Top Quick Contact Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <a
                            href="tel:+919752031318"
                            className="p-4 rounded-2.5xl bg-card/90 dark:bg-card/80 backdrop-blur-xl border border-border shadow-md hover:border-primary/40 hover:shadow-xl transition flex items-center gap-3.5 group"
                        >
                            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition">
                                <Phone size={18} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Direct Call</p>
                                <p className="text-xs sm:text-sm font-bold text-foreground truncate">+91 9752031318</p>
                            </div>
                        </a>

                        <a
                            href="mailto:mhomeo@yahoo.com"
                            className="p-4 rounded-2.5xl bg-card/90 dark:bg-card/80 backdrop-blur-xl border border-border shadow-md hover:border-primary/40 hover:shadow-xl transition flex items-center gap-3.5 group"
                        >
                            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition">
                                <Mail size={18} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Email Us</p>
                                <p className="text-xs sm:text-sm font-bold text-foreground truncate">mhomeo@yahoo.com</p>
                            </div>
                        </a>
                    </div>

                    {/* Real Interactive Map Box with Floating Info Card */}
                    <div className="relative flex-1 min-h-[390px] sm:min-h-[430px] rounded-3.5xl overflow-hidden border border-border shadow-2xl bg-card">
                        
                        {/* Real Google Maps Iframe */}
                        <iframe
                            title="Modern Clinic Location Map"
                            src="https://maps.google.com/maps?q=Orbit+Mall+A.B.+Road+Vijay+Nagar+Indore+Madhya+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full min-h-[390px] sm:min-h-[430px] border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                        {/* Floating Clinic Location Overlay */}
                        <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-[330px] bg-card/95 dark:bg-card/90 backdrop-blur-xl p-4.5 rounded-2.5xl border border-border shadow-2xl z-10 select-none">
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <div>
                                    <h4 className="font-bold text-sm text-foreground leading-tight">
                                        Modern Clinic & Wellness
                                    </h4>
                                    <p className="text-[11px] text-muted-foreground font-medium mt-0.5">
                                        Indore Center (Branch 1 & 2)
                                    </p>
                                </div>
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Orbit+Mall+AB+Road+Indore"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition shrink-0"
                                    title="Get Directions on Google Maps"
                                >
                                    <ExternalLink size={14} />
                                </a>
                            </div>

                            <p className="text-xs text-foreground/85 leading-relaxed mb-3">
                                202 Business Island, Scheme 54, PU4 & 121 Orbit Mall, A.B. Road, Indore, MP 452010
                            </p>

                            <div className="flex items-center justify-between pt-2.5 border-t border-border/70 text-[11px]">
                                <div className="flex items-center gap-1 text-amber-500 font-bold">
                                    <span>4.9</span>
                                    <div className="flex text-amber-400">
                                        {"★".repeat(5)}
                                    </div>
                                    <span className="text-muted-foreground font-normal">(500+ Reviews)</span>
                                </div>

                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Orbit+Mall+AB+Road+Indore"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                                >
                                    <Navigation size={11} />
                                    <span>Directions</span>
                                </a>
                            </div>
                        </div>

                        {/* Bottom Clinic Timing Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 bg-card/95 dark:bg-card/90 backdrop-blur-xl px-4 py-3 rounded-2xl border border-border shadow-lg flex items-center justify-between text-xs z-10">
                            <div className="flex items-center gap-2 text-foreground font-medium">
                                <Clock size={15} className="text-primary dark:text-blue-400 shrink-0" />
                                <span className="truncate">Mon – Sat: 10:00 AM – 7:00 PM</span>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Open Today
                            </span>
                        </div>

                    </div>

                </div>

            </div>
        </motion.div>
    );
}

/* INPUT FIELD */
function InputField({ icon, label, name, value, onChange, ...rest }) {
    return (
        <div className="flex flex-col">
            <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                {label}
            </label>
            <div className="flex items-center gap-3 bg-background border border-border px-4 py-3 rounded-2xl hover:border-primary/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition shadow-2xs">
                {icon}
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="bg-transparent w-full outline-none text-foreground text-xs sm:text-sm placeholder:text-muted-foreground/70"
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
            bg-card/95 backdrop-blur-2xl 
            border border-border 
            rounded-2.5xl shadow-2xl 
            p-2.5 
            max-h-52 overflow-y-auto
            "
        >
            {children}
        </motion.div>
    );
}
