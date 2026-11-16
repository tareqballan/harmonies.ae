// Runs after `vite build`. Renders the legal and account-deletion pages to
// static HTML so crawlers that don't execute JavaScript see the full text.
// Meta's App Review, for example, rejects a privacy policy URL whose HTML is
// an empty <div id="root">.
//
// Each page is written to dist/<route>.html. Cloudflare's static assets serve
// that file at /<route> (html_handling "auto-trailing-slash", the default),
// so the worker's SPA fallback never runs for these routes.
import { build } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { SITE_URL, PAGE_META } from '../src/pageMeta.js';

const ROUTES = [
  '/privacy-policy',
  '/terms-of-service',
  '/cookies-policy',
  '/return-refund-policy',
  '/seller-verification-kyc-policy',
  '/delete-account',
];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrOut = path.join(root, 'dist-ssr');

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function setAttr(html, selector, attr, value) {
  const re = new RegExp(`(<${selector}[^>]*\\s${attr}=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`prerender: index.html has no <${selector}> to set ${attr} on`);
  return html.replace(re, `$1${escapeHtml(value)}$2`);
}

function applyMeta(html, pathname) {
  const meta = PAGE_META[pathname];
  if (!meta) throw new Error(`prerender: no PAGE_META entry for ${pathname}`);
  const url = `${SITE_URL}${pathname}`;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  html = setAttr(html, 'link rel="canonical"', 'href', url);
  html = setAttr(html, 'meta name="description"', 'content', meta.description);
  html = setAttr(html, 'meta property="og:title"', 'content', meta.title);
  html = setAttr(html, 'meta property="og:description"', 'content', meta.description);
  html = setAttr(html, 'meta property="og:url"', 'content', url);
  html = setAttr(html, 'meta name="twitter:title"', 'content', meta.title);
  html = setAttr(html, 'meta name="twitter:description"', 'content', meta.description);
  return html;
}

await build({
  root,
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.jsx', outDir: ssrOut, emptyOutDir: true },
});

try {
  const { render } = await import(pathToFileURL(path.join(ssrOut, 'entry-server.js')).href);
  const template = await readFile(path.join(dist, 'index.html'), 'utf8');
  if (!template.includes('<div id="root"></div>')) throw new Error('prerender: index.html has no empty #root');

  for (const route of ROUTES) {
    const body = render(route);
    if (body.length < 500) throw new Error(`prerender: ${route} rendered almost nothing`);
    const html = applyMeta(template, route).replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    await writeFile(path.join(dist, `${route.slice(1)}.html`), html);
    console.log(`prerendered ${route} (${Math.round(html.length / 1024)} KB)`);
  }
} finally {
  await rm(ssrOut, { recursive: true, force: true });
}
