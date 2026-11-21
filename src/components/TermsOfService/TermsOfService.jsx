import { Link } from 'react-router-dom';
import LegalPage, { LegalContact } from '../LegalPage/LegalPage';
import styles from '../LegalPage/LegalPage.module.css';

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms and Conditions"
      description="The terms governing your access to and use of the Harmonies platform."
      path="/terms-of-service"
    >
      <p className={styles.p}>Welcome to Harmonies. The Harmonies platform, including the website at <a href="https://harmonies.ae/" className={styles.link}>https://harmonies.ae/</a> (the &quot;Site&quot;), our mobile applications, and related services (together, the &quot;Platform&quot;), is owned and operated by Lumiere Global Ventures LLC-FZ, Meydan Freezone, Dubai, United Arab Emirates (&quot;Harmonies&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).</p>
      <p className={styles.p}>These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Platform. They should be read together with our <Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link>, <Link to="/return-refund-policy" className={styles.link}>Return and Refund Policy</Link>, and <Link to="/delivery-policy" className={styles.link}>Delivery Policy</Link>, and, for sellers, the <Link to="/seller-agreement" className={styles.link}>Seller Agreement</Link>.</p>
      <p className={styles.p}>By creating an account, accessing, or using Harmonies, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our Platform.</p>
      <p className={styles.p}>Any purchase, dispute, or claim arising out of or in connection with this website shall be governed and construed in accordance with the laws of the United Arab Emirates.</p>

      <h2 className={styles.h2}>1. About Harmonies</h2>
      <p className={styles.p}>Harmonies is a social commerce marketplace that connects customers with independent sellers, local businesses, and creators.</p>
      <p className={styles.p}>The Platform enables sellers to showcase and sell products, create curated collections (&quot;Harmonies&quot;), manage orders, and access tools designed to support business growth.</p>
      <p className={styles.p}>Harmonies provides the technology platform, marketplace services, marketing support, order management, and operational tools. Sellers are independent businesses responsible for their products, inventory, pricing, product quality, business operations, and compliance with applicable laws.</p>
      <p className={styles.p}>Harmonies operates as a marketplace facilitator and does not manufacture, own, or directly sell products listed by sellers unless explicitly stated otherwise.</p>

      <h2 className={styles.h2}>2. Eligibility and Account Registration</h2>
      <p className={styles.p}>To use certain features of Harmonies, you must create an account and provide accurate and complete information.</p>
      <p className={styles.p}>You must be at least 18 years old to register as a user or to transact on the Platform. Minors under 18 years old are not permitted to create an account, register as a user, or otherwise conduct transactions on Harmonies.</p>
      <p className={styles.p}>You agree to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Provide truthful and updated account information.</li>
        <li className={styles.li}>Keep your login credentials secure.</li>
        <li className={styles.li}>Notify Harmonies of any unauthorized access to your account.</li>
        <li className={styles.li}>Use the Platform only for lawful purposes.</li>
      </ul>
      <p className={styles.p}>You are solely responsible for maintaining the confidentiality of your account and password, and for all activities that occur under your account.</p>
      <p className={styles.p}>Sellers must maintain valid business licenses, permits, and approvals required to operate their business and sell their products.</p>
      <p className={styles.p}>We will not trade with or provide any services to individuals or entities located in, or ordinarily resident in, any country or region subject to comprehensive trade sanctions administered by the U.S. Office of Foreign Assets Control (OFAC) or other applicable sanctions authorities. By using Harmonies, you confirm that you are not located in, and are not ordinarily resident in, any such sanctioned country or region, and that you are not on any restricted or denied-party list.</p>

      <h2 className={styles.h2}>3. User Roles</h2>

      <h3 className={styles.h3}>Customers</h3>
      <p className={styles.p}>Customers may browse products, discover Harmonies, place orders, communicate with sellers where available, provide recommendations, and interact with the Platform.</p>

      <h3 className={styles.h3}>Sellers</h3>
      <p className={styles.p}>Sellers may create stores, list products, manage inventory, process orders, participate in promotions, and use available platform services.</p>
      <p className={styles.p}>Sellers are responsible for ensuring that their product information, descriptions, images, prices, availability, and business practices are accurate and compliant.</p>

      <h2 className={styles.h2}>4. Seller Responsibilities</h2>
      <p className={styles.p}>Sellers agree to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Provide accurate product information, images, pricing, and availability.</li>
        <li className={styles.li}>Fulfill accepted orders within the required timeframe.</li>
        <li className={styles.li}>Ensure products meet applicable quality, safety, and legal requirements.</li>
        <li className={styles.li}>Maintain required licenses and approvals.</li>
        <li className={styles.li}>Handle customer inquiries and approved returns according to applicable policies.</li>
        <li className={styles.li}>Avoid selling prohibited, counterfeit, unsafe, or illegal products.</li>
      </ul>
      <p className={styles.p}>Sellers are also bound by the <Link to="/seller-agreement" className={styles.link}>Seller Agreement</Link>, which sets out their obligations in full.</p>
      <p className={styles.p}>Harmonies may review seller accounts, remove products, restrict access, suspend accounts, or take other actions if sellers violate these Terms or applicable laws.</p>

      <h2 className={styles.h2}>5. Seller Verification</h2>
      <p className={styles.p}>Sellers must complete Harmonies&apos; identity and business verification (KYC) before they can sell on the Platform, and must keep their verification information accurate and up to date. The requirements and process are set out in Section 5 of the <Link to="/seller-agreement#verification" className={styles.link}>Seller Agreement</Link>.</p>

      <h2 className={styles.h2}>6. Orders and Payments</h2>
      <p className={styles.p}>When a customer places an order through Harmonies:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The seller is responsible for accepting and fulfilling the order.</li>
        <li className={styles.li}>The customer agrees to pay the product price, delivery fees, and any applicable charges displayed during checkout.</li>
        <li className={styles.li}>Orders are subject to seller acceptance.</li>
        <li className={styles.li}>Sellers may reject or cancel orders due to stock availability, pricing errors, inability to fulfill the order, suspected fraud, or other legitimate reasons.</li>
      </ul>
      <p className={styles.p}>By completing a purchase, customers authorize Harmonies and its approved payment providers to process payments using the selected payment method.</p>
      <p className={styles.p}>Visa or MasterCard debit and credit cards in AED will be accepted for payment.</p>
      <p className={styles.p}>The price and currency displayed at checkout will match the price and currency shown on the order receipt and the amount charged to the customer&apos;s payment card, and the amount charged will be shown in your card currency.</p>
      <p className={styles.p}>Customer payments are processed securely through approved third-party payment providers.</p>
      <p className={styles.p}>The cardholder must retain a copy of their transaction records and of Harmonies&apos; policies and rules.</p>
      <p className={styles.p}>Harmonies manages the marketplace transaction flow, including applicable commissions, service fees, and seller payouts.</p>
      <h3 className={styles.h3}>Payment Confirmation</h3>
      <p className={styles.p}>Once a payment is successfully processed, Harmonies sends the customer a payment confirmation immediately, and in any case within 24 hours of the transaction. Confirmation is sent by email, if a valid email address is registered on the account, or otherwise by WhatsApp message to the registered mobile number.</p>
      <p className={styles.p}>Seller payouts may be processed according to Harmonies&apos; payout schedule and may be subject to order completion, delivery confirmation, refunds, disputes, chargebacks, or other risk management procedures.</p>

      <h2 className={styles.h2}>7. Delivery</h2>
      <p className={styles.p}>Harmonies delivers within the United Arab Emirates only, through third-party delivery partners; delivery fees are shown before checkout is completed, and delivery timeframes are estimates. Full details are in our <Link to="/delivery-policy" className={styles.link}>Delivery Policy</Link>.</p>

      <h2 className={styles.h2}>8. Returns and Refunds</h2>
      <p className={styles.p}>Products the seller has marked &quot;Returnable&quot; may be returned within seven calendar days after delivery, and products that are incorrect, damaged, defective, or materially misdescribed may be returned whether or not they are marked &quot;Returnable&quot;. Who pays for return delivery, which products are excluded, and how to request a return are set out in our <Link to="/return-refund-policy" className={styles.link}>Return and Refund Policy</Link>.</p>
      <p className={styles.p}>Once a return is approved, Harmonies will initiate the refund within one working day. Refunds will be done only through the original mode of payment used for the transaction and will be processed within 10 to 45 days, depending on the issuing bank of the credit card.</p>

      <h2 className={styles.h2}>9. Order Cancellation</h2>
      <p className={styles.p}>Standard orders may be cancelled before they are shipped, and personalized or made-to-order products only before the seller starts preparing them. Full conditions, including refunds when a seller cancels, are in Section 8 of our <Link to="/return-refund-policy#cancellation" className={styles.link}>Return and Refund Policy</Link>.</p>

      <h2 className={styles.h2}>10. Platform Content and Intellectual Property</h2>
      <p className={styles.p}>All content, features, designs, trademarks, software, and materials provided by Harmonies are owned by or licensed to Harmonies.</p>
      <p className={styles.p}>Users may not:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Copy, modify, distribute, or exploit Harmonies content without permission.</li>
        <li className={styles.li}>Reverse engineer or attempt to gain unauthorized access to the Platform.</li>
        <li className={styles.li}>Use Harmonies branding without written approval.</li>
      </ul>
      <p className={styles.p}>Sellers retain ownership of their product content but grant Harmonies permission to display, promote, and use such content for operating and marketing the Platform.</p>

      <h2 className={styles.h2}>11. Recommendations and Social Features</h2>
      <p className={styles.p}>Harmonies may include social commerce features such as recommendations, curated collections, and user interactions.</p>
      <p className={styles.p}>Recommendations represent user opinions and experiences and do not constitute guarantees regarding product quality, performance, or suitability.</p>
      <p className={styles.p}>Customers should make purchasing decisions based on their own judgment.</p>

      <h2 className={styles.h2}>12. Prohibited Products and Activities</h2>
      <p className={styles.p}>Sellers may only list products in the categories approved by Harmonies, and may not list, sell, or promote any product in the prohibited and restricted products list in <Link to="/seller-agreement#prohibited-items" className={styles.link}>Appendix A of the Seller Agreement</Link>. Harmonies reserves the right to remove prohibited products and take appropriate action against violating accounts.</p>

      <h2 className={styles.h2}>13. Third-Party Services</h2>
      <p className={styles.p}>Harmonies may integrate with third-party services, including payment providers, delivery companies, analytics providers, and other partners.</p>
      <p className={styles.p}>Your use of third-party services may be subject to their own terms and conditions.</p>

      <h2 className={styles.h2}>14. Chargebacks and Payment Disputes</h2>
      <p className={styles.p}>Customers should contact Harmonies before initiating a payment dispute or chargeback whenever possible.</p>
      <p className={styles.p}>Harmonies will cooperate with customers, sellers, and payment providers to investigate and resolve payment-related issues.</p>
      <p className={styles.p}>Fraudulent chargebacks or misuse of payment systems may result in account suspension or termination.</p>

      <h2 className={styles.h2}>15. Account Suspension and Termination</h2>
      <p className={styles.p}>Harmonies may suspend or terminate accounts if users:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Violate these Terms.</li>
        <li className={styles.li}>Engage in fraudulent activities.</li>
        <li className={styles.li}>Misuse the Platform.</li>
        <li className={styles.li}>Create risks for customers, sellers, payment providers, or Harmonies.</li>
      </ul>
      <p className={styles.p}>Users may request account deletion through available account settings or by contacting Harmonies.</p>

      <h2 className={styles.h2}>16. Limitation of Liability</h2>
      <p className={styles.p}>Harmonies provides the Platform as a marketplace and technology service.</p>
      <p className={styles.p}>To the maximum extent permitted by applicable law, Harmonies is not responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Product quality, safety, legality, or suitability.</li>
        <li className={styles.li}>Actions or omissions of sellers or customers.</li>
        <li className={styles.li}>Third-party services.</li>
        <li className={styles.li}>Delivery delays caused by circumstances outside Harmonies&apos; reasonable control.</li>
      </ul>
      <p className={styles.p}>Nothing in these Terms excludes liability where such exclusion is not permitted by applicable law.</p>

      <h2 className={styles.h2}>17. Privacy</h2>
      <p className={styles.p}>Your use of Harmonies is also governed by our <Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link>, which explains how we collect, use, store, and protect your information, including our use of <Link to="/privacy-policy#cookies" className={styles.link}>cookies and similar technologies</Link>.</p>

      <h2 className={styles.h2}>18. Changes to These Terms</h2>
      <p className={styles.p}>Harmonies may update these Terms from time to time.</p>
      <p className={styles.p}>Updated Terms will be published on this page with the revised date. Continued use of the Platform after changes are published constitutes acceptance of the updated Terms.</p>

      <h2 className={styles.h2}>19. Governing Law</h2>
      <p className={styles.p}>These Terms are governed by the applicable laws and regulations of the United Arab Emirates.</p>
      <p className={styles.p}>Any disputes arising from these Terms or your use of Harmonies shall be handled according to applicable UAE laws and jurisdiction.</p>

      <h2 className={styles.h2}>20. Contact Us</h2>
      <LegalContact intro="For questions regarding these Terms, please contact us:" />
    </LegalPage>
  );
}
