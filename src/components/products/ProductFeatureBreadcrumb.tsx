import Link from "next/link";

type ProductFeatureBreadcrumbConfig = {
  pathname: string;
  featuresPageHref: string;
  featureDetailLabels: Record<string, string>;
};

export function normalizeProductPath(path: string | null) {
  if (!path) {
    return "";
  }

  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function getProductFeatureBreadcrumb({
  pathname,
  featuresPageHref,
  featureDetailLabels,
}: ProductFeatureBreadcrumbConfig) {
  const featurePrefix = `${featuresPageHref}/`;

  if (!pathname.startsWith(featurePrefix)) {
    return null;
  }

  const slug = pathname.slice(featurePrefix.length);

  if (!slug || slug.includes("/")) {
    return null;
  }

  const label = featureDetailLabels[slug];

  if (!label) {
    return null;
  }

  return { label, href: pathname };
}

export function ProductFeatureBreadcrumb({
  label,
  featuresPageHref,
}: {
  label: string;
  featuresPageHref: string;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] font-medium uppercase tracking-[0.06em] text-quantum-blue sm:text-[12px]">
        <li className="flex items-center gap-1.5">
          <Link
            href={featuresPageHref}
            className="transition-colors hover:text-quantum-green"
          >
            Features
          </Link>
          <span aria-hidden className="text-quantum-blue/60">
            &gt;
          </span>
        </li>
        <li aria-current="page" className="text-quantum-blue/75">
          {label}
        </li>
      </ol>
    </nav>
  );
}
