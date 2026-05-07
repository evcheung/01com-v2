import StudioClient from "./StudioClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { tool: [] },
    { tool: ["structure"] },
    { tool: ["vision"] },
  ];
}

export default function StudioPage() {
  return <StudioClient />;
}
