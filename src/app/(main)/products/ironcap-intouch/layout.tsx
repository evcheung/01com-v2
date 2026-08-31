import InTouchSectionChrome from "@/components/products/InTouchSectionChrome";

export default function InTouchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <InTouchSectionChrome>{children}</InTouchSectionChrome>;
}
