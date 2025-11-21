"use client";

import ConditionPage from "@/components/condition/ConditionPage";
import { immunityContent } from "./immunity";

export default function ImmunityPage() {
  return <ConditionPage {...immunityContent} />;
}
