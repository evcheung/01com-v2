# Option 1: Sanity-Triggered Static Deploys

This phase keeps `output: "export"` and uses Sanity content events to trigger GitHub Actions builds. Preview builds include drafts and deploy to the test server. Production builds use only published content and deploy to production.

## Build Perspectives

Set `SANITY_BUILD_PERSPECTIVE` at build time:

- `drafts` for preview/test builds. This requires `SANITY_PREVIEW_READ_TOKEN` or `SANITY_API_READ_TOKEN`.
- `published` for production builds. This is the default when the variable is omitted.

The legacy Sanity name `previewDrafts` is accepted as an alias for `drafts`, but new automation should use `drafts`.

## GitHub Actions Entry Points

Two workflows are available:

- `.github/workflows/sanity-preview-static-deploy.yml`
  - Event type: `sanity-preview-deploy`
  - Build mode: `SANITY_BUILD_PERSPECTIVE=drafts`
  - GitHub environment: `sanity-preview`
  - Deploy secrets prefix: `TEST_DEPLOY_*`

- `.github/workflows/sanity-production-static-deploy.yml`
  - Event type: `sanity-production-deploy`
  - Build mode: `SANITY_BUILD_PERSPECTIVE=published`
  - GitHub environment: `sanity-production`
  - Deploy secrets prefix: `PRODUCTION_DEPLOY_*`

Both workflows can also be run manually with `workflow_dispatch`.

## Required GitHub Secrets

Set these secrets in both GitHub environments unless the value is intentionally environment-specific:

```text
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_API_VERSION
DEMO_SERVER_API_URL
XMAIL_INSTALLATION_API_URL
KEYSERVER_API_URL
RECAPTCHA_SITE_KEY
GOOGLE_API_ID
GOOGLE_AUTHORIZED_ORIGINS
FACEBOOK_API_ID
FACEBOOK_API_VERSION
```

Preview also requires:

```text
SANITY_PREVIEW_READ_TOKEN
TEST_DEPLOY_HOST
TEST_DEPLOY_USER
TEST_DEPLOY_PATH
TEST_DEPLOY_SSH_KEY
TEST_DEPLOY_KNOWN_HOSTS
```

Production requires:

```text
PRODUCTION_DEPLOY_HOST
PRODUCTION_DEPLOY_USER
PRODUCTION_DEPLOY_PATH
PRODUCTION_DEPLOY_SSH_KEY
PRODUCTION_DEPLOY_KNOWN_HOSTS
```

If the production dataset is private, also set `SANITY_API_READ_TOKEN` for the production environment.

Optional GitHub environment variables:

```text
TEST_DEPLOY_PORT
PRODUCTION_DEPLOY_PORT
```

When omitted, the workflows use SSH port `22`.

## Sanity Webhook Routing

Use a webhook receiver that verifies Sanity's HMAC-SHA256 signature and then calls GitHub's `repository_dispatch` API. This preserves the security model from the strategy document while keeping the Next.js site static.

The receiver should send:

```json
{
  "event_type": "sanity-preview-deploy",
  "client_payload": {
    "sanity_document_id": "drafts.example-id",
    "sanity_document_type": "blogPost",
    "sanity_slug": "example-slug"
  }
}
```

for draft saves, and:

```json
{
  "event_type": "sanity-production-deploy",
  "client_payload": {
    "sanity_document_id": "example-id",
    "sanity_document_type": "blogPost",
    "sanity_slug": "example-slug"
  }
}
```

for publish events.

Suggested Sanity webhook projection:

```groq
{
  "_id": _id,
  "_type": _type,
  "slug": slug.current
}
```

Suggested filters:

```groq
_id in path("drafts.**")
```

for preview/test deploys, and:

```groq
!(_id in path("drafts.**"))
```

for production deploys.

GitHub's native `repository_dispatch` endpoint may also be called directly, but that places the GitHub token in Sanity and does not give you a separate HMAC verification step. Use the receiver path for the recommended security posture.

## Deployment Target

The workflows upload the generated `out/` directory as an artifact and then sync it to the configured server path with:

```bash
rsync -az --delete out/ user@host:/deploy/path/
```

Use separate deploy users, SSH keys, and deploy directories for test and production.
