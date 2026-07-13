import XMailSectionChrome from "@/components/products/XMailSectionChrome";

export default function IroncapXMailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <XMailSectionChrome>{children}</XMailSectionChrome>;
}
