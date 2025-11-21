"use client";

import ConditionPage from "@/components/condition/ConditionPage";
import { migraineContent } from "./migraine";

export default function MigrainePage() {
  return <ConditionPage {...migraineContent} />;
}
