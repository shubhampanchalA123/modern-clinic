import { getConditionData, conditionsData } from "@/lib/conditionsData";
import ConditionDetailView from "@/components/condition/ConditionDetailView";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = Object.keys(conditionsData);
  // Also include aliases
  const aliasSlugs = Object.values(conditionsData).flatMap((item) => item.aliases || []);
  const allSlugs = Array.from(new Set([...slugs, ...aliasSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = getConditionData(resolvedParams?.slug);
  if (!data) {
    return {
      title: "Condition | Modern Clinic",
      description: "Explore personalized holistic healthcare solutions at Modern Clinic.",
    };
  }

  return {
    title: data.seo?.title || `${data.name} | Modern Clinic`,
    description: data.seo?.description || data.shortDesc,
    keywords: data.seo?.keywords?.join(", "),
    openGraph: {
      title: data.seo?.title || data.name,
      description: data.seo?.description || data.shortDesc,
      images: [
        {
          url: data.image,
          width: 1200,
          height: 900,
          alt: data.imageAlt || data.name,
        },
      ],
    },
  };
}

export default async function ConditionSlugPage({ params }) {
  const resolvedParams = await params;
  const data = getConditionData(resolvedParams?.slug);

  if (!data) {
    notFound();
  }

  return <ConditionDetailView data={data} />;
}
