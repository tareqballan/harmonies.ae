import styles from './SeamOrbs.module.css';

/**
 * Purely decorative floating gradient orbs that sit in the seam between
 * Hero and Pain Points on desktop. No mobile counterpart in the reference
 * (space is too tight), so this renders nothing under 820px.
 */
export default function SeamOrbs() {
  return (
    <div className={`${styles.wrap} desktop-only`}>
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={`${styles.orb} ${styles.orb4}`} />
      <div className={`${styles.orb} ${styles.orb5}`} />
      <div className={`${styles.orb} ${styles.orb6}`} />
    </div>
  );
}
