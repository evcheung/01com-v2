import type { Metadata } from "next";

import InTouchFeatureDetailPage, {
  getInTouchFeatureDetail,
  inTouchFeatureDetails,
} from "@/components/products/InTouchFeatureDetailPage";
import InTouchSectionChrome from "@/components/products/InTouchSectionChrome";

export function generateStaticParams() {
  return inTouchFeatureDetails.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getInTouchFeatureDetail(slug);

  if (!feature) {
    return {};
  }

  return {
    title: `${feature.title} | IronCAP InTouch`,
    description: feature.metadataDescription,
  };
}

export default async function LegacyInTouchFeatureSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <InTouchSectionChrome>
      <InTouchFeatureDetailPage slug={slug} />
    </InTouchSectionChrome>
  );
}
