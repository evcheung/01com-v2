# 01com-v2

The site runs as a server-hosted Next.js 16 application backed by Sanity. It is
not a static export: production uses `next start`, each blog post has a Draft
Mode Preview tab with live content, and a signed Sanity webhook can invalidate
cached content immediately after publication.

Use Node.js 24.14 or newer within the Node 24 release line (`.nvmrc` pins
24.14.0).

## Local development

1. Copy `.env.example` to `.env.local` and populate the required values.
2. Install dependencies with `npm ci`.
3. Start the app with `npm run dev`.
4. Open `http://localhost:3000/studio` for the embedded Sanity Studio.

Required Sanity values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-29
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3000/studio
SANITY_PREVIEW_READ_TOKEN=your_viewer_token
SANITY_WEBHOOK_SECRET=your_random_webhook_secret
```

`SANITY_BROWSER_READ_TOKEN` is optional. When omitted, the Viewer token is also
used for live Draft Mode subscriptions. Use a separate narrowly scoped token if
your Sanity plan and security policy support custom roles.

## Production

Build and run the Node.js server:

```bash
npm ci
npm run build
npm start
```

The Node.js process must remain running behind a TLS reverse proxy. Static SFTP
uploads of the old `out/` directory are no longer a valid deployment.

Complete Linux and Windows VM setup, Sanity webhook values, secrets, smoke
tests, and admin requests are documented in
[`ops/sanity/option-2-ssr-deploy.md`](ops/sanity/option-2-ssr-deploy.md).

## Deployment helpers

- Linux + PM2: `npm run deploy:ssr -- <pm2-app-name> [branch]`
- Windows service: `powershell -File .\scripts\deploy-ssr.ps1`
- PM2 example: `ops/pm2/ecosystem.config.cjs`
- Nginx example: `ops/nginx/01com-v2-ssr.conf.example`
- Windows service and IIS examples: `ops/windows/`
