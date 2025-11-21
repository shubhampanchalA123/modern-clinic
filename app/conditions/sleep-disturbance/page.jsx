"use client";

import ConditionPage from "@/components/condition/ConditionPage";
import { sleepDisturbanceContent } from "./sleep-disturbance";

export default function SleepDisturbancePage() {
  return <ConditionPage {...sleepDisturbanceContent} />;
}
