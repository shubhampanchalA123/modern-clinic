"use client";

import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer-section" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">

        {/* Logo + About */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-soft">
              MC
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Modern Clinic</h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Doctor-Guided Hair Regrowth
              </p>
            </div>
          </div>

          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            A holistic doctor-led program combining Homeopathy, Nutrition &
            Lifestyle healing to treat hair fall from its root cause.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            5000+ Patients • 10+ Years Experience
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-foreground">
            <li>
              <Link href="/doctor" className="hover:text-primary">
                About Dr.
              </Link>
            </li>
            <li>
              <Link href="/HairGrowth/register" className="hover:text-primary">
                Book Assessment
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-primary">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/refund-policy">
                Refund & Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Centres Section */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Our Centres</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Mumbai</li>
            <li>Indore</li>
            <li>Nagpur</li>
            <li>Delhi NCR</li>
            <li>Ujjain</li>
            <li>Kolkata</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>📞 +91 9770799998</li>
            <li>📧 mhomeo@yahoo.com</li>
            <li>🕒 Mon–Sat: 10 AM – 7 PM</li>
            <li>📍 202 Bussiness Island, Nipania, Indore</li>
            <li>📍 121 Orbit Mall, Nipania, Indore</li>
            <li>📍 India (Online Consultations)</li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="https://wa.me/919770799998" target="_blank">
              <FaWhatsapp
                size={24}
                className="text-primary hover:scale-110 transition"
              />
            </a>
            <a href="https://www.instagram.com/askdrdevendra" target="_blank">
              <FaInstagram
                size={24}
                className="text-primary hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.youtube.com/@ModernHealthNutrition"
              target="_blank"
            >
              <FaYoutube
                size={26}
                className="text-primary hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-border py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Modern Clinic — All Rights Reserved.
      </div>
    </footer>
  );
}
