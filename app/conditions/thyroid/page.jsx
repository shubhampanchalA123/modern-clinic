"use client";

import ConditionPage from "@/components/condition/ConditionPage";
import { thyroidContent } from "./thyroid";

export default function ThyroidPage() {
  return <ConditionPage {...thyroidContent} />;
}
