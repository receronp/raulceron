# CLAUDE.md — raulceron.es

Marketing site for Raúl Cerón's freelance practice (backend engineering and
digital consulting). Static Astro build, bilingual, no backend.

## Stack

Astro 5 (static output) · Tailwind CSS 4 via `@tailwindcss/vite` · no UI framework,
no client-side JS beyond what Astro emits. Node 22.

```sh
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # serve the build
```

## Layout

| Path | What it is |
|---|---|
| `src/brand/brand.ts` | **The brand switch.** Name, accent, logo paths, legal identity. |
| `src/i18n/content.ts` | **All copy, both locales.** Nothing user-visible lives in components. |
| `src/layouts/Base.astro` | Head, header, footer, font loading, brand CSS vars |
| `src/components/Home.astro` | Every section of the page, driven by `content.ts` |
| `src/components/Frame.astro` | The corner-bracket motif from the identity |
| `src/components/Logo.astro` | Employer/school/certifier marks, single-tone, sized from `orgs` in `content.ts` |
| `public/logos/` | Those marks (sources listed above `orgs` in `content.ts`) |
| `src/styles/global.css` | Tailwind import + design tokens in `@theme` |
| `public/brand/` | Outlined logo SVGs for both brands |

Two routes only: `/` (English, default, unprefixed) and `/es/`.

## Rules that matter

**Copy is grounded, not invented.** Every service and project on this site
describes real work in the sibling repositories under `~/projects`. Do not add a
capability the practice cannot deliver, and never invent metrics, dates, client
headcounts or testimonials.

**Career history comes from the CV and LinkedIn.** The Experience, Skills and
About-countries sections are grounded in the CV PDF in the repo root and the
LinkedIn profile (receronp). The PDF is gitignored (`*.pdf`) because it carries
a personal phone number — never commit it or stage with `git add -A`.
Employers and schools are named; they are employment history, not clients.
Next-e (2020) is omitted at the owner's request.

**Clients are anonymised on purpose.** Several sibling repos hold production
credentials, a confidential commercial proposal, and client commercial documents.
No client name goes on this site without written permission from that client.
If asked to add one, confirm permission exists before editing.

**Never read client repos into this project.** The projects are referenced from
memory of their public shape (stack, problem type). Do not copy code, schemas,
screenshots or documents out of `~/projects/*` into `public/` or the copy.

**Both locales change together.** `content.ts` has an `en` and an `es` object with
identical shape. Editing one without the other is a bug — the Spanish is not a
machine translation of the English, it is written copy, so translate with care.

**Accent colour and contrast.** The brand accent (`#b0663a`) is 4.12:1 on paper —
large text and graphics only. Anything under 18.66px uses `text-accent-strong`
(`#8c4e2b`, 6.11:1). The same rule holds for NOREC: accent `#3d7f97` (4.23:1),
accent-strong `#2f6478` (6.16:1).

## Switching to the NOREC brand

Change one line in `src/brand/brand.ts`:

```ts
export const ACTIVE: BrandKey = 'norec';
```

That swaps the accent, the logo files, the wordmark and the footer identity.
The NOREC assets are already in `public/brand/norec/`. Nothing else needs to move.
Do this only when NOREC is the entity actually issuing the invoices — the site,
the domain and the Stripe account are supposed to agree with each other.

## Identity system

Outlined SVGs (no font dependency). Ink `#1b1815`, paper `#faf8f4`,
muted `#6e6862`, rule `#e2dcd3`. Type is Space Grotesk 500 throughout; the
tracked-caps eyebrow treatment (`0.22em`) comes from the logo lockup.
Full brand documentation ships with the logo file set.

## Deployment

Static output in `dist/`. Any static host works — Cloudflare Pages, Netlify and
Vercel all auto-detect Astro (build `npm run build`, output `dist`).
Set the custom domain to `www.raulceron.es` and keep `site` in
`astro.config.mjs` matching it, or canonical URLs and hreflang tags will be wrong.
