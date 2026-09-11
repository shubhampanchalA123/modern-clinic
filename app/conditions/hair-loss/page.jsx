import { getConditionData } from "@/lib/conditionsData";
import ConditionDetailView from "@/components/condition/ConditionDetailView";

const data = getConditionData("hair-loss");

export const metadata = {
  title: data.seo?.title || "Hair Loss & Scalp Health Treatment | Modern Clinic",
  description: data.seo?.description || data.shortDesc,
  keywords: data.seo?.keywords?.join(", "),
};

export default function HairLossPage() {
  return <ConditionDetailView data={data} />;
}
