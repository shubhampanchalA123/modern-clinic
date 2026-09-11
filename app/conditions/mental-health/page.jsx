import { getConditionData } from "@/lib/conditionsData";
import ConditionDetailView from "@/components/condition/ConditionDetailView";

const data = getConditionData("mental-health");

export const metadata = {
  title: data.seo?.title || "Mental Health & Emotional Wellbeing | Modern Clinic",
  description: data.seo?.description || data.shortDesc,
  keywords: data.seo?.keywords?.join(", "),
};

export default function MentalHealthPage() {
  return <ConditionDetailView data={data} />;
}
