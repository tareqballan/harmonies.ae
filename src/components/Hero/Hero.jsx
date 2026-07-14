import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const TWINKLE_DOTS = [
  { left: '52.7%', top: '22.6%', size: 8, color: '#fd8b87', shadow: 'rgba(252,99,94,.85)', shadowSize: '14px 4px', duration: '2.8s', delay: '0s' },
  { left: '92.3%', top: '20.7%', size: 7, color: '#FC635E', shadow: 'rgba(252,99,94,.9)', shadowSize: '12px 3px', duration: '2.4s', delay: '.3s' },
  { left: '94.6%', top: '49.7%', size: 7, color: '#8A9BF7', shadow: 'rgba(138,155,247,.9)', shadowSize: '12px 3px', duration: '2.6s', delay: '.6s' },
  { left: '97%', top: '42.4%', size: 6, color: '#FC635E', shadow: 'rgba(252,99,94,.85)', shadowSize: '10px 3px', duration: '2.5s', delay: '.9s' },
  { left: '65.4%', top: '34.2%', size: 5, color: '#966ac2', shadow: 'rgba(150,106,194,.85)', shadowSize: '10px 2px', duration: '3s', delay: '.2s' },
  { left: '77.8%', top: '12.5%', size: 6, color: '#8A9BF7', shadow: 'rgba(138,155,247,.85)', shadowSize: '11px 3px', duration: '2.3s', delay: '1.1s' },
  { left: '88.5%', top: '66.3%', size: 5, color: '#fd8b87', shadow: 'rgba(252,99,94,.85)', shadowSize: '10px 2px', duration: '2.8s', delay: '1.4s' },
  { left: '60.2%', top: '58.9%', size: 6, color: '#966ac2', shadow: 'rgba(150,106,194,.85)', shadowSize: '11px 3px', duration: '2.5s', delay: '.7s' },
  { left: '99.2%', top: '60.8%', size: 5, color: '#8A9BF7', shadow: 'rgba(138,155,247,.8)', shadowSize: '9px 2px', duration: '2.9s', delay: '1.6s' },
];

const FEATURES = [
  {
    key: 'collections',
    color: 'var(--color-coral)',
    label: <>Curated<br />Collections</>,
    icon: (
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z M3 6h18 M16 10a4 4 0 0 1-8 0" />
    ),
  },
  {
    key: 'community',
    color: 'var(--color-lilac)',
    label: <>Engaged<br />Community</>,
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    key: 'growth',
    color: 'var(--color-blue)',
    label: <>Business<br />Growth</>,
    icon: (
      <>
        <line x1="18" x2="18" y1="20" y2="10" />
        <line x1="12" x2="12" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="14" />
      </>
    ),
  },
  {
    key: 'logistics',
    color: 'var(--color-coral)',
    label: <>Smart<br />Logistics</>,
    icon: (
      <>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </>
    ),
  },
];

export default function Hero({ onJoinNow }) {
  return (
    <section id="hero-section" className={styles.hero} data-screen-label="Hero">
      {TWINKLE_DOTS.map((dot, i) => (
        <span
          key={i}
          className={styles.twinkle}
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            background: dot.color,
            boxShadow: `0 0 ${dot.shadowSize} ${dot.shadow}`,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        />
      ))}

      <div className={styles.mobileMarkWrap}>
        <img src="/assets/mobile-hero-mark-v3.png" alt="" className={styles.mobileMark} />
      </div>

      <div className={styles.inner}>
        <h1 className={styles.headline}>
          The Future of <span className={styles.headlineAccent}>Social Commerce</span>
        </h1>

        <p className={styles.subtitle}>
          Connecting <span className={styles.hlCoral}>communities</span> with the{' '}
          <span className={styles.hlBlue}>businesses</span> they love.
        </p>

        <div className={styles.featureRow}>
          {FEATURES.map((f) => (
            <div key={f.key} className={styles.featureItem}>
              <span className={styles.featureIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {f.icon}
                </svg>
              </span>
              <span className={styles.featureLabel}>{f.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <button type="button" className={styles.ctaPrimary} onClick={onJoinNow}>
            Become a Seller
            <span className={styles.ctaPrimaryInner}>
              It&apos;s Free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </button>
          <Link to="/features" className={styles.ctaSecondary}>
            Explore All Features
          </Link>
        </div>
      </div>
    </section>
  );
}
