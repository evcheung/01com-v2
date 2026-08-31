import OnCallSectionChrome from "@/components/products/OnCallSectionChrome";

export default function IroncapOnCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OnCallSectionChrome>{children}</OnCallSectionChrome>;
}
