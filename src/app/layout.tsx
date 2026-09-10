import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import { draftMode } from "next/headers";

import { DisableDraftMode } from "@/components/DisableDraftMode";
import { SanityLive } from "@/sanity/lib/client";
import "./globals.css";

// This site is deployed as a Node.js application, not as a static export.
// Keep every route request-rendered, including marketing pages that otherwise
// have no dynamic data dependency for Next.js to detect.
export const dynamic = "force-dynamic";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "01 Quantum – Solutions for the Post-Quantum Era",
  description:
    "Quantum-safe cryptography protecting every system and every byte of data against today's most advanced cyberattacks and tomorrow's quantum threats.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} h-full antialiased`}>
      <body className="h-full font-[family-name:var(--font-urbanist)]" style={{ fontFamily: "var(--font-urbanist), Urbanist, sans-serif" }}>
        {children}
        <SanityLive />
        {isEnabled && <DisableDraftMode />}
      </body>
    </html>
  );
}
