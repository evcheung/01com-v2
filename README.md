# nextjs-quantum

A Next.js application integrated with [Sanity.io](https://sanity.io) as a headless CMS backend. This project is designed to consume Sanity content on the client side, with a focus on static/client-rendered output over server-side rendering.

---

## Tech Stack

- **[Next.js](https://nextjs.org/)** — React framework for building the frontend
- **[Sanity.io](https://sanity.io)** — Headless CMS for content management
- **Node.js** `v24.14.0`

---

## Prerequisites

Before getting started, make sure you have the following:

- **Node.js** `v24.14.0` installed ([download here](https://nodejs.org))
- A **Sanity.io** account and project ([create one here](https://sanity.io))

---

## 1. Sanity Setup

If you don't have a Sanity project yet:

1. Log in at [sanity.io](https://sanity.io) and create a new project.
2. Create a **dataset** (e.g., `production`) and note its name.
3. From your project settings, copy:
   - **Project ID**
   - **API Version** (e.g., `2024-01-01`)

You will need these values in the next step.

---

## 2. Environment Variables

Copy the example environment file and fill in your Sanity project values:

```bash
cp .env.example .env.production
```

Then edit `.env.production`:

```env
NEXT_PUBLIC_SANITY_DATASET=your_dataset_name
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_API_VERSION=your_api_version
SANITY_BUILD_PERSPECTIVE=published
KEYSERVER_API_URL=https://keyserver000101.01com.com
RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

> The Sanity variables are required for CMS-backed pages. The `NEXT_PUBLIC_`
> prefix exposes them to the browser at build time.

For the IronCAP XMail download form, `RECAPTCHA_SITE_KEY` and either
`KEYSERVER_API_URL` or `XMAIL_INSTALLATION_API_URL` must be present before
building the static export. `KEYSERVER_API_URL` is converted into the browser
submit endpoint `${KEYSERVER_API_URL}/api/v1/installation`. Set
`XMAIL_INSTALLATION_API_URL` directly instead if the test server proxies
installation requests through another URL.

For Sanity-triggered static deploys, set `SANITY_BUILD_PERSPECTIVE=drafts` in
the preview workflow so draft and unpublished documents are included in the test
build. Keep `SANITY_BUILD_PERSPECTIVE=published` for production builds.

---

## 3. Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 4. Building for Production

```bash
npm run build
```

Preview and production static builds can be run explicitly:

```bash
npm run build:preview
npm run build:production
```

> **Note:** Phase 1 keeps `output: "export"` and deploys the generated `out/`
> directory. The Sanity-triggered GitHub Actions setup is documented in
> `ops/sanity/option-1-static-deploy.md`.

---

## Project Structure
/
├── .env.example        # Environment variable template
├── .env.production     # Your local production config (not committed)
├── public/
├── src/
  ├── assets/
  ├── app/                # Next.js app directory
  ├── components/         # Reusable UI components
  ├── sanity/             # Sanity client configuration and queries
  ├── types/
