import { getConditionData } from "@/lib/conditionsData";
import ConditionDetailView from "@/components/condition/ConditionDetailView";

const data = getConditionData("womens-health");

export const metadata = {
  title: data.seo?.title || "Women’s Health & Hormonal Care | Modern Clinic",
  description: data.seo?.description || data.shortDesc,
  keywords: data.seo?.keywords?.join(", "),
};

export default function WomensHealthPage() {
  return <ConditionDetailView data={data} />;
}
