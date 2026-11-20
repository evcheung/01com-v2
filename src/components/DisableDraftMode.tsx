"use client";

import { useIsPresentationTool } from "next-sanity/hooks";

export function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool();

  if (isPresentationTool) {
    return null;
  }

  return (
    <a
      href="/api/disable-draft"
      className="fixed bottom-4 left-4 z-[1000] rounded-full bg-[#2b2f38] px-4 py-2 text-sm font-semibold text-white shadow-lg"
    >
      Exit preview
    </a>
  );
}
