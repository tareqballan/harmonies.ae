// Cloudflare Worker Function — POST /api/delete-account
// Stores seller account deletion requests in D1 and sends a Resend notification.

export async function onRequestPost({ request, env, ctx }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const name = (body.name || '').toString().trim();
  const email = (body.email || '').toString().trim();
  const phone = (body.phone || '').toString().trim();

  if (!name || !email || !phone) {
    return json({ error: 'Name, email, and phone number are required.' }, 400);
  }

  const submittedAt = new Date().toISOString();

  // --- 1. Store in D1 (best-effort) ---
  let dbError = null;
  if (env.DB) {
    try {
      await env.DB.prepare(
        `INSERT INTO account_deletion_requests (name, email, phone, submitted_at)
         VALUES (?, ?, ?, ?)`
      ).bind(name, email, phone, submittedAt).run();
    } catch (err) {
      dbError = String(err);
    }
  }

  // --- 2. Email notification to team (best-effort) ---
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
          subject: `Seller account deletion request: ${name}`,
          html: `
            <h2>New account deletion request</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p style="color:#888;font-size:12px;margin-top:24px">Submitted ${submittedAt}</p>
          `,
        }),
      });
      if (!res.ok) emailError = `Resend responded ${res.status}: ${await res.text()}`;
    } catch (err) {
      emailError = String(err);
    }
  }

  // --- 3. Confirmation email to seller (best-effort, non-blocking) ---
  if (env.RESEND_API_KEY && email) {
    const confirmationFetch = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.FROM_EMAIL || 'Harmonies <onboarding@resend.dev>',
        to: email,
        subject: `We received your account deletion request — Harmonies`,
        html: `
          <div style="font-family:'Plus Jakarta Sans',sans-serif;max-width:520px;margin:0 auto;color:#0d1033">
            <div style="background:linear-gradient(135deg,#FC635E,#f5878a 60%,#966ac2 100%);border-radius:16px 16px 0 0;padding:32px 36px">
              <img src="https://harmonies.ae/assets/harmonies-mark.png" alt="Harmonies" style="height:36px;width:auto;display:block;margin-bottom:16px">
              <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:24px;color:#fff;margin:0;line-height:1.3">Deletion request received</h1>
            </div>
            <div style="background:#fff;border-radius:0 0 16px 16px;padding:32px 36px;border:1px solid #e7e3dc;border-top:none">
              <p style="font-size:16px;line-height:1.65;color:#5B596B;margin:0 0 20px">Hi ${escapeHtml(name)},</p>
              <p style="font-size:16px;line-height:1.65;color:#5B596B;margin:0 0 20px">We've received your request to delete your Harmonies seller account. Our team will review it against the conditions in Section 39 of the Seller Agreement — outstanding orders, active return windows, and any unwithdrawn balance — before proceeding.</p>
              <p style="font-size:16px;line-height:1.65;color:#5B596B;margin:0 0 20px">If any of those conditions apply, we'll be in touch so you can resolve them first. Otherwise, we'll confirm once your account has been deleted.</p>
              <p style="font-size:15px;color:#0d1033;font-weight:600;margin:0 0 4px">The Harmonies team</p>
              <p style="font-size:13px;color:#a8a5b8;margin:0">harmonies.ae</p>
            </div>
          </div>
        `,
      }),
      }).then(async (res) => {
        if (!res.ok) console.error(`[delete-account] confirmation email to ${email} failed: ${res.status} ${await res.text()}`);
      }).catch((err) => console.error(`[delete-account] confirmation email to ${email} threw:`, err));
    if (ctx?.waitUntil) ctx.waitUntil(confirmationFetch);
    else await confirmationFetch;
  }

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
