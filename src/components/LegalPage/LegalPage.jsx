import { useState } from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import BecomeSellerModal from '../BecomeSellerModal/BecomeSellerModal';
import { usePageMeta } from '../../hooks/usePageMeta';
import styles from './LegalPage.module.css';

/**
 * Shared chrome for legal documents (Privacy Policy, Terms of Service,
 * Cookies Policy): dark nav, centered content column, and the site-wide
 * footer. These pages share one layout and differ only in their body
 * content.
 */
export default function LegalPage({ title, description, path, dateLabel, date, children }) {
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
          <strong>{dateLabel}:</strong> {date}
        </p>
        <div className={styles.divider} />
        {children}
      </div>

      <Footer />
      <BecomeSellerModal isOpen={isSellerModalOpen} onClose={closeSellerModal} />
    </div>
  );
}
