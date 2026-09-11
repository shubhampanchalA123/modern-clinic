import { getConditionData } from "@/lib/conditionsData";
import ConditionDetailView from "@/components/condition/ConditionDetailView";

const data = getConditionData("respiratory");

export const metadata = {
  title: data.seo?.title || "Respiratory & Allergy Care | Modern Clinic",
  description: data.seo?.description || data.shortDesc,
  keywords: data.seo?.keywords?.join(", "),
};

export default function RespiratoryPage() {
  return <ConditionDetailView data={data} />;
}
