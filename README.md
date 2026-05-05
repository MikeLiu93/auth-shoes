# AUTH SHOES

Public-facing marketing archive for AUTH SHOES PTY LTD — a Canberra-based sneaker curation studio. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Static, no database, no API routes.

## Local development

```bash
pnpm install
pnpm dev
```

The site runs at <http://localhost:3000>.

## Adding a new shoe

1. Append an entry to `data/shoes.json` matching the existing schema. Set `featured: true` to surface it on the home grid.
2. Drop a square product photo into `public/shoes/` using the same filename as the `image` field (e.g. `/shoes/my-new-shoe.jpg`).
3. Save — the new product page is generated at `/shoes/<slug>` at build time via `generateStaticParams`.

To regenerate the bundled SVG placeholders, run `node scripts/gen-placeholders.mjs`.

## Deploy

Push the repo to GitHub, then import it on Vercel — no env vars or build settings required. Set the production domain on Vercel and copy it into the URLs below.

## eBay Developer URLs

These three URLs are required when applying for an eBay Developer keyset (Sandbox or Production). Use them on the eBay keyset application form:

- **Privacy Policy URL:** `https://<your-vercel-domain>/privacy`
- **Auth Accepted URL:** `https://<your-vercel-domain>/auth/ebay/accepted`
- **Auth Declined URL:** `https://<your-vercel-domain>/auth/ebay/declined`

The `/auth/ebay/*` routes are static informational landings — token processing belongs in the ERP application that initiates the OAuth flow, not in this website. Both auth pages are flagged `noindex, nofollow`.

## Project structure

```
app/                     # App Router pages
  layout.tsx             # Root layout, fonts, Nav + Footer
  page.tsx               # Home
  shoes/                 # Catalog + dynamic product pages
  about/ contact/        # Marketing pages
  privacy/ terms/        # Legal (privacy is the eBay-reviewed page)
  auth/ebay/             # OAuth landing pages (noindex)
components/              # Nav, Footer, Hero, ShoeCard, ShoeGrid, Marquee
data/shoes.json          # Source of truth for all products
lib/shoes.ts             # Typed loader helpers
public/shoes/            # Product images (drop real photos here)
scripts/gen-placeholders.mjs   # Regenerates SVG placeholder images
```

## Conventions

- Display headings: Anton (loaded via `next/font/google`).
- Body: Space Grotesk.
- Colour tokens (Tailwind): `ink`, `paper`, `accent`, `muted`, `hairline`.
- Quoted labels (`"FOR DISPLAY ONLY"`) and corner index numbers (`№ 001 / 008`) are intentional borrowings from Off-White / streetwear visual language.
