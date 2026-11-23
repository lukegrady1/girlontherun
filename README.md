# GirlOnTheRun

Multi-page marketing site for GirlOnTheRun, tam.i.am's hair suite at 1026 Broad Street, Unit 10, Suite 13, Shrewsbury, NJ 07702. Booking links out to Vagaro. Built by Grady Digital; same stack and conventions as the Stevie Cain Hair Care site, with its own visual identity.

**"Girls run the world."**

## Stack

- Next.js 16 (App Router, static export) + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Phosphor icons
- Archivo (variable, width axis) + DM Mono via `next/font`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run lint
```

## Where things live

- `src/lib/site.ts` — every business fact: address, phone, hours, the full Vagaro service menu, reviews, photo slots. Change it here and every section follows.
- `src/components/` — one file per section. `XMark.tsx` is the crossed-arrows X from Tam's logo (bullet, ticker separator, watermark, favicon). `BookButton.tsx` opens Vagaro's services page in a new tab.
- `src/app/icon.svg` — favicon (red X on black). `opengraph-image.tsx` renders the share card at build.

## Pages

`/` home (poster hero + collage, ticker, Meet Tam, menu index, HairPeace, work, reviews, visit) · `/about/` · `/services/` (full menu, sticky category chips) · `/hairpeace/` (Tam's lace clip-in line) · `/gallery/` (grid + lightbox) · `/visit/` · `/privacy/` · `/terms/` · custom 404.

## Design

Pulled from Tam's brand: red crossed-arrows logo, black-and-white damask suite, red shelving. Ink black, warm paper, one signal red (`--color-red`), and blush (`--color-blush`) used only for HairPeace. Poster headlines are Archivo at `wdth 62`, uppercase (`.t-poster`). Buttons are square with a hard offset shadow. HairPeace sections use the CSS `.lace` pattern.

## Booking

Vagaro (`site.vagaro`). Vagaro needs the client signed in and its cookies are blocked in cross-site iframes on Safari/iOS, so every Book link opens `vagaro.com/girlontherun/services` in a new tab. No per-service deep links exist.

## Photos

All from Tam's Vagaro gallery, downloaded at 800px (the largest Vagaro serves) and converted to WebP in `public/images/` (`gallery/`, `suite/`, `brand/`, `tam/`). Higher-res originals from Tam would sharpen the hero and gallery. Convert with `cwebp -q 82 in.jpg -o out.webp`.

## Open items

- No Google Business Profile Place ID yet: directions and the map search the street address. Add the Place ID in `site.ts` when confirmed.
- No public email or social links yet (`site.email` is null; legal pages show phone only).
- Production domain assumed `girlontherun.com`; set `NEXT_PUBLIC_SITE_URL` in Netlify.
- "DreadHead" and "HairLingerie" are $0 on Vagaro and show as "Free"; confirm with Tam how she wants them priced.

## Content rules

- Service names, prices, descriptions, hours, and reviews are Tam's exact Vagaro wording, including her capitalization style. Don't tidy them.
- Reviews show the name as Vagaro shows it. No per-review stars; the 5.0 / 15 aggregate is Vagaro's.

## Deploy (Netlify)

`netlify.toml` builds with `npm run build` and publishes `out/`. Env vars are listed in `.env.example`.
