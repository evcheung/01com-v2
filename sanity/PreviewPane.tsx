import React from "react";

type PreviewPaneProps = {
  document: {
    displayed?: {
      slug?: {
        current?: string;
      };
    };
  };
};

export default function PreviewPane(props: PreviewPaneProps) {
  const slug = props?.document?.displayed?.slug?.current;
  const baseUrl =
    process.env.NEXT_PUBLIC_SANITY_PREVIEW_URL || "http://localhost:3000";

  const url = slug ? `${baseUrl}/api/preview?slug=/blog/${slug}` : baseUrl;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src={url}
        title="Preview"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          background: "white",
        }}
      />
    </div>
  );
}
