# Specdest Website Decision Record

This is the implementation source of truth for current product, content, visual, navigation, image, and deployment decisions. A later explicit decision supersedes an older one.

## 1. Positioning
- Specdest is a serious technology company / technology partner.
- Sell projects, outcomes, judgment, and delivery responsibility — not engineers, teams, headcount, or staffing.
- Do not position Specdest as SES, offshore/Mongolia development, a generic Web/App vendor, or a generic AI agency.
- Start from the client's business/operational problem, then choose the appropriate technical means.
- Specdest may join before requirements are fixed and cover problem definition, technology selection, PoC, design, implementation, and continued improvement.
- Core trust message: difficult business and technology problems, including technical judgment, can be entrusted to Specdest.

## 2. Brand copy
Fixed hero copy:
- **Better, through technology.**
- **可能性を広げ、より良い未来へ。**

The hero is a brand statement only. Do not add detailed service lists or aggressive sales copy inside it.

## 3. Core philosophy
**Technology is a means, not the objective.**

Possible answers include AI, automation, SaaS, integration, process change, custom software, or PoC/R&D. Do not imply that custom development or AI is always the answer.

## 4. Reference sites
- **Kinaxis Japan**: primary reference for enterprise information architecture, menu depth, mega-menu structure, hierarchy, credibility, footer richness, and selective motion.
- **Conveo**: secondary reference for narrative rhythm, strong statements, and editorial spacing.
- Do not copy either site's visual identity or content.

## 5. Approved top navigation
1. 課題から探す
2. ソリューション
3. ご支援の進め方
4. 導入事例
5. 会社情報
6. お問い合わせ

Reasoning: **problem first, technology second**. Visitors often know the problem before they know the implementation category.

Do not add an industry-based top-level menu yet; Specdest does not currently have enough evidence for narrow industry-specialist positioning.

## 6. Navigation hierarchy
### 課題から探す
- AIを業務に活用したい
- 手作業を減らしたい
- 新しいサービスを立ち上げたい
- 既存システムを改善したい
- 技術選定から相談したい
- アイデアを形にしたい

### ソリューション
Group capabilities instead of presenting one flat list.

**AI・テクノロジー活用**
- AI・テクノロジー活用支援
- PoC・R&D

**業務改善**
- 業務改善・自動化
- 既存システム改善

**プロダクト・システム開発**
- デジタルプロダクト開発
- 業務システム開発

### ご支援の進め方
Standalone top-level page, not a generic Services menu:
1. 課題整理・構想
2. 技術選定
3. PoC・技術検証
4. 設計・開発
5. 運用・継続改善

Main message: clients do not need to arrive with a completed specification.

### 導入事例
Mega-menu groups: AI / R&D, Platform / Product, Long-term Partnership.

### 会社情報
- Specdestについて
- Philosophy / Vision
- 会社概要

Do not publish representative personal details until explicitly approved.

## 7. Mega-menu interaction behavior
- Desktop mega menus open on hover for applicable top-level items.
- Leaving the header closes the menu.
- Clicking any top-level item, `一覧を見る`, any child mega-menu link, the Specdest logo, or Contact closes the menu immediately.
- Route changes also close the menu as a fallback.
- Every internal route change scrolls the destination page to the top immediately.

## 8. Homepage narrative
1. Hero / brand vision
2. Brand role / what Specdest changes
3. Trust / proof strip
4. Business outcomes: 変える / つくる / 進める
5. Technology philosophy / approach
6. 課題から探す
7. Selected case studies
8. Capabilities
9. Company
10. Contact
11. Large footer

The homepage should read as a corporate narrative, not Hero → Services → Features → CTA.

## 9. Secondary page structure
Collection pages (`/solutions`, `/challenges`, `/cases`, `/company`) should include substantial intro copy, a visual, a complete item list, process/context where useful, and a contact CTA.

Solution/challenge detail pages should include context/why it matters, visual, support scope, deliverables, working process, related cases, and contact CTA.

Case-detail pages should include project facts, visual proof/reference, background, Specdest approach, what was developed, related cases, and contact CTA.

Company pages should contain proper narrative sections rather than sparse placeholders.

## 10. Visual direction
- Japanese enterprise/corporate tone: calm, credible, deliberate.
- White/light primary canvas, dark navy/charcoal typography, controlled Specdest sky-blue accent.
- Large typography, strong whitespace, editorial/horizontal compositions.
- Avoid glassmorphism, excessive gradients, glowing blobs, floating shapes, endless rounded cards, neon AI brains, generic network imagery, and staged people-at-laptops stock photography.
- Prefer project visuals, product screenshots, system diagrams, process visuals, and restrained editorial/corporate photography.

