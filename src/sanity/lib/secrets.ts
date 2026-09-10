export function getSanityReadToken() {
  // Keep preview credentials isolated from any older, shared API read token.
  return process.env.SANITY_PREVIEW_READ_TOKEN || process.env.SANITY_API_READ_TOKEN;
}

export function getSanityWebhookSecret() {
  return process.env.SANITY_WEBHOOK_SECRET || process.env.SANITY_REVALIDATE_SECRET;
}
