"use client";

import { useState } from "react";
import { topics } from "./questions";
import MobileSidebar from "./MobileSidebar";

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

      <div className="flex gap-10">

        {/* DESKTOP SIDEBAR */}
        <aside className="
          hidden md:block w-1/3 
          bg-card border border-border 
          rounded-xl p-6 
          h-[80vh] overflow-y-auto 
          sticky top-24
        ">
          <h3 className="text-xl font-bold mb-4">Topics</h3>

          <ul className="space-y-2">
            {topics.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setActive(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition 
                    ${active === index 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "bg-background text-foreground hover:bg-secondary/50"}
                  `}
                >
                  {item.question}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* RIGHT CONTENT */}
        <article className="flex-1 bg-card border border-border p-8 rounded-xl shadow-sm">
          
          {/* MOBILE OPEN BUTTON */}
          <button 
            className="md:hidden mb-6 px-4 py-2 bg-primary text-white rounded-lg"
            onClick={() => setMobileOpen(true)}
          >
            Open Topics
          </button>

          <h2 className="text-3xl font-bold mb-4">
            {topics[active].question}
          </h2>

          <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
            {topics[active].answer}
          </div>

          <p className="mt-6 text-sm text-primary">
            📌 Reference: {topics[active].reference}
          </p>

        </article>
      </div>
    </>
  );
}
