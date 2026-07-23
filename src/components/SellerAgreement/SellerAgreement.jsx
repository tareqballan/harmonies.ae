import LegalPage from '../LegalPage/LegalPage';
import styles from '../LegalPage/LegalPage.module.css';

export default function SellerAgreement() {
  return (
    <LegalPage
      title="Seller Agreement"
      description="The terms governing the relationship between Harmonies and sellers using the platform."
      path="/seller-agreement"
      dateLabel="Effective Date"
      date="01 July 2026"
    >
      <p className={styles.p}>This Seller Agreement ("Agreement") is entered into between <strong>Harmonies</strong> ("Harmonies", "we", "our", or "us") and the individual or business registered as a seller on the Harmonies platform ("Seller", "you", or "your").</p>
      <p className={styles.p}>This Agreement governs the relationship between Harmonies and Sellers who use the Harmonies platform to list, promote, sell, and fulfill products.</p>
      <p className={styles.p}>By creating a Seller account, accepting orders, listing products, or continuing to use Seller services, you confirm that you have read, understood, and agree to be bound by this Agreement.</p>

      <h2 className={styles.h2}>1. Seller Eligibility</h2>
      <p className={styles.p}>To become and remain a Seller on Harmonies, you must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Be legally capable of entering into this Agreement.</li>
        <li className={styles.li}>Operate a legally registered business where required by applicable laws.</li>
        <li className={styles.li}>Hold all required licenses, permits, and approvals necessary for selling your products.</li>
        <li className={styles.li}>Complete Harmonies' Know Your Customer (KYC) verification process.</li>
        <li className={styles.li}>Provide accurate, complete, and current business and personal information.</li>
      </ul>
      <p className={styles.p}>The Seller is responsible for ensuring compliance with all applicable UAE laws and regulations.</p>
      <p className={styles.p}>Harmonies reserves the right to approve, reject, suspend, or terminate any Seller account at its discretion.</p>

      <h2 className={styles.h2}>2. Seller Account</h2>
      <p className={styles.p}>The Seller is responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Maintaining the confidentiality of account credentials.</li>
        <li className={styles.li}>All activities performed through the Seller account.</li>
        <li className={styles.li}>Keeping account information accurate and updated.</li>
        <li className={styles.li}>Immediately notifying Harmonies of unauthorized access.</li>
      </ul>
      <p className={styles.p}>Seller accounts:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>May not be transferred, sold, or shared without Harmonies' approval.</li>
        <li className={styles.li}>May only be used by the registered Seller or authorized representatives.</li>
      </ul>

      <h2 className={styles.h2}>3. Seller Responsibilities</h2>
      <p className={styles.p}>The Seller agrees to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Sell only products they are legally authorized to sell.</li>
        <li className={styles.li}>Ensure all products comply with UAE laws and applicable regulations.</li>
        <li className={styles.li}>Provide accurate product information.</li>
        <li className={styles.li}>Maintain sufficient inventory.</li>
        <li className={styles.li}>Fulfill accepted orders according to Harmonies requirements.</li>
        <li className={styles.li}>Provide professional customer service.</li>
        <li className={styles.li}>Cooperate with Harmonies regarding customer complaints, disputes, returns, refunds, and investigations.</li>
      </ul>
      <p className={styles.p}>The Seller remains fully responsible for all products listed and sold through Harmonies.</p>

      <h2 className={styles.h2}>4. Product Listings</h2>
      <p className={styles.p}>The Seller is solely responsible for all information provided in product listings, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Product names.</li>
        <li className={styles.li}>Descriptions.</li>
        <li className={styles.li}>Images and videos.</li>
        <li className={styles.li}>Specifications.</li>
        <li className={styles.li}>Variations.</li>
        <li className={styles.li}>Prices.</li>
        <li className={styles.li}>Inventory availability.</li>
        <li className={styles.li}>Categories.</li>
      </ul>
      <p className={styles.p}>Product listings must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Accurately represent the actual product.</li>
        <li className={styles.li}>Use authentic images or content the Seller has rights to use.</li>
        <li className={styles.li}>Clearly disclose relevant limitations, variations, or conditions.</li>
        <li className={styles.li}>Not contain misleading, inaccurate, or deceptive information.</li>
      </ul>
      <p className={styles.p}>Harmonies may review, modify, reject, hide, or remove any listing that violates this Agreement, applicable laws, or platform standards.</p>

      <h2 className={styles.h2}>5. Product Quality Requirements</h2>
      <p className={styles.p}>The Seller guarantees that products sold through Harmonies:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Match their descriptions and displayed images.</li>
        <li className={styles.li}>Are authentic and genuine.</li>
        <li className={styles.li}>Are free from undisclosed defects.</li>
        <li className={styles.li}>Are safe for intended use.</li>
        <li className={styles.li}>Meet applicable quality and safety requirements.</li>
        <li className={styles.li}>Comply with applicable laws and regulations.</li>
      </ul>
      <p className={styles.p}>Products described as handmade, customized, unique, or original must accurately reflect their actual nature.</p>
      <p className={styles.p}>The Seller is responsible for resolving issues related to product quality, defects, or inaccurate descriptions.</p>

      <h2 className={styles.h2}>6. Prohibited Products</h2>
      <p className={styles.p}>The Seller must not list or sell products that are illegal, restricted, unsafe, counterfeit, or harmful.</p>
      <p className={styles.p}>Prohibited products include, but are not limited to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Counterfeit goods, replicas, or unauthorized branded products.</li>
        <li className={styles.li}>Stolen goods.</li>
        <li className={styles.li}>Weapons, firearms, ammunition, and explosives.</li>
        <li className={styles.li}>Illegal drugs and controlled substances.</li>
        <li className={styles.li}>Prescription medications without proper authorization.</li>
        <li className={styles.li}>Tobacco products, cigarettes, nicotine products, and vaping products.</li>
        <li className={styles.li}>Alcohol products.</li>
        <li className={styles.li}>Hazardous chemicals or dangerous materials.</li>
        <li className={styles.li}>Adult or sexually explicit products.</li>
        <li className={styles.li}>Human organs, body parts, or biological materials.</li>
        <li className={styles.li}>Live animals.</li>
        <li className={styles.li}>Products violating copyrights, trademarks, patents, or other intellectual property rights.</li>
        <li className={styles.li}>Products prohibited by UAE laws or government authorities.</li>
        <li className={styles.li}>Any products that Harmonies determines may negatively affect customers, sellers, or the reputation of the platform.</li>
      </ul>
      <p className={styles.p}>Harmonies may remove prohibited products immediately without prior notice and may suspend or terminate the Seller account.</p>

      <h2 className={styles.h2}>7. Pricing and Promotions</h2>
      <p className={styles.p}>The Seller is responsible for setting product prices.</p>
      <p className={styles.p}>The Seller agrees that:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Product prices must be accurate and transparent.</li>
        <li className={styles.li}>Promotions and discounts must be genuine.</li>
        <li className={styles.li}>Artificial price increases before discounts are prohibited.</li>
        <li className={styles.li}>All pricing practices must comply with applicable consumer protection laws.</li>
      </ul>
      <p className={styles.p}>Harmonies may create platform-wide campaigns, promotions, or marketing activities. Participation terms and financial responsibilities will be communicated separately when applicable.</p>

      <h2 className={styles.h2}>8. Seller Pricing Packages, Commissions, and Fees</h2>
      <p className={styles.p}>Harmonies provides different Seller pricing packages with different benefits, commission rates, fees, and services.</p>
      <p className={styles.p}>The Seller's applicable:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Marketplace commission percentage.</li>
        <li className={styles.li}>Subscription fees.</li>
        <li className={styles.li}>Delivery rates.</li>
        <li className={styles.li}>Additional service fees.</li>
        <li className={styles.li}>Other applicable charges.</li>
      </ul>
      <p className={styles.p}>will depend on the pricing package selected by the Seller.</p>
      <p className={styles.p}>The Seller authorizes Harmonies to automatically deduct applicable fees according to the selected pricing package from transaction amounts before making funds available for withdrawal.</p>
      <p className={styles.p}>The Seller may upgrade, downgrade, or change their pricing package according to Harmonies' package rules. Changes will apply from the effective date communicated by Harmonies.</p>
      <p className={styles.p}>Harmonies may introduce new pricing packages or modify existing packages according to the Amendments section of this Agreement.</p>

      <h2 className={styles.h2}>9. Inventory Management</h2>
      <p className={styles.p}>The Seller is responsible for maintaining accurate inventory information.</p>
      <p className={styles.p}>The Seller must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Keep product availability updated.</li>
        <li className={styles.li}>Avoid accepting orders for unavailable products.</li>
        <li className={styles.li}>Notify Harmonies of inventory issues promptly.</li>
      </ul>
      <p className={styles.p}>Repeated cancellations due to inaccurate inventory information may result in account restrictions, reduced visibility, suspension, or termination.</p>

      <h2 className={styles.h2}>10. Orders and Fulfillment</h2>
      <p className={styles.p}>Once an order is placed and accepted through Harmonies, the Seller agrees to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Prepare the order within the required timeframe.</li>
        <li className={styles.li}>Ensure the product matches the customer's order.</li>
        <li className={styles.li}>Package the product appropriately.</li>
        <li className={styles.li}>Make the order available for pickup or delivery according to Harmonies' instructions.</li>
        <li className={styles.li}>Provide accurate order and shipment information.</li>
      </ul>
      <p className={styles.p}>The Seller must not cancel accepted orders without a valid reason.</p>
      <p className={styles.p}>Repeated order cancellations, delays, or failure to fulfill orders may negatively affect Seller performance and may result in restrictions, reduced visibility, suspension, or termination.</p>

      <h2 className={styles.h2}>11. Packaging Requirements</h2>
      <p className={styles.p}>The Seller is responsible for ensuring products are packaged appropriately before delivery.</p>
      <p className={styles.p}>Packaging must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Protect products from damage during transportation.</li>
        <li className={styles.li}>Be suitable for the product type.</li>
        <li className={styles.li}>Maintain product quality until delivery.</li>
        <li className={styles.li}>Comply with any applicable safety requirements.</li>
      </ul>
      <p className={styles.p}>The Seller is responsible for damages caused by insufficient or inappropriate packaging.</p>

      <h2 className={styles.h2}>12. Shipping and Delivery</h2>
      <p className={styles.p}>Harmonies may coordinate delivery through third-party logistics providers or delivery partners.</p>
      <p className={styles.p}>The Seller is responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Preparing products before the scheduled pickup time.</li>
        <li className={styles.li}>Providing accurate pickup and delivery information.</li>
        <li className={styles.li}>Ensuring products are ready for collection.</li>
      </ul>
      <p className={styles.p}>Delivery fees and delivery-related charges will be applied according to the Seller's selected pricing package and/or applicable Harmonies service terms.</p>
      <p className={styles.p}>Harmonies is not responsible for delays caused by third-party delivery providers, provided the Seller fulfilled their responsibilities on time.</p>

      <h2 className={styles.h2}>13. Returns and Refunds</h2>
      <p className={styles.p}>Returns and refunds shall be handled according to Harmonies' return procedures.</p>
      <p className={styles.p}>The Seller agrees to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Accept valid return requests according to Harmonies rules.</li>
        <li className={styles.li}>Review return requests when required.</li>
        <li className={styles.li}>Cooperate with Harmonies during return investigations.</li>
        <li className={styles.li}>Provide refunds when applicable.</li>
      </ul>
      <p className={styles.p}>The Seller remains responsible for products that:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Do not match their description.</li>
        <li className={styles.li}>Arrive damaged due to poor packaging.</li>
        <li className={styles.li}>Have defects.</li>
        <li className={styles.li}>Do not meet customer expectations due to inaccurate listing information.</li>
      </ul>

      <h2 className={styles.h2}>14. Payments and Seller Balance</h2>
      <p className={styles.p}>Harmonies collects payments from Buyers on behalf of Sellers.</p>
      <p className={styles.p}>After a successful transaction, the order amount will not immediately become available for withdrawal.</p>
      <p className={styles.p}>To protect Buyers and allow sufficient time for returns or disputes, Harmonies will hold the transaction amount until the applicable return period expires.</p>
      <p className={styles.p}>Unless otherwise specified, the return period is <strong>7 calendar days from the date the order is successfully delivered</strong>.</p>
      <p className={styles.p}>After the return period expires, and provided there is:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>No approved return.</li>
        <li className={styles.li}>No refund request.</li>
        <li className={styles.li}>No dispute.</li>
        <li className={styles.li}>No chargeback.</li>
        <li className={styles.li}>No fraud investigation.</li>
      </ul>
      <p className={styles.p}>the amount will become part of the Seller's <strong>Available Balance</strong>.</p>
      <p className={styles.p}>The Available Balance represents the amount remaining after deduction of:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Marketplace commissions according to the Seller's selected pricing package.</li>
        <li className={styles.li}>Subscription fees.</li>
        <li className={styles.li}>Payment processing fees.</li>
        <li className={styles.li}>Delivery-related charges where applicable.</li>
        <li className={styles.li}>Refunds.</li>
        <li className={styles.li}>Chargebacks.</li>
        <li className={styles.li}>Other authorized deductions.</li>
      </ul>
      <p className={styles.p}>The Available Balance shown to the Seller represents the amount remaining after deduction of all applicable fees according to the Seller's selected pricing package.</p>

      <h2 className={styles.h2}>15. Seller Payouts</h2>
      <p className={styles.p}>A Seller may request a payout when the Available Balance reaches a minimum of <strong>AED 50</strong>.</p>
      <p className={styles.p}>Payout requests will be processed according to Harmonies' payout schedule and procedures.</p>
      <p className={styles.p}>Harmonies may delay, suspend, or reject payout requests where:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Fraud or suspicious activity is suspected.</li>
        <li className={styles.li}>There are unresolved customer disputes.</li>
        <li className={styles.li}>Legal or regulatory requirements require additional review.</li>
        <li className={styles.li}>The Seller has outstanding obligations to Harmonies.</li>
      </ul>
      <p className={styles.p}>The Seller is responsible for ensuring that payout information provided to Harmonies is accurate.</p>

      <h2 className={styles.h2}>16. Taxes and Legal Obligations</h2>
      <p className={styles.p}>The Seller is solely responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Obtaining required business licenses.</li>
        <li className={styles.li}>VAT registration where applicable.</li>
        <li className={styles.li}>Tax reporting.</li>
        <li className={styles.li}>Tax payments.</li>
        <li className={styles.li}>Compliance with all applicable laws and regulations.</li>
      </ul>
      <p className={styles.p}>Harmonies does not provide tax or legal advice to Sellers.</p>

      <h2 className={styles.h2}>17. Marketing Rights and Promotion</h2>
      <p className={styles.p}>The Seller grants Harmonies a worldwide, royalty-free, non-exclusive license to use Seller-provided content, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Store name.</li>
        <li className={styles.li}>Logo.</li>
        <li className={styles.li}>Product images.</li>
        <li className={styles.li}>Product videos.</li>
        <li className={styles.li}>Product descriptions.</li>
        <li className={styles.li}>Other submitted marketing materials.</li>
      </ul>
      <p className={styles.p}>Harmonies may use such content for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Operating the marketplace.</li>
        <li className={styles.li}>Promoting products.</li>
        <li className={styles.li}>Creating collections ("Harmonies").</li>
        <li className={styles.li}>Social media marketing.</li>
        <li className={styles.li}>Advertisements.</li>
        <li className={styles.li}>Email campaigns.</li>
        <li className={styles.li}>Platform recommendations.</li>
        <li className={styles.li}>Promotional materials.</li>
      </ul>
      <p className={styles.p}>The Seller confirms that they have all necessary rights to provide such content.</p>

      <h2 className={styles.h2}>18. Product Visibility and Platform Placement</h2>
      <p className={styles.p}>Harmonies determines how products and Sellers are displayed across the platform.</p>
      <p className={styles.p}>Visibility may depend on factors including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Product relevance.</li>
        <li className={styles.li}>Customer experience.</li>
        <li className={styles.li}>Seller performance.</li>
        <li className={styles.li}>Product quality.</li>
        <li className={styles.li}>Availability.</li>
        <li className={styles.li}>Customer engagement.</li>
        <li className={styles.li}>Promotional campaigns.</li>
      </ul>
      <p className={styles.p}>Selecting a paid pricing package does not guarantee specific rankings, placements, sales volume, or customer exposure.</p>
      <p className={styles.p}>Harmonies may provide additional visibility opportunities through promotional services or campaigns according to applicable terms.</p>

      <h2 className={styles.h2}>19. Customer Communication</h2>
      <p className={styles.p}>The Seller agrees to communicate with customers professionally and only for legitimate business purposes.</p>
      <p className={styles.p}>The Seller must not:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Request customers to complete purchases outside Harmonies.</li>
        <li className={styles.li}>Share personal payment information.</li>
        <li className={styles.li}>Circumvent Harmonies fees.</li>
        <li className={styles.li}>Use customer data for unauthorized marketing.</li>
        <li className={styles.li}>Provide false or misleading information.</li>
      </ul>
      <p className={styles.p}>All customer transactions must remain within the Harmonies platform.</p>

      <h2 className={styles.h2}>20. Seller Performance Standards</h2>
      <p className={styles.p}>Harmonies may monitor Seller performance based on factors including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Order fulfillment rate.</li>
        <li className={styles.li}>Cancellation rate.</li>
        <li className={styles.li}>Delivery performance.</li>
        <li className={styles.li}>Return rate.</li>
        <li className={styles.li}>Customer complaints.</li>
        <li className={styles.li}>Response time.</li>
        <li className={styles.li}>Product quality.</li>
        <li className={styles.li}>Policy compliance.</li>
      </ul>
      <p className={styles.p}>Harmonies may take corrective actions when performance standards are not maintained, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Warning notices.</li>
        <li className={styles.li}>Reduced visibility.</li>
        <li className={styles.li}>Temporary restrictions.</li>
        <li className={styles.li}>Suspension.</li>
        <li className={styles.li}>Termination.</li>
      </ul>

      <h2 className={styles.h2}>21. Fraud Prevention and Prohibited Seller Conduct</h2>
      <p className={styles.p}>The Seller must not engage in fraudulent, deceptive, or abusive activities, including but not limited to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Creating fake orders.</li>
        <li className={styles.li}>Purchasing their own products to manipulate performance.</li>
        <li className={styles.li}>Manipulating reviews, recommendations, ratings, or customer feedback.</li>
        <li className={styles.li}>Creating multiple accounts to bypass restrictions.</li>
        <li className={styles.li}>Providing false business information.</li>
        <li className={styles.li}>Circumventing Harmonies fees or payment processes.</li>
        <li className={styles.li}>Misusing promotions, discounts, or marketing campaigns.</li>
        <li className={styles.li}>Attempting to manipulate platform visibility unfairly.</li>
      </ul>
      <p className={styles.p}>Harmonies may investigate suspicious activities and take any necessary action, including withholding payments, removing products, restricting accounts, or terminating Seller access.</p>

      <h2 className={styles.h2}>22. Intellectual Property Rights</h2>
      <p className={styles.p}>The Seller represents and warrants that:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>They own or have the legal right to sell all products listed on Harmonies.</li>
        <li className={styles.li}>They own or have permission to use all images, videos, descriptions, trademarks, logos, and other content submitted to Harmonies.</li>
        <li className={styles.li}>Their products and content do not infringe the intellectual property rights of any third party.</li>
      </ul>
      <p className={styles.p}>If Harmonies receives an intellectual property complaint or believes that a violation may exist, Harmonies may:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Remove or restrict access to the relevant product listing.</li>
        <li className={styles.li}>Request supporting documentation from the Seller.</li>
        <li className={styles.li}>Suspend related activities while investigating the matter.</li>
      </ul>
      <p className={styles.p}>Repeated intellectual property violations may result in permanent account termination.</p>

      <h2 className={styles.h2}>23. Customer Data and Privacy</h2>
      <p className={styles.p}>The Seller may receive customer information only for purposes related to fulfilling orders and providing customer service through Harmonies.</p>
      <p className={styles.p}>The Seller agrees to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Use customer information only for legitimate order-related purposes.</li>
        <li className={styles.li}>Protect customer information from unauthorized access.</li>
        <li className={styles.li}>Not sell, share, rent, or misuse customer data.</li>
        <li className={styles.li}>Comply with applicable privacy and data protection laws.</li>
      </ul>
      <p className={styles.p}>Any unauthorized use of customer information is considered a material breach of this Agreement.</p>

      <h2 className={styles.h2}>24. Confidentiality</h2>
      <p className={styles.p}>The Seller agrees to keep confidential any non-public information received from Harmonies, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Business information.</li>
        <li className={styles.li}>Platform operations.</li>
        <li className={styles.li}>Seller tools and features.</li>
        <li className={styles.li}>Commercial terms.</li>
        <li className={styles.li}>Technical information.</li>
      </ul>
      <p className={styles.p}>This obligation remains valid after termination of the Seller account.</p>

      <h2 className={styles.h2}>25. Suspension and Termination</h2>
      <p className={styles.p}>Harmonies may suspend, restrict, or terminate a Seller account if the Seller:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Violates this Agreement.</li>
        <li className={styles.li}>Sells prohibited products.</li>
        <li className={styles.li}>Engages in fraud or deceptive practices.</li>
        <li className={styles.li}>Provides inaccurate information.</li>
        <li className={styles.li}>Fails KYC requirements.</li>
        <li className={styles.li}>Repeatedly fails to fulfill orders.</li>
        <li className={styles.li}>Receives excessive customer complaints.</li>
        <li className={styles.li}>Fails to pay applicable fees.</li>
        <li className={styles.li}>Violates applicable laws or regulations.</li>
      </ul>
      <p className={styles.p}>Upon termination:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The Seller may no longer create new listings or receive new orders.</li>
        <li className={styles.li}>Existing orders, returns, refunds, and payouts will continue to be processed according to this Agreement.</li>
        <li className={styles.li}>Outstanding financial obligations remain payable.</li>
      </ul>

      <h2 className={styles.h2}>26. Limitation of Liability</h2>
      <p className={styles.p}>Harmonies operates as a marketplace platform connecting Sellers and Buyers.</p>
      <p className={styles.p}>The Seller acknowledges that Harmonies does not manufacture, own, or directly control Seller products.</p>
      <p className={styles.p}>To the maximum extent permitted by law, Harmonies is not responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Product quality.</li>
        <li className={styles.li}>Product safety.</li>
        <li className={styles.li}>Product authenticity.</li>
        <li className={styles.li}>Seller statements or claims.</li>
        <li className={styles.li}>Seller actions or omissions.</li>
        <li className={styles.li}>Customer misuse of products.</li>
        <li className={styles.li}>Loss of profits or indirect damages.</li>
        <li className={styles.li}>Delays caused by third-party service providers.</li>
      </ul>

      <h2 className={styles.h2}>27. Indemnification</h2>
      <p className={styles.p}>The Seller agrees to defend, indemnify, and hold harmless Harmonies, its affiliates, employees, representatives, and partners from any claims, damages, losses, liabilities, penalties, costs, or expenses arising from:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Products sold by the Seller.</li>
        <li className={styles.li}>Product defects or customer claims.</li>
        <li className={styles.li}>Violation of this Agreement.</li>
        <li className={styles.li}>Violation of applicable laws.</li>
        <li className={styles.li}>Intellectual property infringement.</li>
        <li className={styles.li}>Seller negligence, fraud, or misconduct.</li>
      </ul>

      <h2 className={styles.h2}>28. Force Majeure</h2>
      <p className={styles.p}>Neither party shall be responsible for delays or failures caused by events beyond reasonable control, including but not limited to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Natural disasters.</li>
        <li className={styles.li}>Government actions.</li>
        <li className={styles.li}>War.</li>
        <li className={styles.li}>Pandemics.</li>
        <li className={styles.li}>Labor disputes.</li>
        <li className={styles.li}>Transportation failures.</li>
        <li className={styles.li}>Internet or telecommunications failures.</li>
      </ul>

      <h2 className={styles.h2}>29. Amendments</h2>
      <p className={styles.p}>Harmonies may amend this Seller Agreement from time to time.</p>
      <p className={styles.p}>Sellers will be notified of any material changes through the Platform, email, or other reasonable means.</p>
      <p className={styles.p}>Material changes become effective only after the Seller expressly accepts the updated Agreement through the Platform.</p>
      <p className={styles.p}>If the Seller does not accept the updated Agreement, Harmonies may suspend or terminate the Seller's ability to list new products or receive new orders, while continuing to process any outstanding orders, returns, and payouts in accordance with this Agreement and applicable law.</p>
      <p className={styles.p}>For non-material changes, continued use of the Harmonies platform after the updated Agreement becomes available may constitute acceptance of such changes.</p>

      <h2 className={styles.h2}>30. Assignment</h2>
      <p className={styles.p}>The Seller may not transfer or assign their rights or obligations under this Agreement without Harmonies' prior written approval.</p>
      <p className={styles.p}>Harmonies may assign or transfer this Agreement as part of a merger, acquisition, restructuring, or transfer of business assets.</p>

      <h2 className={styles.h2}>31. Entire Agreement</h2>
      <p className={styles.p}>This Agreement represents the complete agreement between Harmonies and the Seller regarding the Seller's use of the platform and supersedes any previous agreements or communications relating to the same subject matter.</p>

      <h2 className={styles.h2}>32. Governing Law and Dispute Resolution</h2>
      <p className={styles.p}>This Agreement shall be governed by the laws of the United Arab Emirates.</p>
      <p className={styles.p}>Any dispute arising from this Agreement shall be resolved through the competent courts of the United Arab Emirates unless otherwise required by applicable law.</p>

      <h2 className={styles.h2}>33. Electronic Acceptance</h2>
      <p className={styles.p}>By registering as a Seller, clicking "Accept", submitting products, accepting orders, or continuing to use Seller services, the Seller confirms that:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>They have read and understood this Agreement.</li>
        <li className={styles.li}>They agree to comply with all obligations contained herein.</li>
        <li className={styles.li}>They have authority to enter into this Agreement.</li>
      </ul>
      <p className={styles.p}>Electronic acceptance shall have the same legal effect as a signed agreement.</p>

      <h2 className={styles.h2}>34. Contact Information</h2>
      <p className={styles.p}>For questions regarding this Agreement:</p>
      <p className={styles.p}><strong>Harmonies</strong><br />Email: <a href="mailto:info@harmonies.ae" className={styles.link}>info@harmonies.ae</a></p>
    </LegalPage>
  );
}
