# WaterBrooks Technologies

Corporate website for WaterBrooks Technologies, an agritech company reducing
post-harvest losses in Africa with solar-powered cold storage, IoT and AI
monitoring, and community training.

## Stack

- Next.js 16 (App Router) and React 19
- Tailwind CSS v4
- framer-motion for scroll reveals and the hero
- lucide-react icons
- Playwright for smoke tests

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` starts the dev server
- `npm run build` creates a production build
- `npm run start` serves the production build
- `npm run test:e2e` runs the Playwright smoke tests (needs `npx playwright install chromium` once)

## Structure

- `app/` the four routes: home, about, solutions, contact
- `components/` header, footer, hero, cards, form, and the scroll-reveal wrapper
- `components/ui/` the animated shape hero
- `lib/content.ts` all site copy in one place
- `public/logo.jpg` the brand logo

## Contact

waterbrookstechnologies@gmail.com
