import { useRevealGroup } from '../../hooks/useReveal';
import styles from './PainPoints.module.css';

const ROWS = [
  {
    align: 'left',
    color: 'ink',
    radius: '63% 37% 54% 46% / 43% 51% 49% 57%',
    radiusM: '60% 40% 55% 45% / 45% 55% 45% 55%',
    gradient: 'linear-gradient(135deg,#fd8b87,#FC635E 70%)',
    shadow: '0 14px 28px -12px rgba(252,99,94,.5)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="14" rx="3"></rect><circle cx="12" cy="13" r="3.5"></circle><circle cx="17.5" cy="9.5" r="1"></circle></svg>
    ),
    text: (<>&ldquo;Selling on <span className={styles.hlCoral}>social media</span> still feels chaotic.&rdquo;</>),
  },
  {
    align: 'right',
    color: 'gray',
    radius: '46% 54% 37% 63% / 57% 49% 51% 43%',
    radiusM: '46% 54% 37% 63% / 57% 49% 51% 43%',
    gradient: 'linear-gradient(135deg,#b9c5fb,#5f76ce 75%)',
    shadow: '0 14px 28px -12px rgba(95,118,206,.5)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="7" width="15" height="10" rx="2"></rect><path d="M16 10l6-3v10l-6-3"></path></svg>
    ),
    text: (<>&ldquo;<span className={styles.hlBlue}>Delivery partners and couriers</span> are eating my margins.&rdquo;</>),
  },
  {
    align: 'left',
    color: 'ink',
    radius: '54% 46% 63% 37% / 49% 57% 43% 51%',
    radiusM: '54% 46% 63% 37% / 49% 57% 43% 51%',
    gradient: 'linear-gradient(135deg,#fd8b87,#c23a36 75%)',
    shadow: '0 14px 28px -12px rgba(252,99,94,.5)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h12v20l-3-2-3 2-3-2-3 2V2z"></path><line x1="9" y1="7" x2="15" y2="7"></line><line x1="9" y1="11" x2="15" y2="11"></line></svg>
    ),
    text: (<>&ldquo;My <span className={styles.hlCoral}>accounting</span> is a mess I can&apos;t keep straight.&rdquo;</>),
  },
  {
    align: 'right',
    color: 'gray',
    radius: '37% 63% 46% 54% / 51% 43% 57% 49%',
    radiusM: '37% 63% 46% 54% / 51% 43% 57% 49%',
    gradient: 'linear-gradient(135deg,#c9a9e6,#966ac2 75%)',
    shadow: '0 14px 28px -12px rgba(150,106,194,.5)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"></path><path d="M3.3 6.8L12 12l8.7-5.2M12 12v9.5"></path></svg>
    ),
    text: (<>&ldquo;I keep losing track of my <span className={styles.hlLilac}>inventory</span>.&rdquo;</>),
  },
  {
    align: 'left',
    color: 'ink',
    radius: '57% 43% 51% 49% / 46% 54% 37% 63%',
    radiusM: '57% 43% 51% 49% / 46% 54% 37% 63%',
    gradient: 'linear-gradient(135deg,#fd8b87,#966ac2 80%)',
    shadow: '0 14px 28px -12px rgba(150,106,194,.45)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1"></circle></svg>
    ),
    text: (<>&ldquo;I don&apos;t have a real <span className={styles.hlCoral}>marketing plan</span>—just posting and hoping.&rdquo;</>),
  },
];

export default function PainPoints() {
  const setRef = useRevealGroup(ROWS.length + 1); // +1 for the heading block

  return (
    <section className={styles.section} data-screen-label="Pain Points">
      <div className={`${styles.blob} ${styles.blobA} desktop-only`} />
      <div className={`${styles.blob} ${styles.blobB} desktop-only`} />

      {/* scattered decorative outline icons, desktop only */}
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#5f76ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${styles.scatterIcon} ${styles.scatter1} desktop-only`}><rect x="2" y="5" width="20" height="15" rx="3" /><circle cx="12" cy="12.5" r="4" /><circle cx="16.5" cy="8.5" r="1" /></svg>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FC635E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${styles.scatterIcon} ${styles.scatter2} desktop-only`}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#966ac2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${styles.scatterIcon} ${styles.scatter3} desktop-only`}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f5878a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${styles.scatterIcon} ${styles.scatter4} desktop-only`}><path d="M18 8a3 3 0 1 0-2.83-4H15a3 3 0 0 0 .05 3.98L8.09 12.4a3 3 0 1 0 0 3.2l6.96 4.42A3 3 0 1 0 15 18a3 3 0 0 0 .05.98l-6.96-4.42a3 3 0 0 0 0-1.12l6.96-4.42A3 3 0 0 0 18 8z" /></svg>
      <svg width="42" height="42" viewBox="0 0 24 24" fill="#FC635E" className={`${styles.scatterIcon} ${styles.scatter5} desktop-only`}><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" /></svg>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#966ac2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${styles.scatterIcon} ${styles.scatter6} desktop-only`}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f5878a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${styles.scatterIcon} ${styles.scatter7} desktop-only`}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>

      <div className={styles.container}>
        <div ref={setRef(0)} data-reveal className={styles.heading}>
          <div className={styles.eyebrow}>From real sellers</div>
          <h2 className={styles.h2}>
            We hear this <span className={styles.hlHeading}>every day</span>.
          </h2>
        </div>

        {ROWS.map((row, i) => (
          <div
            key={i}
            ref={setRef(i + 1)}
            data-reveal
            className={`${styles.row} ${row.align === 'right' ? styles.rowReverse : ''}`}
          >
            <div
              className={styles.icon}
              style={{
                '--row-radius': row.radius,
                '--row-radius-m': row.radiusM,
                background: row.gradient,
                boxShadow: row.shadow,
              }}
            >
              {row.icon}
            </div>
            <h3 className={`${styles.text} ${row.color === 'gray' ? styles.textGray : styles.textInk} ${row.align === 'right' ? styles.textRight : styles.textLeft}`}>
              {row.text}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
