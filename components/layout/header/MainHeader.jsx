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

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pages where floating buttons should be hidden
  const hideFloating = ["/HairGrowth/register", "/HairGrowth/coach"];

  const menuItems = [
    { label: "Conditions", href: "/conditions" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Treatment Approach", href: "/approach" },
    { label: "Results", href: "/results" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* MAIN HEADER */}
      <header
        className={`
          sticky top-0 z-40 transition-all duration-300 
          bg-card
          ${scrolled ? "shadow-[0_1px_6px_rgba(31,77,160,0.15)]" : ""}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT — LOGO + TAGLINE */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-soft">
              MC
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Modern Clinic</h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Holistic Healing for Every Age
              </p>
            </div>
          </Link>

          {/* NAV MENU — DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="
                  relative group font-medium text-foreground/80
                  hover:text-[#1F4DA0] transition
                "
              >
                {item.label}

                {/* BLUE UNDERLINE */}
                <span
                  className="
                    absolute left-0 -bottom-1 h-[2px] w-0 
                    bg-[#3F7FEF] 
                    group-hover:w-full 
                    transition-all duration-300
                  "
                ></span>
              </Link>
            ))}

          </nav>

          {/* RIGHT — LOGIN + CTA */}
          <div className="hidden md:flex items-center gap-6">

            {/* LOGIN */}
            <Link
              href="/login"
              className="flex items-center gap-1 text-foreground/80 hover:text-[#1F4DA0] transition"
            >
              <User size={18} />
              Login
            </Link>

            {/* BOOK CTA */}
            <Link
              href="/HairGrowth/register"
              className="
                px-5 py-2 rounded-lg bg-[#1F4DA0] text-white font-medium 
                hover:bg-[#0A2C63] transition
              "
            >
              Book Consultation
            </Link>
          </div>

            {/* THEME TOGGLE */}
            <ThemeToggle />

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU PANEL */}
        {open && (
          <div className="md:hidden bg-card border-t border-border shadow-medium">
            <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-foreground">

              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 hover:text-primary transition"
                >
                  {item.label}
                </Link>
              ))}

              {/* LOGIN */}
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 hover:text-primary"
              >
                <User size={18} />
                Login
              </Link>

              {/* CTA */}
              <Link
                href="/HairGrowth/register"
                onClick={() => setOpen(false)}
                className="
                  mt-2 px-5 py-3 rounded-lg bg-[#1F4DA0] text-white font-medium text-center 
                  hover:bg-[#0A2C63] transition
                "
              >
                Book Consultation
              </Link>

              <div className="pt-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* FLOATING CTA BUTTON */}
      {!hideFloating.includes(pathname) && (
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
      )}

      {/* WHATSAPP FLOATING */}
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
