"use client";

import { useState } from "react";

export default function FlipCard({
  front,
  back,
  bg,
  Icon,
  height = "h-40 md:h-48",
  iconSize = 30,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`
        relative w-full 
        ${height} 
        cursor-pointer 
        transition-all duration-500
      `}
      style={{ borderRadius: "1.2rem" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* MAIN WRAPPER */}
      <div
        className={`
          absolute inset-0 rounded-3xl border border-border p-5 
          transition-all duration-500 ease-out
          bg-card
          ${flipped
            ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)] scale-[1.03]"
            : "shadow-[0_4px_15px_rgba(0,0,0,0.04)] scale-[1.00]"
          }
        `}
        style={{
          backgroundColor: bg,
          transform: flipped
            ? "rotateY(10deg) rotateX(3deg)"
            : "rotateY(0deg) rotateX(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className={`
            absolute inset-0 flex flex-col items-center justify-center gap-3
            transition-all duration-500
            ${flipped ? "opacity-0 rotate-y-12 translate-y-1" : "opacity-100"}
          `}
        >
          <div
            className={`
              p-3 rounded-xl bg-primary/15 text-primary transition-all
              ${flipped ? "opacity-0" : "opacity-100"}
            `}
          >
            {Icon && <Icon size={iconSize} />}
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{front.number}</div>
            <div className="text-sm text-muted-foreground">{front.label}</div>
          </div>
        </div>

        {/* BACK */}
        <div
          className={`
            absolute inset-0 flex items-center justify-center text-center px-4
            transition-all duration-500
            ${flipped ? "opacity-100" : "opacity-0"}
          `}
        >
          <p className="text-sm leading-relaxed text-foreground/90">
            {back.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
