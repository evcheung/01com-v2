import StudioClient from "./StudioClient";

// With output: export, only this shell is pre-rendered.
// All studio sub-routes (including document IDs) are handled
// client-side by the SPA. The hosting platform must serve this
// same file for any /studio/* 404 (SPA fallback).
export function generateStaticParams() {
  return [{ tool: [] }];
}

export default function StudioPage() {
  return <StudioClient />;
}
