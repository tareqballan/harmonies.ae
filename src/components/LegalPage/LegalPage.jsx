import { Link } from 'react-router-dom';
import styles from './LegalPage.module.css';

/**
 * Shared chrome for legal documents (Privacy Policy, Cookies Policy):
 * dark nav with a back-to-site link, centered content column, and a
 * plain footer bar. Per the design handoff these two pages share one
 * layout and differ only in their body content.
 */
export default function LegalPage({ title, dateLabel, date, children }) {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLogo}>
          <img src="/assets/harmonies-mark.png" alt="Harmonies" className={styles.navMark} />
          <span className={styles.navWordmark}>Harmonies</span>
        </Link>
        <Link to="/" className={styles.backLink}>← Back to site</Link>
      </nav>

      <div className={styles.wrap}>
        <div className={styles.badge}>Legal</div>
        <h1 className={styles.title}>{title}</h1>
        <p className={`${styles.meta} ${styles.metaLast}`}>
          <strong>{dateLabel}:</strong> {date}
        </p>
        <div className={styles.divider} />
        {children}
      </div>

      <footer className={styles.footer}>
        <span className={styles.footerText}>© 2026 Lumiere Global Ventures LLC-FZ. All rights reserved.</span>
      </footer>
    </div>
  );
}
