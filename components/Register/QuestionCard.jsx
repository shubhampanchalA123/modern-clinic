"use client";

import React from "react";

export default function QuestionCard({ question, options = [], value, onChange }) {
  return (
    <div className="p-6 bg-card rounded-2xl border border-border shadow-soft">
      <h3 className="text-lg font-semibold text-foreground mb-4">{question}</h3>

      <div className="space-y-4">
        {options.map((opt, idx) => (
          <label
            key={idx}
            className="flex items-center gap-4 cursor-pointer"
          >
            <input
              type="radio"
              name={question}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="form-radio text-primary h-4 w-4"
            />
            <span className="text-foreground">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
