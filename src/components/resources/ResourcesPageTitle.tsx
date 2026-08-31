"use client";

import { usePathname } from "next/navigation";

const pressRoomPaths = [
  "/resources/press-releases-newsletters",
  "/resources/press-releases",
  "/resources/newsletters",
];

const blogPaths = ["/resources/blog"];
const intellectualPropertiesPaths = ["/resources/intellectual-properties"];

export function ResourcesPageTitle() {
  const pathname = usePathname() ?? "";
  const isPressRoom = pressRoomPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
  const isBlog = blogPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
  const isIntellectualProperties = intellectualPropertiesPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (isPressRoom) return <>Press Room</>;
  if (isBlog) return <>Blog</>;
  if (isIntellectualProperties) return <>Intellectual Properties</>;

  return <>Resources</>;
}
