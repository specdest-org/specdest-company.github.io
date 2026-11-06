# SEO and external presence — status and recurring TODO

Last reviewed: 2026-11-07. **This is the single source of truth for current SEO execution status**; the other SEO documents provide evidence, rules and candidate details. This is an occasional workstream, **not** an automatically scheduled task.

## Current status

| Workstream | Status | Evidence / note |
| --- | --- | --- |
| Technical SEO | **Done — baseline** | 50 static prerendered pages; valid canonical tags, metadata, sitemap, robots and JSON-LD; `npm run seo:audit` has passed 50/50. Continue maintaining as the site changes. |
| AI and system development pages | **Done — initial optimization** | Commercial descriptions, service content and related links implemented; search ranking/lead impact remains unproven. |
| Supporting articles | **Done — initial optimization** | Distinct snippets and contextual links from buyer-intent articles to services. |
| Case-study linkage | **Done** | 12 case detail pages link to their relevant service; the `/cases` index states some clients are confidential. |
| Google indexing requests | **Requested by user** | Both core service pages requested; Google indexing outcome **not verified**. |
| Production site | **Deployed** | Latest content change before this status-only update: `5956d48`, November 2026. SEO/documentation-only commits after that do not require hosting deployment. |
| Google Search Console analysis | **Baseline captured; refresh pending** | 2026-11-06 export (`Last 3 months`, Web); 67 impressions on AI service, 1 on business-system service. See `commercial-seo-keyword-map.md`. |
| GitHub corporate presence | **Done** | Website repository and `specdest-org` organization have Japanese descriptions and point to `https://specdest.com`; updates verified by GitHub API. |
| Japanese external profiles | **TODO / not submitted** | Qiita and Zenn are candidates, subject to authorized company accounts. No new public listing was registered. |
| International external profiles | **TODO / conditional** | Clutch and GoodFirms need verification of mandatory profile fields and company-only disclosures. |
| Third-party client proof | **TODO / approval dependent** | No new client names, logos, outcome numbers or testimonials published. |
| 比較ビズ old listing | **User-owned — out of scope** | User will contact 比較ビズ. Do not duplicate, contact or monitor as part of assistant's outreach unless asked. |

## Backlog (resume occasionally, in priority order)

| ID | Priority | Owner | Action | Prerequisite / completion condition |
| --- | --- | --- | --- | --- |
| EXT-01 | P1 | User: account access; assistant: application | Create **Qiita Organization** with company bio and official link | Two authorized Qiita users, verified account login, privacy-safe profile; **done only when the organization is live and verified** |
| EXT-02 | P1 | User: account access; assistant: application/content | Create **Zenn Publication** `Specdest Tech` | Company-controlled Zenn account, publication acceptance; use original engineering articles and no private author/client information |
| EXT-03 | P1 | Assistant, then user approval if needed | Produce technical posts for Qiita/Zenn | Confirm technical facts and publication permissions, no confidential projects or duplicate/link-spam content; track actual URLs only after published |
| EXT-04 | P1 | Assistant, user supplies permission if available | Strengthen anonymous case studies, starting with AI chatbot, workflow platform and medical shift management | Publicly verifiable functionality/technical description; no private UI, metrics or reidentifying details without consent |
| EXT-05 | P1 | Assistant | Review GSC after indexing and periodically thereafter | Fresh, comparable 28-day data; use query×page, track service impressions, clicks, conversions; record the date and delta before editing pages |
| EXT-06 | P2 | Assistant | Evaluate **Clutch** and **GoodFirms** | No mandatory submission/publication of CEO name, private address, personal contact, invented pricing or staff count; confirm any profile is live |
| EXT-07 | P2 | Assistant | Find other reputable **Japanese** company-only media/directory opportunities | Confirm public field requirements before filling; prefer authentic editorial/industry mentions, avoid paid lead programs without authorization |
| EXT-08 | P2 | User: permission; assistant: implementation | Obtain client-approved quotes, logos, measurable outcomes or screenshots | Explicit authorization for each asset and claim. Anonymous case improvements remain allowed if non-identifying and verified |

## Do not do / deferred

- **User-owned:** 比較ビズ correction. No requests or follow-ups from us until user asks.
- **Privacy hold:** J-GoodTech requires identity details at application; イプロス can publicly expose corporate address; the WEBシステム開発会社データベース publishes representative/registry details. Do not submit these in the current no-personal-info workflow.
- **Commercial hold:** AIコモンズ and other paid leads require price/budget approval; do not assume registration is free for vendors.
- Never register, expose, or infer a CEO/representative name, home/old/private address, personal phone/email, customer identity, unaudited customer results, exact confidential screenshots, prices, or team sizes in third-party profiles.
- **Existing site disclosure:** `company/profile` and Organization JSON-LD display a company office address. Do not assert it is a home address; confirm suitability if the company wishes to change it. Separate MyCone legal disclosures may be mandatory and require legal review before editing.
- SEO improvements do not guarantee backlinks, Google indexing or rankings. No fabricated testimonials, rankings, citations or SEO metrics.

## Recurring checkpoint — only when the user resumes this workstream

1. Read this file first and verify Git, website deployment, GSC data date, and live listing URLs.
2. Pick **one actionable TODO**; check published platform policy/privacy requirements as of the work date.
3. Use existing authorized accounts/tools and company-only factual copy; if permissions are missing, leave status `TODO` rather than claim an action happened.
4. Verify each accepted application, indexed URL or live backlink before changing its status. Preserve a dated proof/link and refresh the baseline after meaningful changes.
5. Update this file plus affected supporting docs; commit related changes. Deploy only when public website code/content changed.

**Detailed supporting documents:** `commercial-seo-keyword-map.md` (GSC and keyword map), `seo-authority-and-case-proof.md` (case evidence and outreach constraints), `seo-anonymous-cases-and-listings.md` (platform checks and ready-to-use company-only copy), `website-decisions.md` (approved corporate positioning, privacy and publishing rules).
