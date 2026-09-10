# Option 2: `preview.01com.com` server-rendered deployment

## Runtime model

The application must run continuously as a Node.js process. A reverse proxy
terminates HTTPS and forwards requests to `127.0.0.1:3000`. Sanity Presentation
enables Draft Mode for editors, and `SanityLive` refreshes content as it changes.
The signed `/api/revalidate/` webhook is retained as a published-content cache
invalidation fallback.

Do not upload or serve an `out/` directory. SFTP may still transfer source code,
but the target VM must run `npm ci`, `npm run build`, and restart the application
service whenever application code changes. Publishing content does not deploy
code and does not require SFTP.

## Required environment file

Create `.env.production` in the application root on the `preview.01com.com`
host. Never commit it.

```env
NODE_ENV=production
PORT=3000

NEXT_PUBLIC_SANITY_PROJECT_ID=REPLACE_ME
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-29
NEXT_PUBLIC_SITE_URL=https://preview.01com.com
NEXT_PUBLIC_SANITY_STUDIO_URL=https://preview.01com.com/studio

SANITY_PREVIEW_READ_TOKEN=REPLACE_WITH_SANITY_VIEWER_TOKEN
# Optional: a separate read-only browser token for live subscriptions.
SANITY_BROWSER_READ_TOKEN=
SANITY_WEBHOOK_SECRET=REPLACE_WITH_AT_LEAST_32_RANDOM_CHARACTERS

DEMO_SERVER_API_URL=/bounty/api
KEYSERVER_API_URL=https://keyserver000101.01com.com
RECAPTCHA_SITE_KEY=REPLACE_ME
GOOGLE_API_ID=REPLACE_ME
GOOGLE_AUTHORIZED_ORIGINS=https://www.01com.com,https://01com.com
FACEBOOK_API_ID=REPLACE_ME
FACEBOOK_API_VERSION=v21.0
```

The same `SANITY_WEBHOOK_SECRET` value must be stored in Sanity's webhook and on
the server. The API read token must have Viewer/read-only access; do not use an
Editor or Administrator token.

## Sanity project configuration

In `sanity.io/manage`, configure:

1. API > Tokens: create a Viewer token for `SANITY_PREVIEW_READ_TOKEN`.
2. API > CORS Origins: add `https://preview.01com.com` and
   `http://localhost:3000` for local development. Enable credentials for both.
3. API > Webhooks: create one enabled document webhook with:
   - URL: `https://preview.01com.com/api/revalidate/`
   - Trigger: Create, Update, Delete
   - Filter: `_type in ["blogPost", "news", "newsletters", "press-releases", "reviews-awards", "investor-relations-recent-events", "investor-relations-videos", "investor-relations-financial-results", "investor-relations-latest-presentation"]`
   - Projection: `{"_type": coalesce(_type, before()._type), "slug": coalesce(slug.current, before().slug.current)}`
   - HTTP method: `POST`
   - Drafts: disabled
   - Versions: disabled unless published Content Releases must trigger it
   - Secret: exactly the server's `SANITY_WEBHOOK_SECRET`

The trailing slash in the webhook URL is intentional because this application
keeps `trailingSlash: true`.

## Windows 11 test VM

The current WinSCP/SFTP host needs more than file transfer before it can run this
deployment model.

1. Install Node.js 24.14 or newer within the Node 24 release line (24.14.0 is
   pinned in `.nvmrc`),
   Git if deployments will pull from GitHub, and a Windows service wrapper such
   as WinSW.
2. Put the repository at `C:\inetpub\01com-v2` (or update the supplied examples).
3. Install dependencies and build once from an elevated PowerShell prompt:
   `npm ci` followed by `npm run build`.
4. Copy `ops/windows/01com-v2-service.xml.example` beside the WinSW executable,
   adjust paths, install the service, and configure the deploy operator to
   restart only that service.
5. Install IIS URL Rewrite and Application Request Routing (ARR), enable proxying,
   and use `ops/windows/web.config.example` for the site. Bind the site's public
   hostname to a valid TLS certificate on port 443.
6. Keep TCP 3000 private. Only IIS should reach `127.0.0.1:3000`; expose 443 to
   users and Sanity webhooks. Keep SFTP/SSH restricted to the deployment source.
