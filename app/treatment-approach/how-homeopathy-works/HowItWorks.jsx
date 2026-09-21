"use client";

import { useState } from "react";
import { topics } from "./questions";
import MobileSidebar from "./MobileSidebar";
import { ChevronRight, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* MOBILE SIDEBAR */}
      <MobileSidebar
        open={mobileOpen}
        setOpen={setMobileOpen}
        topics={topics}
        active={active}
        setActive={setActive}
      />

      <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-start mb-20">

        {/* DESKTOP SIDEBAR */}
        <aside className="
          hidden md:block w-full md:w-5/12 lg:w-4/12 
          bg-card border border-border 
          rounded-3.5xl p-5 lg:p-6 
          max-h-[80vh] overflow-y-auto 
          sticky top-28 shadow-xl
        ">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
            <HelpCircle className="w-4 h-4 text-primary" />
            <h3 className="text-base font-bold text-foreground">Clinical Topics & Questions</h3>
          </div>

          <ul className="space-y-2">
            {topics.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setActive(index)}
                  className={`w-full text-left px-4 py-3 rounded-2xl transition-all text-xs sm:text-sm font-semibold flex items-center justify-between gap-2 cursor-pointer
                    ${active === index 
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-md shadow-blue-500/20 scale-101" 
                      : "bg-muted/60 text-foreground hover:bg-muted border border-border/60 hover:border-primary/30"}
                  `}
                >
                  <span className="line-clamp-2">{item.question}</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* RIGHT CONTENT */}
        <article className="flex-1 w-full bg-card border border-border p-6 sm:p-10 lg:p-12 rounded-3.5xl shadow-xl">
          
          {/* MOBILE OPEN BUTTON */}
          <button 
            className="md:hidden mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold text-xs rounded-full shadow-md flex items-center gap-2"
            onClick={() => setMobileOpen(true)}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Browse All Questions ({topics.length})</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
            <span>Topic {active + 1} of {topics.length}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6 leading-tight">
            {topics[active]?.question}
          </h2>

          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
            {topics[active]?.content}
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              Have further questions about your specific condition?
            </p>
            
            <Link
              href="/HairGrowth/register"
              className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary/90 transition shadow-sm flex items-center gap-2"
            >
              <FaCalendarCheck />
              <span>Consult with Doctor</span>
            </Link>
          </div>

        </article>

      </div>
    </>
  );
}
