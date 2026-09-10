import { createPreviewSecret } from "@sanity/preview-url-secret/create-secret";
import { useClient, useCurrentUser } from "sanity";
import type { UserViewComponent } from "sanity/structure";
import { useEffect, useState } from "react";

type PreviewState =
  | { status: "loading" }
  | { status: "ready"; url: string }
  | { status: "error"; message: string };

function getSlug(document: unknown): string | undefined {
  const slug = (document as { slug?: unknown } | null)?.slug;

  if (!slug || typeof slug !== "object") {
    return undefined;
  }

  const current = (slug as { current?: unknown }).current;
  return typeof current === "string" && current.trim() ? current : undefined;
}

export const BlogPostPreview: UserViewComponent = ({ document }) => {
  const client = useClient({ apiVersion: "2025-02-19" });
  const currentUser = useCurrentUser();
  const slug = getSlug(document.displayed);
  const title = typeof document.displayed.title === "string" ? document.displayed.title : "this post";
  const [preview, setPreview] = useState<PreviewState>({ status: "loading" });

  useEffect(() => {
    if (!slug) {
      return;
    }

    let cancelled = false;
    const origin = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;

    async function createPreviewUrl() {
      setPreview({ status: "loading" });

      try {
        const { secret } = await createPreviewSecret(
          client,
          "01com-v2/blog-post-preview",
          window.location.href,
          currentUser?.id,
        );
        const url = new URL("/api/draft", origin);

        // The endpoint validates this short-lived secret, sets the server-side
        // Draft Mode cookie, and redirects the iframe to this post's URL.
        url.searchParams.set("sanity-preview-secret", secret);
        url.searchParams.set("sanity-preview-pathname", `/resources/blog/${slug}`);
        url.searchParams.set("sanity-preview-perspective", "previewDrafts");

        if (!cancelled) {
          setPreview({ status: "ready", url: url.toString() });
        }
      } catch (error) {
        if (!cancelled) {
          setPreview({
            status: "error",
            message:
              error instanceof Error
                ? error.message
                : "Unable to create a secure preview link.",
          });
        }
      }
    }

    void createPreviewUrl();

    return () => {
      cancelled = true;
    };
  }, [client, currentUser?.id, slug]);

  if (!slug) {
    return <p style={{ padding: "1.5rem" }}>Add a slug and save the post before opening its preview.</p>;
  }

  if (preview.status === "loading") {
    return <p style={{ padding: "1.5rem" }}>Preparing secure preview…</p>;
  }

  if (preview.status === "error") {
    return <p style={{ padding: "1.5rem" }}>{preview.message}</p>;
  }

  return (
    <iframe
      key={preview.url}
      src={preview.url}
      title={`Preview: ${title}`}
      style={{ border: 0, display: "block", height: "calc(100vh - 5rem)", width: "100%" }}
    />
  );
};
