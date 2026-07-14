import { useState } from 'react';
import styles from './FAQs.module.css';
import { usePageMeta } from '../../hooks/usePageMeta';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import BecomeSellerModal from '../BecomeSellerModal/BecomeSellerModal';

// Strips the display markup (<strong>, <ul><li>, ...) down to plain text for
// the FAQPage schema's "text" field — Google's structured-data guidelines
// want plain text there even though the on-page answer can use rich markup.
function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

const FAQS = [
  {
    q: 'What is Harmonies?',
    a: 'Harmonies is a social commerce platform that helps UAE businesses grow by bringing together online selling, logistics, marketing, business support, and curated product collections—all in one place.',
  },
  {
    q: 'Who can sell on Harmonies?',
    a: 'Any business with a valid UAE trade license can apply to sell on Harmonies. We welcome brands, local businesses, artisans, homegrown companies, and manufacturers that offer high-quality products.',
  },
  {
    q: 'Is it free to join?',
    a: 'Yes. Creating a seller account is completely free. You can start selling without paying a monthly subscription. Optional premium plans are available for businesses that want additional services and growth support.',
  },
  {
    q: 'How do I create a seller account?',
    a: 'Click <strong>Join Now</strong>, create your account, provide your business information, upload the required documents, and submit your application. Once your account is approved, you can start adding products and selling on Harmonies.',
  },
  {
    q: 'What documents do I need to start selling?',
    a: 'To verify your business, you’ll typically need:<ul><li>A valid UAE trade license.</li><li>Emirates ID or passport of the business owner or authorized representative.</li><li>VAT certificate (if your business is VAT registered).</li><li>Bank account details for receiving payouts.</li></ul><div>Additional documents may be requested depending on your business type.</div>',
  },
  {
    q: 'How long does the approval process take?',
    a: 'Most applications are reviewed within <strong>1–3 business days</strong> after all required documents have been submitted. If we need additional information, we’ll contact you by email.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQ} onClick={onToggle}>
        <span className={styles.faqQText}>{item.q}</span>
        <span className={`${styles.faqToggle} ${isOpen ? styles.faqToggleOpen : ''}`}>+</span>
      </div>
      <div className={`${styles.faqA} ${isOpen ? styles.faqAOpen : ''}`}>
        <div className={styles.faqAInner} dangerouslySetInnerHTML={{ __html: item.a }} />
      </div>
    </div>
  );
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: stripHtml(item.a) },
  })),
};

export default function FAQs() {
  usePageMeta({
    title: 'FAQs | Harmonies Seller Questions Answered',
    description: 'Answers to common questions about becoming a Harmonies seller — eligibility, required documents, approval time, and how the platform works.',
    path: '/faqs',
  });

  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
  const handleJoinNow = () => setIsSellerModalOpen(true);
  const closeSellerModal = () => setIsSellerModalOpen(false);

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <div id="faqs-page" className={styles.page}>
      <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      <Nav variant="light" onJoinNow={handleJoinNow} />

      <section className={styles.hero} data-screen-label="Hero">
        <div className={styles.heroBadge}>FAQs</div>
        <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
        <p className={styles.heroCopy}>Everything you need to know about getting started as a Harmonies seller.</p>
      </section>

      <section className={styles.listSection} data-screen-label="Getting Started">
        <div className={styles.listInner}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowBadge}>🎯</span>
            <span className={styles.eyebrow}>Getting Started</span>
          </div>

          {FAQS.map((item, i) => (
            <FAQItem key={item.q} item={item} isOpen={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </div>
      </section>

      <Footer />
      <BecomeSellerModal isOpen={isSellerModalOpen} onClose={closeSellerModal} />
    </div>
  );
}
