# Anonymous case studies and directory listings — privacy-first execution

Updated: 2026-11-07. This is the operational plan for increasing Japanese presence without disclosing a representative's identity or personal address. Never use this document to infer authorization to disclose client details or register private identity data.

## 1. Anonymous case-study precedents and copy rules

Examples reviewed on 2026-11-07:

- [株式会社リテラル — 開発事例](https://www.literal.jp/system/cases/index.html): explicitly avoids client names; focuses on existing workflow, actual implementation and operational change.
- [Leapcom — 事例](https://www.leapcom.co.jp/cases): some client identities intentionally anonymized and described by industry or role.
- [Paddy & Water — 支援事例](https://www.pnw.jp/支援事例一覧-2/): says names are anonymized under confidentiality obligations; uses industry and project conditions.

**Preferred case structure:** `業界・事業の種類` → `現場の課題` → `実装した機能・技術的判断` → `検証済みの到達点` → `関連サービス`. Use generic, accurate customer descriptions such as `医療法人向け` (already supported by the existing case) or `国内企業向け`. Do not use industry, market size, company status, or other identifying facts unless verified and permitted for release. `大手食品メーカー` and `上場企業` are *claims*, not anonymization tricks; never invent them or imply project scope, results, or client permission. Consider reidentification through combinations of sector, exact team size, dates, region, and niche implementation. Avoid screenshots with personal data, company branding, distinctive UI, or trade secrets.

**This pass:** added a short explanatory disclosure to the `/cases` index. The existing 12 case studies remain anonymous, with no new customer categories or result figures invented. The supporting service links were already added in `e6013a7`.

## 2. Public-privacy discovery (2026-11-07)

- **Specdest site:** `/company/profile` publishes *business* contact details, including the corporate office address; `scripts/prerender.mjs` publishes the same corporate location in Organization JSON-LD. No CEO/representative name was found in the reviewed site source. Review whether the business address is genuinely suitable for public business use; do not replace it with a private address.
- **Existing 比較ビズ profile**: [business listing](https://www.biz.ne.jp/company/specdest/) publicly displays a representative's name and a **legacy address**. Priority: request the profile owner/operator to remove the representative-name field, suppress the legacy address if allowed, or unpublish the profile. The legacy address is visible on an existing business listing; **do not replicate it in any new listing or public notes**. Verify live response, then request search-result recrawl as appropriate. A listing already exists, so do not create a duplicate.
- **Existing MyCone legal disclosure:** [site disclosure page](https://mycone.jp/deal) includes a representative name. It is a *separate operated service* and may fall under Japanese commercial disclosure obligations. Do **not** blindly remove legally mandatory fields. Have counsel review the required legal disclosure fields and any compliant alternative publication procedure first.
- **Public corporate registries:** government and derivative registry sites may expose the registered **corporate** address by law. Do not assume an SEO profile correction can suppress government records. Never add or republish a personal address.

**External listing privacy gate:** Public fields may contain only company name, brand summary, official website, general business mailbox, approved services, and approved non-identifying case references. Do not use CEO/representative name, personal emails, private/mobile numbers, personal/home/former addresses, DOB, or client identifiers. If a provider requires personal ID, name, street address, employee count, project minimum or hourly price: **stop** rather than guessing or substituting false values. Confirm the provider's public vs private data treatment and corporate information suitability before submission. Keep credentials, platform sessions, personal documents, and approval records outside the public repository.

## 3. Japanese presence — ranked opportunities

| Platform | Official starting point | Assessment | Next step / limitation |
| --- | --- | --- | --- |
| **比較ビズ** | https://www.biz.ne.jp/company/specdest/ | Existing public listing, currently undesirable personal/legacy data exposure | **P0 correction**, not a new registration; use account holder/support to remove or suppress sensitive fields |
| **J-GoodTech / ジェグテック** | https://jgoodtech.smrj.go.jp/pub/ja/deal/ | Government-linked platform; free with eligibility screening, not a quick backlink farm | **P1** after confirming eligibility and that application/public form does not demand private identity data; consult program rules |
| **イプロス / iPROS** | https://ipros.tayori.com/q/ipros-entry/detail/1059560/ | Free basic exhibition; business/industrial rather than broad software-agency audience | **P2** for enterprise/industrial solution services; registration may require company location, so privacy review first |
| **WEBシステム開発会社データベース** | https://grip-space.co.jp/websys-db/ | Claims free listing and direct traffic to official website | **P2 trial** after confirming genuine editorial/operating credibility and whether address/representative are public |
| **発注ナビ** | https://hnavi.co.jp/ | Qualified Japanese IT procurement channel | **Evaluate vendor pricing and applicant requirements**; its “free” proposition is to clients requesting quotes, not evidence of free vendor inclusion |
| **システム幹事** | https://system-kanji.com/ | Japanese system-development buyer audience | **Evaluate vendor pricing and personal-information requirements**; free buyer consultations do not establish free vendor listing |

Other sites such as 比較ビズ and PRONI may charge providers: never treat an offer of free quotes to buyers as free company registration.

## 4. International presence — priority after Japanese correction

| Platform | Official link | Conditions and privacy note |
| --- | --- | --- |
| **Clutch** | https://clutch.co/get-listed | Free basic listing, but the basic tier does **not** include a website link from directory pages. Submission may request locations, project minimums, hourly rates and an operator login; do not guess. |
| **GoodFirms** | https://www.goodfirms.co/get-listed | Free listing subject to research acceptance. The official help lists a physical address, employees and hourly pricing as required profile data. **Do not submit** without confirming safe company-only details and acceptable publication controls. |

## 5. Approved-to-draft company-only profile (no personal identity data)

**Company**: Specdest株式会社 (Specdest)

**Website**: https://specdest.com

**General contact mailbox**: info@specdest.com

**JP short bio:**
> Specdest株式会社は、業務システム開発、AI導入支援、業務自動化、Webシステム開発、PoC・技術検証を支援する技術会社です。課題整理から技術選定、設計・開発、運用後の改善まで、事業や現場の状況に応じた支援を行います。

**EN short bio:**
> Specdest is a Japan-based technology company supporting business system development, AI adoption, workflow automation, web platforms, and technical proof-of-concept projects. We help clients define problems, evaluate options, build systems, and improve them after launch.

**Service focus**: custom business software; AI adoption and PoC; workflow automation; web platforms; ongoing product development.

**Safe examples**: /cases/medical-shift-management, /cases/workflow-platform, /cases/ai-chatbot. Leave all client names omitted.

**Intentionally not supplied**: a CEO name, personal address, individual phone/email, full street address, pricing, employee count, average contract size, client logos, testimonials and private project metrics.

## 6. Submission and correction status

As of this review, **zero new external profiles submitted, claimed, or verified live**. The company-safe copy above is ready for eligible providers. Some platform onboarding requires authenticated login and mandatory personal/address/price information; do not bypass these gates. A third-party removal or correction request is *not completed* until the platform confirms the change and the public profile is rechecked.

Prioritize removing personal/legacy disclosures from the existing directory before any new listing campaign. No new personally identifying data should enter an external provider through this workflow.
