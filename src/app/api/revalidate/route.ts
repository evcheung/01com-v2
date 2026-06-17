import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

import { getPathsForWebhook, getTagsForType, type SanityWebhookBody } from "@/sanity/lib/revalidation";
import { getSanityWebhookSecret } from "@/sanity/lib/secrets";

export async function POST(request: NextRequest) {
  const secret = getSanityWebhookSecret();

  if (!secret) {
    return NextResponse.json(
      { message: "Missing webhook secret. Set SANITY_WEBHOOK_SECRET or SANITY_REVALIDATE_SECRET." },
      { status: 500 },
    );
  }

  try {
    const { isValidSignature, body } = await parseBody<SanityWebhookBody>(request, secret);

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature." }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Webhook payload missing _type." }, { status: 400 });
    }

    const tags = getTagsForType(body._type);
    const paths = getPathsForWebhook(body);

    // Broad fallback for CMS-driven sites: any valid Sanity content mutation
    // invalidates the full app cache tree on the next visit.
    revalidatePath("/", "layout");

    for (const tag of tags) {
      revalidateTag(tag, "max");
    }

    for (const target of paths) {
      if (target.type) {
        revalidatePath(target.path, target.type);
      } else {
        revalidatePath(target.path);
      }
    }

    return NextResponse.json({
      revalidated: true,
      revalidatedPath: "/",
      paths,
      tags,
      type: body._type,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown revalidation error.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
