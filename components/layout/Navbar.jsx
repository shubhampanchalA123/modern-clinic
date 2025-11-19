"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";
import { SlArrowDown } from "react-icons/sl";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pages where floating buttons should be hidden
  const hideFloating = ["/HairGrowth/register", "/HairGrowth/coach"];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-card/90 backdrop-blur border-b border-border shadow-soft"
          : "bg-transparent backdrop-blur"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-soft">
              MC
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Modern Clinic</h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Doctor-Guided Hair Regrowth
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative">

            {/* ABOUT US DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-primary transition">
                About Us
                <span className="text-xs"><SlArrowDown /></span>
              </button>

              <div
                className="
      absolute left-0 top-full mt-1 w-56 
      bg-muted border border-border shadow-sm
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-200 rounded-md
      p-3
    "
              >
                <Link href="/" className="block px-3 py-2 hover:bg-card transition">
                  Home
                </Link>
                <Link href="/HairGrowth/doctor" className="block px-3 py-2 hover:bg-card transition">
                  Dr. Devendra
                </Link>
                <Link href="/HairGrowth/faq" className="block px-3 py-2 hover:bg-card transition">
                  FAQ
                </Link>
              </div>
            </div>


            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-primary transition">
                Services
                <span className="text-xs"><SlArrowDown /></span>
              </button>

              <div
                className="
      absolute left-0 top-full mt-1 w-56 
      bg-muted border border-border shadow-sm
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-200 rounded-md
      p-3
    "
              >
                <Link href="/HairGrowth" className="block px-3 py-2 hover:bg-card transition">
                  Hair Growth
                </Link>
                <Link href="/SkinCare" className="block px-3 py-2 hover:bg-card transition">
                  Skin Care
                </Link>
                <Link href="/WeightLoss" className="block px-3 py-2 hover:bg-card transition">
                  Weight Loss
                </Link>
              </div>
            </div>


            {/* OTHER DIRECT LINKS */}
            <Link href="/contact" className="hover:text-primary transition">Contact</Link>

            <ThemeToggle />
          </nav>


          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-card border-t border-border shadow-medium">
            <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-foreground">

              {/* ABOUT US ACCORDION */}
              <details className="group">
                <summary className="cursor-pointer py-2 hover:text-primary flex justify-between">
                  About Us
                  <span className="text-xs"><SlArrowDown /></span>
                </summary>
                <div className="ml-3 mt-2 space-y-2">
                  <Link href="/" onClick={() => setOpen(false)} className="block hover:text-primary">Home</Link>
                  <Link href="/HairGrowth/doctor" onClick={() => setOpen(false)} className="block hover:text-primary">
                    Dr. Devendra
                  </Link>
                  <Link href="/HairGrowth/faq" onClick={() => setOpen(false)} className="block hover:text-primary">
                    FAQ
                  </Link>
                </div>
              </details>

              {/* SERVICES ACCORDION */}
              <details className="group">
                <summary className="cursor-pointer py-2 hover:text-primary flex justify-between">
                  Services
                  <span className="text-xs"><SlArrowDown /></span>
                </summary>
                <div className="ml-3 mt-2 space-y-2">
                  <Link href="/HairGrowth" onClick={() => setOpen(false)} className="block hover:text-primary">
                    Hair Growth
                  </Link>
                  <Link href="/SkinCare" onClick={() => setOpen(false)} className="block hover:text-primary">
                    Skin Care
                  </Link>
                  <Link href="/WeightLoss" onClick={() => setOpen(false)} className="block hover:text-primary">
                    Weight Loss
                  </Link>
                </div>
              </details>

              {/* OTHER LINKS */}
              <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-primary">
                Contact
              </Link>

              <div className="pt-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}

      </header>

      {/* FLOATING CTA BUTTON — hidden on register & coach */}
      {!hideFloating.includes(pathname) && (
        <Link
          href="/HairGrowth/register"
          className="
            fixed bottom-6 left-1/2 -translate-x-1/2 z-50
            bg-gradient-to-br from-primary to-accent
            text-white font-semibold shadow-xl hover:shadow-2xl transition
            px-6 py-2 text-sm md:px-10 md:py-3 md:text-xl rounded-full
          "
        >
          Book Consultation
        </Link>
      )}

      {/* WHATSAPP BUTTON — hidden on register & coach */}
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
