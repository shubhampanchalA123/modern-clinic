import { getConditionData } from "@/lib/conditionsData";
import ConditionDetailView from "@/components/condition/ConditionDetailView";

const data = getConditionData("diabetes-management");

export const metadata = {
  title: data.seo?.title || "Diabetes Management & Metabolic Care | Modern Clinic",
  description: data.seo?.description || data.shortDesc,
  keywords: data.seo?.keywords?.join(", "),
};

export default function DiabetesManagementPage() {
  return <ConditionDetailView data={data} />;
}
