"use client";

import ConditionPage from "@/components/condition/ConditionPage";
import { lowImmunityContent } from "./low-immunity";

export default function LowImmunityPage() {
  return <ConditionPage {...lowImmunityContent} />;
}
