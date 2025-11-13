"use client";

import { Suspense } from "react";
import CoachPage from "./coach-page";

export default function CoachPageWrapper() {
  return (
    <Suspense fallback={<div className="p-12">Loading...</div>}>
      <CoachPage />
    </Suspense>
  );
}
