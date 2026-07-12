import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { usePageMeta } from '../../hooks/usePageMeta';
import styles from './LegalPage.module.css';

/**
 * Shared chrome for legal documents (Privacy Policy, Terms of Service,
 * Cookies Policy): dark nav, centered content column, and the site-wide
 * footer. These pages share one layout and differ only in their body
 * content.
 */
export default function LegalPage({ title, description, path, dateLabel, date, children }) {
  usePageMeta({ title: `${title} | Harmonies`, description, path });

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLogo}>
          <img src="/assets/harmonies-mark.png" alt="Harmonies" className={styles.navMark} />
          <span className={styles.navWordmark}>Harmonies</span>
        </Link>
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

      <Footer />
    </div>
  );
}
