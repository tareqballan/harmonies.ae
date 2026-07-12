import styles from './Nav.module.css';

/**
 * Sticky/absolute top bar. Desktop: position:absolute, transparent, sits
 * over the hero. Mobile: position:sticky with translucent blurred bg
 * (handled via the .mobileNav modifier, applied by the media query in
 * Nav.module.css — this is a genuine desktop/mobile behavior divergence
 * per the handoff, but the markup itself is shared).
 */
export default function Nav() {
  return (
    <nav className={styles.nav} data-screen-label="Nav">
      <div className={styles.brand}>
        <img src="/assets/harmonies-mark.png" alt="Harmonies" className={styles.mark} />
        <span className={styles.wordmark}>Harmonies</span>
      </div>
      <div className={styles.links}>
        <a href="#how-it-works" className={styles.howItWorks}>How it works</a>
      </div>
    </nav>
  );
}
