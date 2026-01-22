"use client";

import React from "react";

export default function ProgressTabs({ step = 0, healthIssue = "Hair Treatment" }) {
  const tabs = ["About You", "Hair Health", "Internal Health", "Scalp Assessment", "Plan Selection"];
  const percent = healthIssue === "Hair Treatment" ? Math.round((step / 4) * 100) : (step === 0 ? 0 : 100);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        
        {/* Left Spacer */}
        <div className="flex-1 hidden md:block" />

        {/* Scrollable Tabs */}
        <div
          className="
            flex gap-3 
            overflow-x-auto 
            no-scrollbar 
            max-w-full 
            py-1
          "
        >
          {tabs.map((t, i) => {
            if (healthIssue !== "Hair Treatment" && i > 0 && i < 4) return null;
            return (
              <div
                key={t}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                  ${
                    i <= step
                      ? "bg-primary/20 text-foreground"
                      : "bg-muted text-muted-foreground"
                  }
                `}
              >
                {t}
              </div>
            );
          })}
        </div>

        {/* Right: Percentage */}
        <div className="flex-1 text-right text-sm text-muted-foreground hidden md:block">
          {percent}%
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full">
        <div className="h-2 bg-muted rounded-full">
          <div
            className="h-2 bg-primary rounded-full transition-all"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>

      {/* Percent underneath on mobile */}
      <div className="md:hidden text-right text-xs text-muted-foreground mt-1">
        {percent}%
      </div>
    </div>
  );
}
