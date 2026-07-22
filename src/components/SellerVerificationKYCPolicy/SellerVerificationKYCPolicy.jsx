import LegalPage from '../LegalPage/LegalPage';
import styles from '../LegalPage/LegalPage.module.css';

export default function SellerVerificationKYCPolicy() {
  return (
    <LegalPage
      title="Seller Verification and KYC Policy"
      description="How Harmonies verifies seller identity and business legitimacy to maintain a trusted marketplace."
      path="/seller-verification-kyc-policy"
      dateLabel="Last Updated"
      date="July 2026"
    >
      <p className={styles.p}>At Harmonies, we aim to provide a trusted marketplace experience for customers, sellers, and partners. To maintain platform security, comply with applicable regulations, and prevent fraudulent activities, Harmonies requires sellers to complete verification procedures before selling on the Platform.</p>

      <h2 className={styles.h2}>1. Purpose of Seller Verification</h2>
      <p className={styles.p}>Seller verification helps Harmonies:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Confirm the identity and legitimacy of sellers.</li>
        <li className={styles.li}>Protect customers from fraudulent activities.</li>
        <li className={styles.li}>Maintain marketplace quality and trust.</li>
        <li className={styles.li}>Comply with applicable legal, payment provider, and regulatory requirements.</li>
      </ul>

      <h2 className={styles.h2}>2. Required Seller Information</h2>
      <p className={styles.p}>Depending on the seller type and business activities, Harmonies may request:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Full legal business name.</li>
        <li className={styles.li}>Trade license or business registration documents.</li>
        <li className={styles.li}>Owner or authorized representative identification documents.</li>
        <li className={styles.li}>Business address and contact information.</li>
        <li className={styles.li}>Bank account information for seller payouts.</li>
        <li className={styles.li}>VAT or tax-related information where applicable.</li>
        <li className={styles.li}>Additional documents required for specific product categories.</li>
      </ul>

      <h2 className={styles.h2}>3. Verification Process</h2>
      <p className={styles.p}>The seller verification process may include:</p>
      <ol className={styles.ul}>
        <li className={styles.li}>Submission of required information and documents.</li>
        <li className={styles.li}>Review and verification by Harmonies.</li>
        <li className={styles.li}>Additional information requests if needed.</li>
        <li className={styles.li}>Approval before activating selling capabilities.</li>
      </ol>
      <p className={styles.p}>Verification timelines may vary depending on the completeness and accuracy of submitted information.</p>

      <h2 className={styles.h2}>4. Seller Responsibilities</h2>
      <p className={styles.p}>Sellers must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Provide accurate, complete, and current information.</li>
        <li className={styles.li}>Notify Harmonies of changes to their business information.</li>
        <li className={styles.li}>Ensure submitted documents are valid and legally obtained.</li>
        <li className={styles.li}>Maintain required licenses and approvals throughout their use of the Platform.</li>
      </ul>
      <p className={styles.p}>Providing false, misleading, expired, or fraudulent information may result in account suspension or termination.</p>

      <h2 className={styles.h2}>5. Harmonies Rights</h2>
      <p className={styles.p}>Harmonies reserves the right to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Request additional verification documents.</li>
        <li className={styles.li}>Review seller information periodically.</li>
        <li className={styles.li}>Reject seller applications.</li>
        <li className={styles.li}>Restrict selling activities.</li>
        <li className={styles.li}>Suspend or terminate accounts that fail verification requirements or violate platform policies.</li>
      </ul>

      <h2 className={styles.h2}>6. Data Handling</h2>
      <p className={styles.p}>Seller verification information is handled according to Harmonies <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>.</p>
      <p className={styles.p}>Harmonies uses verification information only for legitimate business purposes, including identity verification, compliance requirements, fraud prevention, platform security, and payment processing.</p>

      <h2 className={styles.h2}>7. Contact Us</h2>
      <p className={styles.p}>For questions regarding seller verification, please contact:</p>
      <p className={styles.p}>Email: <a href="mailto:info@harmonies.ae" className={styles.link}>info@harmonies.ae</a></p>
    </LegalPage>
  );
}
