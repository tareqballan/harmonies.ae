import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero-section" className={styles.hero} data-screen-label="Hero">
      {/* ambient floating dots — desktop only, hidden on mobile via CSS */}
      <span className={`${styles.dot} ${styles.dotCoral} ${styles.dotDesktop}`} />
      <span className={`${styles.dot} ${styles.dotBlue} ${styles.dotDesktop}`} />
      <span className={`${styles.dot} ${styles.dotLilac} ${styles.dotDesktop}`} />
      {/* mobile-only ambient dots (2, smaller) */}
      <span className={`${styles.dot} ${styles.dotCoral} ${styles.dotMobile}`} />
      <span className={`${styles.dot} ${styles.dotBlue} ${styles.dotMobile}`} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Built for local &amp; social-first sellers
          </div>

          <h1 className={styles.headline}>
            From Zero<br className={styles.desktopBreak} /> to Hero.
          </h1>

          <div className={styles.paragraphWrap}>
            <p className={styles.paragraph}>
              We help local businesses grow faster by giving them everything they need to{' '}
              <span className={styles.highlight}>sell, manage, and deliver</span>—all in one platform.
            </p>
          </div>
        </div>

        <div className={styles.photoStage}>
          <span className={`${styles.orb} ${styles.orbNavy}`} />
          <span className={`${styles.orb} ${styles.orbBlueGlow}`} />
          <span className={`${styles.orb} ${styles.orbCoralGlow}`} />

          <div className={styles.photoFrame}>
            <img
              src="/assets/hero-clay-illustration.png"
              alt="A seller at work"
              className={styles.photo}
            />
          </div>
          <div className={styles.photoShadow} />

          <div className={`${styles.pill} ${styles.pillOrder}`}>
            <span className={styles.pillEmoji}>🛍️</span>
            <span className={styles.pillLabel}>New order received</span>
          </div>
          <div className={`${styles.pill} ${styles.pillInventory} ${styles.desktopOnly}`}>
            <span className={styles.pillEmoji}>📦</span>
            <span className={styles.pillLabel}>Inventory synced</span>
          </div>
          <div className={`${styles.pill} ${styles.pillDelivery}`}>
            <span className={styles.pillEmoji}>🚚</span>
            <span className={styles.pillLabel}>Out for delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
