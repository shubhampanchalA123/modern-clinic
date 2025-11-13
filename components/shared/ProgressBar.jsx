"use client";

export default function ProgressBar({ step = 1 }) {
  return (
    <div className="flex items-center gap-3">
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`flex-1 h-2 rounded ${
            s <= step ? "bg-emerald-500" : "bg-gray-200"
          }`}
        ></div>
      ))}
    </div>
  );
}
