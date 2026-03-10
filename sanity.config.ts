/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import PreviewPane from "./sanity/PreviewPane";

const previewUrl =
  process.env.NEXT_PUBLIC_SANITY_PREVIEW_URL || "http://localhost:3000";

export default defineConfig({
  basePath: "/studio",
  projectId: "7o47py1b",
  dataset: "production",
  // projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  // dataset: process.env.SANITY_STUDIO_DATASET,
  // Add and edit the content schema in the './sanity/schema' folder

  schema,

  plugins: [
    deskTool({
      defaultDocumentNode: (S, { schemaType }) => {
        if (schemaType === "blogPost") {
          return S.document().views([
            S.view.form(),
            S.view.component(PreviewPane).title("Preview"),
          ]);
        }

        return S.document().views([S.view.form()]);
      },
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
