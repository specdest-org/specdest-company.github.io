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

### Draft for the existing 比較ビズ listing correction

To send through the account dashboard or official operator support **only after account ownership is verified**. This text does not repeat private information and is not itself a submitted request:

> 件名：掲載中の企業情報の修正・非公開依頼（Specdest株式会社）
>
> 比較ビズ運営ご担当者様
>
> 弊社の掲載情報（https://www.biz.ne.jp/company/specdest/）について、代表者氏名および旧所在地の公開を停止し、該当項目の非表示または掲載ページの取り下げを希望します。必要な本人確認や管理権限の確認手順をご案内ください。なお、確認に必要な個人情報の送付方法は、公開ページではない安全な経路をご指定ください。
>
> Specdest株式会社 / info@specdest.com

Do not include the old address or a personal name in the initial email. Do not falsely claim a correction has been accepted before it is observable publicly.

## 3. Japanese presence — ranked opportunities

| Platform | Official starting point | Assessment | Next step / limitation |
| --- | --- | --- | --- |
| **比較ビズ** | https://www.biz.ne.jp/company/specdest/ | Existing public listing, currently undesirable personal/legacy data exposure | **P0 correction**, not a new registration; use account holder/support to remove or suppress sensitive fields |
| **J-GoodTech / ジェグテック** | https://jgoodtech.smrj.go.jp/pub/ja/deal/ | Government-linked platform, free subject to screening; official application guidelines require representative name, corporate address and a named contact | **HOLD — user restriction:** do not transmit identity details; the reviewed application does not satisfy the permitted company-only fields |
| **イプロス / iPROS** | https://ipros.tayori.com/q/ipros-entry/detail/1335986/ | Free basic exhibition; publicly displays required address/postal code, telephone and a map | **HOLD — user restriction:** do not register while public-address exposure is disallowed |
| **WEBシステム開発会社データベース** | https://grip-space.co.jp/websys-db/ | Offers free listings and directs visitors to company websites | **P1 first candidate**: request a company-only registration with no personal identity/address or mandatory public pricing; require reply about fields and publication review before supplying data |
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

Comparison-site correction is separately owned by the user; do not contact 比較ビズ again in this campaign. Do not submit identity information to other providers or create unverifiable listings.


## 7. November 7 platform requirement check and actionable outreach packet

The following are facts checked against providers' own current materials, not assumed from their homepages:

- J-GoodTech application: [official registration](https://jgoodtech.smrj.go.jp/system/corporations/register), [official eligibility FAQ](https://jgoodtech.smrj.go.jp/pub/ja/faq/). The official application guidelines enumerate corporate identity, representative name, address and named primary contact. Some fields may remain review-only, but **submission itself would disclose identity data**. Do not apply under the present privacy restrictions.
- iPROS: [July 2026 registration FAQ](https://ipros.tayori.com/q/ipros-entry/detail/1335986/) requires physical address and postcode in **published** company information (including map link), not merely internal verification. Do not apply unless the user explicitly approves a business address being published.
- WEBシステム開発会社データベース: [official directory](https://grip-space.co.jp/websys-db/) offers free listings and a website click-through. Application contact/form field restrictions and operator quality have **not** been verified. Ask first whether a company-only listing is accepted and whether address/individual names are displayed; do not submit company data without those answers.
- [AIコモンズ](https://aicommons.jp/): Japanese AI/system-development matching site advertises free provider registration, but charges providers **¥30,000 plus tax per agreed commercial meeting**. Not a free lead-generation program; hold pending explicit paid lead-budget approval.

### Preflight inquiry — Japanese system-development directory

**Channel:** the operator's published free-listing contact form for https://grip-space.co.jp/websys-db/ (no automated submission or personal data sent).

**Subject:** 企業掲載の必須項目・公開範囲の確認（Specdest株式会社）

**Message:**

> WEBシステム開発会社データベース運営ご担当者様
>
> Specdest株式会社（https://specdest.com）の企業掲載を検討しています。弊社では業務システム開発、AI導入支援、Webシステム開発などを行っています。
>
> 企業名、公式サイト、会社共通メールアドレス、サービス紹介のみでの登録は可能でしょうか。代表者氏名・担当者個人名・住所・個人電話番号・料金等の入力は必須でしょうか。特にどの項目が公開され、掲載前に内容の確認・非公開設定・取り下げができるかをご教示ください。
>
> 条件を確認後、掲載文面をお送りします。
>
> Specdest株式会社 / info@specdest.com

**Status:** drafted; **not sent**. Provider application may require authenticated browser access or an outbound email integration, neither established for this account. No claimed submission, backlink or publication.

### Ready-to-paste provider fields (company-only)

| Field | Value |
| --- | --- |
| 企業名 | Specdest株式会社 |
| URL | https://specdest.com |
| 連絡先 | info@specdest.com |
| キャッチコピー | 技術を目的にせず、事業と業務の課題を解決する。 |
| 得意分野 | 業務システム開発 / AI導入支援・PoC / 業務自動化 / Webシステム開発 |
| 会社紹介 | Specdest株式会社は、企業の業務課題や技術的な不確実性に向き合い、要件整理・技術選定・PoCからシステムの設計・開発・継続改善までを支援する日本の技術会社です。業務システム、生成AI導入、業務自動化、Webプラットフォームを主な領域としています。 |
| 事例URL | https://specdest.com/cases/medical-shift-management ; https://specdest.com/cases/ai-chatbot |

**Do not fill** any other fields with inferred representative name, street address, number of staff, revenue, contract minimum, hourly rate or private client data. A provider requesting any of those details is **on hold**, not submitted.
