# Specdest Website Direction

## Goal
Create a high-end Japanese corporate website for Specdest that feels credible, enterprise-grade, calm, and intentional.

The site should position Specdest as a serious technology company / technology partner that can take responsibility for difficult business and technology problems.

## Fixed Hero Copy
- English: **Better, through technology.**
- Japanese: **可能性を広げ、より良い未来へ。**

Hero copy is brand-level only. Do not add service explanations, detailed capability lists, or strong sales CTA inside the hero.

## Positioning
Specdest should be presented as:
- a technology company / technology partner
- project-based, not headcount-based
- able to think from the business problem
- able to advise, select technology, and implement
- trusted enough to take responsibility from ambiguity through delivery

Do not position Specdest as offshore development, Mongolia development, SES, engineer staffing, headcount augmentation, a generic AI agency, or a generic Web/App development vendor.

## Core Philosophy
Technology is a means, not the objective.

Depending on the problem, the answer may be AI, automation, SaaS, integrations, process change, custom software, or PoC / R&D. Do not force custom development.

The site should communicate professional versions of these ideas:
- 信頼して任せられる
- 技術判断も含めて任せられる
- 要件が固まっていなくても相談できる
- 課題から考え、必要なら実装まで担う

Avoid sales-heavy wording such as 「まず相談」, 「お気軽に」, or 「丸投げOK」 on key brand surfaces.

## Tone and Language
- Main website language: Japanese
- English may be used for the hero slogan, restrained labels, and brand-style headings
- Tone: professional, corporate, credible, calm, enterprise-grade
- Avoid startup hype and generic AI-agency language
- Brand headlines do not need です・ます; body copy may use normal professional Japanese

## Visual Direction
- White / very light canvas
- Dark navy / charcoal typography
- Specdest sky blue as a controlled accent
- Large typography and strong whitespace
- Editorial / horizontal layouts
- Fewer, stronger sections instead of card-heavy templates

Avoid excessive gradients, glassmorphism, glowing blobs, rounded-card overload, cliché AI/network graphics, and generic stock images of people staring at laptops.

Reference sites:
- Kinaxis: reference for corporate information architecture, hierarchy, enterprise credibility, header/footer richness, and selective motion. Do not copy the visual design.
- Conveo: reference for narrative flow, editorial spacing, and strong statements. Do not inherit its startup aesthetic.

## Motion Policy
Motion must be selective.

- Hero: continuous meaningful background video / ambient motion
- Trust/proof strip: slow continuous horizontal loop
- Major two-column visual/story sections: subtle scroll reveal
- Featured case visual: slight scale/parallax
- Lists, capability rows, insight cards, header, and footer: mostly static
- Text should not constantly fly in from different directions

Principle: **Move the visual system, not every piece of content.**

Hero video should be slow, cinematic, professional, and used as a visual layer only. Avoid generic server-room, coding, hologram, or AI-brain clichés in the final asset.

## Visual Content
The site must not be text-only. Prefer real project screenshots, product UI, diagrams, and carefully selected editorial/corporate imagery. Case studies should be visually strong.

## Information Architecture
Current approved top navigation:
- 課題から探す
- ソリューション
- ご支援の進め方
- 導入事例
- 会社情報
- お問い合わせ

Order is intentional: **problem first, technology second**. Use rich corporate mega menus for 課題から探す, ソリューション, 導入事例, and 会社情報. The header should make the site feel like a complete corporate website, not a small landing page. Insights remain unpublished until real articles exist.

### 課題から探す
This is an important Specdest concept and is preferred over forcing an industry-based navigation model.

Examples:
- AIを業務に活用したい
- 手作業を減らしたい
- 新しいサービスを立ち上げたい
- 既存システムを改善したい
- 技術選定から相談したい
- アイデアを形にしたい

### Solutions / Capabilities
Keep outcomes separate from capabilities.

Outcomes can be framed as: **変える / つくる / 進める**.

