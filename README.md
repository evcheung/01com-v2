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

> **Note:** Client-side-only deployment (serving the compiled output without SSR) is currently being evaluated. The goal is to deploy only the static build artifacts instead of running the full Node.js server in production. This approach and a potential CI/CD pipeline via GitHub Actions will be documented here once finalized.

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

## Resource videos

The Videos page reads published `Resource Videos` documents from Sanity, ordered
by date (newest first). The date controls ordering and is not displayed on the
cards. This site is a static export, so publishing video edits requires a new
site build and deployment before they appear on the website. Studio schema
changes also require a new build and deployment of the Studio hosted at
`/studio`.

The existing videos have been imported into the production dataset. To seed a
different dataset, use an account with write access:

```bash
npx sanity datasets import sanity-migrations/resource-videos.ndjson --dataset YOUR_DATASET --missing
```

The import preserves the existing titles, descriptions, links and their prior
order, but intentionally leaves dates empty because the page did not contain
verified dates. Add a date to each imported video in Studio and publish it;
undated videos appear after dated videos until then. The `--missing` flag avoids
replacing an existing document with the same ID on a repeated import. Import
into a new dataset before building the site so the existing videos remain visible.
