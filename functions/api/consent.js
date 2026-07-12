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
  const { deviceType, browser, os } = parseUserAgent(userAgent);

  // request.cf is populated by Cloudflare's edge for every request — free
  // geolocation, no third-party GeoIP lookup needed.
  const cf = request.cf || {};
  const country = cf.country || null;
  const city = cf.city || null;
  const region = cf.region || null;

  if (!env.DB) {
    return json({ ok: true, skipped: 'DB not bound' });
  }

  try {
    await env.DB.prepare(
      `INSERT INTO cookie_consents
         (client_id, essential, functional, analytics, marketing, ip_address, user_agent,
          device_type, browser, os, country, city, region, decided_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      clientId, essential ? 1 : 0, functional ? 1 : 0, analytics ? 1 : 0, marketing ? 1 : 0,
      ipAddress, userAgent, deviceType, browser, os, country, city, region, decidedAt
    ).run();
  } catch (err) {
    return json({ error: String(err) }, 500);
  }

  return json({ ok: true });
}

// Lightweight User-Agent parsing for a device/browser/OS breakdown —
// not exhaustive (that's what libraries like ua-parser-js are for), but
// enough for a dashboard-level view without adding a dependency to an
// edge Worker. Order matters: e.g. Chrome's UA also contains "Safari",
// Edge's also contains "Chrome", so the more specific checks go first.
function parseUserAgent(ua) {
  if (!ua) return { deviceType: null, browser: null, os: null };

  let deviceType = 'desktop';
  if (/iPad|Android(?!.*Mobile)|Tablet/i.test(ua)) deviceType = 'tablet';
  else if (/Mobi|iPhone|iPod|Android/i.test(ua)) deviceType = 'mobile';

  let browser = 'Other';
  if (/EdgA?\//i.test(ua)) browser = 'Edge';
  else if (/OPR\/|Opera/i.test(ua)) browser = 'Opera';
  else if (/SamsungBrowser/i.test(ua)) browser = 'Samsung Internet';
  else if (/Firefox\//i.test(ua)) browser = 'Firefox';
  else if (/Chrome\//i.test(ua)) browser = 'Chrome';
  else if (/Safari\//i.test(ua)) browser = 'Safari';

  let os = 'Other';
  if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Mac OS X/i.test(ua)) os = 'macOS';
  else if (/Linux/i.test(ua)) os = 'Linux';

  return { deviceType, browser, os };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
