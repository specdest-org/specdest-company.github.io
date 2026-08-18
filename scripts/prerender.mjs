import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const serverFile = path.join(root, 'dist-server', 'entry-server.js');
const { render, siteRoutes } = await import(pathToFileURL(serverFile).href);
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
const baseUrl = 'https://www.specdest.com';

function htmlFor(route) {
  const url = `${baseUrl}${route.path === '/' ? '/' : route.path}`;
  return template
    .replace('<!--app-html-->', render(route.path))
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
}

for (const route of siteRoutes) {
  const target = route.path === '/' ? path.join(dist, 'index.html') : path.join(dist, route.path.slice(1), 'index.html');
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, htmlFor(route));
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${siteRoutes.map((route) => `  <url><loc>${baseUrl}${route.path}</loc></url>`).join('\n')}\n</urlset>\n`;
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap);
await fs.writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`);
await fs.writeFile(path.join(dist, '404.html'), htmlFor(siteRoutes[0]));
await fs.rm(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log(`Prerendered ${siteRoutes.length} routes with sitemap and robots.txt`);
