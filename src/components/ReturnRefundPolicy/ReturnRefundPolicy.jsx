import LegalPage from '../LegalPage/LegalPage';
import styles from '../LegalPage/LegalPage.module.css';

export default function ReturnRefundPolicy() {
  return (
    <LegalPage
      title="Return and Refund Policy"
      description="When customers may request returns, who bears delivery costs, and how refunds are processed on Harmonies."
      path="/return-refund-policy"
      dateLabel="Last Updated"
      date="02 August 2026"
    >
      <p className={styles.p}>At Harmonies, we aim to provide customers with a reliable and transparent shopping experience. This policy explains when returns may be requested, who is responsible for delivery costs, and how refunds are processed.</p>

      <h2 className={styles.h2}>1. About Returns on Harmonies</h2>
      <p className={styles.p}>Harmonies is a marketplace connecting customers with independent sellers. Each seller remains responsible for its products, including their quality, safety, legality, description, and conformity with the customer's order.</p>
      <p className={styles.p}>A seller's designation of a product as "Returnable" determines whether it may be returned because the customer changed their mind. It does not limit any rights the customer may have under applicable law concerning defective, damaged, incorrect, unsafe, counterfeit, or materially misdescribed products.</p>

      <h2 className={styles.h2}>2. Change-of-Mind Returns</h2>
      <p className={styles.p}>A customer may request a change-of-mind return within seven calendar days after delivery where:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The product is marked as "Returnable."</li>
        <li className={styles.li}>The product is unused and in its original condition.</li>
        <li className={styles.li}>The original packaging, labels, accessories, and related items are included.</li>
        <li className={styles.li}>The product is not excluded under Section 4.</li>
        <li className={styles.li}>The customer follows the return process in this policy.</li>
      </ul>
      <p className={styles.p}>For an approved change-of-mind return:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The customer is responsible for the return-delivery fee.</li>
        <li className={styles.li}>The return fee may be paid separately or deducted from the refund.</li>
        <li className={styles.li}>The original outbound delivery fee is not refundable unless required by applicable law.</li>
        <li className={styles.li}>The customer is responsible for packaging the product securely for return.</li>
      </ul>

      <h2 className={styles.h2}>3. Seller-Fault Returns</h2>
      <p className={styles.p}>A customer may request a return or another appropriate remedy where the product:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Is incorrect or different from the product ordered.</li>
        <li className={styles.li}>Arrives damaged or defective.</li>
        <li className={styles.li}>Does not materially match its description or images.</li>
        <li className={styles.li}>Is unsafe, counterfeit, expired, or otherwise unlawful.</li>
        <li className={styles.li}>Is damaged because of inadequate seller packaging.</li>
        <li className={styles.li}>Is missing components, accessories, or quantities included in the order.</li>
      </ul>
      <p className={styles.p}>Where the seller is responsible:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The seller bears both the original outbound delivery fee and the return-delivery fee.</li>
        <li className={styles.li}>The customer will not be charged for either delivery.</li>
        <li className={styles.li}>Any original delivery fee paid by the customer will be refunded.</li>
        <li className={styles.li}>The applicable delivery costs may be deducted from the seller's balance, reserve, or future proceeds.</li>
        <li className={styles.li}>The customer will receive the remedy required by applicable law, which may include repair, replacement, or refund.</li>
      </ul>
      <p className={styles.p}>A customer's rights under this section do not depend on whether the product was marked as "Returnable."</p>
      <p className={styles.p}>If damage was caused solely by the delivery provider and was not caused by the product, the seller, or inadequate seller packaging, Harmonies will investigate and determine responsibility. The customer will not be charged for the return while responsibility is being resolved.</p>

      <h2 className={styles.h2}>4. Non-Returnable Products</h2>
      <p className={styles.p}>The following products are generally not eligible for change-of-mind returns:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Food and perishable products.</li>
        <li className={styles.li}>Personalized products.</li>
        <li className={styles.li}>Custom-made or made-to-order products.</li>
        <li className={styles.li}>Products prepared according to the customer's requirements.</li>
        <li className={styles.li}>Opened products that cannot be returned for hygiene, health, or safety reasons.</li>
        <li className={styles.li}>Products excluded from return under applicable law.</li>
      </ul>
      <p className={styles.p}>These exclusions do not remove rights relating to products that are defective, damaged, incorrect, unsafe, counterfeit, or materially misdescribed.</p>

      <h2 className={styles.h2}>5. Return Process</h2>
      <p className={styles.p}>To request a return, the customer must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Submit a return request through the Harmonies Platform within the applicable period.</li>
        <li className={styles.li}>Select the reason for the return.</li>
        <li className={styles.li}>Provide photographs, videos, packaging images, or other supporting information where reasonably requested.</li>
        <li className={styles.li}>Keep the product and its packaging until return instructions are provided.</li>
        <li className={styles.li}>Follow the return instructions issued through Harmonies.</li>
      </ul>
      <p className={styles.p}>Customers must not return products before receiving approval and return instructions.</p>
      <p className={styles.p}>The seller may review and respond to the request, but Harmonies may investigate and make the final decision based on this policy, applicable law, and the available evidence.</p>

      <h2 className={styles.h2}>6. Return Shipping</h2>
      <p className={styles.p}>Approved returns may be coordinated through Harmonies or its delivery partners.</p>
      <p className={styles.p}>Responsibility for delivery costs is determined as follows:</p>
      <ul className={styles.ul}>
        <li className={styles.li}><strong>Customer changed their mind:</strong> The customer pays the return-delivery fee. The original outbound delivery fee is normally not refunded.</li>
        <li className={styles.li}><strong>Seller sent an incorrect, damaged, defective, incomplete, or materially misdescribed product:</strong> The seller pays both the original outbound delivery fee and the return-delivery fee.</li>
        <li className={styles.li}><strong>Damage caused solely by a delivery provider:</strong> The customer is not charged. Harmonies will investigate and allocate the cost to the responsible party.</li>
        <li className={styles.li}><strong>Responsibility cannot immediately be determined:</strong> Harmonies may investigate before allocating the costs.</li>
      </ul>
      <p className={styles.p}>Customers must package returned products appropriately. A customer may be responsible for damage caused by inadequate return packaging, misuse, or unreasonable handling after delivery.</p>

      <h2 className={styles.h2}>7. Inspection and Refunds</h2>
      <p className={styles.p}>After the returned product is received, it may be inspected to verify the return reason and condition.</p>
      <p className={styles.p}>If the return is approved following inspection:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Harmonies will initiate the refund within one working day.</li>
        <li className={styles.li}>The refund will normally be issued to the original payment method.</li>
        <li className={styles.li}>For seller-fault returns, the refund will include any original outbound delivery fee paid by the customer.</li>
        <li className={styles.li}>For change-of-mind returns, the refund may be reduced by the customer-responsible return fee.</li>
        <li className={styles.li}>The time required for the refund to appear in the customer's account may vary depending on the bank, card issuer, or payment provider.</li>
      </ul>
      <p className={styles.p}>If the returned product does not meet the applicable requirements, Harmonies may reject or adjust the refund after reviewing the evidence and informing the customer of the reason.</p>

      <h2 className={styles.h2}>8. Order Cancellation</h2>
      <h3 className={styles.h3}>Standard Products</h3>
      <p className={styles.p}>A customer may request cancellation before the order has been shipped.</p>
      <h3 className={styles.h3}>Personalized or Made-to-Order Products</h3>
      <p className={styles.p}>Cancellation is permitted only if the seller has not started preparing, customizing, or producing the product.</p>
      <p className={styles.p}>Cancellation may not be possible after shipment or production has begun, except where required by applicable law.</p>
      <p className={styles.p}>If the seller cancels an order, cannot fulfil it, or fails to supply it within the agreed period, the customer will receive the appropriate refund, including any delivery fee paid for the cancelled order.</p>

      <h2 className={styles.h2}>9. Reporting Damaged or Incorrect Products</h2>
      <p className={styles.p}>Customers should report damaged, incorrect, defective, incomplete, or materially misdescribed products through Harmonies as soon as reasonably possible.</p>
      <p className={styles.p}>Customers may be asked to provide:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Photographs or videos of the product.</li>
        <li className={styles.li}>Photographs of the packaging and shipping label.</li>
        <li className={styles.li}>Details of the issue.</li>
        <li className={styles.li}>Evidence that components, accessories, or quantities are missing.</li>
        <li className={styles.li}>Other information reasonably required to investigate the claim.</li>
      </ul>
      <p className={styles.p}>Failure to retain the product or provide reasonably available evidence may affect Harmonies' ability to assess the claim, but does not automatically remove rights that cannot legally be excluded.</p>

      <h2 className={styles.h2}>10. Seller Responsibilities</h2>
      <p className={styles.p}>Sellers must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Accurately indicate whether products are eligible for change-of-mind returns.</li>
        <li className={styles.li}>Provide complete and accurate product information.</li>
        <li className={styles.li}>Package products securely and appropriately.</li>
        <li className={styles.li}>Review return requests promptly.</li>
        <li className={styles.li}>Cooperate with Harmonies' investigations.</li>
        <li className={styles.li}>Accept valid returns and provide remedies required by this policy or applicable law.</li>
        <li className={styles.li}>Pay the original outbound delivery fee and return-delivery fee where the return results from an incorrect, damaged, defective, incomplete, or materially misdescribed product attributable to the seller.</li>
      </ul>
      <p className={styles.p}>Seller-responsible refunds and delivery costs may be deducted from the seller's balance, reserve, or future proceeds.</p>

      <h2 className={styles.h2}>11. Fraudulent or Abusive Returns</h2>
      <p className={styles.p}>Harmonies may investigate and refuse a return or refund where sufficient evidence indicates:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Fraudulent claims.</li>
        <li className={styles.li}>Substitution or alteration of the returned product.</li>
        <li className={styles.li}>Intentional product damage.</li>
        <li className={styles.li}>Repeated or systematic abuse of the return process.</li>
        <li className={styles.li}>False or misleading information.</li>
      </ul>
      <p className={styles.p}>Harmonies may restrict or suspend accounts involved in substantiated abuse, subject to applicable law.</p>

      <h2 className={styles.h2}>12. Legal Rights</h2>
      <p className={styles.p}>Nothing in this policy excludes or limits consumer rights or remedies that cannot legally be excluded under applicable UAE law.</p>
      <p className={styles.p}>If any part of this policy conflicts with a mandatory legal requirement, that legal requirement will apply.</p>

      <h2 className={styles.h2}>13. Contact Us</h2>
      <p className={styles.p}>For questions concerning returns or refunds, contact:</p>
      <p className={styles.p}><strong>Harmonies</strong><br />Operated by Lumiere Global Ventures LLC-FZ<br />Email: <a href="mailto:info@harmonies.ae" className={styles.link}>info@harmonies.ae</a></p>
    </LegalPage>
  );
}
