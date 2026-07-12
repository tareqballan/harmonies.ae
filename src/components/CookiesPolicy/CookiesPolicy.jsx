import LegalPage from '../LegalPage/LegalPage';
import styles from '../LegalPage/LegalPage.module.css';

export default function CookiesPolicy() {
  return (
    <LegalPage title="Cookies Policy" dateLabel="Last Updated" date="July 12, 2026">
      <h2 className={styles.h2}>1. Introduction</h2>
      <p className={styles.p}>Harmonies (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies on our website, applications, and digital services to provide a better user experience, maintain platform security, understand how users interact with our services, and improve our products.</p>
      <p className={styles.p}>This Cookies Policy explains what cookies are, how we use them, and how you can manage your preferences.</p>
      <p className={styles.p}>This policy should be read together with our <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>, which explains how we collect, use, store, and protect personal information.</p>

      <h2 className={styles.h2}>2. What Are Cookies?</h2>
      <p className={styles.p}>Cookies are small text files stored on your device when you visit a website. They allow websites to remember information about your activity and preferences, helping improve functionality and provide a more personalized experience.</p>
      <p className={styles.p}>In addition to cookies, we may use similar technologies such as pixels, software development kits (SDKs), local storage, and other tracking technologies in our website and mobile applications.</p>

      <h2 className={styles.h2}>3. How We Use Cookies</h2>
      <p className={styles.p}>We use cookies and similar technologies for the following purposes:</p>

      <h3 className={styles.h3}>3.1 Essential Cookies</h3>
      <p className={styles.p}>These cookies are necessary for our platform to function properly. They help us:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Keep users securely logged into their accounts</li>
        <li className={styles.li}>Maintain account sessions</li>
        <li className={styles.li}>Protect against security risks and unauthorized access</li>
        <li className={styles.li}>Support shopping, ordering, and payment processes</li>
        <li className={styles.li}>Remember essential settings required for platform operation</li>
      </ul>
      <p className={styles.p}>These cookies cannot be disabled because they are required for the proper functioning of our services.</p>

      <h3 className={styles.h3}>3.2 Functional Cookies</h3>
      <p className={styles.p}>These cookies help us improve your experience by remembering your preferences and choices, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Language preferences</li>
        <li className={styles.li}>User interface settings</li>
        <li className={styles.li}>Platform preferences</li>
        <li className={styles.li}>Seller dashboard settings</li>
        <li className={styles.li}>Other customization choices</li>
      </ul>

      <h3 className={styles.h3}>3.3 Analytics Cookies</h3>
      <p className={styles.p}>We may use analytics cookies and similar technologies to understand how users interact with our platform and improve our services.</p>
      <p className={styles.p}>These technologies may help us understand:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>How users navigate our website and applications</li>
        <li className={styles.li}>Which features and pages are most used</li>
        <li className={styles.li}>Platform performance and errors</li>
        <li className={styles.li}>User engagement patterns</li>
      </ul>
      <p className={styles.p}>The information collected through analytics is used for improving platform functionality, user experience, and business decisions.</p>

      <h3 className={styles.h3}>3.4 Marketing and Advertising Cookies</h3>
      <p className={styles.p}>We may use marketing cookies and similar technologies to measure the effectiveness of our marketing activities and partnerships.</p>
      <p className={styles.p}>These technologies may help us:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Measure advertising campaign performance</li>
        <li className={styles.li}>Track referrals from partners and influencers</li>
        <li className={styles.li}>Understand user interactions with promotional content</li>
        <li className={styles.li}>Improve marketing strategies</li>
      </ul>

      <h2 className={styles.h2}>4. Third-Party Cookies and Technologies</h2>
      <p className={styles.p}>Some third-party service providers may use cookies or similar technologies when you interact with our services.</p>
      <p className={styles.p}>These providers may include:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Payment service providers</li>
        <li className={styles.li}>Analytics providers</li>
        <li className={styles.li}>Marketing and advertising platforms</li>
        <li className={styles.li}>Other technology partners that support our services</li>
      </ul>
      <p className={styles.p}>These third parties may collect information according to their own privacy policies and practices.</p>

      <h2 className={styles.h2}>5. Cookies and Mobile Applications</h2>
      <p className={styles.p}>Our mobile applications may use similar technologies, including SDKs and local storage, to provide essential functionality, analyze application performance, and improve user experience.</p>
      <p className={styles.p}>These technologies may be used for purposes such as:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Maintaining user sessions</li>
        <li className={styles.li}>Improving application reliability</li>
        <li className={styles.li}>Understanding application usage</li>
        <li className={styles.li}>Supporting platform features</li>
      </ul>

      <h2 className={styles.h2}>6. Managing Your Cookie Preferences</h2>
      <p className={styles.p}>You can manage or delete cookies through your browser settings. Most browsers allow you to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>View stored cookies</li>
        <li className={styles.li}>Delete existing cookies</li>
        <li className={styles.li}>Block certain cookies</li>
        <li className={styles.li}>Configure cookie preferences</li>
      </ul>
      <p className={styles.p}>Please note that disabling essential cookies may affect the availability or functionality of certain parts of our services.</p>
      <p className={styles.p}>For mobile applications, you can manage certain permissions and tracking preferences through your device settings.</p>

      <h2 className={styles.h2}>7. Changes to This Cookies Policy</h2>
      <p className={styles.p}>We may update this Cookies Policy from time to time to reflect changes in our technology, services, legal requirements, or privacy practices.</p>
      <p className={styles.p}>When we make significant changes, we will update the &quot;Last Updated&quot; date at the top of this policy.</p>

      <h2 className={styles.h2}>8. Contact Us</h2>
      <p className={styles.p}>If you have questions about this Cookies Policy or our use of cookies and similar technologies, please contact us through the <a href="/contact" className={styles.link}>contact information</a> provided on our website.</p>
    </LegalPage>
  );
}
