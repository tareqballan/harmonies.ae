// Cloudflare Pages Function — POST /api/consent
//
// Records a cookie-consent decision (accept all / reject non-essential /
// save preferences) to D1 as an audit trail. This is separate from the
// client-side localStorage flag in CookieConsent.jsx, which only controls
// whether the banner reappears on this device — it isn't proof of
// anything on its own. Best-effort, same pattern as apply.js/contact.js:
// if D1 isn't bound yet, this quietly no-ops rather than breaking the
// banner for visitors.
//
// Uses the same `cookie_consents` table created by schema.sql (see the
// D1 setup notes in functions/api/apply.js — same database, one more
// table, run schema.sql again after pulling this change).

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const clientId = (body.clientId || '').toString().trim() || null;
  const essential = body.essential !== false; // always true in practice; kept explicit for the audit record
  const functional = !!body.functional;
  const analytics = !!body.analytics;
  const marketing = !!body.marketing;
  const decidedAt = new Date().toISOString();
  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;

  if (!env.DB) {
    return json({ ok: true, skipped: 'DB not bound' });
  }

  try {
    await env.DB.prepare(
      `INSERT INTO cookie_consents (client_id, essential, functional, analytics, marketing, ip_address, user_agent, decided_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(clientId, essential ? 1 : 0, functional ? 1 : 0, analytics ? 1 : 0, marketing ? 1 : 0, ipAddress, userAgent, decidedAt).run();
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
