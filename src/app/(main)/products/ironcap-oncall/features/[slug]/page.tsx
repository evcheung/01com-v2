import type { Metadata } from "next";

import OnCallFeatureDetailPage, {
  getOnCallFeatureDetail,
  onCallFeatureDetails,
} from "@/components/products/OnCallFeatureDetailPage";

export function generateStaticParams() {
  return onCallFeatureDetails.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getOnCallFeatureDetail(slug);

  if (!feature) {
    return {};
  }

  return {
    title: `${feature.title} | IronCAP OnCall`,
    description: feature.description,
  };
}

export default async function OnCallFeatureSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <OnCallFeatureDetailPage slug={slug} />;
}
