import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CookieConsent.module.css';

const STORAGE_KEY = 'harmonies_cookie_consent';

/**
 * Persisted accept/reject/preferences flow per the design handoff: shown
 * once on first visit, then never again once a choice is saved. Swaps its
 * own content between the banner and preferences views rather than opening
 * a separate modal, matching the reference.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true, marketing: true });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const saveConsent = (consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, decidedAt: Date.now() }));
    } catch {
      // localStorage unavailable (private browsing, etc.) — consent just won't persist across visits
    }
    setVisible(false);
    setManaging(false);
  };

  if (!visible) return null;

  const acceptAll = () => saveConsent({ essential: true, analytics: true, marketing: true });
  const rejectAll = () => saveConsent({ essential: true, analytics: false, marketing: false });
  const savePreferences = () => saveConsent({ essential: true, ...prefs });

  return (
    <div className={styles.wrap} data-screen-label="Cookie Consent">
      <div className={styles.card}>
        {managing ? (
          <div className={styles.panel}>
            <div className={styles.prefsHead}>
              <span className={styles.prefsTitle}>Cookie preferences</span>
              <button
                type="button"
                className={styles.closeBtn}
                aria-label="Close"
                onClick={() => setManaging(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className={styles.prefsCopy}>Choose which cookies you&apos;re comfortable with. Essential cookies keep Harmonies running and can&apos;t be turned off.</p>

            <div className={styles.rows}>
              <div className={styles.row}>
                <div>
                  <div className={styles.rowLabel}>Essential</div>
                  <div className={styles.rowDesc}>Required for login, cart, and security</div>
                </div>
                <span className={`${styles.toggle} ${styles.toggleLocked}`}>
                  <span className={`${styles.knob} ${styles.knobOn}`} />
                </span>
              </div>

              <div className={styles.row}>
                <div>
                  <div className={styles.rowLabel}>Analytics</div>
                  <div className={styles.rowDesc}>Helps us understand how sellers use Harmonies</div>
                </div>
                <button
                  type="button"
                  className={`${styles.toggle} ${prefs.analytics ? styles.toggleOn : styles.toggleOff}`}
                  aria-pressed={prefs.analytics}
                  onClick={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
                >
                  <span className={`${styles.knob} ${prefs.analytics ? styles.knobOn : ''}`} />
                </button>
              </div>

              <div className={styles.row}>
                <div>
                  <div className={styles.rowLabel}>Marketing</div>
                  <div className={styles.rowDesc}>Lets us show relevant offers on and off Harmonies</div>
                </div>
                <button
                  type="button"
                  className={`${styles.toggle} ${prefs.marketing ? styles.toggleOn : styles.toggleOff}`}
                  aria-pressed={prefs.marketing}
                  onClick={() => setPrefs((p) => ({ ...p, marketing: !p.marketing }))}
                >
                  <span className={`${styles.knob} ${prefs.marketing ? styles.knobOn : ''}`} />
                </button>
              </div>
            </div>

            <button type="button" className={styles.saveBtn} onClick={savePreferences}>
              Save preferences
            </button>
          </div>
        ) : (
          <div className={styles.panel}>
            <div className={styles.bannerHead}>
              <span className={styles.bannerEmoji}>🍪</span>
              <span className={styles.bannerTitle}>We use cookies</span>
            </div>
            <p className={styles.bannerCopy}>
              We use cookies to keep Harmonies running smoothly, understand how sellers use the platform, and show relevant content. See our{' '}
              <Link to="/cookies-policy" className={styles.link}>Cookie Policy</Link> for details.
            </p>
            <div className={styles.actionsRow}>
              <button type="button" className={styles.btnSecondary} onClick={rejectAll}>Reject non-essential</button>
              <button type="button" className={styles.btnPrimary} onClick={acceptAll}>Accept all</button>
            </div>
            <button type="button" className={styles.manageLink} onClick={() => setManaging(true)}>
              Manage preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