## 11. Motion policy
Principle: **Move the visual system, not every piece of content.**

- Hero: continuous ambient video/motion; text mostly static after initial reveal.
- Trust ticker: slow continuous horizontal movement.
- Major story sections: one composed subtle reveal; no nested fly-ins.
- Featured case visual: slight scale/parallax acceptable while text remains stable.
- Capability/challenge/content rows: mostly static; subtle hover movement only.
- Header/footer: static except restrained state/hover transitions.
- Respect `prefers-reduced-motion`.

## 12. Image strategy
Visual hierarchy:
1. Real/anonymized project screenshots.
2. Custom explanatory diagrams/process visuals.
3. Real Specdest photography: people, workspace, office/Aoyama context.
4. Editorial stock/reference photography only as temporary/contextual material.

Current internet images are temporary visual references for deciding what to photograph/create later; they are not final company evidence.

All temporary still images are stored locally under `public/images/`. Keep filenames stable when replacing them. Source/provenance is recorded in `public/images/reference-sources.json`.

The external hero video remains temporary. Final hero direction: human × technology / idea → working product → real-world outcome. Avoid server-room, generic coding, hologram, or sci-fi AI imagery.

## 13. Image sizing and performance
- Use WebP for still images.
- Size assets for actual display dimensions, not camera originals.
- For Retina/high-DPI, target about 2× CSS display size.
- Example: 300×400 CSS px → roughly 600×800 source px for sharp display.
- Typical half-page image: about 1200×1000.
- Typical wide image: about 1600×900.
- Hero poster: about 1920×1080.
- Aim for roughly 50–180 KB per normal still where practical.
- Below-the-fold images use lazy loading and async decoding.
- Do not commit 4000–8000 px camera originals directly.

## 14. Case-study content rules
Representative public cases currently include:
- Workflow Management Platform
- Dog Face Recognition AI
- Web/App Content Optimization Tool
- AI Chatbot
- E-Commerce Platform

Use challenge/background → approach → development/solution → supported outcome or ongoing relationship.

Never invent metrics, client identities, results, logos, or business claims. Anonymous proof is acceptable when clients are confidential. Do not lead with technology stacks.

## 15. Content publication rules
- No invented articles or placeholder Insights content.
- Insights stay out of navigation until real articles exist.
- No unfinished legal-policy links/pages.
- No unapproved representative profile/personal information.
- Company facts and case claims must be supported by company materials.
- Japanese copy: concise, declarative, professional; body can use normal です・ます style.
- Avoid defensive positioning copy; state the positive proposition directly.

## 16. Footer
Use a substantial enterprise-style footer containing brand + fixed slogan, solutions, engagement flow, case studies, company links, sitemap, and contact. Do not add legal links until approved content exists.

## 17. Architecture and SEO
- React + Vite, static-first.
- No Node/Express production server.
- Build browser bundle + SSR bundle, then prerender every public route to static HTML.
- Generate `sitemap.xml`, `robots.txt`, and `404.html` during build.
- Important routes require unique title, description, canonical URL, crawlable HTML, semantic H1, and meaningful alt text.
- Current build prerenders 27 routes, including `/approach`.

## 18. Hosting and deployment
- Firebase Hosting project: `specdest-lp`.
- The new corporate website is now approved for and deployed to the Firebase default/live channel.
- Live URL: `https://specdest-lp.web.app` (and the connected production domain when DNS/hosting routing applies).
- `firebase.demo.json` remains available for preview/demo-channel deployments when a change should be reviewed before production.
- `firebase.json` may still point to the maintenance build in the repository; do not assume that config reflects the currently deployed live version without checking before a deployment.
- CI/CD is intentionally not configured yet.
- GitHub remains source control; repository naming does not imply GitHub Pages.
- Do not claim commit/push or deployment success without checking the actual result.

## 19. Implementation guardrails
1. Read current code and this decision record before future edits.
2. Preserve fixed hero copy and positioning unless explicitly changed.
3. Do not reintroduce placeholder pages, invented metrics, or unsupported claims.
4. Keep visual assets local and optimized.
5. Run the full build and confirm TypeScript, client, SSR, and prerender pass.
6. For routine visual/content work, use the demo channel first when review is useful; deploy to default/live only when explicitly requested.
7. Before any production deployment, inspect the Firebase config being used so the maintenance build is not accidentally redeployed over the corporate site.
8. Verify the deployed URL after every Firebase deployment.

