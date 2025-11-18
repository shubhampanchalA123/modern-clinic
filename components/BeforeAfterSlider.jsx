"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({ before, after }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleDrag = (clientX) => {
    const container = containerRef.current;
    if (!container) return;

    const { left, width } = container.getBoundingClientRect();
    let x = clientX - left;
    let percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setPosition(percentage);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden bg-muted select-none"
      onMouseMove={(e) => dragging && handleDrag(e.clientX)}
      onTouchMove={(e) => handleDrag(e.touches[0].clientX)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchEnd={() => setDragging(false)}
    >
      {/* BASE: AFTER image */}
      <Image src={after} alt="after" fill className="object-cover" />

      {/* OVERLAY: BEFORE image */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image src={before} alt="before" fill className="object-cover" />
      </div>

      {/* LABELS */}
      <span className="
        absolute top-3 left-3 
        bg-primary/20 text-foreground 
        text-xs px-3 py-1 rounded-md z-20
      ">
        Before
      </span>

      <span className="
        absolute top-3 right-3 
        bg-accent/30 text-foreground 
        text-xs px-3 py-1 rounded-md z-20
      ">
        After
      </span>

      {/* VERTICAL DIVIDER */}
      <div
        className="absolute top-0 h-full w-[2px] bg-card z-30"
        style={{ left: `${position}%` }}
      />

      {/* DRAG HANDLE */}
      <div
        className="absolute top-1/2 -translate-y-1/2 z-40"
        style={{ left: `${position}%`, transform: `translate(-50%, -50%)` }}
        onMouseDown={() => setDragging(true)}
        onTouchStart={() => setDragging(true)}
      >
        <div
          className="
            w-10 h-10 bg-card 
            shadow-medium border border-border rounded-full 
            flex items-center justify-center 
            text-lg text-foreground 
            hover:scale-110 transition
          "
        >
          ↔
        </div>
      </div>
    </div>
  );
}
