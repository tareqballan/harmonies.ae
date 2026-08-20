import LegalPage from '../LegalPage/LegalPage';
import styles from '../LegalPage/LegalPage.module.css';

export default function SellerAgreement() {
  return (
    <LegalPage
      title="Seller Agreement"
      description="The terms governing the relationship between Harmonies and sellers using the platform."
      path="/seller-agreement"
      dateLabel="Effective Date"
      date="19 August 2026"
    >
      <p className={styles.p}>This Seller Agreement ("Agreement") is entered into between <strong>Lumiere Global Ventures LLC-FZ</strong>, operating the Harmonies Platform ("Harmonies," "we," "our," or "us"), and the individual or legal entity registered as a Seller ("Seller," "you," or "your").</p>
      <p className={styles.p}>This Agreement governs your use of Harmonies to list, promote, sell, and fulfil products.</p>

      <h2 className={styles.h2}>1. Acceptance</h2>
      <p className={styles.p}>By completing electronic acceptance, the Seller confirms that:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The Seller has read and understood this Agreement.</li>
        <li className={styles.li}>The Seller agrees to comply with it.</li>
        <li className={styles.li}>The person accepting it has authority to bind the Seller.</li>
      </ul>
      <p className={styles.p}>Merely browsing the Platform does not constitute acceptance of this Seller Agreement.</p>

      <h2 className={styles.h2}>2. Seller Eligibility</h2>
      <p className={styles.p}>To become and remain a Seller, you must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Be legally capable of entering into this Agreement.</li>
        <li className={styles.li}>Maintain a legally registered business where required.</li>
        <li className={styles.li}>Hold all licences, permits, approvals, and registrations required for your activities and products.</li>
        <li className={styles.li}>Complete Harmonies' KYC and compliance processes.</li>
        <li className={styles.li}>Provide accurate, complete, and current information.</li>
        <li className={styles.li}>Comply with applicable UAE laws and regulations.</li>
      </ul>
      <p className={styles.p}>Harmonies may approve or reject Seller applications based on eligibility, compliance, operational, or risk considerations.</p>

      <h2 className={styles.h2}>3. Seller Warranties</h2>
      <p className={styles.p}>The Seller represents and warrants that:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>All information supplied to Harmonies is accurate and complete.</li>
        <li className={styles.li}>The Seller has authority to enter into this Agreement.</li>
        <li className={styles.li}>The Seller owns or is legally authorised to sell every listed product.</li>
        <li className={styles.li}>Its products, listings, and activities comply with applicable laws.</li>
        <li className={styles.li}>It holds all required licences and intellectual-property rights.</li>
        <li className={styles.li}>All transactions represent genuine sales to genuine customers.</li>
        <li className={styles.li}>It will notify Harmonies promptly if any warranty becomes inaccurate.</li>
      </ul>

      <h2 className={styles.h2}>4. Seller Account</h2>
      <p className={styles.p}>The Seller is responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Protecting account credentials.</li>
        <li className={styles.li}>All activity conducted through the account.</li>
        <li className={styles.li}>Keeping account, contact, ownership, and payout information current.</li>
        <li className={styles.li}>Immediately reporting unauthorised access.</li>
      </ul>
      <p className={styles.p}>Accounts may only be used by the registered Seller and its authorised representatives. They may not be sold, transferred, shared, or assigned without Harmonies' written approval.</p>

      <h2 className={styles.h2}>5. Verification and Compliance Reviews</h2>
      <p className={styles.p}>Harmonies may request information or documents to verify:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Identity, ownership, and business registration.</li>
        <li className={styles.li}>Licences and regulatory approvals.</li>
        <li className={styles.li}>Bank and payout details.</li>
        <li className={styles.li}>Product authenticity and origin.</li>
        <li className={styles.li}>Intellectual-property rights.</li>
        <li className={styles.li}>VAT-registration status and Tax Registration Number ("TRN").</li>
        <li className={styles.li}>Transaction legitimacy.</li>
        <li className={styles.li}>Continued eligibility and compliance.</li>
      </ul>
      <p className={styles.p}>The Seller must provide requested documents within the period specified by Harmonies.</p>
      <p className={styles.p}>Failure to provide satisfactory information may result in listing removal, delayed payouts, additional reserves, restrictions, suspension, or termination.</p>
      <p className={styles.p}>The Seller must promptly notify Harmonies of any change to its VAT-registration status and provide accurate supporting documents.</p>

      <h2 className={styles.h2}>6. Changes to Seller Information</h2>
      <p className={styles.p}>The Seller must promptly notify Harmonies of material changes concerning:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Ownership or beneficial owners.</li>
        <li className={styles.li}>Management or authorised representatives.</li>
        <li className={styles.li}>Trade licence, legal name, or business activities.</li>
        <li className={styles.li}>Address or contact details.</li>
        <li className={styles.li}>Bank or payout information.</li>
        <li className={styles.li}>Financial condition affecting fulfilment or refunds.</li>
        <li className={styles.li}>Product categories.</li>
        <li className={styles.li}>Regulatory investigations or legal proceedings.</li>
      </ul>

      <h2 className={styles.h2}>7. Seller Responsibilities</h2>
      <p className={styles.p}>The Seller agrees to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Sell only lawful and authorised products.</li>
        <li className={styles.li}>Provide accurate product information.</li>
        <li className={styles.li}>Maintain accurate inventory.</li>
        <li className={styles.li}>Fulfil accepted orders on time.</li>
        <li className={styles.li}>Provide professional customer service.</li>
        <li className={styles.li}>Cooperate with complaints, returns, refunds, disputes, fraud reviews, and chargebacks.</li>
        <li className={styles.li}>Maintain sufficient operational and financial capacity to fulfil orders and meet refund obligations.</li>
      </ul>
      <p className={styles.p}>The Seller remains responsible for all products listed and sold through Harmonies.</p>

      <h2 className={styles.h2}>8. Product Listings</h2>
      <p className={styles.p}>The Seller is responsible for all listing information, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Names and descriptions.</li>
        <li className={styles.li}>Images and videos.</li>
        <li className={styles.li}>Specifications and variations.</li>
        <li className={styles.li}>Prices and availability.</li>
        <li className={styles.li}>Ingredients, materials, sizes, warnings, and preparation requirements.</li>
        <li className={styles.li}>Product claims and delivery restrictions.</li>
      </ul>
      <p className={styles.p}>Listings must accurately represent the product and must not contain false, incomplete, misleading, or deceptive information.</p>
      <p className={styles.p}>Harmonies may review, edit, reject, hide, restrict, or remove listings that violate this Agreement, applicable law, or Platform standards.</p>

      <h2 className={styles.h2}>9. Product Quality and Safety</h2>
      <p className={styles.p}>The Seller guarantees that products:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Match their descriptions and displayed images.</li>
        <li className={styles.li}>Are authentic and genuine.</li>
        <li className={styles.li}>Are free from undisclosed defects.</li>
        <li className={styles.li}>Are safe and suitable for their intended use.</li>
        <li className={styles.li}>Meet applicable quality, labelling, storage, and safety requirements.</li>
        <li className={styles.li}>Have not expired, been recalled, or been improperly stored.</li>
        <li className={styles.li}>Comply with applicable laws and regulatory requirements.</li>
      </ul>
      <p className={styles.p}>Claims that products are handmade, customised, original, sustainable, or otherwise distinctive must be truthful.</p>

      <h2 className={styles.h2}>10. Prohibited and Restricted Products</h2>
      <p className={styles.p}>Sellers must not list or sell illegal, restricted, unsafe, counterfeit, or harmful products, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Counterfeit, replica, or unauthorised branded goods.</li>
        <li className={styles.li}>Stolen goods.</li>
        <li className={styles.li}>Weapons, ammunition, or explosives.</li>
        <li className={styles.li}>Illegal drugs or controlled substances.</li>
        <li className={styles.li}>Unauthorised medicines or regulated medical products.</li>
        <li className={styles.li}>Tobacco, nicotine, cigarettes, or vaping products.</li>
        <li className={styles.li}>Alcohol.</li>
        <li className={styles.li}>Hazardous chemicals or dangerous materials.</li>
        <li className={styles.li}>Adult or sexually explicit products.</li>
        <li className={styles.li}>Human biological materials.</li>
        <li className={styles.li}>Live animals.</li>
        <li className={styles.li}>Recalled, expired, or unsafe products.</li>
        <li className={styles.li}>Products infringing third-party rights.</li>
        <li className={styles.li}>Products prohibited by law, payment providers, card schemes, logistics providers, or competent authorities.</li>
      </ul>
      <p className={styles.p}>The Seller may only sell product categories approved by Harmonies. Approved product categories currently include:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Handmade products.</li>
        <li className={styles.li}>Food.</li>
        <li className={styles.li}>Drinks.</li>
        <li className={styles.li}>Chocolates and sweets.</li>
        <li className={styles.li}>Apparel.</li>
        <li className={styles.li}>Shoes.</li>
      </ul>
      <p className={styles.p}>New categories may require prior written approval.</p>

      <h2 className={styles.h2}>11. Pricing and Promotions</h2>
      <p className={styles.p}>The Seller determines its product prices.</p>
      <p className={styles.p}>All prices submitted to Harmonies must be the <strong>final consumer price</strong>, inclusive of any VAT the Seller is legally required to charge.</p>
      <p className={styles.p}>A VAT-registered Seller must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Include applicable VAT in the submitted product price.</li>
        <li className={styles.li}>Provide Harmonies with a valid TRN.</li>
        <li className={styles.li}>Issue tax invoices where legally required.</li>
        <li className={styles.li}>Ensure its pricing and tax information is accurate.</li>
      </ul>
      <p className={styles.p}>A Seller that is not VAT-registered must not charge, collect, represent, or separately identify any amount as VAT.</p>
      <p className={styles.p}>The Seller also agrees that:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Prices must be accurate and transparent.</li>
        <li className={styles.li}>Promotions and discounts must be genuine.</li>
        <li className={styles.li}>Prices must not be artificially increased before a discount.</li>
        <li className={styles.li}>Pricing must comply with applicable consumer-protection and tax laws.</li>
      </ul>
      <p className={styles.p}>Harmonies may display the VAT component or other tax information where required based on information supplied by the Seller.</p>
      <p className={styles.p}>Campaign participation and financial responsibilities will be communicated before participation.</p>

      <h2 className={styles.h2}>12. Commissions and Fees</h2>
      <p className={styles.p}>Applicable commissions, delivery charges, subscription fees, service charges, and other fees will be shown in the Seller's pricing terms or package.</p>
      <p className={styles.p}>The Seller must review the applicable fees before accepting the package or transaction.</p>
      <p className={styles.p}>The Seller authorises Harmonies to deduct all applicable and authorised amounts from transaction proceeds, the Seller Balance, or future payouts.</p>
      <p className={styles.p}>Changes to fees will be handled in accordance with Section 46.</p>

      <h2 className={styles.h2}>13. Inventory Management</h2>
      <p className={styles.p}>The Seller must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Keep inventory and availability accurate.</li>
        <li className={styles.li}>Promptly mark unavailable products as unavailable.</li>
        <li className={styles.li}>Avoid accepting orders it cannot fulfil.</li>
        <li className={styles.li}>Notify Harmonies promptly of inventory problems.</li>
      </ul>
      <p className={styles.p}>Repeated inventory-related cancellations may result in reduced visibility, restrictions, reserves, suspension, or termination.</p>

      <h2 className={styles.h2}>14. Orders and Fulfilment</h2>
      <p className={styles.p}>After accepting an order, the Seller must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Prepare it within the required timeframe.</li>
        <li className={styles.li}>Ensure it matches the Buyer's order.</li>
        <li className={styles.li}>Package it appropriately.</li>
        <li className={styles.li}>Make it available for pickup as instructed.</li>
        <li className={styles.li}>Provide accurate shipment information.</li>
        <li className={styles.li}>Promptly report fulfilment problems.</li>
      </ul>
      <p className={styles.p}>The Seller must not cancel an accepted order without a legitimate reason.</p>

      <h2 className={styles.h2}>15. Right to Cancel or Refuse Orders</h2>
      <p className={styles.p}>Harmonies may cancel, suspend, or refuse an order where it reasonably suspects:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Fraud or unauthorised payment.</li>
        <li className={styles.li}>A pricing or listing error.</li>
        <li className={styles.li}>Product unavailability.</li>
        <li className={styles.li}>A technical failure.</li>
        <li className={styles.li}>A legal, safety, sanctions, or regulatory concern.</li>
        <li className={styles.li}>A violation of Platform or payment-provider rules.</li>
      </ul>
      <p className={styles.p}>Necessary refunds will be processed according to applicable law and Harmonies' payment procedures.</p>

      <h2 className={styles.h2}>16. Packaging Requirements</h2>
      <p className={styles.p}>The Seller must use packaging that:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Protects the product during transportation.</li>
        <li className={styles.li}>Suits its weight, size, fragility, and temperature requirements.</li>
        <li className={styles.li}>Preserves product quality.</li>
        <li className={styles.li}>Complies with carrier and safety requirements.</li>
        <li className={styles.li}>Is properly sealed and labelled where necessary.</li>
      </ul>
      <p className={styles.p}>The Seller must print the shipping label and affix it to the package before pickup.</p>
      <p className={styles.p}>Where possible, the Seller should combine two or more products from the same order into a single package, provided this does not compromise product safety, hygiene, quality, or protection.</p>
      <p className={styles.p}>Where reasonably possible, the Seller must use the <strong>smallest suitably sized package</strong> that safely protects the product. Unnecessarily large packaging must be avoided because delivery charges may be based on volumetric weight.</p>
      <p className={styles.p}>Reducing package size must not compromise product safety, hygiene, quality, or protection.</p>
      <p className={styles.p}>Additional costs caused by inaccurate measurements, excessive packaging, or non-compliance may be deducted from the Seller Balance.</p>

      <h2 className={styles.h2}>17. Shipping and Delivery</h2>
      <p className={styles.p}>Harmonies may coordinate delivery through third-party logistics providers.</p>
      <p className={styles.p}>The Seller must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Prepare orders before scheduled pickup.</li>
        <li className={styles.li}>Provide accurate pickup information.</li>
        <li className={styles.li}>Provide accurate shipment weight and dimensions.</li>
        <li className={styles.li}>Print and affix the shipping label to each order before pickup.</li>
        <li className={styles.li}>Comply with delivery-partner restrictions.</li>
        <li className={styles.li}>Retain reasonable evidence that the correct order was handed over.</li>
      </ul>
      <p className={styles.p}>Chargeable weight may be based on the greater of actual or volumetric weight.</p>
      <p className={styles.p}>Harmonies does not guarantee delivery times and is not liable for third-party delays where Harmonies and the Seller fulfilled their respective responsibilities.</p>

      <h2 className={styles.h2}>18. Returns and Refunds</h2>
      <p className={styles.p}>Returns and refunds will be handled under Harmonies' Return Policy and applicable law.</p>
      <p className={styles.p}>The Seller must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Accept valid returns.</li>
        <li className={styles.li}>Respond within the required period.</li>
        <li className={styles.li}>Cooperate with investigations.</li>
        <li className={styles.li}>Provide requested evidence.</li>
        <li className={styles.li}>Comply with Harmonies' decisions concerning returns, refunds, and customer claims where made under applicable law and Platform policies.</li>
      </ul>
      <p className={styles.p}>The Seller is responsible where a product:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Does not match its listing.</li>
        <li className={styles.li}>Is defective, unsafe, counterfeit, or unauthorised.</li>
        <li className={styles.li}>Is damaged because of inadequate packaging.</li>
        <li className={styles.li}>Fails to meet reasonable expectations because of inaccurate information.</li>
      </ul>
      <p className={styles.p}>For change-of-mind returns, the Buyer generally bears the shipping and return delivery cost, subject to the Seller's displayed return policy, Harmonies' minimum requirements, and applicable law.</p>
      <p className={styles.p}>Harmonies will work with Sellers to identify the causes of recurring returns and help reduce them, protecting both parties from unnecessary costs.</p>
      <p className={styles.p}>Applicable costs may be deducted from the Seller Balance.</p>

      <h2 className={styles.h2}>19. Payments and Seller Balance</h2>
      <p className={styles.p}>Harmonies may collect Buyer payments in connection with Seller transactions.</p>
      <p className={styles.p}>Transaction proceeds will initially remain pending. Unless otherwise specified, funds remain unavailable until the applicable return period of <strong>seven calendar days after successful delivery</strong> expires.</p>
      <p className={styles.p}>Funds become available only when no return, refund, dispute, chargeback, fraud review, or other authorised hold remains pending.</p>
      <p className={styles.p}>The Available Balance is calculated after deductions including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Harmonies' commission.</li>
        <li className={styles.li}>Applicable service or subscription fees.</li>
        <li className={styles.li}>Delivery charges, where applicable.</li>
        <li className={styles.li}>Refunds and return costs, where applicable.</li>
        <li className={styles.li}>Chargebacks and card-scheme assessments.</li>
        <li className={styles.li}>Taxes Harmonies must collect or withhold.</li>
        <li className={styles.li}>Seller-specific reserves.</li>
        <li className={styles.li}>Other authorised deductions.</li>
      </ul>
      <p className={styles.p}>Harmonies is responsible for payment-processing charges, which are not deducted from the Seller's proceeds.</p>

      <h2 className={styles.h2}>20. Seller Payouts</h2>
      <p className={styles.p}>A Seller may request a payout when its Available Balance reaches at least <strong>AED 50</strong>.</p>
      <p className={styles.p}>Payouts are subject to Harmonies' processing procedures and communicated timelines.</p>
      <p className={styles.p}>The Seller is responsible for providing accurate bank and payout information.</p>
      <p className={styles.p}>Harmonies may delay, offset, suspend, or reject a payout where:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>A refund, return, dispute, or chargeback is pending.</li>
        <li className={styles.li}>Fraud or suspicious activity is suspected.</li>
        <li className={styles.li}>Additional KYC or compliance checks are required.</li>
        <li className={styles.li}>The Seller owes money to Harmonies.</li>
        <li className={styles.li}>A payment or banking service is unavailable.</li>
        <li className={styles.li}>The payment provider, acquiring bank, card scheme, regulator, or applicable law requires a hold.</li>
        <li className={styles.li}>Harmonies reasonably determines that immediate payout would create a material financial risk.</li>
      </ul>
      <p className={styles.p}>A delayed payout is not a forfeiture of funds. Undisputed amounts will be released when the relevant risk or obligation has been resolved.</p>

      <h2 className={styles.h2}>21. Seller Risk Reserve</h2>
      <p className={styles.p}>Harmonies may establish or adjust a reasonable reserve against a Seller's current or future proceeds when necessary to cover anticipated:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Refunds or returns.</li>
        <li className={styles.li}>Chargebacks and payment disputes.</li>
        <li className={styles.li}>Fraud losses.</li>
        <li className={styles.li}>Delivery or fulfilment failures.</li>
        <li className={styles.li}>Card-scheme fines or assessments.</li>
        <li className={styles.li}>Negative balances.</li>
        <li className={styles.li}>Other amounts for which the Seller may be responsible.</li>
      </ul>
      <p className={styles.p}>In determining whether a reserve is necessary, Harmonies may consider:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Chargeback, refund, return, and cancellation rates.</li>
        <li className={styles.li}>Complaint and non-delivery rates.</li>
        <li className={styles.li}>Unusual transaction activity.</li>
        <li className={styles.li}>Product category and delivery timeframe.</li>
        <li className={styles.li}>Seller history and financial condition.</li>
        <li className={styles.li}>Suspected fraud or policy violations.</li>
        <li className={styles.li}>Requirements imposed by a payment provider, acquiring bank, regulator, or card scheme.</li>
      </ul>
      <p className={styles.p}>Where reasonably possible, Harmonies will notify the Seller of the reserve percentage or amount, the reason for it, and the conditions for its review or release.</p>
      <p className={styles.p}>A reserve may apply to a specific Seller without applying to other Sellers. Harmonies will not retain more than it reasonably considers necessary to cover the identified exposure.</p>
      <p className={styles.p}>Reserve amounts may remain held until the applicable dispute, chargeback, refund, or legal exposure has reasonably expired. Any remaining amount will then be released, subject to outstanding obligations.</p>

      <h2 className={styles.h2}>22. Chargebacks and Payment Disputes</h2>
      <p className={styles.p}>If a payment is disputed or reversed, the Seller must cooperate promptly and provide requested evidence, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Order and invoice records.</li>
        <li className={styles.li}>Product descriptions.</li>
        <li className={styles.li}>Customer communications.</li>
        <li className={styles.li}>Proof of dispatch and delivery.</li>
        <li className={styles.li}>Return or refund records.</li>
        <li className={styles.li}>Other evidence reasonably required.</li>
      </ul>
      <p className={styles.p}>If a chargeback results from the Seller's product, listing, conduct, fulfilment, policy breach, or failure to provide evidence, Harmonies may recover:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The transaction amount.</li>
        <li className={styles.li}>Payment-processing charges.</li>
        <li className={styles.li}>Delivery and return costs.</li>
        <li className={styles.li}>Chargeback fees.</li>
        <li className={styles.li}>Card-scheme fines or assessments.</li>
        <li className={styles.li}>Reasonable administrative costs directly related to the dispute.</li>
      </ul>
      <p className={styles.p}>The Seller authorises Harmonies to recover these amounts from its balance, reserve, or future proceeds.</p>

      <h2 className={styles.h2}>23. Negative Balances and Recovery</h2>
      <p className={styles.p}>If deductions create a negative Seller Balance, the Seller must repay the amount upon request.</p>
      <p className={styles.p}>Harmonies may:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Offset the amount against future proceeds.</li>
        <li className={styles.li}>Apply Seller reserve funds.</li>
        <li className={styles.li}>Suspend payouts, listings, or account access.</li>
        <li className={styles.li}>Request direct payment.</li>
        <li className={styles.li}>Take reasonable recovery action where the amount remains unpaid.</li>
      </ul>
      <p className={styles.p}>Harmonies will provide a reasonable explanation of material deductions upon request.</p>

      <h2 className={styles.h2}>24. Fraud Prevention and Transaction Review</h2>
      <p className={styles.p}>The Seller must not:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Create fake orders.</li>
        <li className={styles.li}>Purchase its own products to manipulate activity.</li>
        <li className={styles.li}>Process transactions for another person or business.</li>
        <li className={styles.li}>Split transactions to avoid controls.</li>
        <li className={styles.li}>Manipulate ratings, reviews, or visibility.</li>
        <li className={styles.li}>Abuse promotions.</li>
        <li className={styles.li}>Accept or encourage unauthorised payments.</li>
        <li className={styles.li}>Misrepresent the nature or value of a transaction.</li>
      </ul>
      <p className={styles.p}>Harmonies may review, delay, decline, or cancel unusual or suspicious transactions.</p>
      <p className={styles.p}>The Seller must investigate suspicious orders and cooperate with Harmonies before fulfilment when requested.</p>

      <h2 className={styles.h2}>25. Transaction Records</h2>
      <p className={styles.p}>The Seller must maintain complete and accurate records relating to each transaction, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Invoices and order information.</li>
        <li className={styles.li}>Product and pricing details.</li>
        <li className={styles.li}>Customer communications.</li>
        <li className={styles.li}>Dispatch and delivery evidence.</li>
        <li className={styles.li}>Refund and return records.</li>
        <li className={styles.li}>Relevant licences and authenticity documents.</li>
      </ul>
      <p className={styles.p}>Records must be retained for at least <strong>five years</strong>, or longer if applicable law requires.</p>
      <p className={styles.p}>The Seller must supply requested records promptly and within any deadline communicated by Harmonies.</p>

      <h2 className={styles.h2}>26. Taxes and Legal Obligations</h2>
      <p className={styles.p}>The Seller is solely responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Determining whether VAT registration is required.</li>
        <li className={styles.li}>Maintaining valid VAT registration where applicable.</li>
        <li className={styles.li}>Entering VAT-inclusive prices when legally required to charge VAT.</li>
        <li className={styles.li}>Providing and maintaining an accurate TRN.</li>
        <li className={styles.li}>Issuing legally compliant invoices and tax invoices.</li>
        <li className={styles.li}>Reporting and paying VAT and other applicable taxes.</li>
        <li className={styles.li}>Correcting tax information and notifying Harmonies promptly of any change.</li>
      </ul>
      <p className={styles.p}>The Seller authorises Harmonies to rely on the VAT-registration information it provides. The Seller remains responsible for inaccurate tax treatment, including VAT improperly charged, omitted, reported, or paid.</p>
      <p className={styles.p}>Harmonies may suspend listings, delay payouts, correct displayed tax information, or request additional documentation where the Seller's VAT status or tax information appears inaccurate.</p>
      <p className={styles.p}>Any commission, subscription fee, delivery service charge, or other service supplied by Harmonies may be subject to VAT separately where Harmonies is legally required to charge it. Such VAT may be deducted from the Seller Balance or otherwise collected from the Seller.</p>
      <p className={styles.p}>Harmonies does not provide tax or legal advice.</p>

      <h2 className={styles.h2}>27. Cross-Border Sales</h2>
      <p className={styles.p}>For cross-border transactions, the Seller is responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Import and export compliance.</li>
        <li className={styles.li}>Customs documentation.</li>
        <li className={styles.li}>Product classification.</li>
        <li className={styles.li}>Applicable duties and taxes assigned to the Seller.</li>
        <li className={styles.li}>Destination-country labelling and safety requirements.</li>
        <li className={styles.li}>Ensuring the product may legally be delivered.</li>
      </ul>
      <p className={styles.p}>Harmonies may restrict cross-border sales or destinations.</p>

      <h2 className={styles.h2}>28. Marketing Rights</h2>
      <p className={styles.p}>The Seller grants Harmonies a worldwide, royalty-free, non-exclusive licence to use, reproduce, adapt, display, publish, and distribute Seller-provided content for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Operating the Platform.</li>
        <li className={styles.li}>Promoting Sellers and products.</li>
        <li className={styles.li}>Creating Harmonies collections.</li>
        <li className={styles.li}>Social-media and advertising campaigns.</li>
        <li className={styles.li}>Emails and other promotional materials.</li>
      </ul>
      <p className={styles.p}>The Seller confirms that it has all rights required to grant this licence.</p>

      <h2 className={styles.h2}>29. Product Visibility</h2>
      <p className={styles.p}>Harmonies determines how Sellers and products are ranked, recommended, displayed, or promoted.</p>
      <p className={styles.p}>Visibility may depend on relevance, availability, product quality, customer engagement, fulfilment, returns, complaints, and Seller performance.</p>
      <p className={styles.p}>No package guarantees ranking, exposure, sales, or revenue.</p>

      <h2 className={styles.h2}>30. Customer Communication</h2>
      <p className={styles.p}>The Seller must communicate professionally and only for legitimate purposes.</p>
      <p className={styles.p}>The Seller must not:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Direct Buyers to purchase outside Harmonies.</li>
        <li className={styles.li}>Request unauthorised direct payments.</li>
        <li className={styles.li}>Circumvent Harmonies' fees.</li>
        <li className={styles.li}>Use Buyer data for unauthorised marketing.</li>
        <li className={styles.li}>Provide false information.</li>
        <li className={styles.li}>Harass or discriminate against Buyers.</li>
      </ul>
      <p className={styles.p}>Transactions initiated through Harmonies must be completed through Harmonies unless expressly authorised otherwise.</p>

      <h2 className={styles.h2}>31. Seller Performance</h2>
      <p className={styles.p}>Harmonies may evaluate:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Fulfilment and cancellation rates.</li>
        <li className={styles.li}>Preparation and delivery performance.</li>
        <li className={styles.li}>Refund, return, and chargeback rates.</li>
        <li className={styles.li}>Customer complaints.</li>
        <li className={styles.li}>Response times.</li>
        <li className={styles.li}>Product quality.</li>
        <li className={styles.li}>Compliance history.</li>
      </ul>
      <p className={styles.p}>Poor performance may lead to warnings, reduced visibility, transaction limits, additional reserves, delayed payouts, restrictions, suspension, or termination.</p>

      <h2 className={styles.h2}>32. Customer Data and Privacy</h2>
      <p className={styles.p}>Seller access to Buyer information is limited to fulfilment and authorised customer service.</p>
      <p className={styles.p}>The Seller must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Use Buyer information only for authorised purposes.</li>
        <li className={styles.li}>Protect it from unauthorised access.</li>
        <li className={styles.li}>Not sell, share, retain unnecessarily, or misuse it.</li>
        <li className={styles.li}>Delete it when no longer required, unless retention is legally required.</li>
        <li className={styles.li}>Comply with applicable privacy laws.</li>
      </ul>
      <p className={styles.p}>Unauthorised use is a material breach.</p>

      <h2 className={styles.h2}>33. Intellectual Property</h2>
      <p className={styles.p}>The Seller represents that:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>It owns or is authorised to sell listed products.</li>
        <li className={styles.li}>It owns or may lawfully use submitted content.</li>
        <li className={styles.li}>Its products and content do not infringe third-party rights.</li>
      </ul>
      <p className={styles.p}>Harmonies may remove disputed content, request evidence, or suspend related activity while investigating complaints.</p>

      <h2 className={styles.h2}>34. Confidentiality</h2>
      <p className={styles.p}>The Seller must keep confidential and must not disclose to any third party, including any actual or potential competitor of Harmonies, non-public information concerning Harmonies or the Platform, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Business, financial, and commercial information.</li>
        <li className={styles.li}>Platform operations, strategies, and future plans.</li>
        <li className={styles.li}>Technical systems, features, and documentation.</li>
        <li className={styles.li}>Confidential pricing, fees, or service terms.</li>
        <li className={styles.li}>Customer, Seller, partner, and supplier information.</li>
        <li className={styles.li}>Reports, statistics, analytics, and performance data.</li>
      </ul>
      <p className={styles.p}>The Seller may use confidential information only to operate through Harmonies or comply with this Agreement.</p>
      <p className={styles.p}>These restrictions do not apply to information that:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Became public without breach of this Agreement.</li>
        <li className={styles.li}>Was already lawfully known to the Seller.</li>
        <li className={styles.li}>Was lawfully received from an independent third party.</li>
        <li className={styles.li}>Must be disclosed by law or binding order.</li>
      </ul>
      <p className={styles.p}>Necessary disclosure to employees or professional advisers is permitted only where they are subject to equivalent confidentiality duties.</p>
      <p className={styles.p}>These obligations survive termination.</p>

      <h2 className={styles.h2}>35. Marketplace Role</h2>
      <p className={styles.p}>Harmonies operates as a marketplace connecting Sellers and Buyers.</p>
      <p className={styles.p}>Unless expressly stated otherwise, Harmonies is not the seller, importer, manufacturer, distributor, reseller, or owner of Seller products.</p>
      <p className={styles.p}>The Seller is the contracting supplier and remains responsible for product legality, quality, safety, description, fulfilment, warranties, and related claims.</p>

      <h2 className={styles.h2}>36. Platform Availability</h2>
      <p className={styles.p}>Harmonies will use commercially reasonable efforts to maintain the Platform's availability, security, and proper operation.</p>
      <p className={styles.p}>Continuous or error-free access cannot be guaranteed. Temporary unavailability may result from:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Scheduled or emergency maintenance.</li>
        <li className={styles.li}>Updates or security measures.</li>
        <li className={styles.li}>Cyberattacks.</li>
        <li className={styles.li}>Hosting, utility, internet, or telecommunications failures.</li>
        <li className={styles.li}>Third-party service-provider failures.</li>
        <li className={styles.li}>Government actions or legal requirements.</li>
        <li className={styles.li}>Natural disasters, war, civil unrest, pandemics, or other circumstances beyond Harmonies' reasonable control.</li>
      </ul>
      <p className={styles.p}>Harmonies will take reasonable measures to restore affected services and minimise disruption.</p>
      <p className={styles.p}>Harmonies is not liable for temporary unavailability caused by circumstances beyond its reasonable control, provided it has taken commercially reasonable preventive and recovery measures.</p>

      <h2 className={styles.h2}>37. Account Inactivity</h2>
      <p className={styles.p}>Harmonies may restrict or suspend an account after an extended period of inactivity.</p>
      <p className={styles.p}>Reactivation may require updated information or renewed KYC verification.</p>

      <h2 className={styles.h2}>38. Suspension and Termination</h2>
      <p className={styles.p}>Harmonies may suspend, restrict, or terminate an account where the Seller:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Violates this Agreement.</li>
        <li className={styles.li}>Sells prohibited products.</li>
        <li className={styles.li}>Engages in fraud or deceptive conduct.</li>
        <li className={styles.li}>Provides inaccurate information.</li>
        <li className={styles.li}>Fails KYC requirements.</li>
        <li className={styles.li}>Repeatedly fails to fulfil orders.</li>
        <li className={styles.li}>Receives excessive substantiated complaints or chargebacks.</li>
        <li className={styles.li}>Fails to pay amounts owed.</li>
        <li className={styles.li}>Violates applicable law.</li>
        <li className={styles.li}>Creates material financial, legal, reputational, or customer risk.</li>
      </ul>
      <p className={styles.p}>Following termination:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>No new products or orders may be accepted.</li>
        <li className={styles.li}>Existing orders, returns, investigations, and payouts will continue to be processed.</li>
        <li className={styles.li}>Outstanding obligations remain payable.</li>
        <li className={styles.li}>Reasonable reserves may remain held until outstanding exposure expires.</li>
        <li className={styles.li}>Remaining undisputed amounts will then be paid to the Seller.</li>
      </ul>

      <h2 id="account-deletion" className={styles.h2}>39. Account Deletion</h2>
      <p className={styles.p}>The Seller may not delete its account while:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Any order remains outstanding, including an order that has not been fulfilled or that has been fulfilled but remains within its applicable return window.</li>
        <li className={styles.li}>Any balance remains in the Seller's account that has not yet been withdrawn.</li>
      </ul>
      <p className={styles.p}>The Seller has the right to close its store while these conditions are outstanding. Once all orders have been resolved, applicable return windows have expired, and the Seller's balance has been fully withdrawn, the Seller may request account deletion again.</p>
      <p className={styles.p}>On account deletion, Harmonies will retain the Seller's store data for a period of <strong>five years</strong> for legal and compliance reasons, including in case of a dispute, tax audit, or regulatory request. During this period, retained data will be used solely for those purposes and for no other purpose, including marketing, analytics, or profiling. The data will be permanently deleted after that period expires.</p>

      <h2 className={styles.h2}>40. Limitation of Liability</h2>
      <p className={styles.p}>To the maximum extent permitted by law, Harmonies is not responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Seller product quality, safety, or authenticity.</li>
        <li className={styles.li}>Seller statements, acts, or omissions.</li>
        <li className={styles.li}>Buyer misuse of products.</li>
        <li className={styles.li}>Indirect, incidental, or consequential losses.</li>
        <li className={styles.li}>Loss of anticipated profits.</li>
        <li className={styles.li}>Third-party delivery or payment-service delays.</li>
        <li className={styles.li}>Events outside Harmonies' reasonable control.</li>
      </ul>
      <p className={styles.p}>Nothing excludes liability that cannot legally be excluded.</p>

      <h2 className={styles.h2}>41. Indemnification</h2>
      <p className={styles.p}>To the extent permitted by law, the Seller agrees to defend, indemnify, and hold harmless Harmonies, its affiliates, directors, employees, representatives, and partners from claims, losses, liabilities, penalties, costs, or expenses arising from:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Seller products.</li>
        <li className={styles.li}>Product defects, injuries, or customer claims.</li>
        <li className={styles.li}>Breach of this Agreement.</li>
        <li className={styles.li}>Violation of law.</li>
        <li className={styles.li}>Intellectual-property infringement.</li>
        <li className={styles.li}>Seller negligence, fraud, or misconduct.</li>
        <li className={styles.li}>Misuse of customer data.</li>
        <li className={styles.li}>Seller-responsible refunds, disputes, or chargebacks.</li>
      </ul>

      <h2 className={styles.h2}>42. Force Majeure</h2>
      <p className={styles.p}>Neither party is liable for failure or delay caused by circumstances beyond its reasonable control.</p>
      <p className={styles.p}>The affected party must take reasonable steps to reduce the impact and resume performance where possible.</p>

      <h2 className={styles.h2}>43. Survival</h2>
      <p className={styles.p}>Provisions concerning payments, reserves, negative balances, transaction records, taxes, confidentiality, customer data, intellectual property, liability, indemnification, and dispute resolution survive suspension or termination.</p>

      <h2 className={styles.h2}>44. Notices</h2>
      <p className={styles.p}>Harmonies may issue notices through:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>The Platform.</li>
        <li className={styles.li}>The Seller's registered email.</li>
        <li className={styles.li}>Push notifications.</li>
        <li className={styles.li}>Other reasonable electronic means.</li>
      </ul>
      <p className={styles.p}>The Seller must maintain current contact information and review Platform communications.</p>

      <h2 className={styles.h2}>45. Payment-Provider and Card-Scheme Requirements</h2>
      <p className={styles.p}>The Seller agrees to comply with reasonable payment-processing, fraud-prevention, documentation, and transaction requirements communicated by Harmonies.</p>
      <p className={styles.p}>Where payment-provider or card-scheme rules conflict with this Agreement, Harmonies may take the measures reasonably necessary to maintain payment services, subject to applicable law.</p>
      <p className={styles.p}>This may include transaction reviews, limits, additional documentation, payout delays, or seller-specific reserves.</p>

      <h2 className={styles.h2}>46. Amendments</h2>
      <p className={styles.p}>Harmonies may amend this Agreement.</p>
      <p className={styles.p}>Material changes will be communicated and become effective only after the Seller expressly accepts them.</p>
      <p className={styles.p}>If the Seller does not accept a material update, Harmonies may prevent new listings or orders while processing existing obligations under the previously accepted terms.</p>
      <p className={styles.p}>Non-material changes may take effect following notice where permitted by law.</p>

      <h2 className={styles.h2}>47. Assignment</h2>
      <p className={styles.p}>The Seller may not assign this Agreement without Harmonies' written approval.</p>
      <p className={styles.p}>Harmonies may assign it as part of a merger, acquisition, restructuring, financing, or business transfer, subject to applicable law.</p>

      <h2 className={styles.h2}>48. Severability and No Waiver</h2>
      <p className={styles.p}>If any provision is invalid or unenforceable, the remaining provisions remain effective.</p>
      <p className={styles.p}>Failure or delay in enforcing a right does not waive that right.</p>

      <h2 className={styles.h2}>49. Entire Agreement</h2>
      <p className={styles.p}>This Agreement, together with expressly incorporated policies and pricing terms, constitutes the complete agreement governing the Seller's use of Harmonies.</p>

      <h2 className={styles.h2}>50. Governing Law and Dispute Resolution</h2>
      <p className={styles.p}>This Agreement is governed by the laws of the United Arab Emirates.</p>
      <p className={styles.p}>Disputes are subject to the competent courts of the United Arab Emirates unless applicable law requires otherwise.</p>

      <h2 className={styles.h2}>51. Electronic Acceptance and Evidence</h2>
      <p className={styles.p}>Electronic acceptance has the same legal effect as a physical signature where recognised by applicable law.</p>
      <p className={styles.p}>Harmonies may record:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Seller ID.</li>
        <li className={styles.li}>Agreement version.</li>
        <li className={styles.li}>Acceptance date and time.</li>
        <li className={styles.li}>IP address.</li>
        <li className={styles.li}>Device or browser information.</li>
        <li className={styles.li}>The identity and authority of the accepting representative.</li>
      </ul>

      <h2 className={styles.h2}>52. Contact Information</h2>
      <p className={styles.p}><strong>Harmonies</strong><br />Operated by Lumiere Global Ventures LLC-FZ<br />Email: <a href="mailto:info@lgv.ae" className={styles.link}>info@lgv.ae</a></p>
    </LegalPage>
  );
}
