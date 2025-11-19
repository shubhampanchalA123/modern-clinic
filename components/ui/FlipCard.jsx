"use client";

import { RotateCw } from "lucide-react";
import { motion } from "framer-motion";

export default function FlipCard({ front, back, bg }) {
  return (
    <div className="w-full h-48 md:h-52 [perspective:1200px] group">
      <motion.div
        animate={{ rotateY: 0 }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative w-full h-full rounded-2xl shadow-lg border border-border
          [transform-style:preserve-3d]
        "
        style={{ backgroundColor: bg }}
      >
        {/* FRONT */}
        <div
          className="
            absolute inset-0 p-6 flex flex-col justify-between 
            [backface-visibility:hidden] pointer-events-none
          "
        >
          <div className="flex justify-end text-foreground/70 text-sm">
            <RotateCw size={16} /> Flip
          </div>

          <div>
            <p className="text-4xl font-bold text-foreground">
              {front.number}
            </p>
            <p className="text-foreground/80 font-semibold text-md mt-1">{front.label}</p>
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
          <p className="text-md text-foreground/80 font-semibold leading-relaxed">
            {back.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
