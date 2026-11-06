# Dependency security remediation — 2026-11-06

## Audit and dependency changes

- Baseline `pnpm audit --json`: **37 advisories** (10 high, 23 moderate, 4 low). GitHub's Dependabot API separately returned **51 open alerts** (10 high, 36 moderate, 5 low) before remediation; counts and update times differ.
- After `pnpm audit --json`: **3 advisories** (0 high, 3 moderate, 0 low).
- Updated direct dependencies: `react-router-dom` 6.30.3 → 6.30.6; `vite` 4.0.0 → 6.4.4; `@vitejs/plugin-react` 3.0.0 → 4.7.0.
- Updated compatible transitives via `pnpm update --depth 99`, including vulnerable `nanoid`, `postcss`, `browserslist`, `baseline-browser-mapping`, `source-map-js`, `@babel/core`, and `esbuild`. `pnpm-lock.yaml` remains canonical.

## Unresolved moderate advisories

| Advisory | Package / scope | Exposure, limitation, follow-up |
| --- | --- | --- |
| [GHSA-wrjc-x8rr-h8h6](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6) | `react-router` 6.30.6; runtime | Backslash-based open redirect through navigation APIs. No identified untrusted navigation input in this static corporate site. Fix requires React Router >=7.18.0, a major upgrade needing routing smoke tests. |
| [GHSA-337j-9hxr-rhxg](https://github.com/advisories/GHSA-337j-9hxr-rhxg) | `react-router` 6.30.6; runtime | SSR hydration error deserialization. The site prerenders at build time and has no exposed React Router SSR handler. Fix requires React Router >=7.18.0 and migration verification. |
| [GHSA-8g5g-mxqh-grgj](https://github.com/advisories/GHSA-8g5g-mxqh-grgj) | `vite` 6.4.4; development | Dev-server `server.fs.deny` bypass through queries. No Vite server runs in Firebase production. Audit reports no patched version for this release. A Vite 7+ migration requires testing and changing the project's current Node >=18 support requirement. Do not expose the dev server to untrusted networks. |

No high advisories remain. The fixed development-only advisories do not imply that the deployed Firebase static site was directly exploitable. Remaining router advisories are still runtime-scoped.

## Verification

- `pnpm install --frozen-lockfile`: passed.
- `npm run build`: passed; client/SSR output and 50 prerendered routes.
- `npm run seo:audit`: passed; 50 pages, 0 issues, 50 sitemap URLs.
- Checked sitemap entries against generated HTML: 50/50 present; homepage, contact and insights HTML present; robots and homepage canonical present.
- `pnpm audit --json`: 0 critical, 0 high, 3 moderate, 0 low.

No design, content, or Firebase configuration changes; no production deployment. Visual browser comparison was not performed for this dependency-only change.
