"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";

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
  const hideFloating = ["/register", "/coach"];

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
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/doctor" className="hover:text-primary transition">About Dr.</Link>
            <Link href="/register" className="hover:text-primary transition">Book Assessment</Link>
            <Link href="/testimonials" className="hover:text-primary transition">Testimonials</Link>
            <Link href="/faq" className="hover:text-primary transition">FAQ</Link>
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
              <Link href="/doctor" onClick={() => setOpen(false)} className="hover:text-primary">About Dr.</Link>
              <Link href="/register" onClick={() => setOpen(false)} className="hover:text-primary">Book Assessment</Link>
              <Link href="/testimonials" onClick={() => setOpen(false)} className="hover:text-primary">Testimonials</Link>
              <Link href="/faq" onClick={() => setOpen(false)} className="hover:text-primary">FAQ</Link>
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
          href="/register"
          className="
            fixed bottom-6 left-1/2 -translate-x-1/2 z-50
            bg-gradient-to-br from-indigo-600 to-emerald-500
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
