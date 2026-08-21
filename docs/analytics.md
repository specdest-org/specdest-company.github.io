# Analytics

## Decision
Use Google Analytics 4 only. Do not add PostHog or another analytics platform unless a later need justifies it.

Configuration:
- GA4 Measurement ID is a public frontend identifier and is kept directly in `src/analytics.ts`.
- No environment variable is required for analytics.
- The Google tag is loaded only in the browser; prerender/SSR output is unchanged.

## Performance and SEO
- Do not place a synchronous Google Analytics script in `index.html`.
- The external `gtag.js` script is injected after browser idle time, with a short timeout fallback.
- Script loading is `async` and never blocks HTML parsing or rendering.
- No Firebase JavaScript SDK is added just for analytics.
- Analytics must not alter titles, descriptions, canonical URLs, JSON-LD, sitemap, robots, or crawlable page content.
