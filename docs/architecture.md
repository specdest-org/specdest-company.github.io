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

GitHub remains the source repository. CI/CD is intentionally not configured at this stage. GitHub Pages is no longer the intended production host.

Firebase project `specdest-lp` is used for hosting. The new corporate website is now deployed to the live/default channel. The `demo` preview channel remains available for pre-production review when needed. Before deploying, inspect which Firebase config is being used because `firebase.json` may still reference the maintenance build while `firebase.demo.json` references `dist`.

## SEO
Each public route is prerendered with real page content and unique metadata. Important routes must have unique title, description, canonical URL, and crawlable HTML.

Current public routes are `/`, `/solutions`, `/challenges`, `/approach`, `/cases`, `/company`, `/contact`, plus approved solution/challenge/case/company detail pages. The current build prerenders 27 routes. Insights and legal-policy routes are not published until real content is ready.

## Navigation behavior
Desktop mega menus close on any navigation click and also close automatically on route change. Every internal route change scrolls the new page to the top immediately, so route transitions do not preserve the previous page's scroll position.

Mobile navigation uses an accordion hierarchy rather than a flat list. Top-level sections with children expand/collapse one at a time, direct links remain direct, and choosing any destination closes and resets the mobile menu.

