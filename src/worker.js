import { onRequestPost } from '../functions/api/apply.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route API requests to the handler
    if (url.pathname === '/api/apply' && request.method === 'POST') {
      return onRequestPost({ request, env });
    }

    // Serve static assets (the Vite build output)
    return env.ASSETS.fetch(request);
  },
};