## 20. Desired final impression
A visitor should think: **“This is a serious technology company I can trust with a difficult business or technology problem.”**

They should not think: “This company sells engineers, offshore development, React development, or packaged AI implementation.”

## 21. Menu-page differentiation
- Top-level menu pages must not share one generic collection template.
- `/solutions`, `/challenges`, `/cases`, and `/company` each require a page structure that reflects the visitor's intent on that section.
- `/solutions` is capability/decision oriented and groups work into AI & emerging technology, operational improvement, and products & systems.
- `/challenges` is diagnostic/problem oriented. It should help a visitor recognize their current situation before introducing technology.
- `/cases` is proof oriented and should lead with real work, project visuals, relationship facts, and a stronger editorial case-study index.
- `/company` is trust/identity oriented and should focus on philosophy, accountability, company character, and corporate information rather than repeating service copy.
- Repetition across pages is acceptable only for global brand principles; page-level headlines, explanatory copy, section order, and visual composition should be purpose-specific.
- Challenge detail pages must contain challenge-specific context, decision points, support steps, and deliverables rather than reusing one generic service-development explanation.

## 22. Mobile navigation
- Mobile navigation preserves the desktop information hierarchy instead of flattening all routes.
- `課題から探す`, `ソリューション`, `導入事例`, and `会社情報` use accordion/foldable sections.
- Only one accordion section is open at a time.
- Each accordion contains an explicit parent/list link plus its child routes.
- `ご支援の進め方` remains a direct link because it has no child navigation.
- `お問い合わせ` remains a prominent direct action at the bottom of the mobile menu.
- Selecting any route closes the mobile menu and resets the open accordion section.
- The mobile menu must remain vertically scrollable on short screens.
- The mobile accordion pattern is intentionally analogous to the Kinaxis-style foldable mobile navigation reference: compact top-level sections, expandable child routes, and strong hierarchy without permanently exposing every child item.

## 23. お役立ち記事 / 日本語SEO content
- Added `/insights` as the owned content hub for free organic traffic.
- Initial article routes:
  - `/insights/how-to-choose-system-development-company`
  - `/insights/system-development-cost-guide`
  - `/insights/business-system-failure-reasons`
  - `/insights/excel-to-business-system`
  - `/insights/generative-ai-business-introduction`
- お役立ち記事は、日本企業の発注意図に近い日本語検索キーワードを優先し、問い合わせ前の判断材料として機能させる。
- Do not publish placeholder articles. Every article must contain useful practical content.
- Articles should include a page-specific CTA, not only generic contact wording.

## 24. Pricing / fee-range policy
- Do not present fixed package prices unless explicitly approved.
- Fee ranges may be used in educational articles as general market/decision guidance.
- Always frame ranges as `目安`, not as a guaranteed quote.
- Explain that actual cost depends on scope, integrations, data migration, security, testing, and operation requirements.
- Pricing content exists to help buyers decide whether to consult, not to commoditize Specdest.

## 25. Conversion copy
- Primary inquiry language should be more action-oriented than only `お問い合わせ`.
- Approved CTA examples:
  - 無料相談
  - 概算見積もりを相談する
  - AI活用を相談する
  - 業務改善を相談する
  - 類似案件を相談する
- Page CTAs should match the visitor intent for that page.

## 26. 日本語SEO service aliases
- Added direct Japanese SEO-oriented service routes under `/services/*` while preserving the main corporate navigation.
- Current Japanese SEO aliases:
  - `/services/business-system-development`
  - `/services/ai-automation-development`
  - `/services/web-system-development`
  - `/services/mvp-development`
  - `/services/system-development-cost`
- These routes target Japanese buyer search terms without changing the problem-first information architecture.
- `/services/system-development-cost` reuses the cost-guide article content because cost intent is informational before it is sales intent.

## 日本語SEO language rule
- SEO-facing content should prioritize Japanese keywords and Japanese buyer language.
- English labels are allowed only as brand accents, not as primary SEO labels.
- Use terms such as システム開発会社, 業務システム開発, AI業務自動化, 生成AI導入, 費用相場, 外注, 失敗回避.

