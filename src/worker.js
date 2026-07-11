import { onRequestPost } from '../functions/api/apply.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route API requests to the handler
    if (url.pathname === '/api/apply' && request.method === 'POST') {
      return onRequestPost({ request, env });
    }

    // Try to serve a static asset; fall back to index.html for SPA routes
    const assetResponse = await env.ASSETS.fetch(request).catch(() => null);
    if (assetResponse && assetResponse.status !== 404) return assetResponse;

    // SPA fallback: serve index.html for all unmatched paths
    const indexRequest = new Request(new URL('/', url).toString(), request);
    return env.ASSETS.fetch(indexRequest);
  },
};
