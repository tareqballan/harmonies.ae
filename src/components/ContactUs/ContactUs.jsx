import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactUs.module.css';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);

  const field = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: null }));
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name.';
    if (!form.email.trim()) newErrors.email = 'Please enter your email.';
    if (!form.whatsapp.trim()) newErrors.whatsapp = 'Please enter your WhatsApp number.';
    if (!form.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!form.message.trim()) newErrors.message = 'Please enter a message.';
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* Ambient blobs */}
      <div className={`${styles.blob} ${styles.blobCoral}`} />
      <div className={`${styles.blob} ${styles.blobBlue}`} />

      {/* Nav */}
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLogo}>
          <img src="/assets/harmonies-mark.png" alt="Harmonies" className={styles.navMark} />
          <span className={styles.navWordmark}>Harmonies</span>
        </Link>
        <Link to="/" className={styles.backLink}>← Back to site</Link>
      </nav>

      {/* Split layout */}
      <div className={styles.split}>
        {/* Left: copy */}
        <div className={styles.copy}>
          <div className={styles.statusPill}>
            <span className={styles.greenDot} />
            We usually reply within a day
          </div>
          <h1 className={styles.heading}>
            Let&apos;s talk.{' '}
            <span className={styles.headingGradient}>We&apos;re listening.</span>
          </h1>
          <p className={styles.subCopy}>
            Questions, feedback, or just want to say hi — drop us a line and a real person will get back to you.
          </p>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/harmonies.ae" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@harmonies.ae" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.socialBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                <path d="M16.6 5.8c-.9-.9-1.4-2.1-1.4-3.4h-3.1v14.2c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .6 0 .8.1v-3.2c-.3 0-.5-.1-.8-.1-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8v-7c1.2.9 2.7 1.4 4.3 1.4v-3.1c-1 0-1.9-.3-2.7-.9z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/harmonies-ae/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.75h4.5V23H.24V8.75zM8.5 8.75h4.3v1.95h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.85c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.77-2.62 3.6V23H8.5V8.75z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: form card */}
        <div className={styles.card}>
          {submitted ? (
            <div className={styles.successState}>
              <div className={styles.checkCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12l5 5L20 6" strokeDasharray="24" className={styles.checkPath} />
                </svg>
              </div>
              <h2 className={styles.successTitle}>Message sent!</h2>
              <p className={styles.successCopy}>Thanks for reaching out — we&apos;ll get back to you within a day.</p>
            </div>
          ) : (
            <>
              <label className={styles.label}>Your name</label>
              <input
                type="text"
                placeholder="e.g. Layla Ahmed"
                value={form.name}
                onChange={field('name')}
                className={styles.input}
              />
              {errors.name && <p className={styles.errorText}>{errors.name}</p>}

              <div className={styles.row2}>
                <div className={styles.fieldCol}>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={field('email')}
                    className={styles.input}
                  />
                  {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                </div>
                <div className={styles.fieldCol}>
                  <label className={styles.label}>WhatsApp</label>
                  <div className={styles.whatsappRow}>
                    <div className={styles.countryCode}>+971</div>
                    <input
                      type="text"
                      placeholder="50 123 4567"
                      value={form.whatsapp}
                      onChange={field('whatsapp')}
                      className={`${styles.input} ${styles.whatsappInput}`}
                    />
                  </div>
                  {errors.whatsapp && <p className={styles.errorText}>{errors.whatsapp}</p>}
                </div>
              </div>

              <label className={styles.label}>Subject</label>
              <input
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={field('subject')}
                className={styles.input}
              />
              {errors.subject && <p className={styles.errorText}>{errors.subject}</p>}

              <label className={styles.label}>Message</label>
              <textarea
                placeholder="How can we help?"
                rows={4}
                value={form.message}
                onChange={field('message')}
                className={`${styles.input} ${styles.textarea}`}
              />
              {errors.message && <p className={styles.errorText}>{errors.message}</p>}

              {submitError && <p className={styles.errorText}>{submitError}</p>}

              <button
                type="button"
                className={styles.submitBtn}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