## 28. SEO audit fixes - 2026-08-20
- Canonical production domain is `https://specdest.com`.
- Do not use `https://www.specdest.com` in canonical URLs, sitemap URLs, robots.txt, or organization schema unless DNS/SSL is explicitly fixed and the canonical decision changes.
- `scripts/prerender.mjs` now generates sitemap, robots.txt, canonical, and OG URLs with `https://specdest.com`.
- `firebase.json` now points to `dist` so normal Firebase deployment publishes the built corporate site instead of `maintenance-dist`.
- `maintenance-dist` remains only as a fallback asset, not the default deployment target.

- All public pages should have exactly one H1 in prerendered HTML.
- Meta descriptions should generally stay between 50 and 160 characters and be Japanese-first.
- Added repeatable local SEO audit command: `npm run seo:audit`.
- Latest local audit after build: 38 pages checked, 0 static SEO issues.
- The audit checks title, meta description length, H1 count, canonical base URL, image alt presence, sitemap URL count, robots domain, and `www` leakage.

## 29. Search Console wait-state TODO
- Date recorded: 2026-08-20 14:27 JST.
- Google Search Console domain property `specdest.com` was verified.
- Sitemap `https://specdest.com/sitemap.xml` was submitted successfully.
- Latest SEO-fixed site was deployed to Firebase Hosting.
- Priority indexing was requested for the homepage and four key SEO/conversion pages.
- Current state is **waiting for Google recrawl/indexing**; do not repeatedly request indexing for the same URLs.
- Check Search Console again after 24–72 hours for Indexing > Pages status.
- Check Performance > Search results after 7–14 days for impressions, queries, average position, and CTR.

## Ahrefs audit status - 2026-08-20
- Ahrefs Health Score reached 90 after crawl.
- Code-side fixes deployed: Open Graph image tags, descriptive image alt text, stronger Japanese meta descriptions, and footer internal links to all SEO service pages including `/services/system-development-cost`.
- Local build and `npm run seo:audit` passed with `pages_with_issues 0` before deployment.
- Remaining known issue: `www.specdest.com` 404 / broken redirect while Firebase custom-domain verification and SSL provisioning are incomplete.
- Expected behavior after Firebase/domain setup completes: `http://www.specdest.com/` and `https://www.specdest.com/` should redirect or resolve safely to `https://specdest.com/`.
- Re-run Ahrefs `New crawl` after DNS/Firebase SSL status becomes verified/connected.
## 30. Deployment command - source of truth
- Do not rely on a globally installed `firebase` CLI.
- Do not run raw `firebase deploy` commands for routine deployment.
- Use the repository npm scripts instead:
  - `npm run deploy` = build + Firebase Hosting deployment to project `specdest-lp`.
  - `npm run deploy:hosting` = deploy the current `dist` without rebuilding.
- The scripts use `pnpm dlx firebase-tools` and explicitly pass `--project specdest-lp`, so no active Firebase project alias is required.
- Before production deployment, `firebase.json` must still point to `dist`.
- Future sessions should read `package.json` and this decision record before attempting deployment.

## 31. Company page architecture - 2026-08-20
- `/company/` is the canonical **Specdestについて** page and the main company overview.
- `/company/about` must not exist as a separate content page; it redirects to `/company/`.
- Company navigation contains only:
  - `/company/` — Specdestについて
  - `/company/philosophy` — Philosophy / Vision
  - `/company/profile` — 会社概要
- `/company/` should explain what Specdest is, what it does, its accountability, and links into philosophy/profile. It must not duplicate the philosophy page.
- `/company/philosophy` is a dedicated editorial page for principles and decision philosophy. Do not render it through the generic company-detail layout.
- `/company/profile` remains a factual corporate-information page.

## 32. Secondary-page visual quality rules - 2026-08-20
- Do not reuse one generic two/three-column visual composition across unrelated secondary pages.
- Large headings must be checked at real desktop widths for awkward line breaks, clipping, and excessive vertical stacking.
- Sticky-header navigation must always land new routes at the top; route changes must explicitly disable/restabilize browser scroll restoration when necessary.
- Images must match the message of the section. Avoid recognizable third-party product UI/logos unless the page is specifically about that product.
- Prefer non-human imagery where a person adds no meaning: product UI, infrastructure, devices, architecture, equipment, processes, or operational environments.
- Internet reference images remain local assets under `public/images/`; remove superseded files when replacing them and maintain `public/images/reference-sources.json`.
- After visual/page-structure changes, run `npm run build` and `npm run seo:audit`; production release is acceptable only with `pages_with_issues 0`.