Capabilities can include:
- AI・テクノロジー活用支援
- 業務改善・自動化
- デジタルプロダクト開発
- 業務システム開発
- PoC・R&D
- 既存システム改善

Do not make React, Node.js, or other implementation technologies prominent on the top page.

## Homepage Narrative
Preferred flow:
1. Hero / brand vision
2. Brand role / what kind of change Specdest creates
3. Trust / proof strip
4. Business outcomes / solutions
5. Philosophy / approach
6. 課題から探す
7. Selected case studies
8. Capabilities
9. Company
10. Contact
11. Large corporate footer

The homepage should read as a narrative, not Hero → Services → Features → Contact.

## Case Studies and Proof
Case studies are a primary credibility mechanism. Use 3–5 strong cases rather than many equal cards.

Each detailed case should communicate:
- business challenge
- Specdest approach
- proposed solution
- what was built
- outcome and/or ongoing relationship
- relevant visuals/screenshots

Portfolio proof available includes listed-company work, funded startups, long-running engagements, AI / computer vision, workflow platforms, commerce, business systems, and R&D.

Do not invent client logos when client names are confidential. Anonymous proof is acceptable if presented clearly and professionally.

## Footer
Use a substantial corporate footer containing:
- Specdest brand + fixed slogan
- ソリューション
- 導入事例
- Specdestについて
- お問い合わせ
- site map and contact links

## Desired Final Impression
A visitor should think: **“This is a serious technology company I can trust with a difficult business or technology problem.”**

They should not think: “This company sells engineers, offshore development, React development, or packaged AI implementation.”

## Content publication rule
- Do not publish invented articles or placeholder pages.
- Insights stay out of navigation until real articles exist.
- Legal-policy links stay out of navigation until approved final text exists.
- Company facts and case-study claims must be limited to information supported by company materials.
- Do not publish representative personal details until explicitly approved.

## お役立ち記事 / 日本語SEO Content
The site now includes an お役立ち記事 section for Japanese organic traffic.

Purpose:
- Capture Japanese buyers searching for practical system-development and AI-adoption guidance.
- Build trust before inquiry.
- Explain cost, selection, AI adoption, Excel replacement, and failure prevention.

Initial content topics:
- システム開発会社の選び方
- システム開発の費用相場
- 業務システム開発で失敗する理由
- Excel管理をシステム化するタイミング
- 生成AIを業務に導入する方法

Pricing direction:
- Use ranges only as educational `目安`.
- Do not make fixed-price packages visible unless approved.
- Japanese competitors may avoid direct pricing on service pages, but many SEO articles publish cost-range guidance.
- Specdest should use cost articles to reduce buyer anxiety while keeping actual quotations consultative.

## 日本語SEO language rule
- SEO-facing content should prioritize Japanese keywords and Japanese buyer language.
- English labels are allowed only as brand accents, not as primary SEO labels.
- Use terms such as システム開発会社, 業務システム開発, AI業務自動化, 生成AI導入, 費用相場, 外注, 失敗回避.

## SEO Quality Checks
Before deployment, run:

```bash
npm run build
npm run seo:audit
```

The audit should report:
- `pages_with_issues 0`
- `sitemap_uses_www false`
- `robots_uses_www false`
- `canonical_uses_www false`

Japanese SEO remains the priority for all service and article pages.

## Company page separation
- `/company/` is the primary company overview / `Specdestについて` destination.
- `/company/philosophy` is specifically for philosophy and principles; it should feel editorial and distinct from the overview page.
- `/company/profile` is factual corporate information.
- Do not create a separate `/company/about` content page. It redirects to `/company/`.

## Secondary-page design quality
- Page families may share brand tokens, but not one generic composition.
- Check actual desktop/mobile rendering for headline wrapping, sticky-header clipping, image-message mismatch, and excessive whitespace.
- Use internet/reference photography only when semantically appropriate; avoid irrelevant people and recognizable third-party product UI.
- Replace/remove superseded local image assets instead of accumulating unused variants.
