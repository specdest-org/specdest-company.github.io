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

Firebase project `specdest-lp` is used for hosting. The new corporate website is now deployed to the live/default channel. The `demo` preview channel remains available for pre-production review when needed. Production deployment uses `firebase.json` with `dist` as the Hosting public directory. Confirm the active Firebase project (`specdest-lp`) and build output before deploying.

## Contact form delivery (November 2026)
- `/contact` submits name, email, company, topic, and message to `https://api.web3forms.com/submit` via a browser POST, using the Web3Forms public access key embedded in the client bundle. No private server-side secret or Firebase Function is required. Web3Forms processes the submitted data; the site itself does not persist form submissions.
- The form has a honeypot field, disables duplicate clicks while submitting, and reports API success or failure. The visible email address remains a manual fallback only. A live user test confirmed email delivery.
- Firebase Hosting sets `Cache-Control: no-cache, max-age=0, must-revalidate` for `/contact` so old HTML does not persist after deployment; fingerprinted JS/CSS remain cacheable.

## SEO
Each public route is prerendered with real page content and unique metadata. Important routes must have unique title, description, canonical URL, and crawlable HTML.

Public routes include the main corporate sections, development/AI service pages, solution and challenge details, 12 case studies, 10 insights articles, company/contact and legal pages. The November 2026 build prerenders **50 routes**; run `npm run seo:audit` after each build to verify the actual route count and metadata.

## Mobile performance and agent discovery (November 2026)
- The fixed brand hero is retained. The broken external Coverr video was replaced by local responsive WebP artwork (mobile and desktop) with homepage-only high-priority preload; this is an intentional reliability/performance measure, not a change to brand copy.
- The homepage prerender inlines the generated Vite stylesheet to avoid a blocking CSS request. Other routes continue to load the standard Vite CSS asset. `scripts/prerender.mjs` must keep both paths functional.
- Firebase Hosting serves long-lived hashed JS/CSS. The mobile hero and homepage philosophy image use 30-day cache headers; the generic image rule remains one day. Specific cache rules must follow the generic rule to take precedence.
- `public/llms.txt` is a directory of published pages. `public/.well-known/ard.json` currently contains an empty `entries` list; do not advertise non-existent agent endpoints. `public/favicon.svg` avoids a missing-icon browser request.
- Existing Google Analytics tracking remains enabled and can dominate third-party JavaScript warnings. Avoid dropping analytics merely to improve synthetic scores.
- Verify mobile Lighthouse performance and accessibility, `npm run build`, and `npm run seo:audit` before publishing. Local Lighthouse scores are not guaranteed production PageSpeed scores.

## Navigation behavior
Desktop mega menus close on any navigation click and also close automatically on route change. Every internal route change scrolls the new page to the top immediately, so route transitions do not preserve the previous page's scroll position.

Mobile navigation uses an accordion hierarchy rather than a flat list. Top-level sections with children expand/collapse one at a time, direct links remain direct, and choosing any destination closes and resets the mobile menu.

