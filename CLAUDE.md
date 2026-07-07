# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for WaterBrooks Technologies, an agritech company selling solar-powered cold storage. Next.js 16 (App Router) + React 19 + Tailwind v4, deployed to Vercel.

## Commands

```bash
npm run dev            # dev server at http://localhost:3000
npm run build          # production build (also runs tsc + eslint; fails on type/lint errors)
npm run start          # serve the production build
npm run lint           # eslint only

npm run test:e2e                              # Playwright smoke tests (all)
npx playwright install chromium               # one-time: install the browser
npx playwright test -g "renders /about"       # run a single test by title
npx playwright test tests/smoke.spec.ts:35    # run the test at a given line
```

The Playwright config has a `webServer` block that auto-starts `npm run dev` (and reuses an already-running one), so you do not need to start the dev server before running e2e tests. Screenshots land in `test-results/` (gitignored).

## Deploy

Git-connected to Vercel: pushing to `main` auto-deploys to production. To deploy manually: `npx vercel deploy --prod --yes`. Live at https://waterbrooks-technologies.vercel.app.

## Architecture

**Content is fully separated from presentation.** All site copy, metrics, lists, and icon choices live in `lib/content.ts` as typed objects keyed per page (`home`, `about`, `solutions`, `contact`, plus `site` and `nav`). Pages and components import from it and never hardcode copy. To change wording, edit `lib/content.ts`, not the JSX. Icons are referenced there by **string name** (e.g. `icon: "Sun"`), not imported components.

**Icons go through a registry.** `components/Icon.tsx` maps those string names to `lucide-react` components. Any icon used in `content.ts` must be imported and added to the `registry` object there, or it silently falls back to `Leaf`. Use `<Icon name="Sun" />`, never import lucide icons directly into content.

**Server-first.** Pages and most components are React Server Components. Only four things are `"use client"`: `components/Header.tsx` (mobile menu + active-route state), `components/ContactForm.tsx`, `components/Reveal.tsx`, and `components/ui/shape-landing-hero.tsx` (framer-motion). Keep it that way; do not add `"use client"` to a page or content module.

**Motion.** framer-motion powers two things: the animated hero (`components/ui/shape-landing-hero.tsx`, the shadcn-style `ui/` component) and scroll reveals. Wrap any section or card in `<Reveal>` (optionally `delay={i * 0.08}` for staggered grids) to get the fade-and-slide-up-on-scroll effect. Reveal content starts at `opacity: 0` and only appears once scrolled into view, so full-page screenshots must scroll first (see the `scrollThrough` helper in the smoke test).

**The contact form is mailto-only.** `ContactForm` composes an `mailto:` link to `site.email` on submit. There is no backend, API route, or email service. The **"Join the waiting list"** button in `components/CommunitySection.tsx` works the same way: a plain `mailto:` link to `site.email` with a prefilled subject. There is no waitlist backend.

**Social links.** `site.socials` in `lib/content.ts` holds the platform, label, handle, and URL for Instagram, LinkedIn, and X. `components/SocialLinks.tsx` renders them as icon buttons (`variant="dark"` on green surfaces, `variant="light"` on cream). Because lucide-react no longer ships brand marks, the glyphs are inline SVGs in that file, not registry icons. It appears only in the footer. `CommunitySection` carries the "Help us grow the WaterBrooks community" copy plus the waitlist CTA and is used on the home and contact pages (no social icons there).

## Styling

Tailwind **v4**, configured in CSS (`app/globals.css`), not a `tailwind.config.*`. Brand tokens are defined in the `@theme` block and pulled from the logo: `green`, `green-deep`, `leaf`, `cream`, `cream-2`, `ink`, `muted`, `line`. The palette is green and white only (no orange accent). Use them as utilities (`bg-green-deep`, `text-leaf`, etc.). Two fonts via `next/font`: Fraunces (`font-display`, used on all headings via the global `h1..h4` rule) and Inter (`font-body`, the default). Use `cn()` from `lib/utils.ts` for conditional classes.

Path alias `@/*` resolves to the repo root (e.g. `@/components/Header`, `@/lib/content`).

## Copy conventions (enforced)

Site copy follows a house style from the source material: **no em dashes anywhere**, plain spoken language, 1-3 line paragraphs, no clipped fragments. When editing `content.ts`, keep this voice and keep all facts, figures, and names faithful to `_source/Waterbrooks Website Content.docx`. The original brief, the copywriting playbook, and the source logo live in `_source/` (gitignored). The logo the app actually renders is `public/logo.jpg`.
