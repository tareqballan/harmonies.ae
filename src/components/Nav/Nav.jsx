import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const NAV_LINKS = [
  { to: '/why-harmonies', label: 'Why Harmonies' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about-harmonies', label: 'About' },
];

// variant="dark": absolute, transparent-gradient bar over a dark hero (home page)
// variant="light": solid white bar for inner pages
export default function Nav({ variant = 'light', onJoinNow }) {
  const isDark = variant === 'dark';
  return (
    <nav className={`${styles.nav} ${isDark ? styles.navDark : styles.navLight}`} data-screen-label="Nav">
      <Link to="/" className={styles.brand}>
        <img src="/assets/harmonies-mark.png" alt="Harmonies" className={styles.mark} />
        <span className={styles.wordmark}>Harmonies</span>
      </Link>
      <div className={styles.linkGroup}>
        {NAV_LINKS.map((link) => (
          <Link key={link.to} to={link.to} className={styles.navLink}>{link.label}</Link>
        ))}
      </div>
      <button type="button" className={styles.cta} onClick={onJoinNow}>
        {isDark ? 'Become a Seller' : 'Join Now'}
      </button>
    </nav>
  );
}