7. Ensure the service identity can read the app, `.env.production`, and `.next`,
   but ordinary web users cannot read `.env.production`.

If the VM already uses another reverse proxy, keep it and translate the same
requirements: HTTPS termination, original `Host` and `X-Forwarded-*` headers,
WebSocket/SSE support, no response buffering, and proxying to
`http://127.0.0.1:3000`.

## Linux preview host

Install Node.js, Nginx, and PM2. Place the repository at `/var/www/01com-v2`,
create `.env.production`, then run:

```bash
npm ci
npm run build
APP_CWD=/var/www/01com-v2 pm2 start ops/pm2/ecosystem.config.cjs
pm2 save
pm2 startup
```

Use `ops/nginx/01com-v2-ssr.conf.example` as the site configuration. It is
already scoped to `preview.01com.com`; confirm the certificate paths match the
host before validating and reloading Nginx. Keep port 3000 bound to loopback
and allow inbound HTTPS to `/api/revalidate/`.

## Reverse-proxy and firewall requirements

- Forward `Host`, `X-Forwarded-For`, and `X-Forwarded-Proto`.
- Support streaming/SSE and do not buffer responses from Next.js.
- Set a reasonable request-body limit and rate-limit `/api/revalidate/`.
- Do not cache Draft Mode responses or the revalidation endpoint at the proxy.
- If the organization requires IP allowlisting, synchronize the firewall from
  [Sanity's maintained webhook egress list](https://www.sanity.io/files/webhooks-egress-ips.txt)
  rather than copying a static list.
- Permit outbound HTTPS from the build/service identity to Sanity's API/CDN and,
  because this repo uses `next/font/google`, to Google Fonts during builds.
- If a security header sets `frame-ancestors` or `X-Frame-Options`, permit the
  Studio/Presentation origin. The embedded `/studio` deployment is same-origin.

## Information and access to request from administrators

Ask the infrastructure administrator for:

- The `preview.01com.com` host's operating system, application path, service
  name, and whether Nginx is the approved reverse proxy.
- Node.js 24.14+ within the Node 24 release line, a managed service identity,
  automatic service restart, TLS
  certificates/bindings, DNS records, and persistent application/log storage.
- Inbound HTTPS on 443, loopback-only port 3000, restricted SFTP/SSH access, and
  outbound HTTPS for Sanity plus Google Fonts during target-side builds.
- Permission for the deploy identity to write only the app/release directory and
  restart only the 01com-v2 service. It should not be a general administrator.
- The organization's required uptime monitor, central logging, backup/rollback,
  vulnerability patching, and change-approval controls.

Ask a Sanity Project Administrator to create the Viewer token, the
`https://preview.01com.com` CORS origin, and the signed webhook described above
if your own Sanity role cannot manage API settings. Transfer token and webhook
secret values only through the approved secret channel, never email or source
control.

## Deployment and rollback

For test, WinSCP may upload the repository (excluding `.git`, `.next`,
`node_modules`, and local env files), after which an authorized operator runs:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\deploy-ssr.ps1 -SkipGitPull
```

The supplied scripts are appropriate for the single-instance preview rollout.
Before using the same model for `www.01com.com`, use versioned release
directories and an atomic service switch, and add the organization's backup,
rollback, log retention, uptime monitoring, and change-approval controls.

## Smoke test

1. `npm run build` completes without an `out/` export.
2. The service responds locally: `curl -I http://127.0.0.1:3000/`.
3. `https://preview.01com.com` loads pages and `/_next/image` returns an image
   response.
4. An unsigned POST to `/api/revalidate/` returns 401.
5. Sanity's webhook test returns 2xx and its attempts log shows delivery.
6. `/studio` opens Presentation; a saved draft updates inside the iframe without
   becoming public in a private browser session.
7. Publishing, unpublishing, and creating a brand-new slug update the public site
   without a build or SFTP transfer.

## Dependency audit note

As of 2026-09-02, the deploy-facing Next.js advisories are addressed by pinning
Next.js 16.3.4. `npm audit --omit=dev` still reports advisories through the
embedded Sanity Studio/CLI dependency tree. npm offers only a forced breaking
Sanity downgrade for the remaining items, so it was intentionally not applied.
Review this exception with the security owner and update Sanity when a compatible
upstream fix is published.
