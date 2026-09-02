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
      { text: 'Request Seller Account Deletion', to: '/delete-account' },
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
      { text: 'Cookie Policy', to: '/cookies-policy' },
      { text: 'Return and Refund Policy', to: '/return-refund-policy' },
      { text: 'Seller Verification and KYC Policy', to: '/seller-verification-kyc-policy' },
      { text: 'Seller Agreement', to: '/seller-agreement' },
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

function ParentCompanyColumn() {
  return (
    <div className={`${styles.column} ${styles.parentColumn}`}>
      <div className={styles.colTitle}>Parent Company</div>
      <div className={styles.linkStack}>
        <a href="https://lgv.ae" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Lumiere Global Ventures LLC-FZ
        </a>
        <a href="tel:+971501278250" className={styles.link}>+971 50 127 8250</a>
        <a href="mailto:info@lgv.ae" className={styles.link}>info@lgv.ae</a>
        <span className={styles.link}>6th Floor, Meydan Freezone, Nad Al-Sheba, Dubai, UAE</span>
      </div>
    </div>
  );
}

function VisaIcon() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" role="img" aria-label="Visa">
      <rect width="38" height="24" rx="4" fill="#fff" />
      <text x="19" y="16.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontStyle="italic" fontWeight="700" fontSize="11" fill="#1A1F71">VISA</text>
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" role="img" aria-label="Mastercard">
      <rect width="38" height="24" rx="4" fill="#fff" />
      <circle cx="16.5" cy="12" r="6.5" fill="#EB001B" />
      <circle cx="21.5" cy="12" r="6.5" fill="#F79E1B" />
      <path d="M19 6.7a6.48 6.48 0 0 1 0 10.6 6.48 6.48 0 0 1 0-10.6z" fill="#FF5F00" />
    </svg>
  );
}

function ApplePayIcon() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" role="img" aria-label="Apple Pay">
      <rect width="38" height="24" rx="4" fill="#fff" />
      <g transform="translate(8.5 6.5) scale(0.024)">
        <path fill="#000" d="M213.803 167.03c13.264-16.148 22.208-38.06 19.802-60.09-19.14 0.9-42.334 12.822-56.014 28.98-12.312 14.126-23.014 36.9-20.038 58.056 20.622 1.626 41.626-10.552 56.25-26.946z" />
        <path fill="#000" d="M233.395 199.902c-31.026-1.848-57.328 17.606-72.152 17.606-14.83 0-37.472-16.712-62.16-16.264-32.028 0.542-61.652 18.596-78.096 47.284-33.396 57.92-8.746 143.792 23.936 190.978 15.938 23.164 34.966 48.878 60.108 47.996 23.934-0.914 33.03-15.518 62.096-15.518 29.06 0 37.256 15.518 62.616 15.056 25.98-0.454 42.36-23.164 58.294-46.336 18.4-26.532 25.98-52.242 26.428-53.606-0.548-0.454-50.756-19.526-51.256-77.16-0.454-48.152 39.242-71.31 41.106-72.678-22.436-33.212-57.418-36.9-69.92-37.358z" />
      </g>
      <text x="24" y="16" textAnchor="middle" fontFamily="-apple-system, Arial, sans-serif" fontWeight="600" fontSize="11" fill="#000">Pay</text>
    </svg>
  );
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

      <div className={styles.colTitle} style={{ marginTop: 24 }}>Accepted Payment Methods</div>
      <div className={styles.paymentLogos} aria-label="Accepted payment methods">
        <VisaIcon />
        <MastercardIcon />
        <ApplePayIcon />
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
        <ParentCompanyColumn />
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
