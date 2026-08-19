import type { Metadata } from "next";

import InTouchV12WelcomePage from "@/components/products/InTouchV12WelcomePage";

export const metadata: Metadata = {
  title: "IronCAP InTouch v12.0",
  description:
    "IronCAP InTouch lets you work remotely by controlling your office computer as if you are physically there.",
};

export default function LegacyInTouchV12Page() {
  return <InTouchV12WelcomePage />;
}
