# StackApply

<!-- dash-content-start -->

**StackApply** is a personal job application tracker and analytics dashboard. It helps you log every job you apply for, track what stage each application is in (Applied, Screening, Interview, Offer, Rejected, etc.), and see insights into your job search activity how many applications you've sent today, this week, this month, or over the whole year.

Built with [Next.js](https://nextjs.org/) (bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)) and TypeScript, deployed on Cloudflare Workers as a [static website](https://developers.cloudflare.com/workers/static-assets/).

This project uses [OpenNext](https://opennext.js.org/) via the [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare), which takes the Next.js build output and transforms it so it can run on Cloudflare Workers.

<!-- dash-content-end -->

Job hunting shouldn't mean losing track of where you applied, forgetting to follow up, or wondering if you're actually making progress. StackApply turns your scattered applications buried in emails, spreadsheets, and sticky notes into one clear, organized pipeline. Log every application in seconds, watch each one move from Applied to Offer, and see the real numbers behind your job search instead of just a gut feeling. Less mental overhead, more momentum so you can spend your energy on the interviews, not the bookkeeping.

## Features

- **Application logging** — record each job you apply to, including company, role, date applied, source/platform (LinkedIn, company site, referral, recruiter, etc.), salary range, location, and job posting link, all in one searchable place
- **Stage tracking** — track where each application stands (Applied → Screening → Interview → Offer → Rejected, or a custom pipeline you define), with timestamps, notes, and contact details logged at every stage
- **Reminders & follow-ups** — flag applications that need a follow-up email or are waiting past a typical response window, so nothing quietly falls through the cracks
- **Activity analytics** — visual breakdowns of applications sent today, this week, this month, and over the year, plus stage-conversion rates (e.g. application → interview rate) to help you understand what's actually working
- **Search & filters** — quickly filter your application history by company, status, date range, or source to answer questions like "which companies have I already applied to?"
- **Notes per application** — keep interview prep notes, recruiter names, and personal impressions attached directly to each entry instead of scattered across notebooks or spreadsheets

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** [Geist Sans & Geist Mono](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) via `next/font/google`
- **Deployment:** Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare)
- **Tooling:** Wrangler CLI

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the app by modifying files under `src/app/`. Pages auto-update as you edit.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load the Geist Sans and Geist Mono fonts.

## Deploying To Production

| Command                           | Action                                       |
| :--------------------------------- | :-------------------------------------------- |
| `npm run build`                   | Build your production site                   |
| `npm run preview`                 | Preview your build locally, before deploying |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare    |
| `npx wrangler tail`               | View real-time logs for all Workers          |

## Environment Variables

If StackApply relies on any environment variables (API keys, database URLs, etc.), define them in `.dev.vars` for local development and configure them as [Cloudflare Workers secrets](https://developers.cloudflare.com/workers/configuration/secrets/) for production. Never commit `.dev.vars` or any file containing real secrets — make sure they're listed in `.gitignore`.

```bash
npx wrangler secret put SECRET_NAME
```

## Learn More

To learn more about the tools used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial.
- [OpenNext Cloudflare Adapter](https://opennext.js.org/cloudflare) — how Next.js is adapted to run on Workers.
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/) — deploying and configuring Workers.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) — feedback and contributions are welcome!