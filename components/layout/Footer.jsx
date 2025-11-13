"use client";

import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">

        {/* Logo + About */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-400 
                            flex items-center justify-center text-white font-bold">
              MC
            </div>
            <div>
              <h1 className="text-lg font-semibold">Modern Clinic</h1>
              <p className="text-xs text-gray-500 -mt-1">Doctor-Guided Hair Regrowth</p>
            </div>
          </div>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            A holistic doctor-led program combining Homeopathy, Nutrition & 
            Lifestyle healing to treat hair fall from its root cause.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            5000+ Patients • 10+ Years Experience
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about-doctor" className="hover:text-indigo-600">About Dr.</Link></li>
            <li><Link href="/register" className="hover:text-indigo-600">Book Assessment</Link></li>
            <li><Link href="/testimonials" className="hover:text-indigo-600">Testimonials</Link></li>
            <li><Link href="/faq" className="hover:text-indigo-600">FAQ</Link></li>
            <li><Link href="/doctor#videos" className="hover:text-indigo-600">Doctor Videos</Link></li>
          </ul>
        </div>

        {/* Centres Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Our Centres</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Bangalore</li>
            <li>Delhi NCR</li>
            <li>Hyderabad</li>
            <li>Kolkata</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>📞 +91 98765 43210</li>
            <li>📧 info@modernclinic.com</li>
            <li>🕒 Mon–Sat: 10 AM – 7 PM</li>
            <li>📍 India (Online Consultations)</li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank">
              <FaWhatsapp size={24} className="text-green-500 hover:scale-110 transition" />
            </a>
            <a href="#" target="_blank">
              <FaInstagram size={24} className="text-pink-500 hover:scale-110 transition" />
            </a>
            <a href="#" target="_blank">
              <FaYoutube size={26} className="text-red-600 hover:scale-110 transition" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Modern Clinic — All Rights Reserved.
      </div>
    </footer>
  );
}
