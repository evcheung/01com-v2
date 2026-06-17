# nextjs-quantum

A Next.js 16 application integrated with [Sanity.io](https://sanity.io) as a headless CMS backend. The app now runs as a server-rendered site with Draft Mode, on-demand revalidation, and self-hosted deployment artifacts for the Linux + Nginx + PM2 setup described in the deployment strategy document.

## Prerequisites

- **Node.js** `v24.14.0`
- A **Sanity.io** project and dataset
- A server-side Sanity API read token for Draft Mode
- A shared webhook secret for publish-triggered revalidation

## Environment Variables

Copy the example environment file and fill in the values for your environment:

```bash
cp .env.example .env.production
```

```env
NEXT_PUBLIC_SANITY_DATASET=your_dataset_name
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_API_VERSION=your_api_version
SANITY_PREVIEW_READ_TOKEN=viewer_or_read_token_for_draft_mode
SANITY_WEBHOOK_SECRET=shared_secret_for_publish_webhook
SANITY_STUDIO_PREVIEW_URL=https://your-production-site.example
```

`SANITY_PREVIEW_READ_TOKEN` and `SANITY_WEBHOOK_SECRET` are server-only secrets.
The app also accepts `SANITY_API_READ_TOKEN` and `SANITY_REVALIDATE_SECRET` as backward-compatible aliases.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Sanity Endpoints

The SSR setup exposes these application endpoints for Sanity:

- `GET /api/draft`
  Validates Sanity's preview URL secret and enables Next.js Draft Mode.
- `GET /api/disable-draft`
  Disables Draft Mode.
- `POST /api/revalidate`
  Verifies the Sanity webhook HMAC signature and invalidates the full app cache tree for the next visit. Known content types also trigger their existing tag and route-specific revalidation helpers.

## Presentation Tool

The embedded Studio is configured to use the Sanity Presentation tool.

- `SANITY_STUDIO_PREVIEW_URL` should point at the frontend origin editors should preview.
- Presentation preview mode uses `/api/draft` to enable Draft Mode and `/api/disable-draft` to exit it.
- Configure a Sanity webhook that sends document create, update, delete, publish, and unpublish events to `POST /api/revalidate` with `SANITY_WEBHOOK_SECRET`.
- Use a projection that always returns `_type` and `slug`, even for delete and unpublish events, for example: `{ "_type": coalesce(after()._type, before()._type), "slug": coalesce(after().slug.current, before().slug.current) }`
- The full-site cache invalidation works for any `_type`; the repo's existing targeted helpers still recognize `blogPost`, `news`, `newsletters`, `press-releases`/`releases`, and `reviews-awards`.

## Self-Hosted SSR Deployment

Repo-side handoff artifacts for the Linux server live here:

- `ops/nginx/01com-v2-ssr.conf.example`
- `ops/pm2/ecosystem.config.cjs`
- `scripts/deploy-ssr.sh`

The deployment script follows the exact server update sequence from the comparison document:

```bash
./scripts/deploy-ssr.sh 01com-v2 main
```

```bash
git pull --ff-only origin main
npm run build
pm2 restart 01com-v2
```
