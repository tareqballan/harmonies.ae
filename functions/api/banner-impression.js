// Cloudflare Pages Function — POST /api/banner-impression
//
// Records that the cookie-consent banner was shown, so drop-off rate
// (impressions vs decisions) can be computed. Deliberately minimal —
// no IP, no user agent, just a timestamp and the same anonymous
// client_id used in consent.js. This is not a consent-gated cookie
// itself, it's a strictly-necessary ping about the consent mechanism's
// own UX, not about the visitor.

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const clientId = (body.clientId || '').toString().trim() || null;
  const shownAt = new Date().toISOString();

  if (!env.DB) {
    return json({ ok: true, skipped: 'DB not bound' });
  }

  try {
    await env.DB.prepare(
      `INSERT INTO cookie_banner_impressions (client_id, shown_at) VALUES (?, ?)`
    ).bind(clientId, shownAt).run();
  } catch (err) {
    return json({ error: String(err) }, 500);
  }

  return json({ ok: true });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
