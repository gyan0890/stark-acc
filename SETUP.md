# Stark/Acc Website — Setup Guide

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. Your site will be live at `your-project.vercel.app`.

To add a custom domain later: Vercel Dashboard → Your Project → Settings → Domains.

---

## Adding Partner Logos

Place logo image files in the `/public/partners/` folder.
See `/public/partners/README.md` for the expected filenames and format.

The site will automatically display images when they are present.
If a file is missing, the card shows the partner's name as styled text.

---

## Key Content Locations

| What to edit                  | File                                      |
|-------------------------------|-------------------------------------------|
| Site title / metadata         | `src/app/layout.tsx`                      |
| Hero headline & sub-copy      | `src/components/Hero.tsx`                 |
| Program pillars & details     | `src/components/Program.tsx`              |
| Partner list                  | `src/components/Partners.tsx`             |
| Ecosystem spotlight projects  | `src/components/Ecosystem.tsx`            |
| FAQ questions & answers       | `src/components/FAQ.tsx`                  |
| Apply CTA copy                | `src/components/ApplyCTA.tsx`             |
| Footer links & social handles | `src/components/Footer.tsx`               |
| Navigation links              | `src/components/Navbar.tsx`               |
| Brand colours                 | `tailwind.config.ts` + `globals.css`      |

---

## Connecting the Apply Button

In `src/components/ApplyCTA.tsx`, find the Apply Now button and replace the `onClick` handler with a link to your form:

```tsx
// Option A: Typeform or external form
<a href="https://your-typeform-link.com" target="_blank" className="btn-gradient ...">
  Apply Now →
</a>

// Option B: Internal application page
<Link href="/apply" className="btn-gradient ...">
  Apply Now →
</Link>
```

---

## Adding a Video

A video embed placeholder has been left out of the initial build.
To add one, insert a `<video>` or YouTube iframe in `src/components/Hero.tsx`
below the CTA group, or create a new `VideoSection` component.

---

## Brand Colours (Starknet)

| Token            | Hex       | Usage                         |
|------------------|-----------|-------------------------------|
| `sn-navy`        | `#0C0C4F` | Primary background            |
| `sn-blue`        | `#1C1C84` | Gradient glow, section fills  |
| `sn-orange`      | `#EC796B` | Gradient start, accents       |
| `sn-purple`      | `#D672EF` | Gradient end, highlights      |
| `sn-mauve`       | `#E175B1` | Mid-gradient, badges          |
| `sn-galaxy`      | `#3F8CFF` | Tertiary accent               |
| `white-flare`    | `#FBFBFB` | Primary text                  |

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts, loaded via `next/font`)
- **Images**: `next/image`
- **Deployment**: Vercel (recommended)
