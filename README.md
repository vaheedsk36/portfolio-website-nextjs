# Personal Portfolio — v2

> Live at [vaheedshaik.tech](https://vaheedshaik.tech/)

Personal site of **Masood Akhtar Vaheed** (Vaheed Shaik) — software engineer at 1Digitalstack.ai. Single-page home with deep links into Archive and Uses, motion-driven sections, and a Medium-backed Writing block.

[![Maintenance](https://img.shields.io/badge/maintained-yes-9EE493)](https://github.com/vaheedsk36/portfolio-website-nextjs/commits/main)
[![Website](https://img.shields.io/badge/website-up-7C5CFF)](https://vaheedshaik.tech/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sk36)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)

## Stack

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)
![TypeScript-friendly](https://img.shields.io/badge/JS-Modern-3178C6?logo=javascript&logoColor=white)
![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12-7C5CFF)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)
![Vercel Analytics](https://img.shields.io/badge/Vercel%20Analytics-on-22D3EE)

- **Framework:** Next.js 16 (App Router, Turbopack, View Transitions)
- **UI:** Tailwind CSS v4 (CSS-first `@theme`), Geist Sans + Geist Mono
- **Motion:** `motion` v12 (Framer Motion successor), Lenis smooth scroll, cmdk command palette, Vaul mobile drawer
- **Content:** Medium RSS for the writing section (cached, server-rendered), local JS for everything else
- **Analytics:** Vercel Web Analytics + Speed Insights (no cookies, GDPR-friendly), optional GA via env var

## Features

- Hero with cursor-tracking spotlight, dot pattern, per-character text reveal, and a global cursor-following gradient mesh
- Sticky-stack experience cards with scroll-driven scale/opacity
- Asymmetric bento for selected work with 3D tilt, traveling border beam, and gradient hover wash
- Two opposite-direction tech marquees with edge-fade
- ⌘K command palette (routes, copy email, résumé, socials, source)
- Animated mobile drawer (right slide-in with staggered reveals)
- Click-to-copy email with confetti burst on Contact
- Fully responsive, `prefers-reduced-motion` honored

## Sections

- **Hero** · status pill, name, tagline, currently row, scroll indicator
- **About** · portrait card, bio, stack groupings, stats grid
- **Skills** · tech marquees
- **Selected Work** · 5-card bento (NDA-tagged for prod work)
- **Experience** · sticky-stack of roles
- **Writing** · latest Medium posts
- **Contact** · click-to-copy email + magnetic socials

Sub-pages: [`/archive`](https://vaheedshaik.tech/archive) (full project list) · [`/uses`](https://vaheedshaik.tech/uses) (gear & tools).

## SEO

- OpenGraph + Twitter card metadata in `app/layout.jsx`
- Dynamic sitemap at `/sitemap.xml` covering `/`, `/archive`, `/uses`
- Robots directives + verification tags for Google Search Console, Yandex Webmaster, Bing/Yahoo

## Local development

```bash
git clone https://github.com/vaheedsk36/portfolio-website-nextjs.git
cd portfolio-website-nextjs
npm install
cp .env.sample .env.local   # optional — only needed for Google Analytics
npm run dev                 # http://localhost:3000
```

Edit content from a single source: [`src/data/site.js`](./src/data/site.js).

## Scripts

| Command         | Purpose                          |
| --------------- | -------------------------------- |
| `npm run dev`   | Start dev server (Turbopack)     |
| `npm run build` | Production build                 |
| `npm run start` | Run the production build locally |
| `npm run lint`  | Lint with `eslint-config-next`   |

## Deploy

Optimised for Vercel (zero-config). Push to `main` → connect the repo on Vercel → done. Vercel Analytics + Speed Insights activate automatically once you flip the toggles in the project dashboard.

## Versioning

- **`v1.0.0`** — original Chakra UI / SASS / Hashnode build (preserved as a git tag)
- **`v2.x`** — current site (this rebuild)

To browse the v1 source: `git checkout v1.0.0`.

## Contributing

This is a personal site, but if you spot something broken or have a suggestion:

1. Fork the repo
2. Branch off `main`
3. Open a PR with a short description of the change

## License

[MIT](https://opensource.org/licenses/MIT)

---

If this is useful, a ⭐ on the repo is appreciated. Connect on [LinkedIn](https://www.linkedin.com/in/sk36/) or read more on [Medium](https://medium.com/@vaheedsk36).
