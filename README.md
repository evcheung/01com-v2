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
```

> All three variables are required. The `NEXT_PUBLIC_` prefix exposes them to the browser at build time.

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
