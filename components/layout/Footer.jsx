"use client";

import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer-section" className="bg-card/60 backdrop-blur-xl border-t border-border mt-20">
      {/* TOP GRADIENT STRIP */}
      <div className="h-1 w-full bg-gradient-to-r from-primary to-accent opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 lg:grid-cols-5 gap-10">

        {/* LOGO + ABOUT */}
        <div className="md:col-span-2">
          <Link href="/">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-soft">
                MC
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">Modern Clinic</h1>
                <p className="text-xs text-muted-foreground -mt-1">
                  Doctor-Guided Health & Wellness Care
                </p>
              </div>
            </div>
          </Link>

          <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-md">
            A holistic doctor-led program combining Homeopathy, Nutrition & Lifestyle healing
            to treat chronic and lifestyle-related health problems from the root.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            5000+ Patients • 10+ Years Experience
          </p>
        </div>

        {/* QUICK LINKS  */}
        <div>
          <h3 className="text-md font-semibold text-foreground mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <FooterLink href="/doctor" title="About Dr." />
            <FooterLink href="/HairGrowth/register" title="Book Assessment" />
            <FooterLink href="/testimonials" title="Testimonials" />
            <FooterLink href="/blog" title="Blogs" />
            <FooterLink href="/faq" title="FAQ" />
            <FooterLink href="/privacy-policy" title="Privacy Policy" />
            <FooterLink href="/terms-and-conditions" title="Terms & Conditions" />
            <FooterLink href="/refund-policy" title="Refund & Cancellation Policy" />
          </ul>
        </div>

        {/* CENTRES */}
        <div>
          <h3 className="text-md font-semibold text-foreground mb-4">Our Centres</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {["Mumbai", "Indore", "Nagpur", "Delhi NCR", "Ujjain", "Kolkata"].map((city) => (
              <li key={city} className="hover:text-primary transition">
                {city}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-md font-semibold text-foreground mb-4">Contact</h3>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary" />
              +91 9770799998
            </li>

            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary" />
              mhomeo@yahoo.com
            </li>

            <li className="flex items-center gap-3">
              <Clock size={16} className="text-primary" />
              Mon–Sat: 10 AM – 7 PM
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-primary" />
              202 Business Island, Indore
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-primary" />
              121 Orbit Mall, Indore
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-primary" />
              India (Online Consultations)
            </li>
          </ul>


          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-5">
            <SocialIcon
              href="https://wa.me/919770799998"
              icon={<FaWhatsapp size={22} color="#25D366" />}
            />
            <SocialIcon
              href="https://www.instagram.com/askdrdevendra"
              icon={<FaInstagram size={22} color="#E1306C" />}
            />
            <SocialIcon
              href="https://www.youtube.com/@ModernHealthNutrition"
              icon={<FaYoutube size={24} color="#FF0000" />}
            />
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-border py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Modern Clinic — All Rights Reserved.
      </div>
    </footer>
  );
}

/* REUSABLE COMPONENTS */

function FooterLink({ href, title }) {
  return (
    <li>
      <Link href={href} className="hover:text-primary transition">
        {title}
      </Link>
    </li>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-10 h-10 rounded-xl border border-border flex items-center justify-center transition"
    >
      {icon}
    </a>
  );
}
