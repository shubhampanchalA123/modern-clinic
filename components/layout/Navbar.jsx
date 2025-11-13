"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-400 flex items-center justify-center text-white font-bold">
            HG
          </div>
          <div>
            <h1 className="text-lg font-semibold">HairGrowth Clinic</h1>
            <p className="text-xs text-gray-500 -mt-1">Rediscover Your Confidence</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/register">Book Assessment</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/faq">FAQ</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col px-6 py-4 space-y-4 text-sm">

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="hover:text-indigo-600"
            >
              Book Assessment
            </Link>

            <Link
              href="/testimonials"
              onClick={() => setOpen(false)}
              className="hover:text-indigo-600"
            >
              Testimonials
            </Link>

            <Link
              href="/faq"
              onClick={() => setOpen(false)}
              className="hover:text-indigo-600"
            >
              FAQ
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
