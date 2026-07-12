import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import styles from './FinalCTA.module.css';

const SOCIALS = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/harmonies.ae',
    bg: 'radial-gradient(circle at 32% 26%,#ffb9b5,#FC635E 55%,#c23a36 100%)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1.1" fill="#fff" stroke="none" /></svg>
    ),
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@harmonies.ae?_r=1&_t=ZN-97vIAPrIoTe',
    bg: 'radial-gradient(circle at 32% 26%,#3a3f76,#171b52 55%,#0b1036 100%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M16.6 5.8c-.9-.9-1.4-2.1-1.4-3.4h-3.1v14.2c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .6 0 .8.1v-3.2c-.3 0-.5-.1-.8-.1-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8v-7c1.2.9 2.7 1.4 4.3 1.4v-3.1c-1 0-1.9-.3-2.7-.9-.1 0-.2-.1-.2-.1z" /></svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/harmonies-ae/',
    bg: 'radial-gradient(circle at 32% 26%,#5fb8f0,#0A66C2 55%,#0850a0 100%)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.75h4.5V23H.24V8.75zM8.5 8.75h4.3v1.95h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.85c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.77-2.62 3.6V23H8.5V8.75z" /></svg>
    ),
  },
];

export default function FinalCTA({ onJoinNow }) {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} data-reveal className={styles.section} data-screen-label="Final CTA">
      <div className={styles.blobA} />
      <div className={styles.blobB} />

      <img src="/assets/harmonies-mark.png" alt="Harmonies" className={`${styles.cornerMark} desktop-only`} />

      <div className={styles.inner}>
        <div className={`${styles.illustrationCol} desktop-only`}>
          <img
            src="/assets/join-now-megaphone-v2.png"
            alt="Seller shouting through a megaphone"
            className={styles.illustration}
          />
        </div>

        <div className={styles.textCol}>
          <img src="/assets/harmonies-mark.png" alt="Harmonies" className={`${styles.mobileMark} mobile-only`} />

          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Early access is open
          </div>

          <h2 className={styles.h2}>
            Join now, <span className={styles.gradientWord}>it&apos;s free.</span>
          </h2>

          <p className={styles.paragraph}>
            Turn your following into a thriving, professional business—branding, storefront, and delivery, all in one place.
          </p>

          <div className={styles.ctaRow}>
            <button type="button" className={`${styles.ctaPill} pill-cta`} onClick={onJoinNow}>
              Become an Early Seller
            </button>
            <Link to="/features" className={`${styles.ctaPillSecondary} pill-cta`}>
              Explore All Features
            </Link>
          </div>

          <div className={`${styles.illustrationColMobile} mobile-only`}>
            <img
              src="/assets/join-now-megaphone-v2.png"
              alt="Seller shouting through a megaphone"
              className={styles.illustrationMobile}
            />
          </div>

          <div className={`${styles.wordmarkWrap} desktop-only`}>
            <span className={styles.wordmark}>Follow the noise</span>
          </div>

          <div className={styles.socialRow}>
            {SOCIALS.map((s, i) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`${styles.socialButton} ${styles[`social${i}`]}`}
                style={{ background: s.bg }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
