// Cloudflare Worker Function — POST /api/contact
// Stores contact form submissions in D1 and sends a Resend notification.

export async function onRequestPost({ request, env, ctx }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const name = (body.name || '').toString().trim();
  const email = (body.email || '').toString().trim();
  const whatsapp = (body.whatsapp || '').toString().trim();
  const subject = (body.subject || '').toString().trim();
  const message = (body.message || '').toString().trim();

  if (!name || !email || !message) {
    return json({ error: 'Name, email, and message are required.' }, 400);
  }

  const submittedAt = new Date().toISOString();

  // --- 1. Store in D1 (best-effort) ---
  let dbError = null;
  if (env.DB) {
    try {
      await env.DB.prepare(
        `INSERT INTO contact_submissions (name, email, whatsapp, subject, message, submitted_at)
         VALUES (?, ?, ?, ?, ?, ?)`
      ).bind(name, email, whatsapp, subject, message, submittedAt).run();
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
          subject: `New contact message: ${subject || name}`,
          html: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp ? escapeHtml(whatsapp) : '—'}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject) || '—'}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="border-left:3px solid #FC635E;padding-left:12px;color:#444">${escapeHtml(message).replace(/\n/g, '<br>')}</blockquote>
            <p style="color:#888;font-size:12px;margin-top:24px">Submitted ${submittedAt}</p>
          `,
        }),
      });
      if (!res.ok) emailError = `Resend responded ${res.status}: ${await res.text()}`;
    } catch (err) {
      emailError = String(err);
    }
  }

  // --- 3. Confirmation email to visitor (best-effort, non-blocking) ---
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
        subject: `We received your message — Harmonies`,
        html: `
          <div style="font-family:'Plus Jakarta Sans',sans-serif;max-width:520px;margin:0 auto;color:#0d1033">
            <div style="background:linear-gradient(135deg,#FC635E,#f5878a 60%,#966ac2 100%);border-radius:16px 16px 0 0;padding:32px 36px">
              <img src="https://harmonies.ae/assets/harmonies-mark.png" alt="Harmonies" style="height:36px;width:auto;display:block;margin-bottom:16px">
              <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:24px;color:#fff;margin:0;line-height:1.3">We got your message!</h1>
            </div>
            <div style="background:#fff;border-radius:0 0 16px 16px;padding:32px 36px;border:1px solid #e7e3dc;border-top:none">
              <p style="font-size:16px;line-height:1.65;color:#5B596B;margin:0 0 20px">Hi ${escapeHtml(name)},</p>
              <p style="font-size:16px;line-height:1.65;color:#5B596B;margin:0 0 20px">Thanks for reaching out — we've received your message and will get back to you within a day.</p>
              <div style="background:#faf9f6;border-radius:12px;padding:18px 20px;margin:0 0 24px;border:1px solid #e7e3dc">
                <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#a8a5b8;margin:0 0 8px">Your message</p>
                <p style="font-size:14px;color:#5B596B;margin:0;line-height:1.6"><strong>${escapeHtml(subject)}</strong></p>
                <p style="font-size:14px;color:#5B596B;margin:8px 0 0;line-height:1.6">${escapeHtml(message).replace(/\n/g, '<br>')}</p>
              </div>
              <p style="font-size:15px;color:#0d1033;font-weight:600;margin:0 0 4px">The Harmonies team</p>
              <p style="font-size:13px;color:#a8a5b8;margin:0">harmonies.ae</p>
            </div>
          </div>
        `,
      }),
      }).catch(() => {});
    if (ctx?.waitUntil) ctx.waitUntil(confirmationFetch);
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
