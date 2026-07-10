import { useReveal } from '../../hooks/useReveal';
import styles from './TurnSocialIntoBusiness.module.css';

export default function TurnSocialIntoBusiness() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} data-reveal className={styles.section} data-screen-label="Turn Social Into Business">
      {/* single centered glow (replaces the old left-corner-only glow) */}
      <div className={styles.glowCenter} />
      <div className={styles.glitterA} />
      <div className={styles.glitterA2} />
      <div className={styles.glowB} />
      <div className={styles.glitterB} />
      <div className={styles.glitterB2} />

      <div className={styles.badge}>
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#c7cdf8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg>
        <span className={styles.badgeText}>That&apos;s exactly why we built Harmonies</span>
      </div>

      <h2 className={styles.h2}>
        We have helped <span className={styles.gradientWord}>+1,000 sellers</span> turn their social media pages into real businesses.
      </h2>

      <div className={styles.chainRow}>
        <div className={styles.miniNode}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="15" rx="3" /><circle cx="12" cy="12.5" r="4" /><circle cx="16.5" cy="8.5" r="1" /></svg>
        </div>

        <svg width="40" height="18" viewBox="0 0 40 20" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6" className={styles.miniArrow}>
          <path d="M2 10h30M26 3l7 7-7 7" />
        </svg>

        <div className={styles.miniCoinNode}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M15 8.5c0-1-1-2-3-2s-3 .8-3 2 1 1.8 3 2 3 1 3 2-1 2-3 2-3-1-3-2" /><path d="M12 6.5v11" /></svg>
        </div>
      </div>
    </section>
  );
}
