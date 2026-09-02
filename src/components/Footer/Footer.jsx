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
      { text: 'Delivery Policy', to: '/delivery-policy' },
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
    <svg width="42" height="24" viewBox="0 0 42 24" role="img" aria-label="Apple Pay">
      <rect width="42" height="24" rx="4" fill="#fff" />
      <g transform="translate(12 3) scale(0.75)">
        <path fill="#000" d="M2.15 4.318a42.16 42.16 0 0 0-.454.003c-.15.005-.303.013-.452.04a1.44 1.44 0 0 0-1.06.772c-.07.138-.114.278-.14.43-.028.148-.037.3-.04.45A10.2 10.2 0 0 0 0 6.222v11.557c0 .07.002.138.003.207.004.15.013.303.04.452.027.15.072.291.142.429a1.436 1.436 0 0 0 .63.63c.138.07.278.115.43.142.148.027.3.036.45.04l.208.003h20.194l.207-.003c.15-.004.303-.013.452-.04.15-.027.291-.071.428-.141a1.432 1.432 0 0 0 .631-.631c.07-.138.115-.278.141-.43.027-.148.036-.3.04-.45.002-.07.003-.138.003-.208l.001-.246V6.221c0-.07-.002-.138-.004-.207a2.995 2.995 0 0 0-.04-.452 1.446 1.446 0 0 0-1.2-1.201 3.022 3.022 0 0 0-.452-.04 10.448 10.448 0 0 0-.453-.003zm0 .512h19.942c.066 0 .131.002.197.003.115.004.25.01.375.032.109.02.2.05.287.094a.927.927 0 0 1 .407.407.997.997 0 0 1 .094.288c.022.123.028.258.031.374.002.065.003.13.003.197v11.552c0 .065 0 .13-.003.196-.003.115-.009.25-.032.375a.927.927 0 0 1-.5.693 1.002 1.002 0 0 1-.286.094 2.598 2.598 0 0 1-.373.032l-.2.003H1.906c-.066 0-.133-.002-.196-.003a2.61 2.61 0 0 1-.375-.032c-.109-.02-.2-.05-.288-.094a.918.918 0 0 1-.406-.407 1.006 1.006 0 0 1-.094-.288 2.531 2.531 0 0 1-.032-.373 9.588 9.588 0 0 1-.002-.197V6.224c0-.065 0-.131.002-.197.004-.114.01-.248.032-.375.02-.108.05-.199.094-.287a.925.925 0 0 1 .407-.406 1.03 1.03 0 0 1 .287-.094c.125-.022.26-.029.375-.032.065-.002.131-.002.196-.003zm4.71 3.7c-.3.016-.668.199-.88.456-.191.22-.36.58-.316.918.338.03.675-.169.888-.418.205-.258.345-.603.308-.955zm2.207.42v5.493h.852v-1.877h1.18c1.078 0 1.835-.739 1.835-1.812 0-1.07-.742-1.805-1.808-1.805zm.852.719h.982c.739 0 1.161.396 1.161 1.089 0 .692-.422 1.092-1.164 1.092h-.979zm-3.154.3c-.45.01-.83.28-1.05.28-.235 0-.593-.264-.981-.257a1.446 1.446 0 0 0-1.23.747c-.527.908-.139 2.255.374 2.995.249.366.549.769.944.754.373-.014.52-.242.973-.242.454 0 .586.242.98.235.41-.007.667-.366.915-.733.286-.417.403-.82.41-.841-.007-.008-.79-.308-.797-1.209-.008-.754.615-1.113.644-1.135-.352-.52-.9-.578-1.09-.593a1.123 1.123 0 0 0-.092-.002zm8.204.397c-.99 0-1.606.533-1.652 1.256h.777c.072-.358.369-.586.845-.586.502 0 .803.266.803.711v.309l-1.097.064c-.951.054-1.488.484-1.488 1.184 0 .72.548 1.207 1.332 1.207.526 0 1.032-.281 1.264-.727h.019v.659h.788v-2.76c0-.803-.62-1.317-1.591-1.317zm1.94.072l1.446 4.009c0 .003-.073.24-.073.247-.125.41-.33.571-.711.571-.069 0-.206 0-.267-.015v.666c.06.011.267.019.335.019.83 0 1.226-.312 1.568-1.283l1.5-4.214h-.868l-1.012 3.259h-.015l-1.013-3.26zm-1.167 2.189v.316c0 .521-.45.917-1.024.917-.442 0-.731-.228-.731-.579 0-.342.278-.56.769-.593z" />
      </g>
    </svg>
  );
}

function GooglePayIcon() {
  return (
    <svg width="42" height="24" viewBox="0 0 42 24" role="img" aria-label="Google Pay">
      <rect width="42" height="24" rx="4" fill="#fff" />
      <g transform="translate(12 3) scale(0.75)">
        <path fill="#000" d="M3.963 7.235A3.963 3.963 0 00.422 9.419a3.963 3.963 0 000 3.559 3.963 3.963 0 003.541 2.184c1.07 0 1.97-.352 2.627-.957.748-.69 1.18-1.71 1.18-2.916a4.722 4.722 0 00-.07-.806H3.964v1.526h2.14a1.835 1.835 0 01-.79 1.205c-.356.241-.814.379-1.35.379-1.034 0-1.911-.697-2.225-1.636a2.375 2.375 0 010-1.517c.314-.94 1.191-1.636 2.225-1.636a2.152 2.152 0 011.52.594l1.132-1.13a3.808 3.808 0 00-2.652-1.033zm6.501.55v6.9h.886V11.89h1.465c.603 0 1.11-.196 1.522-.588a1.911 1.911 0 00.635-1.464 1.92 1.92 0 00-.635-1.456 2.125 2.125 0 00-1.522-.598zm2.427.85a1.156 1.156 0 01.823.365 1.176 1.176 0 010 1.686 1.171 1.171 0 01-.877.357H11.35V8.635h1.487a1.156 1.156 0 01.054 0zm4.124 1.175c-.842 0-1.477.308-1.907.925l.781.491c.288-.417.68-.626 1.175-.626a1.255 1.255 0 01.856.323 1.009 1.009 0 01.366.785v.202c-.34-.193-.774-.289-1.3-.289-.617 0-1.11.145-1.479.434-.37.288-.554.677-.554 1.165a1.476 1.476 0 00.525 1.156c.35.308.785.463 1.305.463.61 0 1.098-.27 1.465-.81h.038v.655h.848v-2.909c0-.61-.19-1.09-.568-1.44-.38-.35-.896-.525-1.551-.525zm2.263.154l1.946 4.422-1.098 2.38h.915L24 9.963h-.965l-1.368 3.391h-.02l-1.406-3.39zm-2.146 2.368c.494 0 .88.11 1.156.33 0 .372-.147.696-.44.973a1.413 1.413 0 01-.997.414 1.081 1.081 0 01-.69-.232.708.708 0 01-.293-.578c0-.257.12-.47.363-.647.24-.173.54-.26.9-.26Z" />
      </g>
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
        <GooglePayIcon />
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
