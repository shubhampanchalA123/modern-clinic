import { getConditionData } from "@/lib/conditionsData";
import ConditionDetailView from "@/components/condition/ConditionDetailView";

const data = getConditionData("weight-management");

export const metadata = {
  title: data.seo?.title || "Weight Management & Metabolism | Modern Clinic",
  description: data.seo?.description || data.shortDesc,
  keywords: data.seo?.keywords?.join(", "),
};

export default function WeightManagementPage() {
  return <ConditionDetailView data={data} />;
}
