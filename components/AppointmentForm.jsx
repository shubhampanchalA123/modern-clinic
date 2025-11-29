"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    User,
    Mail,
    Phone,
    MapPin,
    HeartPulse,
    ChevronDown,
} from "lucide-react";

export default function AppointmentForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        region: "",
        disease: "",
    });

    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);

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

    const diseaseCategories = [
        "Hair Fall",
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

            {/* FORM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">

                {/* NAME */}
                <InputField
                    icon={<User size={18} className="text-primary" />}
                    label="Name"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    setForm={setForm}
                />

                {/* EMAIL */}
                <InputField
                    icon={<Mail size={18} className="text-primary" />}
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    setForm={setForm}
                />

                {/* PHONE */}
                <InputField
                    icon={<Phone size={18} className="text-primary" />}
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="99999 99999"
                    value={form.phone}
                    setForm={setForm}
                />

                {/* REGION DROPDOWN */}
                <div className="flex flex-col relative">
                    <label className="text-sm font-medium text-foreground mb-1">
                        Region
                    </label>

                    <button
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
                                    }}
                                    className="px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm"
                                >
                                    {r}
                                </div>
                            ))}
                        </DropdownShell>
                    )}
                </div>

                {/* DISEASE DROPDOWN */}
                <div className="md:col-span-2 flex flex-col relative">
                    <label className="text-sm font-medium text-foreground mb-1">
                        Condition
                    </label>

                    <button
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
                                    }}
                                    className="px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm"
                                >
                                    {d}
                                </div>
                            ))}
                        </DropdownShell>
                    )}
                </div>
            </div>

            {/* CTA BUTTON */}
            <div className="mt-6 flex justify-center">
                <Link href="/payment-method">
                    <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition">
                        Book Appointment
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}

/* INPUT FIELD */
function InputField({ icon, label, name, setForm, value, ...rest }) {
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
                    onChange={(e) => setForm((prev) => ({ ...prev, [name]: e.target.value }))}
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
