"use client";

import { usePathname } from "next/navigation";

import { Bottom } from "@/components/resources/Bottom";

const normalizePath = (path: string | null) => {
  if (!path) {
    return "/";
  }

  return path.replace(/\/+$/, "") || "/";
};

export function ResourcesBottom() {
  const pathname = normalizePath(usePathname());

  if (pathname === "/resources/intellectual-properties") {
    return null;
  }

  return <Bottom />;
}
