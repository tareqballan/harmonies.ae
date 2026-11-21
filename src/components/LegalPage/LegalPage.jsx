import { useState } from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import BecomeSellerModal from '../BecomeSellerModal/BecomeSellerModal';
import { usePageMeta } from '../../hooks/usePageMeta';
import styles from './LegalPage.module.css';

/**
 * Date of the current revision of the legal documents. Every policy shows
 * it as "Last Updated: <date>", so bump it here when the policies change.
 */
export const LEGAL_LAST_UPDATED = '21 November 2026';

/**
 * The identical Contact block that closes every legal document. Pass the
 * document-specific lead-in sentence as `intro`.
 */
export function LegalContact({ intro }) {
  return (
    <>
      <p className={styles.p}>{intro}</p>
      <p className={styles.p}>
        <strong>Harmonies</strong><br />
        Operated by Lumiere Global Ventures LLC-FZ<br />
        Email: <a href="mailto:info@lgv.ae" className={styles.link}>info@lgv.ae</a><br />
        Address: 6th Floor, Meydan Freezone, Nad Al-Sheba, Dubai, United Arab Emirates
      </p>
    </>
  );
}

/**
 * Shared chrome for the legal documents (Terms and Conditions, Privacy
 * Policy, Return and Refund Policy, Delivery Policy, Seller Agreement): dark
 * nav, centered content column, and the site-wide footer. These pages share
 * one layout and differ only in their body content.
 */
export default function LegalPage({ title, description, path, date = LEGAL_LAST_UPDATED, children }) {
  usePageMeta({ title: `${title} | Harmonies`, description, path });

  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
  const handleJoinNow = () => setIsSellerModalOpen(true);
  const closeSellerModal = () => setIsSellerModalOpen(false);

  return (
    <div className={styles.page}>
      <Nav variant="light" onJoinNow={handleJoinNow} />

      <div className={styles.wrap}>
        <div className={styles.badge}>Legal</div>
        <h1 className={styles.title}>{title}</h1>
        <p className={`${styles.meta} ${styles.metaLast}`}>
          <strong>Last Updated:</strong> {date}
        </p>
        <div className={styles.divider} />
        {children}
      </div>

      <Footer />
      <BecomeSellerModal isOpen={isSellerModalOpen} onClose={closeSellerModal} />
    </div>
  );
}
