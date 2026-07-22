import LegalPage from '../LegalPage/LegalPage';
import styles from '../LegalPage/LegalPage.module.css';

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms governing your access to and use of the Harmonies platform."
      path="/terms-of-service"
      dateLabel="Last Updated"
      date="July 2026"
    >
      <p className={styles.p}>Welcome to Harmonies.ae. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Harmonies platform, including our website, mobile applications, and related services (&quot;Platform&quot;).</p>
      <p className={styles.p}>By creating an account, accessing, or using Harmonies, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our Platform.</p>

      <h2 className={styles.h2}>1. About Harmonies</h2>
      <p className={styles.p}>Harmonies is a social commerce marketplace that connects customers with independent sellers, local businesses, and creators.</p>
      <p className={styles.p}>The Platform enables sellers to showcase and sell products, create curated collections (&quot;Harmonies&quot;), manage orders, and access tools designed to support business growth.</p>
      <p className={styles.p}>Harmonies provides the technology platform, marketplace services, marketing support, order management, and operational tools. Sellers are independent businesses responsible for their products, inventory, pricing, product quality, business operations, and compliance with applicable laws.</p>
      <p className={styles.p}>Harmonies operates as a marketplace facilitator and does not manufacture, own, or directly sell products listed by sellers unless explicitly stated otherwise.</p>

      <h2 className={styles.h2}>2. Eligibility and Account Registration</h2>
      <p className={styles.p}>To use certain features of Harmonies, you must create an account and provide accurate and complete information.</p>
      <p className={styles.p}>You agree to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Provide truthful and updated account information.</li>
        <li className={styles.li}>Keep your login credentials secure.</li>
        <li className={styles.li}>Notify Harmonies of any unauthorized access to your account.</li>
        <li className={styles.li}>Use the Platform only for lawful purposes.</li>
      </ul>
      <p className={styles.p}>Sellers must maintain valid business licenses, permits, and approvals required to operate their business and sell their products.</p>

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
      <p className={styles.p}>Harmonies may review seller accounts, remove products, restrict access, suspend accounts, or take other actions if sellers violate these Terms or applicable laws.</p>

      <h2 className={styles.h2}>5. Orders and Payments</h2>
      <p className={styles.p}>When a customer places an order through Harmonies:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The seller is responsible for accepting and fulfilling the order.</li>
        <li className={styles.li}>The customer agrees to pay the product price, delivery fees, and any applicable charges displayed during checkout.</li>
        <li className={styles.li}>Orders are subject to seller acceptance.</li>
        <li className={styles.li}>Sellers may reject or cancel orders due to stock availability, pricing errors, inability to fulfill the order, suspected fraud, or other legitimate reasons.</li>
      </ul>
      <p className={styles.p}>By completing a purchase, customers authorize Harmonies and its approved payment providers to process payments using the selected payment method.</p>
      <p className={styles.p}>Customer payments are processed securely through approved third-party payment providers.</p>
      <p className={styles.p}>Harmonies manages the marketplace transaction flow, including applicable commissions, service fees, and seller payouts.</p>
      <p className={styles.p}>Seller payouts may be processed according to Harmonies&apos; payout schedule and may be subject to order completion, delivery confirmation, refunds, disputes, chargebacks, or other risk management procedures.</p>

      <h2 className={styles.h2}>6. Delivery and Logistics</h2>
      <p className={styles.p}>Harmonies coordinates delivery through third-party logistics providers and delivery partners to support order fulfillment.</p>
      <p className={styles.p}>Delivery times are estimates and may vary due to circumstances outside Harmonies&apos; reasonable control, including weather conditions, transportation delays, operational issues, or third-party provider delays.</p>
      <p className={styles.p}>Delivery fees and applicable logistics charges will be displayed or communicated before order completion.</p>
      <p className={styles.p}>While Harmonies facilitates delivery coordination, sellers remain responsible for ensuring products are properly prepared, packaged, and ready for delivery.</p>

      <h2 className={styles.h2}>7. Returns and Refunds</h2>
      <p className={styles.p}>Return eligibility depends on the seller&apos;s return settings and the product type.</p>
      <p className={styles.p}>Customers may request a return or refund if:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The seller has marked the product as &quot;Returnable&quot; on the Platform.</li>
        <li className={styles.li}>The request is submitted within 7 days of receiving the product.</li>
        <li className={styles.li}>The product meets applicable return conditions.</li>
      </ul>
      <p className={styles.p}>The following products are generally not eligible for return or refund:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Food and perishable products.</li>
        <li className={styles.li}>Personalized products.</li>
        <li className={styles.li}>Custom-made or specially prepared items.</li>
        <li className={styles.li}>Products that cannot be returned due to hygiene, safety, or legal restrictions.</li>
      </ul>
      <p className={styles.p}>Returned products must be in their original condition unless the issue is related to a defect, incorrect product, or seller error.</p>
      <p className={styles.p}>Harmonies will cover approved return shipping costs.</p>
      <p className={styles.p}>Once a refund is approved, it will be processed within one working day and returned to the original payment method used for the transaction.</p>
      <p className={styles.p}>Harmonies facilitates communication and operational processes between customers and sellers regarding returns and refunds. Sellers remain responsible for product quality, accuracy, safety, and compliance of their products.</p>
      <p className={styles.p}>Harmonies is not responsible for product defects, incorrect product descriptions, or seller actions, except where required by applicable law.</p>

      <h2 className={styles.h2}>8. Order Cancellation</h2>
      <p className={styles.p}>Customers may request order cancellation under the following conditions:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>For standard products: cancellation is allowed if the order has not been shipped.</li>
        <li className={styles.li}>For personalized or made-to-order products: cancellation is allowed only if the seller has not started preparing or producing the item.</li>
      </ul>
      <p className={styles.p}>Once an order has been shipped or production has started, cancellation may not be possible.</p>

      <h2 className={styles.h2}>9. Platform Content and Intellectual Property</h2>
      <p className={styles.p}>All content, features, designs, trademarks, software, and materials provided by Harmonies are owned by or licensed to Harmonies.</p>
      <p className={styles.p}>Users may not:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Copy, modify, distribute, or exploit Harmonies content without permission.</li>
        <li className={styles.li}>Reverse engineer or attempt to gain unauthorized access to the Platform.</li>
        <li className={styles.li}>Use Harmonies branding without written approval.</li>
      </ul>
      <p className={styles.p}>Sellers retain ownership of their product content but grant Harmonies permission to display, promote, and use such content for operating and marketing the Platform.</p>

      <h2 className={styles.h2}>10. Recommendations and Social Features</h2>
      <p className={styles.p}>Harmonies may include social commerce features such as recommendations, curated collections, and user interactions.</p>
      <p className={styles.p}>Recommendations represent user opinions and experiences and do not constitute guarantees regarding product quality, performance, or suitability.</p>
      <p className={styles.p}>Customers should make purchasing decisions based on their own judgment.</p>

      <h2 className={styles.h2}>11. Prohibited Products and Activities</h2>
      <p className={styles.p}>Sellers may not list, sell, or promote products or services that violate applicable UAE laws or payment provider requirements, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Illegal drugs, controlled substances, or related products.</li>
        <li className={styles.li}>Weapons, firearms, ammunition, explosives, or prohibited weapon accessories.</li>
        <li className={styles.li}>Counterfeit, fake, or unauthorized branded products.</li>
        <li className={styles.li}>Stolen goods or illegally obtained products.</li>
        <li className={styles.li}>Tobacco products, vaping products, or restricted nicotine products where prohibited.</li>
        <li className={styles.li}>Alcohol products where not legally permitted.</li>
        <li className={styles.li}>Adult sexual products or explicit content.</li>
        <li className={styles.li}>Products violating intellectual property rights.</li>
        <li className={styles.li}>Hazardous materials or unsafe products.</li>
        <li className={styles.li}>Any products prohibited by applicable regulations, logistics providers, or payment providers.</li>
      </ul>
      <p className={styles.p}>Harmonies reserves the right to remove prohibited products and take appropriate action against violating accounts.</p>

      <h2 className={styles.h2}>12. Third-Party Services</h2>
      <p className={styles.p}>Harmonies may integrate with third-party services, including payment providers, delivery companies, analytics providers, and other partners.</p>
      <p className={styles.p}>Your use of third-party services may be subject to their own terms and conditions.</p>

      <h2 className={styles.h2}>13. Chargebacks and Payment Disputes</h2>
      <p className={styles.p}>Customers should contact Harmonies before initiating a payment dispute or chargeback whenever possible.</p>
      <p className={styles.p}>Harmonies will cooperate with customers, sellers, and payment providers to investigate and resolve payment-related issues.</p>
      <p className={styles.p}>Fraudulent chargebacks or misuse of payment systems may result in account suspension or termination.</p>

      <h2 className={styles.h2}>14. Account Suspension and Termination</h2>
      <p className={styles.p}>Harmonies may suspend or terminate accounts if users:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Violate these Terms.</li>
        <li className={styles.li}>Engage in fraudulent activities.</li>
        <li className={styles.li}>Misuse the Platform.</li>
        <li className={styles.li}>Create risks for customers, sellers, payment providers, or Harmonies.</li>
      </ul>
      <p className={styles.p}>Users may request account deletion through available account settings or by contacting Harmonies.</p>

      <h2 className={styles.h2}>15. Limitation of Liability</h2>
      <p className={styles.p}>Harmonies provides the Platform as a marketplace and technology service.</p>
      <p className={styles.p}>To the maximum extent permitted by applicable law, Harmonies is not responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Product quality, safety, legality, or suitability.</li>
        <li className={styles.li}>Actions or omissions of sellers or customers.</li>
        <li className={styles.li}>Third-party services.</li>
        <li className={styles.li}>Delivery delays caused by circumstances outside Harmonies&apos; reasonable control.</li>
      </ul>
      <p className={styles.p}>Nothing in these Terms excludes liability where such exclusion is not permitted by applicable law.</p>

      <h2 className={styles.h2}>16. Privacy</h2>
      <p className={styles.p}>Your use of Harmonies is also governed by our <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>, which explains how we collect, use, store, and protect your information.</p>

      <h2 className={styles.h2}>17. Changes to These Terms</h2>
      <p className={styles.p}>Harmonies may update these Terms from time to time.</p>
      <p className={styles.p}>Updated Terms will be published on this page with the revised date. Continued use of the Platform after changes are published constitutes acceptance of the updated Terms.</p>

      <h2 className={styles.h2}>18. Governing Law</h2>
      <p className={styles.p}>These Terms are governed by the applicable laws and regulations of the United Arab Emirates.</p>
      <p className={styles.p}>Any disputes arising from these Terms or your use of Harmonies shall be handled according to applicable UAE laws and jurisdiction.</p>

      <h2 className={styles.h2}>19. Contact Us</h2>
      <p className={styles.p}>For questions regarding these Terms, please contact us:</p>
      <p className={styles.p}>Email: <a href="mailto:info@harmonies.ae" className={styles.link}>info@harmonies.ae</a></p>
    </LegalPage>
  );
}
