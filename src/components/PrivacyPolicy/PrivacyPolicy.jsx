import { Link } from 'react-router-dom';
import LegalPage, { LegalContact } from '../LegalPage/LegalPage';
import styles from '../LegalPage/LegalPage.module.css';

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Harmonies collects, uses, stores, and protects your personal information."
      path="/privacy-policy"
    >
      <p className={styles.p}>Welcome to Harmonies.ae (&quot;Harmonies&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).</p>
      <p className={styles.p}>This Privacy Policy explains how Harmonies collects, uses, stores, shares, and protects your information when you use our website, mobile applications, and related services (collectively, the &quot;Platform&quot;).</p>
      <p className={styles.p}>This Privacy Policy explains how we process your personal data in accordance with Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data. We process personal data where it is necessary to provide our services and perform our contract with you, to comply with legal obligations, for our legitimate business interests, or, where required, with your consent, which you may withdraw at any time.</p>

      <h2 className={styles.h2}>1. Information We Collect</h2>
      <p className={styles.p}>We collect information necessary to provide our services, improve the Platform, support our users, and operate our marketplace.</p>

      <h3 className={styles.h3}>Account Information</h3>
      <p className={styles.p}>When you create an account, we may collect:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Full name</li>
        <li className={styles.li}>Email address</li>
        <li className={styles.li}>Phone number</li>
        <li className={styles.li}>Password (encrypted)</li>
        <li className={styles.li}>Profile photo (optional)</li>
        <li className={styles.li}>Country and city</li>
        <li className={styles.li}>Preferred language</li>
      </ul>

      <h3 className={styles.h3}>Seller Information</h3>
      <p className={styles.p}>If you register as a seller, we may collect:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Business name</li>
        <li className={styles.li}>Trade license information</li>
        <li className={styles.li}>Tax Registration Number (TRN), if applicable</li>
        <li className={styles.li}>Business address</li>
        <li className={styles.li}>Contact information</li>
        <li className={styles.li}>Bank account details for payouts</li>
        <li className={styles.li}>Identity verification documents where required</li>
        <li className={styles.li}>Business profile information</li>
      </ul>

      <h3 className={styles.h3}>Buyer Information</h3>
      <p className={styles.p}>To provide shopping and order fulfillment services, we may collect and store buyer information including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Full name</li>
        <li className={styles.li}>Contact information</li>
        <li className={styles.li}>Delivery addresses</li>
        <li className={styles.li}>Order history</li>
        <li className={styles.li}>Saved preferences</li>
        <li className={styles.li}>Wishlist and favorite items</li>
        <li className={styles.li}>Customer support communications</li>
        <li className={styles.li}>Interactions with products, sellers, and collections</li>
      </ul>

      <h3 className={styles.h3}>Order Information</h3>
      <p className={styles.p}>When transactions are made through Harmonies, we may collect:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Purchased products</li>
        <li className={styles.li}>Order details</li>
        <li className={styles.li}>Delivery information</li>
        <li className={styles.li}>Billing information</li>
        <li className={styles.li}>Return and refund requests</li>
        <li className={styles.li}>Communication related to orders</li>
      </ul>

      <h3 className={styles.h3}>Payment and Financial Information</h3>
      <p className={styles.p}>We may collect and process financial information necessary for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Processing payments</li>
        <li className={styles.li}>Managing seller payouts</li>
        <li className={styles.li}>Accounting and financial records</li>
        <li className={styles.li}>Fraud prevention</li>
        <li className={styles.li}>Financial analysis and business performance evaluation</li>
        <li className={styles.li}>Compliance with legal and regulatory requirements</li>
      </ul>
      <p className={styles.p}>Payments may be processed through third-party payment providers.</p>
      <p className={styles.p}>All credit/debit card details and personally identifiable information collected during checkout will not be stored, sold, shared, rented, or leased to any third party, other than to the approved payment provider strictly for the purpose of processing the transaction. Harmonies.ae will not otherwise pass any debit/credit card details to third parties.</p>
      <p className={styles.p}>If you choose to save your card details for future payments, you will first be asked to explicitly consent to this. Only if you agree will your tokenized card details be stored, through our approved payment provider, for use in your future transactions. You may remove a saved card at any time through your account settings. If you do not opt in, your card details are not stored after your transaction is completed.</p>

      <h3 className={styles.h3}>Device and Usage Information</h3>
      <p className={styles.p}>We may automatically collect:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>IP address</li>
        <li className={styles.li}>Browser type</li>
        <li className={styles.li}>Device type</li>
        <li className={styles.li}>Operating system</li>
        <li className={styles.li}>App version</li>
        <li className={styles.li}>Language settings</li>
        <li className={styles.li}>Log files</li>
        <li className={styles.li}>Crash reports</li>
        <li className={styles.li}>Platform usage information</li>
      </ul>
      <p className={styles.p}>This may include:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Pages visited</li>
        <li className={styles.li}>Features used</li>
        <li className={styles.li}>Search activity</li>
        <li className={styles.li}>Click interactions</li>
        <li className={styles.li}>Session duration</li>
        <li className={styles.li}>Marketing campaign interactions</li>
      </ul>

      <h2 className={styles.h2}>2. How We Use Your Information</h2>
      <p className={styles.p}>We use collected information to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Create and manage user accounts</li>
        <li className={styles.li}>Process orders and payments</li>
        <li className={styles.li}>Deliver products</li>
        <li className={styles.li}>Manage returns and refunds</li>
        <li className={styles.li}>Provide customer support</li>
        <li className={styles.li}>Verify seller identity</li>
        <li className={styles.li}>Prevent fraud and abuse</li>
        <li className={styles.li}>Improve Platform functionality</li>
        <li className={styles.li}>Personalize recommendations</li>
        <li className={styles.li}>Improve search results</li>
        <li className={styles.li}>Analyze user behavior and marketplace performance</li>
        <li className={styles.li}>Develop new products and services</li>
        <li className={styles.li}>Send service-related communications</li>
        <li className={styles.li}>Run marketing campaigns and promotional activities</li>
        <li className={styles.li}>Measure campaign effectiveness</li>
        <li className={styles.li}>Provide sellers with business insights and analytics</li>
        <li className={styles.li}>Comply with legal obligations</li>
      </ul>

      <h2 className={styles.h2}>3. Marketing Communications and Campaigns</h2>
      <p className={styles.p}>We may use your information to provide:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Promotional offers</li>
        <li className={styles.li}>Product recommendations</li>
        <li className={styles.li}>New feature announcements</li>
        <li className={styles.li}>Seller opportunities</li>
        <li className={styles.li}>Newsletters</li>
        <li className={styles.li}>Marketing campaigns</li>
      </ul>
      <p className={styles.p}>You may unsubscribe from marketing communications at any time. Service-related communications necessary for operating your account cannot be disabled while your account remains active.</p>

      <h2 id="cookies" className={styles.h2}>4. Cookies and Similar Technologies</h2>
      <p className={styles.p}>We use cookies and similar technologies on our website, applications, and digital services to keep you signed in, remember your preferences, keep the Platform secure and detect fraudulent activity, understand how the Platform is used and improve its performance and recommendations, and, where you allow it, support our marketing activities. This section explains what these technologies are, how we use them, and how you can manage your preferences.</p>

      <h3 className={styles.h3}>4.1 What Are Cookies?</h3>
      <p className={styles.p}>Cookies are small text files stored on your device when you visit a website. They allow websites to remember information about your activity and preferences, helping improve functionality and provide a more personalized experience.</p>
      <p className={styles.p}>In addition to cookies, we may use similar technologies such as pixels, software development kits (SDKs), local storage, and other tracking technologies in our website and mobile applications.</p>

      <h3 className={styles.h3}>4.2 How We Use Cookies</h3>
      <p className={styles.p}>We use cookies and similar technologies for the following purposes:</p>
      <p className={styles.p}><strong>Essential cookies.</strong> These cookies are necessary for our platform to function properly. They help us:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Keep users securely logged into their accounts</li>
        <li className={styles.li}>Maintain account sessions</li>
        <li className={styles.li}>Protect against security risks and unauthorized access</li>
        <li className={styles.li}>Support shopping, ordering, and payment processes</li>
        <li className={styles.li}>Remember essential settings required for platform operation</li>
      </ul>
      <p className={styles.p}>These cookies cannot be disabled because they are required for the proper functioning of our services.</p>
      <p className={styles.p}><strong>Functional cookies.</strong> These cookies help us improve your experience by remembering your preferences and choices, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Language preferences</li>
        <li className={styles.li}>User interface settings</li>
        <li className={styles.li}>Platform preferences</li>
        <li className={styles.li}>Seller dashboard settings</li>
        <li className={styles.li}>Other customization choices</li>
      </ul>
      <p className={styles.p}><strong>Analytics cookies.</strong> We may use analytics cookies and similar technologies to understand how users interact with our platform and improve our services. These technologies may help us understand:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>How users navigate our website and applications</li>
        <li className={styles.li}>Which features and pages are most used</li>
        <li className={styles.li}>Platform performance and errors</li>
        <li className={styles.li}>User engagement patterns</li>
      </ul>
      <p className={styles.p}>The information collected through analytics is used for improving platform functionality, user experience, and business decisions.</p>
      <p className={styles.p}>Currently, we use Cloudflare Web Analytics for this purpose. Cloudflare Web Analytics does not use cookies or any persistent identifier to track you, so it is not affected by your choice in the cookie consent banner — it runs for all visitors in the same way basic visit logs would on any web server, and only reports aggregate statistics (such as page views and approximate location).</p>
      <p className={styles.p}><strong>Marketing and advertising cookies.</strong> We may use marketing cookies and similar technologies to measure the effectiveness of our marketing activities and partnerships. These technologies may help us:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Measure advertising campaign performance</li>
        <li className={styles.li}>Track referrals from partners and influencers</li>
        <li className={styles.li}>Understand user interactions with promotional content</li>
        <li className={styles.li}>Improve marketing strategies</li>
      </ul>

      <h3 className={styles.h3}>4.3 Third-Party Cookies and Technologies</h3>
      <p className={styles.p}>Some third-party service providers may use cookies or similar technologies when you interact with our services. These providers may include:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Payment service providers</li>
        <li className={styles.li}>Analytics providers</li>
        <li className={styles.li}>Marketing and advertising platforms</li>
        <li className={styles.li}>Other technology partners that support our services</li>
      </ul>
      <p className={styles.p}>These third parties may collect information according to their own privacy policies and practices.</p>

      <h3 className={styles.h3}>4.4 Cookies and Mobile Applications</h3>
      <p className={styles.p}>Our mobile applications may use similar technologies, including SDKs and local storage, to provide essential functionality, analyze application performance, and improve user experience. These technologies may be used for purposes such as:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Maintaining user sessions</li>
        <li className={styles.li}>Improving application reliability</li>
        <li className={styles.li}>Understanding application usage</li>
        <li className={styles.li}>Supporting platform features</li>
      </ul>

      <h3 className={styles.h3}>4.5 Managing Your Cookie Preferences</h3>
      <p className={styles.p}>You can accept or reject non-essential cookies, or choose individual categories, through the cookie consent banner on our website. You can also manage or delete cookies through your browser settings. Most browsers allow you to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>View stored cookies</li>
        <li className={styles.li}>Delete existing cookies</li>
        <li className={styles.li}>Block certain cookies</li>
        <li className={styles.li}>Configure cookie preferences</li>
      </ul>
      <p className={styles.p}>Please note that disabling essential cookies may affect the availability or functionality of certain parts of our services.</p>
      <p className={styles.p}>For mobile applications, you can manage certain permissions and tracking preferences through your device settings.</p>

      <h3 className={styles.h3}>4.6 Cookie Consent Records</h3>
      <p className={styles.p}>When you make a choice through our cookie consent banner (accept all, reject non-essential, or save preferences), we record that decision together with technical information about the request that made it — including your IP address, approximate location (country, city, and region), and device, browser, and operating system information. This applies regardless of which choice you make, including if you reject all non-essential cookies.</p>
      <p className={styles.p}>This record-keeping is treated as essential to operating Harmonies: it allows us to demonstrate, if required, that a specific consent decision was made, when, and under what circumstances. It is not used for analytics, marketing, or personalization, and is kept separate from any data collected under the Analytics or Marketing cookies you may separately consent to.</p>
      <p className={styles.p}>Separately, when the cookie consent banner is first shown to you — before you make any choice — we record that it was shown, together with a randomly generated identifier stored in your browser. This does not include your IP address, device, or browser information, and exists only to measure how often the banner is shown versus acted on.</p>

      <h2 className={styles.h2}>5. Personalized Recommendations</h2>
      <p className={styles.p}>Harmonies uses information such as browsing activity, saved items, purchase history, interactions, and preferences to improve your experience.</p>
      <p className={styles.p}>This information may be used to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Recommend relevant products, sellers, and collections</li>
        <li className={styles.li}>Improve discovery experiences</li>
        <li className={styles.li}>Personalize shopping journeys</li>
        <li className={styles.li}>Improve Platform features</li>
      </ul>

      <h2 className={styles.h2}>6. Marketplace Analytics and Seller Insights</h2>
      <p className={styles.p}>Harmonies collects and analyzes marketplace data to help sellers understand performance and improve their businesses.</p>
      <p className={styles.p}>This may include:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Product performance</li>
        <li className={styles.li}>Sales trends</li>
        <li className={styles.li}>Customer engagement</li>
        <li className={styles.li}>Platform activity</li>
        <li className={styles.li}>Marketing campaign performance</li>
      </ul>
      <p className={styles.p}>Seller analytics are provided in aggregated or business-specific formats while protecting buyer privacy.</p>

      <h2 className={styles.h2}>7. Sharing Your Information</h2>
      <p className={styles.p}>We do not sell your personal information.</p>
      <p className={styles.p}>We may share information with:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Sellers to fulfill buyer orders</li>
        <li className={styles.li}>Delivery partners to complete deliveries</li>
        <li className={styles.li}>Payment providers</li>
        <li className={styles.li}>Identity verification providers</li>
        <li className={styles.li}>Analytics providers</li>
        <li className={styles.li}>Marketing partners</li>
        <li className={styles.li}>Influencers and creators we work with on campaigns, who receive only aggregated or anonymised campaign performance data (for example, the number of orders or visits from a referral link), and never your name, contact details, or order details</li>
        <li className={styles.li}>Customer support providers</li>
        <li className={styles.li}>Cloud hosting providers</li>
        <li className={styles.li}>Government authorities when legally required</li>
      </ul>
      <p className={styles.p}>Each party receives only the information necessary to perform their services.</p>

      <h2 className={styles.h2}>8. Sharing Buyer Information With Sellers</h2>
      <p className={styles.p}>When a buyer places an order, required information may be shared with the relevant seller and delivery partners.</p>
      <p className={styles.p}>This may include:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Buyer name</li>
        <li className={styles.li}>Delivery details</li>
        <li className={styles.li}>Contact information</li>
        <li className={styles.li}>Order details</li>
      </ul>
      <p className={styles.p}>This information may only be used for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Order fulfillment</li>
        <li className={styles.li}>Delivery</li>
        <li className={styles.li}>Customer support</li>
        <li className={styles.li}>Returns and refunds</li>
      </ul>
      <p className={styles.p}>Sellers must not use buyer information for unrelated marketing activities or share it with unauthorized third parties.</p>

      <h2 className={styles.h2}>9. Seller Public Information</h2>
      <p className={styles.p}>Seller profiles may include publicly available information such as:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Business name</li>
        <li className={styles.li}>Logo</li>
        <li className={styles.li}>Product images</li>
        <li className={styles.li}>Product descriptions</li>
        <li className={styles.li}>Collections</li>
        <li className={styles.li}>Public recommendations</li>
        <li className={styles.li}>Business information provided for marketplace visibility</li>
      </ul>

      <h2 className={styles.h2}>10. User-Generated Content</h2>
      <p className={styles.p}>Users may create and share content including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Profile information</li>
        <li className={styles.li}>Product recommendations</li>
        <li className={styles.li}>Photos</li>
        <li className={styles.li}>Collections and harmonies</li>
        <li className={styles.li}>Comments</li>
        <li className={styles.li}>Other Platform interactions</li>
      </ul>
      <p className={styles.p}>By submitting content, you grant Harmonies permission to display, distribute, and use this content to operate, promote, and improve the Platform.</p>
      <p className={styles.p}>Users remain responsible for content they submit.</p>

      <h2 className={styles.h2}>11. Fraud Prevention and Security Monitoring</h2>
      <p className={styles.p}>We may analyze activity and transaction information to detect and prevent:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Fraudulent accounts</li>
        <li className={styles.li}>Suspicious transactions</li>
        <li className={styles.li}>Payment abuse</li>
        <li className={styles.li}>Promotion misuse</li>
        <li className={styles.li}>Platform manipulation</li>
        <li className={styles.li}>Security threats</li>
      </ul>

      <h2 className={styles.h2}>12. Location Information</h2>
      <p className={styles.p}>We may collect and use location-related information including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Delivery addresses</li>
        <li className={styles.li}>Saved locations</li>
        <li className={styles.li}>Location information provided by users</li>
      </ul>
      <p className={styles.p}>This information may be used for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Delivery services</li>
        <li className={styles.li}>Delivery optimization</li>
        <li className={styles.li}>Local product discovery</li>
        <li className={styles.li}>Improving marketplace experiences</li>
      </ul>

      <h2 className={styles.h2}>13. International Data Transfers</h2>
      <p className={styles.p}>Your information may be processed or stored in countries outside your country of residence.</p>
      <p className={styles.p}>Where required by law, we apply appropriate safeguards to protect personal information during transfers.</p>

      <h2 id="data-retention" className={styles.h2}>14. Data Retention</h2>
      <p className={styles.p}>We retain personal information for as long as necessary to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Provide our services</li>
        <li className={styles.li}>Maintain business records</li>
        <li className={styles.li}>Complete financial operations</li>
        <li className={styles.li}>Resolve disputes</li>
        <li className={styles.li}>Prevent fraud</li>
        <li className={styles.li}>Comply with legal obligations</li>
        <li className={styles.li}>Support legitimate business operations and analysis</li>
      </ul>
      <p className={styles.p}>We may retain certain anonymized information after account deletion where necessary for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Historical data analysis</li>
        <li className={styles.li}>Financial records</li>
        <li className={styles.li}>Business performance analysis</li>
        <li className={styles.li}>Legal and regulatory requirements</li>
      </ul>
      <h3 className={styles.h3}>Seller Store Data</h3>
      <p className={styles.p}>When a seller account is deleted, Harmonies retains the seller&apos;s store data for five years for legal and compliance reasons, including in case of a dispute, tax audit, or regulatory request, as set out in Section 40 of the <Link to="/seller-agreement#account-deletion" className={styles.link}>Seller Agreement</Link>. During this period, the retained data is used solely for those purposes and not for marketing, analytics, or profiling, and it is permanently deleted when the period expires. This exception does not apply to data received from Instagram, which is deleted as described in the <a href="#instagram" className={styles.link}>Instagram and Meta Integration</a> section.</p>

      <h2 className={styles.h2}>15. Data Security</h2>
      <p className={styles.p}>We use appropriate technical and organizational measures to protect personal information, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Encryption in transit</li>
        <li className={styles.li}>Secure infrastructure</li>
        <li className={styles.li}>Access controls</li>
        <li className={styles.li}>Authentication mechanisms</li>
        <li className={styles.li}>Security monitoring</li>
        <li className={styles.li}>Backup procedures</li>
      </ul>
      <p className={styles.p}>Harmonies.ae takes appropriate steps to ensure data privacy and security, including through various hardware and software methodologies. However, Harmonies.ae cannot guarantee the security of any information that is disclosed online, as no electronic transmission or storage method is completely secure.</p>

      <h2 id="account-deletion" className={styles.h2}>16. Account Deletion</h2>
      <p className={styles.p}>Users may request deletion of their account directly through the Harmonies application, through our account deletion form at <a href="https://harmonies.ae/delete-account" className={styles.link}>https://harmonies.ae/delete-account</a>, or by emailing <a href="mailto:info@lgv.ae" className={styles.link}>info@lgv.ae</a>. See the <a href="#data-deletion" className={styles.link}>Data Deletion Requests</a> section for details.</p>
      <p className={styles.p}>Upon deletion:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Personal data associated with the user account will be removed.</li>
        <li className={styles.li}>Certain information may be retained where required for historical records, financial analysis, business performance analysis, fraud prevention, or legal obligations.</li>
        <li className={styles.li}>Retained information will be anonymized where possible and will no longer identify the user.</li>
        <li className={styles.li}>For seller accounts, store data is retained for five years for legal and compliance reasons, as described under Seller Store Data in the <a href="#data-retention" className={styles.link}>Data Retention</a> section.</li>
      </ul>

      <h2 className={styles.h2}>17. Your Rights</h2>
      <p className={styles.p}>Depending on applicable laws, you may have the right to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Access your personal information</li>
        <li className={styles.li}>Correct inaccurate information</li>
        <li className={styles.li}>Request deletion of your information</li>
        <li className={styles.li}>Restrict certain processing activities</li>
        <li className={styles.li}>Object to certain processing</li>
        <li className={styles.li}>Withdraw consent where applicable</li>
      </ul>
      <p className={styles.p}>Requests may be submitted through the Platform or by contacting us.</p>

      <h2 className={styles.h2}>18. Children&apos;s Privacy</h2>
      <p className={styles.p}>Harmonies is not intended for individuals under the age of 18.</p>
      <p className={styles.p}>We do not knowingly collect personal information from children. If such information is identified, we will take reasonable steps to delete it.</p>

      <h2 className={styles.h2}>19. Third-Party Services</h2>
      <p className={styles.p}>Harmonies may use third-party services including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Payment providers</li>
        <li className={styles.li}>Delivery partners</li>
        <li className={styles.li}>Hosting providers</li>
        <li className={styles.li}>Analytics providers</li>
        <li className={styles.li}>Communication providers</li>
        <li className={styles.li}>Meta Platforms (Instagram), when you choose to connect your Instagram account</li>
      </ul>
      <p className={styles.p}>Third parties have their own privacy policies, and Harmonies is not responsible for their privacy practices.</p>
      <p className={styles.p}>Harmonies.ae is not responsible for the privacy policies of websites to which it links. If you provide any information to such third parties, different rules regarding the collection and use of your personal information may apply. You should contact these entities directly if you have any questions about their use of the information that they collect.</p>

      <h2 className={styles.h2}>20. Compliance With UAE Data Protection Laws</h2>
      <p className={styles.p}>Harmonies operates in accordance with applicable laws and regulations in the United Arab Emirates, including Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data.</p>
      <p className={styles.p}>We take appropriate measures to ensure personal information is collected, processed, stored, and handled responsibly.</p>

      <h2 className={styles.h2}>21. Changes to This Privacy Policy</h2>
      <p className={styles.p}>We may update this Privacy Policy from time to time.</p>
      <p className={styles.p}>When significant changes are made, we will update the &quot;Last Updated&quot; date at the top of this policy and provide notice where required.</p>
      <p className={styles.p}>Where a change requires your consent under applicable law, we will ask for it before the change applies to you.</p>

      <h2 id="instagram" className={styles.h2}>22. Instagram and Meta Integration</h2>
      <p className={styles.p}>Sellers may choose to connect an Instagram professional (Business or Creator) account to Harmonies using Meta&apos;s official login and APIs. Connecting is optional, and we only access the information you authorize on Meta&apos;s permission screen.</p>
      <h3 className={styles.h3}>Information We Receive From Instagram</h3>
      <ul className={styles.ul}>
        <li className={styles.li}>Basic account information, such as your Instagram account ID, username, name, account type, and profile picture</li>
        <li className={styles.li}>Account statistics, such as follower and media counts</li>
        <li className={styles.li}>Your posts and their content, such as images, videos, captions, timestamps, and links</li>
        <li className={styles.li}>An access token issued by Meta that allows Harmonies to act on the permissions you granted</li>
      </ul>
      <h3 className={styles.h3}>How We Use It</h3>
      <p className={styles.p}>We use Instagram data only to provide the features you request, such as linking your Instagram account to your Harmonies storefront, displaying your profile and posts, and helping you create product listings from your existing content. We do not sell Instagram data, use it for advertising profiles, or share it with third parties except service providers that help us operate the Platform under confidentiality obligations, or where required by law.</p>
      <h3 className={styles.h3}>Disconnecting and Deleting Instagram Data</h3>
      <p className={styles.p}>You can disconnect your Instagram account at any time in the Harmonies Seller application under Settings → Instagram. When you disconnect, we immediately stop accessing your Instagram account and delete the access token.</p>
      <p className={styles.p}>To delete the remaining record of your connected Instagram account (its account ID and username), or any other personal information, follow the steps in the <a href="#data-deletion" className={styles.link}>Data Deletion Requests</a> section below. Instagram data deletion requests are completed within 30 days, at any time and regardless of the status of your seller account. Posts you chose to import become product listings in your store; you can edit or delete them at any time.</p>
      <p className={styles.p}>Your use of Instagram is also governed by Meta&apos;s own Privacy Policy, available at <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className={styles.link}>https://www.facebook.com/privacy/policy/</a>.</p>

      <h2 id="data-deletion" className={styles.h2}>23. Data Deletion Requests</h2>
      <p className={styles.p}>You can request deletion of your account and personal data, including any data received from Instagram, in any of these ways:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>In the Harmonies application, through your account settings</li>
        <li className={styles.li}>Using our account deletion form at <a href="https://harmonies.ae/delete-account" className={styles.link}>https://harmonies.ae/delete-account</a></li>
        <li className={styles.li}>By emailing <a href="mailto:info@lgv.ae" className={styles.link}>info@lgv.ae</a> with the subject &quot;Data Deletion Request&quot; from the email address linked to your account</li>
      </ul>
      <p className={styles.p}>We will confirm your request and complete the deletion within 30 days, subject to the retention exceptions described in the <a href="#data-retention" className={styles.link}>Data Retention</a> and <a href="#account-deletion" className={styles.link}>Account Deletion</a> sections, including the five-year retention of seller store data.</p>

      <h2 className={styles.h2}>24. Governing Law</h2>
      <p className={styles.p}>This Privacy Policy shall be governed by the applicable laws and regulations of the United Arab Emirates.</p>

      <h2 className={styles.h2}>25. Contact Us</h2>
      <LegalContact intro="If you have questions regarding this Privacy Policy or our privacy practices, please contact us:" />
    </LegalPage>
  );
}
