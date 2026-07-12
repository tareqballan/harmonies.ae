import { onRequestPost as applyHandler } from '../functions/api/apply.js';
import { onRequestPost as contactHandler } from '../functions/api/contact.js';
import { onRequestPost as consentHandler } from '../functions/api/consent.js';

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

    // Try to serve a static asset; fall back to index.html for SPA routes
    const assetResponse = await env.ASSETS.fetch(request).catch(() => null);
    if (assetResponse && assetResponse.status !== 404) return assetResponse;

    // SPA fallback: serve index.html for all unmatched paths
    const indexRequest = new Request(new URL('/', url).toString(), request);
    return env.ASSETS.fetch(indexRequest);
  },
};
