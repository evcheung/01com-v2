"use client";

import dynamic from "next/dynamic";
import config from "../../../../../sanity.config";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "#101112",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            border: "3px solid #333",
            borderTop: "3px solid #f03e2f",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </div>
    ),
  },
);

export default function StudioClient() {
  return <NextStudio config={config} />;
}