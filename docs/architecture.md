# Website Architecture

## Runtime model
Specdest is a static-first React/Vite corporate website.

Node.js is used only for development and build tooling. Production does not require a Node server.

Build pipeline:
1. Vite builds the browser bundle.
2. Vite builds a server-side render bundle.
3. `scripts/prerender.mjs` renders every public route to static HTML.
4. The build generates `sitemap.xml`, `robots.txt`, and `404.html`.
5. Firebase Hosting serves the generated `dist/` directory.

## Hosting
Production hosting target: Firebase Hosting.

GitHub remains the source repository and CI build system. GitHub Pages is no longer the intended production host.

The Firebase project ID is intentionally not hard-coded until the target Firebase project is confirmed.

## SEO
Each public route is prerendered with real page content and unique metadata. Important routes must have unique title, description, canonical URL, and crawlable HTML.

Current public routes are `/`, `/solutions`, `/challenges`, `/cases`, `/insights`, `/company`, and `/contact`.
