import { client } from "@/sanity/lib/client";
import { getSanityReadToken } from "@/sanity/lib/secrets";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { withoutSecretSearchParams } from "@sanity/preview-url-secret/without-secret-search-params";
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

function getPreviewSecretClient() {
  const token = getSanityReadToken();

  if (!token) {
    throw new Error("Missing Sanity read token. Set SANITY_PREVIEW_READ_TOKEN.");
  }

  return client.withConfig({ token });
}

export async function GET(request: Request) {
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(getPreviewSecretClient(), request.url);

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  const destination = withoutSecretSearchParams(new URL(redirectTo, request.url));
  return NextResponse.redirect(destination);
}