## 31. Subpage hero and footer density
- Secondary-page heroes must not consume most of the first viewport.
- Desktop subpage hero padding is intentionally compact; page identity should be clear without pushing the first content section far below the fold.
- Subpage H1 typography remains strong, but should generally stay below homepage-hero scale.
- Detail-page and top-level menu-page hero variants inherit the compact treatment rather than adding large extra bottom padding.
- Desktop footer should fit its main navigation groups in one horizontal row at wide viewport sizes.
- Do not let footer groups wrap into an accidental second row on normal desktop widths because the grid defines too few columns.
- At narrower desktop/tablet widths the footer may reflow intentionally; mobile remains stacked.

## 33. Footer navigation curation
- The footer is curated navigation, not a mirror of the full sitemap.
- Keep deep links only where they help conversion, buyer decision-making, or important SEO discovery.
- `導入事例` is a parent-only footer link; do not list individual cases such as Dog Face Recognition AI in the footer.
- `ご支援の進め方` is also parent-only; do not repeat every phase as separate footer links.
- `ソリューション` may expose a small set of core capability links.
- `お役立ち記事` may expose only the strongest buyer-intent articles, not every article.
- SEO landing pages should use a user-facing label such as `開発サービス`, never `日本語SEOページ`.
- Company links may expose Specdestについて, Philosophy / Vision, and 会社概要.
- Keep the desktop footer visually compact and single-row where viewport width allows.

## Footer grouping refinement - 2026-08-20
- Footer columns should reflect information weight, not one column per top-level menu.
- Parent-only destinations may share a column when they do not need child links.
- `ご支援の進め方` and `導入事例` intentionally share one stacked footer column.
- Link-heavy groups such as Solutions, Insights, Development Services, and Company keep dedicated columns.
- Parent-only footer links should be visually stronger than normal child links so hierarchy is immediately clear.

## 34. Footer hierarchy - final
- Footer is curated navigation, not a sitemap and not a copy of the header mega-menu.
- Desktop footer uses 5 columns: Brand / ソリューション / 見る / 開発サービス / 会社情報.
- `見る` groups parent-level destinations: ご支援の進め方, 導入事例, お役立ち記事.
- Do not give lightweight parent-only destinations their own columns.
- Do not use special white/bold CTA styling for ordinary footer links; all footer navigation links share one restrained visual treatment.
- Keep individual case-study links out of the footer.
- Keep only a small number of high-value solution and SEO service links visible.
- Footer should feel compact, balanced, and secondary to the page content.

## 31. Insights expansion and navigation integration - 2026-08-20
- The blog/article area is implemented as `/insights`, not as a separate `/blog` brand.
- Header desktop navigation now treats `お役立ち記事` as a mega-menu section with grouped links.
- Mobile navigation now includes foldable `お役立ち記事` links instead of only a single direct link.
- Footer links include `/insights`, `/insights/system-development-cost-guide`, and core service pages including MVP development.
- The first content cluster covers 発注準備, 業務システム, 業務改善, AI活用, 新規事業, and 既存改善.
- New article pages added: AI PoC, business automation checklist, MVP planning, legacy modernization, and pre-RFP requirements.
- Prerender now injects JSON-LD for Organization, WebSite, BreadcrumbList, Article, and Service where relevant.
- Local build and `npm run seo:audit` passed with 49 prerendered routes and `pages_with_issues 0`.

## 32. Remove public development price-range article

- Removed the public-facing system development cost guide framing.
- Replaced it with a non-price article focused on what companies should consider before starting system development.
- New canonical article URL: `/insights/system-development-before-starting`.
- Old price-related URLs redirect to the new article:
  - `/insights/system-development-cost-guide`
  - `/services/system-development-cost`
- Reason: avoid creating fixed price expectations before understanding business context, requirements, scope, integrations, and operating model.

## 35. Proof, conversion, and article usability - 2026-08-21
- Homepage credibility is reinforced with factual proof already supported by company materials: long-term support since 2018, listed-company development experience, and coverage from AI/R&D through product/business systems.
- Case-study detail pages may show engagement period and project structure when those facts are supported by source material. Do not invent outcome metrics.
- Contact page now provides a structured inquiry form. Because no approved submission backend exists, the form creates a prefilled email in the visitor's mail client and explicitly states that input is not stored on the website.
- Insight detail pages include a table of contents, section anchors, related internal pages, and an update date to improve reading/navigation and internal discovery.
- Desktop mega-menu parent links must be usable by keyboard focus as well as mouse hover.
