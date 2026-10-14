import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './BecomeSellerModal.module.css';
import { HOW_HEARD_OPTIONS, STEP_FIELDS, validateSellerApplication } from '../../shared/sellerApplication';

const INITIAL_FORM = { name: '', whatsapp: '', instagram: '', tiktok: '', website: '', email: '', howHeard: '', message: '' };

export default function BecomeSellerModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [errors, setErrors] = useState({});

  // reset to a fresh state every time the modal opens, per spec
  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setShowSuccess(false);
      setForm(INITIAL_FORM);
      setIsSubmitting(false);
      setSubmitError(null);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const field = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: null }));
  };
  // validates only the fields on the current step; returns true if they pass
  const validateStep = () => {
    const { errors: allErrors } = validateSellerApplication(form);
    const stepErrors = {};
    for (const key of STEP_FIELDS[step]) if (allErrors[key]) stepErrors[key] = allErrors[key];
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };
  const nextStep = () => { if (validateStep()) setStep((s) => Math.min(s + 1, 2)); };
  const prevStep = () => { setErrors({}); setStep((s) => Math.max(s - 1, 0)); };

  const submitSeller = async () => {
    if (!validateStep()) return;
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setShowSuccess(true);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const barColor = (idx) => (step >= idx ? styles.barFilled : styles.barEmpty);

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        {showSuccess ? (
          <div className={`${styles.panel} ${styles.successPanel}`}>
            <div className={`${styles.blob} ${styles.successBlob}`} />
            <div className={styles.checkCircle}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12l5 5L20 6" strokeDasharray="24" className={styles.checkPath} />
              </svg>
            </div>
            <h2 className={styles.successTitle}>You&apos;re on the list!</h2>
            <p className={styles.successCopy}>We&apos;ll message you on WhatsApp within a day to get your storefront set up.</p>
            <button type="button" className={styles.closeButton} onClick={onClose}>Close</button>
          </div>
        ) : (
          <div className={styles.panel}>
            <div className={`${styles.blob} ${styles.blobA}`} />
            <div className={`${styles.blob} ${styles.blobB}`} />

            <div className={styles.topRow}>
              <span className={styles.xButton} onClick={onClose}>&times;</span>
            </div>

            <div className={styles.progressRow}>
              <span className={`${styles.bar} ${styles.barFilled}`} />
              <span className={`${styles.bar} ${barColor(1)}`} />
              <span className={`${styles.bar} ${barColor(2)}`} />
            </div>
            <span className={styles.stepLabel}>Step {step + 1} of 3</span>

            {step === 0 && (
              <>
                <h2 className={styles.heading}>Let&apos;s get you selling. <br />What&apos;s your name?</h2>
                <p className={styles.subcopy}>We just need a few things to set up your Harmony storefront.</p>

                <label className={styles.label}>Your name</label>
                <input
                  type="text"
                  placeholder="e.g. Layla Ahmed"
                  value={form.name}
                  onChange={field('name')}
                  className={styles.input}
                  style={{ marginBottom: 18 }}
                />
                {errors.name && <p className={styles.fieldError}>{errors.name}</p>}

                <label className={styles.label}>WhatsApp number</label>
                <div className={styles.whatsappRow}>
                  <div className={styles.countryCode}>+971</div>
                  <input
                    type="tel"
                    inputMode="tel"
                    placeholder="50 123 4567"
                    value={form.whatsapp}
                    onChange={field('whatsapp')}
                    className={styles.input}
                  />
                </div>
                {errors.whatsapp && <p className={styles.fieldError} style={{ marginTop: -22 }}>{errors.whatsapp}</p>}

                <div className={styles.footerRowEnd}>
                  <button type="button" className={styles.continueButton} onClick={nextStep}>
                    Continue
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h2 className={styles.heading}>Where can buyers find you?</h2>
                <p className={styles.subcopy}>Your Instagram helps us understand your store faster.</p>

                <label className={styles.label}>Instagram account</label>
                <input type="text" placeholder="@yourstore" value={form.instagram} onChange={field('instagram')} className={styles.input} style={{ marginBottom: 16 }} />
                {errors.instagram && <p className={styles.fieldError}>{errors.instagram}</p>}

                <label className={styles.label}>TikTok <span className={styles.optional}>(optional)</span></label>
                <input type="text" placeholder="@yourstore" value={form.tiktok} onChange={field('tiktok')} className={styles.input} style={{ marginBottom: 16 }} />
                {errors.tiktok && <p className={styles.fieldError}>{errors.tiktok}</p>}

                <label className={styles.label}>Website <span className={styles.optional}>(optional)</span></label>
                <input type="text" placeholder="yourstore.com" value={form.website} onChange={field('website')} className={styles.input} style={{ marginBottom: 16 }} />
                {errors.website && <p className={styles.fieldError}>{errors.website}</p>}

                <label className={styles.label}>Email</label>
                <input type="email" inputMode="email" placeholder="you@email.com" value={form.email} onChange={field('email')} className={styles.input} style={{ marginBottom: 30 }} />
                {errors.email && <p className={styles.fieldError} style={{ marginTop: -22 }}>{errors.email}</p>}

                <div className={styles.footerRowBetween}>
                  <span className={styles.backLink} onClick={prevStep}>Back</span>
                  <button type="button" className={styles.continueButton} onClick={nextStep}>
                    Continue
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className={styles.heading}>Almost there!</h2>
                <p className={styles.subcopy}>One last thing, then we&apos;ll be in touch.</p>

                <label className={styles.label}>How&apos;d you hear about us?</label>
                <select
                  value={form.howHeard}
                  onChange={field('howHeard')}
                  className={`${styles.input} ${styles.select}`}
                  style={{ marginBottom: 16, color: form.howHeard ? '#fff' : '#6b6f92' }}
                >
                  <option value="" disabled>Choose one…</option>
                  {HOW_HEARD_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {errors.howHeard && <p className={styles.fieldError}>{errors.howHeard}</p>}

                <label className={styles.label}>Anything you&apos;d like to tell us? <span className={styles.optional}>(optional)</span></label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your store, what you sell, or any questions you have..."
                  value={form.message}
                  onChange={field('message')}
                  className={styles.input}
                  style={{ marginBottom: 30, resize: 'vertical' }}
                />
                {errors.message && <p className={styles.fieldError} style={{ marginTop: -22 }}>{errors.message}</p>}

                <div className={styles.footerRowBetween}>
                  <span className={styles.backLink} onClick={prevStep}>Back</span>
                  <button
                    type="button"
                    className={styles.continueButton}
                    onClick={submitSeller}
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'default' : 'pointer' }}
                  >
                    {isSubmitting ? 'Submitting…' : 'Join as an Early Seller'}
                  </button>
                </div>
                {submitError && <p className={styles.errorText}>{submitError}</p>}
              </>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
