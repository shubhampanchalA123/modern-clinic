import { getConditionData } from "@/lib/conditionsData";
import ConditionDetailView from "@/components/condition/ConditionDetailView";

const data = getConditionData("skin-disorders");

export const metadata = {
  title: data.seo?.title || "Skin Disorders & Dermatology | Modern Clinic",
  description: data.seo?.description || data.shortDesc,
  keywords: data.seo?.keywords?.join(", "),
};

export default function SkinDisordersPage() {
  return <ConditionDetailView data={data} />;
}
