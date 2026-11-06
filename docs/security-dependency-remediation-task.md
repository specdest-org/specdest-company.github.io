# Task: Remediate dependency security alerts for Specdest LP

## Context
- Repository: `/workspace/specdest-company/services/specdest-company.github.io` (Mac Local Coder Docker path).
- GitHub: `git@github.com:specdest-org/specdest-company.github.io.git`.
- Baseline commit at handoff: `8f6e9e4` (`seo: clarify system development and AI consulting positioning`), on `main`.
- GitHub reported **51 dependency vulnerabilities: 10 high, 36 moderate, 5 low** during the push of that commit. These are **GitHub's reported alert totals**, not independently verified exploitable production vulnerabilities. Recheck current alert status and distinguish direct/transitive, production/build-only, and reachable/not reachable findings.
- Stack: React 18, React Router 6, Vite 4, TypeScript 4.9, pnpm lockfile; prerendered static React/Vite site deployed to Firebase Hosting. Production does **not** run a Node server.
- Project scripts: `npm run build`, `npm run seo:audit`, `npm run preview`; deployment is `pnpm run deploy` (Firebase project `specdest-lp`).
- Source-of-truth decisions: `docs/README.md`, `docs/website-decisions.md`, `docs/website-direction.md`, `docs/architecture.md`.
- Controller rules: `/workspace/specdest-company/tools/controller/agents.md`. Read this first, then check project-local agent instructions if present.
- Alert dashboard: `https://github.com/specdest-org/specdest-company.github.io/security/dependabot` (requires appropriate repository access).

## Objective
Resolve confirmed dependency security alerts with the **smallest compatible updates** while preserving appearance, routing, SEO metadata, static prerender, and Firebase hosting behavior. Do not treat the raw count as proof that deployed client code is vulnerable.

## Work procedure
1. Inspect clean Git state, existing worktrees, `package.json`, `pnpm-lock.yaml`, Node/pnpm versions, and existing project rules. Use an appropriate task worktree if needed and preserve unrelated changes. Use SSH remote; do not bypass branch protection or modify repository-wide policies.
2. Obtain current GitHub Dependabot findings (if authorized), and run the appropriate pnpm audit with available tooling. Classify alerts by package/advisory, severity, dependency path, runtime exposure (browser vs build/deploy tooling), and proposed fix. Note discrepancies between GitHub counts and live audit results.
3. Upgrade impacted direct dependencies first to compatible secure releases and update transitives through the package manager. Avoid blind `--force`, sweeping major-version upgrades, `audit --fix --force`, disabling audits, ignoring advisories, and speculative package replacements. If a major upgrade is needed, assess compatibility and test explicitly. Do not add an extra package manager or multiple lockfiles.
4. Preserve approved corporate design, copy, hero, navigation, all existing routes, 50-page prerender behavior (unless legitimate route changes are independently required), canonical tags, sitemap, robots.txt, accessibility, and Firebase config. No unrelated UI/SEO refactors.
5. Validate with a reproducible install using the lockfile, `npm run build`, `npm run seo:audit`, a remaining-vulnerability audit, and focused functional smoke checks of homepage, service routes, navigation, and prerendered HTML. Run project-required checks where available. Use Controller/Devkit's documented browser workflow if browser verification is needed; do not use an unauthorized alternate browser runner.
6. Document fixed advisories and any unresolved alerts, including reason, actual exposure, available upstream fixes, and recommended follow-up. Report audit results with exact commands and counts.
7. Commit only task-related changes with a clear message. Follow the repository's established Git integration workflow and user authorization; avoid forced pushes. **Do not deploy production** as part of this task without separate explicit approval.

## Acceptance criteria
- No newly introduced vulnerability; confirmed high-severity alerts are fixed where technically feasible, or explicitly documented if blocked.
- Production build and SEO audit pass, and site structure and visuals remain materially unchanged.
- `pnpm-lock.yaml` remains the canonical dependency lockfile, consistent with `package.json`.
- Final report: commit hash / branch, changed dependencies, before/after alert counts, test results, unresolved advisories, and whether production deployment remains pending.

## Constraints
- Do not expose credentials or repository secrets in logs, messages, or commits.
- GitHub's reported 51 alerts may include old or transitive development tools; verify before describing them as production exposure.
- No design changes, new features, new runtime, new host command wrappers, security policy bypasses, or deployment without approval.
