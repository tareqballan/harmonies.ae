import { Link } from 'react-router-dom';
import LegalPage, { LegalContact } from '../LegalPage/LegalPage';
import styles from '../LegalPage/LegalPage.module.css';

export default function DeliveryPolicy() {
  return (
    <LegalPage
      title="Delivery Policy"
      description="How orders are shipped on Harmonies, delivery fees, and expected delivery timeframes."
      path="/delivery-policy"
    >
      <p className={styles.p}>Harmonies is a marketplace connecting customers with independent sellers. This policy explains how orders are shipped, how delivery fees are determined, and the delivery timeframes customers can expect.</p>

      <h2 className={styles.h2}>1. Shipping Process</h2>
      <p className={styles.p}>Once an order is placed and accepted by the seller, the seller prepares and packages the product for dispatch. Harmonies coordinates delivery through third-party logistics providers and delivery partners to collect the order from the seller and deliver it to the customer.</p>
      <p className={styles.p}>Customers can track the status of their order through the Harmonies platform, and will be notified as their order is processed, dispatched, and delivered.</p>

      <h2 className={styles.h2}>2. Delivery Fees</h2>
      <p className={styles.p}>Delivery fees vary by seller and delivery location. The applicable delivery fee is calculated and displayed to the customer before checkout is completed, and is included in the total order amount charged.</p>

      <h2 className={styles.h2}>3. Delivery Timeframe</h2>
      <p className={styles.p}>Harmonies currently delivers within the United Arab Emirates only.</p>
      <p className={styles.p}>Orders are generally delivered within <strong>1 to 5 business days</strong> of the order being accepted, depending on the product, its packaging requirements, and the delivery destination within the UAE.</p>
      <p className={styles.p}>Delivery timeframes are estimates and may vary due to circumstances outside Harmonies&apos; reasonable control, including weather conditions, transportation delays, operational issues, or third-party provider delays.</p>
      <p className={styles.p}>For handmade, personalized, or made-to-order products, the delivery timeframe is determined by the seller to allow time for the product to be manufactured or prepared. This timeframe will be communicated to the customer before the order is placed.</p>

      <h2 className={styles.h2}>4. Order Tracking and Delays</h2>
      <p className={styles.p}>If an order has not arrived within the expected timeframe, customers can contact Harmonies for assistance in locating the order or resolving the delay.</p>

      <h2 className={styles.h2}>5. Related Policies</h2>
      <p className={styles.p}>This policy forms part of our <Link to="/terms-of-service" className={styles.link}>Terms and Conditions</Link>. For information on returns, cancellations, and refunds, including who pays for return delivery, please see our <Link to="/return-refund-policy" className={styles.link}>Return and Refund Policy</Link>. Sellers&apos; shipping and packaging obligations are set out in Sections 16 and 17 of the <Link to="/seller-agreement#shipping" className={styles.link}>Seller Agreement</Link>.</p>

      <h2 className={styles.h2}>6. Contact Us</h2>
      <LegalContact intro="For questions about delivery, please contact us:" />
    </LegalPage>
  );
}
