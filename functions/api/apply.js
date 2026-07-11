// Cloudflare Pages Function — POST /api/apply
//
// Receives a seller application from the "Become a Seller" modal, stores it
// in D1, and emails a notification via Resend. Both steps are best-effort:
// if email sending fails, the submission is still saved (and vice versa),
// so a hiccup in one doesn't lose the lead.
//
// ---- One-time setup ----
// 1. Create the D1 database:
//      npx wrangler d1 create harmonies-sellers
//    This prints a `database_id` — put it in wrangler.toml (see below).
//
// 2. Create the table:
//      npx wrangler d1 execute harmonies-sellers --file=./schema.sql
//    (schema.sql is included alongside this file)
//
// 3. Bind the database to your Pages project. In the Cloudflare dashboard:
//    Workers & Pages > your project > Settings > Functions > D1 database
//    bindings > add binding, variable name "DB", select the database.
//    (Or add a [[d1_databases]] block to wrangler.toml if you deploy that way.)
//
// 4. Get a free Resend API key at https://resend.com, verify a sending
//    domain (or use their onboarding@resend.dev sender for testing).
//
// 5. Add two environment variables in the Pages dashboard (Settings >
//    Environment variables), as *secrets* (not plaintext):
//      RESEND_API_KEY   = your Resend API key
//      NOTIFY_EMAIL      = the address that should receive new-seller emails
//    Optionally also set FROM_EMAIL (a verified sender) — defaults to
//    Resend's shared test address if not set.

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const name = (body.name || '').toString().trim();
  const whatsapp = (body.whatsapp || '').toString().trim();
  const instagram = (body.instagram || '').toString().trim();
  const website = (body.website || '').toString().trim();
  const email = (body.email || '').toString().trim();
  const howHeard = (body.howHeard || '').toString().trim();

  if (!name || !whatsapp) {
    return json({ error: 'Name and WhatsApp number are required.' }, 400);
  }

  const submittedAt = new Date().toISOString();

  // --- 1. Store in D1 (best-effort) ---
  let dbError = null;
  if (env.DB) {
    try {
      await env.DB.prepare(
        `INSERT INTO seller_applications (name, whatsapp, instagram, website, email, how_heard, submitted_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      ).bind(name, whatsapp, instagram, website, email, howHeard, submittedAt).run();
    } catch (err) {
      dbError = String(err);
    }
  }

  // --- 2. Email notification (best-effort) ---
  let emailError = null;
  if (env.RESEND_API_KEY && env.NOTIFY_EMAIL) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: env.FROM_EMAIL || 'Harmonies <onboarding@resend.dev>',
          to: env.NOTIFY_EMAIL,
          subject: `New seller application: ${name}`,
          html: `
            <h2>New seller application</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>WhatsApp:</strong> +971 ${escapeHtml(whatsapp)}</p>
            <p><strong>Instagram/TikTok:</strong> ${escapeHtml(instagram) || '—'}</p>
            <p><strong>Website:</strong> ${escapeHtml(website) || '—'}</p>
            <p><strong>Email:</strong> ${escapeHtml(email) || '—'}</p>
            <p><strong>How they heard about us:</strong> ${escapeHtml(howHeard) || '—'}</p>
            <p style="color:#888;font-size:12px;margin-top:24px">Submitted ${submittedAt}</p>
          `,
        }),
      });
      if (!res.ok) emailError = `Resend responded ${res.status}: ${await res.text()}`;
    } catch (err) {
      emailError = String(err);
    }
  }

  // Only fail the whole request if BOTH storage and email failed (or
  // neither is configured yet) — otherwise the lead is still captured.
  if (dbError && emailError) {
    return json({ error: 'Could not save or notify.', dbError, emailError }, 500);
  }

  return json({ ok: true, dbError, emailError });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
