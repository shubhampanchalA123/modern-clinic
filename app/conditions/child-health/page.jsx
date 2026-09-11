import { getConditionData } from "@/lib/conditionsData";
import ConditionDetailView from "@/components/condition/ConditionDetailView";

const data = getConditionData("child-health");

export const metadata = {
  title: data.seo?.title || "Child Health & Pediatric Wellness | Modern Clinic",
  description: data.seo?.description || data.shortDesc,
  keywords: data.seo?.keywords?.join(", "),
};

export default function ChildHealthPage() {
  return <ConditionDetailView data={data} />;
}
