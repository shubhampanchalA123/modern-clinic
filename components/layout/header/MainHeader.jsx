"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import ThemeToggle from "../../ThemeToggle";
import { SlArrowDown } from "react-icons/sl";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const hideFloating = ["/HairGrowth/register", "/HairGrowth/coach"];

    return (
        <>
            {/* HEADER */}
            <header
                className={`
          sticky top-0 z-40 transition-all duration-300 
          bg-card ${scrolled ? "shadow-[0_1px_6px_rgba(31,77,160,0.15)]" : ""}
        `}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* LEFT — LOGO */}
                    <Link href="/" className="flex items-center gap-3 cursor-pointer">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                            MC
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-foreground">Modern Clinic</h1>
                            <p className="text-xs text-muted-foreground -mt-1">
                                Holistic Healing for Every Age
                            </p>
                        </div>
                    </Link>

                    {/* DESKTOP MENU */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

                        {/* CONDITIONS MEGA MENU */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-primary transition">
                                Conditions <SlArrowDown className="text-xs" />
                            </button>

                            <div
                                className="
      absolute left-0 top-full mt-3 w-[750px]
      bg-popover border border-border shadow-lg rounded-xl
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-300 p-6 grid grid-cols-4 gap-6 z-50
    "
                            >
                                {/* COLUMN A */}
                                <div>
                                    <h4 className="text-primary font-semibold mb-3">Hair & Skin</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li><Link href="/conditions/hair-fall" className="hover:text-foreground transition">Hair Fall</Link></li>
                                        <li><Link href="/conditions/alopecia" className="hover:text-foreground transition">Alopecia</Link></li>
                                        <li><Link href="/conditions/dandruff" className="hover:text-foreground transition">Dandruff</Link></li>
                                        <li><Link href="/conditions/acne" className="hover:text-foreground transition">Acne</Link></li>
                                        <li><Link href="/conditions/eczema" className="hover:text-foreground transition">Eczema</Link></li>
                                    </ul>
                                </div>

                                {/* COLUMN B */}
                                <div>
                                    <h4 className="text-primary font-semibold mb-3">Chronic Health</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li><Link href="/conditions/thyroid" className="hover:text-foreground transition">Thyroid</Link></li>
                                        <li><Link href="/conditions/arthritis" className="hover:text-foreground transition">Arthritis</Link></li>
                                        <li><Link href="/conditions/sinus" className="hover:text-foreground transition">Sinus</Link></li>
                                        <li><Link href="/conditions/migraine" className="hover:text-foreground transition">Migraine</Link></li>
                                    </ul>
                                </div>

                                {/* COLUMN C */}
                                <div>
                                    <h4 className="text-primary font-semibold mb-3">Emotional & Lifestyle</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li><Link href="/conditions/stress" className="hover:text-foreground transition">Stress</Link></li>
                                        <li><Link href="/conditions/anxiety" className="hover:text-foreground transition">Anxiety</Link></li>
                                        <li><Link href="/conditions/sleep-disturbance" className="hover:text-foreground transition">Sleep Disturbance</Link></li>
                                        <li><Link href="/conditions/immunity" className="hover:text-foreground transition">Immunity</Link></li>
                                    </ul>
                                </div>

                                {/* COLUMN D */}
                                <div>
                                    <h4 className="text-primary font-semibold mb-3">Child Care</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li><Link href="/conditions/allergies" className="hover:text-foreground transition">Allergies</Link></li>
                                        <li><Link href="/conditions/low-immunity" className="hover:text-foreground transition">Low Immunity</Link></li>
                                        <li><Link href="/conditions/behavioral-support" className="hover:text-foreground transition">Behavioral Support</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* OUR DOCTORS */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-[#1F4DA0] transition">
                                Our Doctors <SlArrowDown className="text-xs" />
                            </button>

                            <div
                                className="
                  absolute left-0 top-full mt-3 w-64 bg-muted border border-border
                  shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100
                  group-hover:visible transition-all duration-200 p-3 z-50
                "
                            >
                                <Link href="/doctor" className="block px-3 py-2 hover:bg-card">Meet Our Specialists</Link>
                                <Link href="#qualification" className="block px-3 py-2 hover:bg-card">Qualifications & Expertise</Link>
                                <Link href="#experience" className="block px-3 py-2 hover:bg-card">Years of Experience</Link>
                                <Link href="#" className="block px-3 py-2 hover:bg-card">Certifications</Link>
                                <Link href="/videos" className="block px-3 py-2 hover:bg-card">Doctor Videos</Link>
                            </div>
                        </div>

                        {/* TREATMENT APPROACH */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-[#1F4DA0] transition">
                                Treatment Approach <SlArrowDown className="text-xs" />
                            </button>

                            <div
                                className="
                  absolute left-0 top-full mt-3 w-64 bg-muted border border-border 
                  shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 
                  group-hover:visible transition-all duration-200 p-3 z-50
                "
                            >
                                <Link href="/treatment-approach/how-homeopathy-works" className="block px-3 py-2 hover:bg-card">How Homeopathy Works</Link>
                                <Link href="/treatment-approach/digital-diagnosis-method" className="block px-3 py-2 hover:bg-card">Digital Diagnosis Method</Link>
                                <Link href="/treatment-approach/safety-and-research" className="block px-3 py-2 hover:bg-card">Safety & Research</Link>
                                <Link href="/treatment-approach/custom-programs" className="block px-3 py-2 hover:bg-card">Custom Programs</Link>
                                <Link href="/treatment-approach/home-vs-clinic-care" className="block px-3 py-2 hover:bg-card">Home vs Clinic Care</Link>
                            </div>
                        </div>

                        {/* RESULTS */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-[#1F4DA0] transition">
                                Results <SlArrowDown className="text-xs" />
                            </button>

                            <div
                                className="
                  absolute left-0 top-full mt-3 w-64 bg-muted border border-border 
                  shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 
                  group-hover:visible transition-all duration-200 p-3 z-50
                "
                            >
                                <Link href="/testimonials" className="block px-3 py-2 hover:bg-card">Before / After</Link>
                                <Link href="/case-studies" className="block px-3 py-2 hover:bg-card">Case Studies</Link>
                                <Link href="/google-reviews" className="block px-3 py-2 hover:bg-card">Google Reviews</Link>
                                <Link href="#" className="block px-3 py-2 hover:bg-card">Video Testimonials</Link>
                            </div>
                        </div>

                        {/* PRICING */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-[#1F4DA0] transition">
                                Pricing <SlArrowDown className="text-xs" />
                            </button>

                            <div
                                className="
                  absolute left-0 top-full mt-3 w-64 bg-muted border border-border 
                  shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 
                  group-hover:visible transition-all duration-200 p-3 z-50
                "
                            >
                                <Link href="/pricing/online-consultation" className="block px-3 py-2 hover:bg-card">Online Consultation</Link>
                                <Link href="/pricing/clinic-consultation" className="block px-3 py-2 hover:bg-card">Clinic Consultation</Link>
                                <Link href="/pricing/monthly-plans" className="block px-3 py-2 hover:bg-card">1 / 3 Month Plans</Link>
                                <Link href="/pricing/family-wellness" className="block px-3 py-2 hover:bg-card">Family Wellness Plans</Link>
                            </div>
                        </div>

                        {/* CONTACT */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-[#1F4DA0] transition">
                                Contact <SlArrowDown className="text-xs" />
                            </button>

                            <div
                                className="
                  absolute left-0 top-full mt-3 w-64 bg-muted border border-border 
                  shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 
                  group-hover:visible transition-all duration-200 p-3 z-50
                "
                            >
                                <Link href="/HairGrowth/register" className="block px-3 py-2 hover:bg-card">Book Appointment</Link>
                                <Link href="#" className="block px-3 py-2 hover:bg-card">Clinic Locator</Link>
                                <Link href="tel:+919770799998" className="block px-3 py-2 hover:bg-card">Emergency Call</Link>
                                <Link href="https://wa.me/919770799998" target="_blank" className="block px-3 py-2 hover:bg-card">WhatsApp Chat</Link>
                            </div>
                        </div>
                    </nav>

                    {/* RIGHT — LOGIN + CTA */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/login" className="flex items-center gap-1 hover:text-[#1F4DA0]">
                            <User size={18} /> Login
                        </Link>

                        <Link
                            href="/HairGrowth/register"
                            className="px-5 py-2 rounded-lg bg-[#1F4DA0] text-white font-medium hover:bg-[#0A2C63]"
                        >
                            Book Consultation
                        </Link>
                    </div>


                    {/* THEME */}
                    <ThemeToggle />

                    {/* MOBILE TOGGLE */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-muted transition"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>

                {/* MOBILE MENU */}
                {open && (
                    <div className="md:hidden bg-card border-t border-border shadow-medium">
                        <div className="px-6 py-4 space-y-4 text-sm font-medium text-foreground">

                            {/* CONDITIONS */}
                            <details>
                                <summary className="cursor-pointer py-2 hover:text-primary flex justify-between">
                                    Conditions <SlArrowDown className="text-xs" />
                                </summary>
                                <div className="ml-3 mt-2 space-y-3">

                                    <div>
                                        <h4 className="text-primary font-semibold mb-1">Hair & Skin</h4>
                                        <ul className="ml-2 space-y-1 text-muted-foreground">
                                            <li><Link href="/conditions/hair-fall">Hair Fall</Link></li>
                                            <li><Link href="/conditions/alopecia">Alopecia</Link></li>
                                            <li><Link href="/conditions/dandruff">Dandruff</Link></li>
                                            <li><Link href="/conditions/acne">Acne</Link></li>
                                            <li><Link href="/conditions/eczema">Eczema</Link></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-primary font-semibold mb-1">Chronic Health</h4>
                                        <ul className="ml-2 space-y-1 text-muted-foreground">
                                            <li><Link href="/conditions/thyroid">Thyroid</Link></li>
                                            <li><Link href="/conditions/arthritis">Arthritis</Link></li>
                                            <li><Link href="/conditions/sinus">Sinus</Link></li>
                                            <li><Link href="/conditions/migraine">Migraine</Link></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-primary font-semibold mb-1">Emotional & Lifestyle</h4>
                                        <ul className="ml-2 space-y-1 text-muted-foreground">
                                            <li><Link href="/conditions/stress">Stress</Link></li>
                                            <li><Link href="/conditions/anxiety">Anxiety</Link></li>
                                            <li><Link href="/conditions/sleep-disturbance">Sleep Disturbance</Link></li>
                                            <li><Link href="/conditions/immunity">Immunity</Link></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-primary font-semibold mb-1">Child Care</h4>
                                        <ul className="ml-2 space-y-1 text-muted-foreground">
                                            <li><Link href="/conditions/allergies">Allergies</Link></li>
                                            <li><Link href="/conditions/low-immunity">Low Immunity</Link></li>
                                            <li><Link href="/conditions/behavioral-support">Behavioral Support</Link></li>
                                        </ul>
                                    </div>

                                </div>
                            </details>

                            {/* OUR DOCTORS */}
                            <details>
                                <summary className="cursor-pointer py-2 hover:text-primary flex justify-between">
                                    Our Doctors <SlArrowDown className="text-xs" />
                                </summary>
                                <div className="ml-4 mt-2 space-y-2 text-muted-foreground">
                                    <Link href="/doctor" className="block" >Meet Our Specialists</Link>
                                    <Link href="#qualification" className="block" >Qualifications & Expertise</Link>
                                    <Link href="#experience" className="block" >Years of Experience</Link>
                                    <Link href="#" className="block" >Certifications</Link>
                                    <Link href="/videos" className="block" >Doctor Videos</Link>
                                </div>
                            </details>

                            {/* TREATMENT APPROACH */}
                            <details>
                                <summary className="cursor-pointer py-2 hover:text-primary flex justify-between">
                                    Treatment Approach <SlArrowDown className="text-xs" />
                                </summary>
                                <div className="ml-4 mt-2 space-y-2 text-muted-foreground">
                                    <Link href="/treatment-approach/how-homeopathy-works" className="block" >How Homeopathy Works</Link>
                                    <Link href="/treatment-approach/digital-diagnosis-method" className="block" >Digital Diagnosis Method</Link>
                                    <Link href="/treatment-approach/safety-and-research" className="block" >Safety & Research</Link>
                                    <Link href="/treatment-approach/custom-programs" className="block" >Custom Programs</Link>
                                    <Link href="/treatment-approach/home-vs-clinic-care" className="block" >Home vs Clinic Care</Link>
                                </div>
                            </details>

                            {/* RESULTS */}
                            <details>
                                <summary className="cursor-pointer py-2 hover:text-primary flex justify-between">
                                    Results <SlArrowDown className="text-xs" />
                                </summary>
                                <div className="ml-4 mt-2 space-y-2 text-muted-foreground">
                                    <Link href="/testimonials" className="block">Before / After</Link>
                                    <Link href="/case-studies" className="block">Case Studies</Link>
                                    <Link href="/google-reviews" className="block">Google Reviews</Link>
                                    <Link href="#" className="block">Video Testimonials</Link>
                                </div>
                            </details>

                            {/* PRICING */}
                            <details>
                                <summary className="cursor-pointer py-2 hover:text-primary flex justify-between">
                                    Pricing <SlArrowDown className="text-xs" />
                                </summary>
                                <div className="ml-4 mt-2 space-y-2 text-muted-foreground">
                                    <Link href="/pricing/online-consultation" className="block" >Online Consultation</Link>
                                    <Link href="/pricing/clinic-consultation" className="block" >Clinic Consultation</Link>
                                    <Link href="/pricing/monthly-plans" className="block" >1 / 3 Month Plans</Link>
                                    <Link href="/pricing/family-wellness" className="block" >Family Wellness Plans</Link>
                                </div>
                            </details>

                            {/* CONTACT */}
                            <details>
                                <summary className="cursor-pointer py-2 hover:text-primary flex justify-between">
                                    Contact <SlArrowDown className="text-xs" />
                                </summary>
                                <div className="ml-4 mt-2 space-y-2 text-muted-foreground">
                                    <Link href="/HairGrowth/register" className="block" >Book Appointment</Link>
                                    <Link href="#" className="block" >Clinic Locator</Link>
                                    <Link href="tel:+919770799998" className="block" >Emergency Call</Link>
                                    <Link href="https://wa.me/919770799998" target="_blank" className="block" >WhatsApp Chat</Link>
                                </div>
                            </details>


                            <div className="flex items-center justify-around gap-3 pt-4">

                                {/* LOGIN */}
                                <Link href="/login" className="flex items-center gap-1 text-foreground hover:text-primary">
                                    <User size={18} /> Login
                                </Link>

                                {/* BOOK CONSULTATION */}
                                <Link
                                    href="/HairGrowth/register"
                                    className="px-4 py-2 rounded-lg bg-[#1F4DA0] text-white font-medium hover:bg-[#0A2C63] whitespace-nowrap"
                                >
                                    Book Consultation
                                </Link>

                            </div>


                        </div>
                    </div>
                )}
            </header>

            {/* FLOATING BUTTONS (remain same) */}
            {/* {!hideFloating.includes(pathname) && (
                <Link
                    href="/HairGrowth/register"
                    className="
            fixed bottom-6 left-1/2 -translate-x-1/2 z-50
            bg-gradient-to-br from-primary to-accent text-white font-semibold 
            shadow-xl hover:shadow-2xl transition
            px-6 py-2 text-sm md:px-10 md:py-3 md:text-xl rounded-full
          "
                >
                    Book Consultation
                </Link>
            )} */}

            {!hideFloating.includes(pathname) && (
                <a
                    href="https://wa.me/919770799998"
                    target="_blank"
                    className="
            fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full 
            shadow-xl hover:shadow-2xl transition
          "
                >
                    <FaWhatsapp size={26} />
                </a>
            )}
        </>
    );
}
