import { useEffect } from 'react';

export const SITE_URL = 'https://harmonies.ae';

function setMetaTag(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonicalLink(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets per-route <title>, meta description, canonical link, and Open
 * Graph/Twitter title+description+url. Googlebot executes JS so this is
 * enough to fix search-result snippets; social-preview scrapers (WhatsApp,
 * Facebook, LinkedIn, Slack) don't run JS, so they'll still see index.html's
 * static fallback tags — an edge-level rewrite would be needed to fix those.
 *
 * Usage: usePageMeta({ title: 'Pricing | Harmonies', description: '...', path: '/pricing' })
 */
export function usePageMeta({ title, description, path }) {
  useEffect(() => {
    document.title = title;
    if (description) setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    if (description) setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', `${SITE_URL}${path}`);
    setMetaTag('name', 'twitter:title', title);
    if (description) setMetaTag('name', 'twitter:description', description);
    setCanonicalLink(`${SITE_URL}${path}`);
  }, [title, description, path]);
}
