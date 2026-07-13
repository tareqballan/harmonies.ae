import { onRequestPost as applyHandler } from '../functions/api/apply.js';
import { onRequestPost as contactHandler } from '../functions/api/contact.js';
import { onRequestPost as consentHandler } from '../functions/api/consent.js';
import { onRequestPost as bannerImpressionHandler } from '../functions/api/banner-impression.js';

const SITE_URL = 'https://harmonies.ae';

// Mirrors the per-route title/description passed to usePageMeta() in each
// page component. Keep in sync with those when adding/editing routes.
const PAGE_META = {
  '/': {
    title: 'Harmonies — From Zero to Hero',
    description: 'Harmonies helps local, social-first sellers turn their following into a professional online business.',
  },
  '/contact': {
    title: 'Contact Us | Harmonies',
    description: 'Have a question about selling on Harmonies? Get in touch — we usually reply within a day.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Harmonies',
    description: 'How Harmonies collects, uses, stores, and protects your personal information.',
  },
  '/terms-of-service': {
    title: 'Terms of Service | Harmonies',
    description: 'The terms governing your access to and use of the Harmonies platform.',
  },
  '/cookies-policy': {
    title: 'Cookies Policy | Harmonies',
    description: 'How Harmonies uses cookies and similar technologies, and how to manage your preferences.',
  },
  '/why-harmonies': {
    title: 'Why Harmonies? | Turn Your Passion Into a Growing Business',
    description: 'See how Harmonies helps local businesses sell more, build their brand, and manage growth — all from one platform.',
  },
  '/pricing': {
    title: 'Pricing | Become a Harmonies Partner Seller for Free',
    description: "Join Harmonies at no cost — no fees, no contracts. Optional paid services like marketing and design support are available when you're ready to grow.",
  },
  '/features': {
    title: 'Features | Everything You Need to Sell, Market & Grow',
    description: "Explore Harmonies' seller tools — storefronts, curated collections, marketing support, order management, and analytics, built for local businesses.",
  },
  '/faqs': {
    title: 'FAQs | Harmonies Seller Questions Answered',
    description: 'Answers to common questions about becoming a Harmonies seller — eligibility, required documents, approval time, and how the platform works.',
  },
  '/about-harmonies': {
    title: 'About Harmonies | Empowering Local Creators',
    description: 'Harmonies is a social commerce platform designed to help local businesses and creators sell, grow, and build meaningful connections with customers — all in one place.',
  },
};

class ElementSetter {
  constructor(content) {
    this.content = content;
  }
  element(element) {
    element.setInnerContent(this.content);
  }
}

class AttributeSetter {
  constructor(attribute, value) {
    this.attribute = attribute;
    this.value = value;
  }
  element(element) {
    element.setAttribute(this.attribute, this.value);
  }
}

// Rewrites the static, homepage-only <title>/description/canonical/OG tags
// baked into index.html so the raw HTML for each route (before any client
// JS runs) already carries that route's own metadata. Without this, every
// route served the same canonical="/" tag, which made Google treat
// /features, /faqs, etc. as duplicates of the homepage and drop them from
// the index.
function injectPageMeta(response, pathname) {
  const meta = PAGE_META[pathname];
  if (!meta) return response;
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

  return new HTMLRewriter()
    .on('title', new ElementSetter(meta.title))
    .on('link[rel="canonical"]', new AttributeSetter('href', canonicalUrl))
    .on('meta[name="description"]', new AttributeSetter('content', meta.description))
    .on('meta[property="og:title"]', new AttributeSetter('content', meta.title))
    .on('meta[property="og:description"]', new AttributeSetter('content', meta.description))
    .on('meta[property="og:url"]', new AttributeSetter('content', canonicalUrl))
    .on('meta[name="twitter:title"]', new AttributeSetter('content', meta.title))
    .on('meta[name="twitter:description"]', new AttributeSetter('content', meta.description))
    .transform(response);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/apply' && request.method === 'POST') {
      return applyHandler({ request, env });
    }

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return contactHandler({ request, env, ctx });
    }

    if (url.pathname === '/api/consent' && request.method === 'POST') {
      return consentHandler({ request, env });
    }

    if (url.pathname === '/api/banner-impression' && request.method === 'POST') {
      return bannerImpressionHandler({ request, env });
    }

    // Try to serve a static asset; fall back to index.html for SPA routes
    const assetResponse = await env.ASSETS.fetch(request).catch(() => null);
    if (assetResponse && assetResponse.status !== 404) return assetResponse;

    // SPA fallback: serve index.html for all unmatched paths
    const indexRequest = new Request(new URL('/', url).toString(), request);
    const indexResponse = await env.ASSETS.fetch(indexRequest);
    return injectPageMeta(indexResponse, url.pathname);
  },
};
