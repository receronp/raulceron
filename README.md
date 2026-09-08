# raulceron.es

Bilingual static marketing site for Raúl Cerón — backend engineering and digital
consulting. Built with Astro 5 and Tailwind CSS 4.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output to dist/
npm run preview
```

## Editing content

All copy lives in `src/i18n/content.ts`, in an `en` and an `es` object of the same
shape. Components read from it; nothing user-visible is hard-coded in markup.
Change both locales together.

Brand identity — name, accent colour, logo files, legal footer — lives in
`src/brand/brand.ts`. Switching the whole site from the personal mark to NOREC is
a one-line change there.

See [CLAUDE.md](CLAUDE.md) for the conventions that matter, including the rules on
client confidentiality and colour contrast.

## Deploy

Static; deploy `dist/` anywhere. Cloudflare Pages, Netlify and Vercel all detect
Astro automatically (build command `npm run build`, output directory `dist`).
