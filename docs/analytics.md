# Analytics

## Decision
Use Google Analytics 4 only. Do not add PostHog or another analytics platform unless a later need justifies it.

Configuration:
- GA4 Measurement ID: `G-CH9NXJH2NW`.
- The Measurement ID is a public frontend identifier and is kept directly in `src/analytics.ts`.
- No environment variable is required for analytics.
- The Google tag is loaded only in the browser; prerender/SSR output is unchanged.
- The local `gtag()` shim must match Google's official queue behavior and push the function `arguments` object into `dataLayer`.

Tracked events:
- `page_view`
- `contact_view`
- `contact_submit`
- `email_click`
- `phone_click`
- `cta_click`
- `case_view`
- `insight_view`

## Performance and SEO
- Do not place a synchronous Google Analytics script in `index.html`.
- The external `gtag.js` script is injected after browser idle time, with a short timeout fallback.
- Script loading is `async` and never blocks HTML parsing or rendering.
- No Firebase JavaScript SDK is added just for analytics.
- Analytics must not alter titles, descriptions, canonical URLs, JSON-LD, sitemap, robots, or crawlable page content.
