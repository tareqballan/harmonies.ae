import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

// Same column set on desktop and mobile — the handoff's mobile stylesheet only
// rewraps these into a centered 2-per-row grid, it doesn't change the content.
const COLUMNS = [
  {
    title: 'Platform',
    links: [{ text: 'Why Harmonies', to: '/why-harmonies' }, { text: 'Features', to: '/features' }, { text: 'Pricing', to: '/pricing' }],
  },
  {
    title: 'For Sellers',
    links: [
      { text: 'FAQs', to: '/faqs' },
      { text: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'About',
    links: [
      { text: 'About Harmonies', to: '/about-harmonies' },
      { text: 'About Lumiere', href: 'https://lgv.ae' },
      // present in the DOM but hidden until the company is hiring, per handoff
      { text: 'Careers', hidden: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', to: '/privacy-policy' },
      { text: 'Terms of Service', to: '/terms-of-service' },
      { text: 'Cookie Policy', to: '/cookies-policy' },
      { text: 'Return and Refund Policy', to: '/return-refund-policy' },
    ],
  },
];

function AppStoreIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 384 512" fill="#fff">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.8 4 273.2c0 25.8 4.7 52.5 14.1 80.1 12.5 36.7 57.8 126.7 105 125.2 24.7-.6 42.1-17.5 74.3-17.5 31.3 0 47.4 17.5 74.9 17.5 47.6-.7 88.5-82.7 100.4-119.5-63.9-30.1-53.9-88.3-54-90.3zM256.4 85.4c26.9-32 24.5-61.2 23.7-71.7-23.8 1.4-51.4 16.4-67.2 34.9-17.4 19.8-27.6 44.4-25.5 71.2 25.9 2 49.5-11 69-34.4z" />
    </svg>
  );
}

function FooterLink({ link }) {
  const className = styles.link;
  if (link.hidden) {
    return <a href="#" className={className} style={{ display: 'none' }}>{link.text}</a>;
  }
  if (link.href) {
    return <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>{link.text}</a>;
  }
  return link.to
    ? <Link to={link.to} className={className}>{link.text}</Link>
    : <a href="#" className={className}>{link.text}</a>;
}

function AppDownloadColumn({ title }) {
  return (
    <div className={styles.column}>
      <div className={styles.colTitle}>{title}</div>
      <div className={styles.appLinks}>
        <a href="#" className={styles.appButton}>
          <span className={styles.appIconWrap}>
            <img src="/assets/google-play-icon.png" alt="Google Play" className={styles.appIconImg} />
          </span>
          <span className={styles.appTextCol}>
            <span className={styles.appEyebrow}>Get it on</span>
            <span className={styles.appName}>Google Play</span>
          </span>
        </a>
        <a href="#" className={styles.appButton}>
          <span className={styles.appIconWrap}><AppStoreIcon /></span>
          <span className={styles.appTextCol}>
            <span className={styles.appEyebrow}>Download on the</span>
            <span className={styles.appName}>App Store</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer} data-screen-label="Footer">
      <div className={styles.columnsRow}>
        {COLUMNS.map((col) => (
          <div key={col.title} className={styles.column}>
            <div className={styles.colTitle}>{col.title}</div>
            <div className={styles.linkStack}>
              {col.links.map((l) => <FooterLink key={l.text} link={l} />)}
            </div>
          </div>
        ))}
        <AppDownloadColumn title="Download the Free App" />
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.brand}>
          <img src="/assets/harmonies-mark.png" alt="Harmonies" className={styles.brandMark} />
          <span className={styles.brandWordmark}>Harmonies</span>
        </div>
        <span className={styles.copyright}>© 2026 Lumiere Global Ventures LLC-FZ. All rights reserved.</span>
        <span className={styles.subline}>
          Harmonies is a social commerce platform operated by Lumiere Global Ventures LLC-FZ.
        </span>
        <span className={styles.subline}>
          Made with ❤️ in the UAE for local businesses.
        </span>
      </div>
    </footer>
  );
}
