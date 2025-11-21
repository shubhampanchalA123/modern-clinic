"use client";

import ConditionPage from "@/components/condition/ConditionPage";
import { allergiesContent } from "./allergies";

export default function AllergiesPage() {
  return <ConditionPage {...allergiesContent} />;
}
