// Cloudflare Worker Function — POST /api/contact
// Stores contact form submissions in D1 and sends a Resend notification.

export async function onRequestPost({ request, env }) {
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
          subject: `New contact message: ${subject || name}`,
          html: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp ? `+971 ${escapeHtml(whatsapp)}` : '—'}</p>
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
