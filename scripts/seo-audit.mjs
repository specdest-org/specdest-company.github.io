import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const htmlFiles = [];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    if (entry.isFile() && entry.name === 'index.html') htmlFiles.push(full);
  }
}

function stripTags(value) {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function getRoute(file) {
  const relative = path.relative(dist, file);
  if (relative === 'index.html') return '/';
  return '/' + path.dirname(relative).replace(/\\/g, '/');
}
function auditHtml(route, html) {
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim() ?? '';
  const description = html.match(/<meta name="description" content="([^"]*)" \/>/)?.[1] ?? '';
  const canonical = html.match(/<link rel="canonical" href="([^"]*)" \/>/)?.[1] ?? '';
  const h1s = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gs)].map((match) => stripTags(match[1]));
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
  const missingAlt = imgs.filter((tag) => !/\balt="[^"]*"/.test(tag));
  const issues = [];

  if (!title) issues.push('missing title');
  if (title.length > 70) issues.push(`title too long ${title.length}`);
  if (description.length < 50) issues.push(`meta description too short ${description.length}`);
  if (description.length > 160) issues.push(`meta description too long ${description.length}`);
  if (h1s.length !== 1) issues.push(`H1 count ${h1s.length}`);
  if (!canonical.startsWith('https://specdest.com')) issues.push(`bad canonical ${canonical}`);
  if (canonical.includes('www.specdest.com')) issues.push('canonical uses www');
  if (missingAlt.length) issues.push(`images missing alt ${missingAlt.length}`);

  return { route, title, descriptionLength: description.length, h1s, canonical, issues };
}
await walk(dist);
const reports = [];
for (const file of htmlFiles.sort()) {
  const html = await fs.readFile(file, 'utf8');
  reports.push(auditHtml(getRoute(file), html));
}

const issueReports = reports.filter((report) => report.issues.length > 0);
console.log(`pages ${reports.length}`);
console.log(`pages_with_issues ${issueReports.length}`);
for (const report of issueReports) {
  console.log(`ISSUE ${report.route} | ${report.issues.join('; ')} | title=${report.title}`);
}

const sitemap = await fs.readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const robots = await fs.readFile(path.join(dist, 'robots.txt'), 'utf8');
console.log(`sitemap_urls ${(sitemap.match(/<url>/g) ?? []).length}`);
console.log(`sitemap_uses_www ${sitemap.includes('www.specdest.com')}`);
console.log(`robots_uses_www ${robots.includes('www.specdest.com')}`);
console.log(`canonical_uses_www ${reports.some((report) => report.canonical.includes('www.specdest.com'))}`);
