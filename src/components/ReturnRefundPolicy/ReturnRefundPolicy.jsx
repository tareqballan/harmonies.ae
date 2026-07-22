import LegalPage from '../LegalPage/LegalPage';
import styles from '../LegalPage/LegalPage.module.css';

export default function ReturnRefundPolicy() {
  return (
    <LegalPage
      title="Return and Refund Policy"
      description="When customers may request returns, how returns are processed, and how refunds are issued on Harmonies."
      path="/return-refund-policy"
      dateLabel="Last Updated"
      date="01 July 2026"
    >
      <p className={styles.p}>At Harmonies, we aim to provide customers with a reliable and transparent shopping experience. This Return and Refund Policy explains when customers may request returns, how returns are processed, and how refunds are issued.</p>

      <h2 className={styles.h2}>1. About Returns on Harmonies</h2>
      <p className={styles.p}>Harmonies is a marketplace that connects customers with independent sellers. Each seller is responsible for the products they offer, including product quality, accuracy of descriptions, and compliance with applicable regulations.</p>
      <p className={styles.p}>Return eligibility depends on:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Whether the seller has enabled returns for the product.</li>
        <li className={styles.li}>The type of product purchased.</li>
        <li className={styles.li}>The condition of the returned item.</li>
        <li className={styles.li}>Applicable laws and regulations.</li>
      </ul>
      <p className={styles.p}>Products marked as <strong>&quot;Returnable&quot;</strong> on the Harmonies Platform may be eligible for return according to this policy.</p>

      <h2 className={styles.h2}>2. Return Eligibility</h2>
      <p className={styles.p}>Customers may request a return within <strong>7 days of receiving the product</strong> if:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The product is marked as &quot;Returnable&quot; on the Platform.</li>
        <li className={styles.li}>The product is unused and in its original condition.</li>
        <li className={styles.li}>The product includes original packaging, accessories, and related items where applicable.</li>
        <li className={styles.li}>The return request complies with the seller&apos;s return requirements.</li>
      </ul>
      <p className={styles.p}>Returns may also be accepted in cases where:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The product received is different from the order.</li>
        <li className={styles.li}>The product is defective or damaged upon delivery.</li>
        <li className={styles.li}>The product does not match the description provided by the seller.</li>
      </ul>

      <h2 className={styles.h2}>3. Non-Returnable Products</h2>
      <p className={styles.p}>The following products are generally not eligible for return:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Food and perishable products.</li>
        <li className={styles.li}>Personalized products.</li>
        <li className={styles.li}>Custom-made or made-to-order products.</li>
        <li className={styles.li}>Products prepared specifically according to customer requirements.</li>
        <li className={styles.li}>Products that cannot be returned due to hygiene, health, or safety reasons.</li>
        <li className={styles.li}>Any products that are not eligible for return under applicable laws.</li>
      </ul>

      <h2 className={styles.h2}>4. Return Process</h2>
      <p className={styles.p}>To request a return, customers should:</p>
      <ol className={styles.ul}>
        <li className={styles.li}>Submit a return request through the Harmonies Platform.</li>
        <li className={styles.li}>Provide required information, including the reason for the return and supporting details where applicable.</li>
        <li className={styles.li}>Wait for review and approval from the seller.</li>
        <li className={styles.li}>Follow the return instructions provided through Harmonies.</li>
      </ol>
      <p className={styles.p}>Customers should not send products back before receiving return approval and instructions.</p>

      <h2 className={styles.h2}>5. Return Shipping</h2>
      <p className={styles.p}>For approved returns:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Harmonies will cover return shipping costs.</li>
        <li className={styles.li}>Return shipping will be coordinated through Harmonies or its delivery partners where applicable.</li>
        <li className={styles.li}>Customers must ensure returned products are properly packaged to avoid damage during transportation.</li>
      </ul>
      <p className={styles.p}>Harmonies may refuse a return if the product is returned in a condition that does not meet the return requirements.</p>

      <h2 className={styles.h2}>6. Refund Process</h2>
      <p className={styles.p}>Once the returned product has been received and approved:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Refunds will be processed within <strong>one working day</strong>.</li>
        <li className={styles.li}>Refunds will be issued to the original payment method used for the purchase.</li>
        <li className={styles.li}>Processing time for the refund to appear in the customer&apos;s account may vary depending on the customer&apos;s bank or payment provider.</li>
      </ul>

      <h2 className={styles.h2}>7. Order Cancellation</h2>
      <p className={styles.p}>Customers may request cancellation before fulfillment under the following conditions:</p>

      <h3 className={styles.h3}>Standard Products</h3>
      <p className={styles.p}>Cancellation is allowed if the order has not been shipped.</p>

      <h3 className={styles.h3}>Personalized or Made-to-Order Products</h3>
      <p className={styles.p}>Cancellation is allowed only if the seller has not started preparing or producing the item.</p>

      <p className={styles.p}>Once an order has been shipped or production has started, cancellation may not be possible.</p>

      <h2 className={styles.h2}>8. Damaged or Incorrect Products</h2>
      <p className={styles.p}>If a customer receives:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>A damaged product.</li>
        <li className={styles.li}>An incorrect product.</li>
        <li className={styles.li}>A product significantly different from its description.</li>
      </ul>
      <p className={styles.p}>The customer should report the issue through Harmonies as soon as possible and provide supporting information where requested.</p>
      <p className={styles.p}>Harmonies will coordinate with the seller to review the issue and determine the appropriate resolution.</p>

      <h2 className={styles.h2}>9. Seller Responsibilities</h2>
      <p className={styles.p}>Sellers on Harmonies are responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Clearly indicating whether products are returnable.</li>
        <li className={styles.li}>Providing accurate product information.</li>
        <li className={styles.li}>Reviewing return requests promptly.</li>
        <li className={styles.li}>Cooperating with approved return and refund processes.</li>
        <li className={styles.li}>Ensuring products comply with applicable laws and standards.</li>
      </ul>

      <h2 className={styles.h2}>10. Fraudulent or Abusive Returns</h2>
      <p className={styles.p}>Harmonies reserves the right to refuse returns, refunds, or account access restrictions where there is evidence of:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Fraudulent return requests.</li>
        <li className={styles.li}>Abuse of the return process.</li>
        <li className={styles.li}>Repeated misuse of refund policies.</li>
        <li className={styles.li}>False claims regarding products.</li>
      </ul>

      <h2 className={styles.h2}>11. Contact Us</h2>
      <p className={styles.p}>If you have questions regarding returns or refunds, please contact Harmonies:</p>
      <p className={styles.p}>Email: <a href="mailto:info@harmonies.ae" className={styles.link}>info@harmonies.ae</a></p>
    </LegalPage>
  );
}
