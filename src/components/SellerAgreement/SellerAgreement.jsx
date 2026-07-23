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
      <p className={styles.p}>This Seller Agreement ("Agreement") governs the relationship between <strong>Harmonies</strong> ("Harmonies", "we", "our", or "us") and any individual or business ("Seller", "you", or "your") that registers, lists, or sells products through the Harmonies platform.</p>
      <p className={styles.p}>By creating a Seller account, accepting orders, listing products, or continuing to use the Seller services, you acknowledge that you have read, understood, and agree to be bound by this Agreement.</p>
      <p className={styles.p}>This Agreement defines the rights, responsibilities, obligations, and relationship between Harmonies and Sellers using the platform.</p>

      <h2 className={styles.h2}>1. Seller Eligibility</h2>
      <p className={styles.p}>To sell through Harmonies, the Seller must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Be legally capable of entering into a binding agreement.</li>
        <li className={styles.li}>Operate a legally registered business where required by applicable laws.</li>
        <li className={styles.li}>Hold all required licenses, permits, and approvals necessary to sell their products.</li>
        <li className={styles.li}>Complete Harmonies' Know Your Customer (KYC) verification process.</li>
        <li className={styles.li}>Provide accurate, complete, and up-to-date information.</li>
      </ul>
      <p className={styles.p}>The Seller is responsible for ensuring continued compliance with all applicable laws and regulations.</p>
      <p className={styles.p}>Harmonies reserves the right to approve, reject, suspend, or terminate Seller accounts at its discretion.</p>

      <h2 className={styles.h2}>2. Seller Account</h2>
      <p className={styles.p}>The Seller is responsible for:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Maintaining the confidentiality of account credentials.</li>
        <li className={styles.li}>All activities performed through the Seller account.</li>
        <li className={styles.li}>Ensuring account information remains accurate.</li>
        <li className={styles.li}>Informing Harmonies immediately of unauthorized access.</li>
      </ul>
      <p className={styles.p}>Seller accounts:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>May not be transferred, sold, or shared without Harmonies' written approval.</li>
        <li className={styles.li}>Must only be used by the registered Seller or authorized representatives.</li>
      </ul>

      <h2 className={styles.h2}>3. Seller Responsibilities</h2>
      <p className={styles.p}>The Seller agrees to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Sell only lawful products they are authorized to sell.</li>
        <li className={styles.li}>Ensure all products comply with UAE laws and regulations.</li>
        <li className={styles.li}>Provide accurate product information.</li>
        <li className={styles.li}>Maintain sufficient inventory.</li>
        <li className={styles.li}>Fulfill accepted orders according to Harmonies requirements.</li>
        <li className={styles.li}>Provide professional customer service.</li>
        <li className={styles.li}>Cooperate with Harmonies in resolving customer complaints, disputes, returns, and investigations.</li>
      </ul>
      <p className={styles.p}>The Seller remains fully responsible for the products they offer and sell through Harmonies.</p>

      <h2 className={styles.h2}>4. Product Listings</h2>
      <p className={styles.p}>The Seller is solely responsible for all information included in product listings, including:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Product names.</li>
        <li className={styles.li}>Descriptions.</li>
        <li className={styles.li}>Images.</li>
        <li className={styles.li}>Videos.</li>
        <li className={styles.li}>Prices.</li>
        <li className={styles.li}>Specifications.</li>
        <li className={styles.li}>Variations.</li>
        <li className={styles.li}>Availability.</li>
        <li className={styles.li}>Product categories.</li>
      </ul>
      <p className={styles.p}>Product listings must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Accurately represent the product.</li>
        <li className={styles.li}>Use authentic images or images the Seller has the right to use.</li>
        <li className={styles.li}>Clearly disclose relevant information, limitations, or variations.</li>
        <li className={styles.li}>Not contain false, misleading, or deceptive claims.</li>
      </ul>
      <p className={styles.p}>Harmonies may review, modify, reject, hide, or remove listings that violate this Agreement, applicable laws, or customer experience standards.</p>

      <h2 className={styles.h2}>5. Product Quality Requirements</h2>
      <p className={styles.p}>The Seller guarantees that all products sold through Harmonies:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Match their descriptions and displayed images.</li>
        <li className={styles.li}>Are authentic and genuine.</li>
        <li className={styles.li}>Are free from undisclosed defects.</li>
        <li className={styles.li}>Are safe for intended use.</li>
        <li className={styles.li}>Meet applicable quality and safety requirements.</li>
        <li className={styles.li}>Comply with UAE laws and regulations.</li>
      </ul>
      <p className={styles.p}>Products advertised as handmade, customized, unique, or original must accurately reflect their actual nature.</p>
      <p className={styles.p}>The Seller is responsible for resolving product quality issues resulting from their products.</p>

      <h2 className={styles.h2}>6. Prohibited Products</h2>
      <p className={styles.p}>The Seller must not list or sell products that are illegal, unsafe, restricted, counterfeit, or otherwise prohibited.</p>
      <p className={styles.p}>Examples of prohibited products include, but are not limited to:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Counterfeit goods or replicas of branded products.</li>
        <li className={styles.li}>Stolen goods.</li>
        <li className={styles.li}>Weapons, firearms, ammunition, and explosives.</li>
        <li className={styles.li}>Illegal drugs and controlled substances.</li>
        <li className={styles.li}>Prescription medicines without proper authorization.</li>
        <li className={styles.li}>Tobacco products, cigarettes, and vaping products.</li>
        <li className={styles.li}>Alcohol products.</li>
        <li className={styles.li}>Hazardous chemicals or dangerous materials.</li>
        <li className={styles.li}>Adult or sexually explicit products.</li>
        <li className={styles.li}>Human organs, body parts, or biological materials.</li>
        <li className={styles.li}>Live animals.</li>
        <li className={styles.li}>Products violating intellectual property rights.</li>
        <li className={styles.li}>Products prohibited by UAE laws or regulations.</li>
        <li className={styles.li}>Any product Harmonies determines may harm customers, sellers, or the integrity of the platform.</li>
      </ul>
      <p className={styles.p}>Harmonies may immediately remove prohibited products and take further action against the Seller, including suspension or termination.</p>

      <h2 className={styles.h2}>7. Pricing and Promotions</h2>
      <p className={styles.p}>The Seller is responsible for setting product prices.</p>
      <p className={styles.p}>The Seller agrees that:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Prices must be accurate and transparent.</li>
        <li className={styles.li}>Promotional discounts must be genuine.</li>
        <li className={styles.li}>Sellers must not artificially increase prices before applying discounts.</li>
        <li className={styles.li}>Sellers must comply with applicable pricing and consumer protection laws.</li>
      </ul>
      <p className={styles.p}>Harmonies may offer platform-wide promotions or marketing campaigns. Participation rules and financial responsibilities will be communicated to Sellers when applicable.</p>

      <h2 className={styles.h2}>8. Inventory Management</h2>
      <p className={styles.p}>The Seller is responsible for maintaining accurate inventory information.</p>
      <p className={styles.p}>The Seller must:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Update availability when products become unavailable.</li>
        <li className={styles.li}>Avoid accepting orders for unavailable products.</li>
        <li className={styles.li}>Notify Harmonies of inventory issues promptly.</li>
      </ul>
      <p className={styles.p}>Repeated cancellations caused by inaccurate inventory may result in reduced visibility, suspension, or termination.</p>

      <h2 className={styles.h2}>Contact Us</h2>
      <p className={styles.p}>For questions regarding this Agreement, please contact:</p>
      <p className={styles.p}>Email: <a href="mailto:info@harmonies.ae" className={styles.link}>info@harmonies.ae</a></p>
    </LegalPage>
  );
}
