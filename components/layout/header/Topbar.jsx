"use client";

import { Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
    return (
        <div className="w-full bg-[#1F4DA0] text-white text-sm py-2">
            <div className="container mx-auto px-4 flex justify-between items-center">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                    <span className="opacity-90">
                        Trusted Wellness Care Since 2012
                    </span>

                    <span className="opacity-90 hidden sm:block">
                        |  ISO Certified Clinic
                    </span>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-6">

                    {/* Find Clinic */}
                    <Link
                        href="#footer-section"
                        className="flex items-center gap-1 hover:text-gray-200 transition"
                    >
                        <MapPin size={16} />
                        <span>Find Clinic</span>
                    </Link>

                    {/* Call Support */}
                    <Link
                        href="tel:+919770799998"
                        className="flex items-center gap-1 hover:text-gray-200 transition">
                        <Phone size={16} />
                        <span>Call Support</span>
                    </Link>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/919770799998"
                        className="
              w-7 h-7 flex items-center justify-center rounded-full 
              bg-white/20 hover:bg-white/30 transition
            "
                    >
                        <MessageCircle size={16} className="text-white" />
                    </a>
                </div>
            </div>
        </div>
    );
}
