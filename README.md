# Aurora — SEO-Friendly Personal Resume & Portfolio Template

A modern, performant personal portfolio template built with **Next.js 16**, **React 19**, and **Material UI 9**. Designed for engineers, designers, and creators who want a polished, search-engine-optimized presence with minimal setup.

---

## Features

### SEO & Performance
- Built on Next.js App Router with **server-side rendering** for maximum crawlability
- Metadata API integration for custom `<title>` and `<meta description>` per page
- **Statically generated blog post pages** via `generateStaticParams` — zero runtime overhead
- Optimized images with `next/image` (responsive sizing, lazy loading, priority hints)
- Google Fonts loaded via `next/font` for zero layout shift

### Sections
- **Hero** — headline, subhead, and social links (GitHub, LinkedIn, X)
- **About** — personal bio and summary
- **Experience** — chronological work history with company, title, date range, and bullet points
- **Writing / Blog** — card grid of articles linking to individual post pages
- **Contact** — contact form for inbound inquiries
- **Footer** — site-wide navigation and attribution

### Scroll Animations
- CSS-class-driven reveal system powered by the **Intersection Observer API**
- Elements with the `.reveal` class animate in as they enter the viewport
- Smooth, accessible, and lightweight — no animation library required

### Blog
- Dynamic routing at `/blog/[slug]`
- Full-bleed hero image with gradient fade
- Category label, post title, and tag chips
- Prose layout optimized for long-form reading
- Back navigation to the portfolio's blog section anchor

### Design & Typography
- **Material UI 9** component library with a custom dark theme (`app/theme.ts`)
- **Space Grotesk** (headings) + **Inter** (body) via Google Fonts
- Ambient animated background effect (`Ambient` component)
- Responsive navigation menu that adapts to mobile and desktop breakpoints

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | Material UI 9 + Emotion |
| Language | TypeScript 5 |
| Styling | CSS 4 + MUI |
| Icons | MUI Icons Material |
| Fonts | Google Fonts via `next/font` |
| Runtime | React 19 |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Customization

All site content is managed from a single config file:

**`app/helpers/config.ts`**

```ts
export const social = [...]      // Social media links
export const experience = [...]  // Work history entries
export const blogPosts = [...]   // Blog post metadata
export const education = [...]   // Education entries
```

Update these arrays to make the template your own — no hunting through components required.

---

## Project Structure

```
app/
├── blog/[slug]/         # Dynamic blog post pages
├── components/          # All UI sections and layout components
│   ├── Ambient.tsx      # Animated background
│   ├── ResponsiveMenu.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Writing.tsx      # Blog card grid
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx
│   └── ScrollReveal.tsx # Intersection Observer scroll animations
├── helpers/
│   └── config.ts        # All site content (single source of truth)
├── images/              # Static images
├── globals.css          # Global styles and .reveal animation keyframes
├── theme.ts             # MUI theme customization
├── layout.tsx           # Root layout with metadata and font setup
└── page.tsx             # Home page — composes all sections
```

---

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

```bash
npx vercel
```

The site is fully statically optimizable — all blog pages are pre-rendered at build time, making it fast and CDN-friendly out of the box.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |
