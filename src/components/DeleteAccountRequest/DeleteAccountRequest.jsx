import { useState } from 'react';
import styles from './DeleteAccountRequest.module.css';
import { usePageMeta } from '../../hooks/usePageMeta';
import { Link } from 'react-router-dom';
import CountryCodeSelect from '../CountryCodeSelect/CountryCodeSelect';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import BecomeSellerModal from '../BecomeSellerModal/BecomeSellerModal';

export default function DeleteAccountRequest() {
  usePageMeta({
    title: 'Request Seller Account Deletion | Harmonies',
    description: 'Request the deletion of your Harmonies seller account.',
    path: '/delete-account',
  });

  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
  const handleJoinNow = () => setIsSellerModalOpen(true);
  const closeSellerModal = () => setIsSellerModalOpen(false);

  const [form, setForm] = useState({ name: '', email: '', phoneCode: '+971', phone: '' });
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
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number.';
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/delete-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone ? `${form.phoneCode} ${form.phone}` : '',
        }),
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
      <div className={`${styles.blob} ${styles.blobCoral}`} />
      <div className={`${styles.blob} ${styles.blobBlue}`} />

      <Nav variant="light" onJoinNow={handleJoinNow} />

      <div className={styles.split}>
        {/* Left: policy summary */}
        <div className={styles.copy}>
          <div className={styles.statusPill}>
            <span className={styles.redDot} />
            Account deletion request
          </div>
          <h1 className={styles.heading}>
            Request seller{' '}
            <span className={styles.headingGradient}>account deletion.</span>
          </h1>
          <p className={styles.subCopy}>
            Before submitting a request, please review our account deletion policy below. It's part of our{' '}
            <Link to="/seller-agreement#account-deletion" className={styles.inlineLink}>Seller Agreement, Section 39</Link>.
          </p>

          <div className={styles.policyBox}>
            <p className={styles.policyTitle}>Your account cannot be deleted while:</p>
            <ul className={styles.policyList}>
              <li>Any order is outstanding — unfulfilled, or fulfilled but still within its return window.</li>
              <li>A balance remains in your account that hasn't been withdrawn.</li>
            </ul>
            <p className={styles.policyText}>
              You can close your store at any time while these conditions are outstanding. Once all orders are resolved, return windows have expired, and your balance has been fully withdrawn, you can request deletion again.
            </p>
            <p className={styles.policyText}>
              On deletion, Harmonies retains your store data for <strong>5 years</strong> for legal, tax, and dispute purposes only — it won't be used for marketing, analytics, or anything else. It's permanently deleted after that period.
            </p>
            <Link to="/seller-agreement#account-deletion" className={styles.policyLink}>
              Read the full Account Deletion policy →
            </Link>
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
              <h2 className={styles.successTitle}>Request received</h2>
              <p className={styles.successCopy}>We've received your account deletion request. Our team will review it against the conditions above and get back to you shortly.</p>
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

              <label className={styles.label}>Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={field('email')}
                className={styles.input}
              />
              {errors.email && <p className={styles.errorText}>{errors.email}</p>}

              <label className={styles.label}>Phone number</label>
              <div className={styles.phoneRow}>
                <CountryCodeSelect
                  value={form.phoneCode}
                  onChange={(dial) => setForm((f) => ({ ...f, phoneCode: dial }))}
                />
                <input
                  type="text"
                  placeholder="50 123 4567"
                  value={form.phone}
                  onChange={field('phone')}
                  className={`${styles.input} ${styles.phoneInput}`}
                />
              </div>
              {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}

              <p className={styles.disclaimer}>
                By submitting, you confirm you've reviewed the account deletion conditions and understand your request will only be processed once they're satisfied.
              </p>

              {submitError && <p className={styles.errorText}>{submitError}</p>}

              <button
                type="button"
                className={styles.submitBtn}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting…' : 'Request Account Deletion'}
              </button>
            </>
          )}
        </div>
      </div>

      <Footer />
      <BecomeSellerModal isOpen={isSellerModalOpen} onClose={closeSellerModal} />
    </div>
  );
}
