"use client";

import { LuRefreshCw } from "react-icons/lu";

export default function FlipCard({ front, back, bg }) {
  return (
    <div className="w-full h-48 md:h-52 [perspective:1200px]">
      <div
        className="
          relative w-full h-full rounded-2xl shadow-lg border border-border
          [transform-style:preserve-3d]
          transition-transform duration-700
          hover:[transform:rotateY(180deg)]
        "
        style={{ backgroundColor: bg }}
      >
        {/* FRONT */}
        <div
          className="
            absolute inset-0 p-6 flex flex-col justify-between
            [backface-visibility:hidden]
          "
        >
          <div className="flex justify-end text-foreground/70 text-sm pointer-events-none">
          <span className="text-sm mr-1 pt-0.5"><LuRefreshCw /></span>
            Flip
          </div>

          <div className="pointer-events-none">
            <p className="text-3xl font-bold text-foreground">{front.number}</p>
            <p className="text-foreground/80 text-sm mt-1">{front.label}</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0 p-6 flex flex-col justify-center
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
            pointer-events-none
          "
        >
          <p className="text-sm text-foreground/80 leading-relaxed">
            {back.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
