"use client";

export default function ProgressBar({ step = 1 }) {
  return (
    <div className="flex items-center gap-3">
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`flex-1 h-2 rounded transition-all ${
            s <= step ? "bg-primary" : "bg-muted"
          }`}
        ></div>
      ))}
    </div>
  );
}
