import { Fragment } from 'react';
import { useReveal } from '../../hooks/useReveal';
import styles from './TurnSocialIntoBusiness.module.css';

const CHAIN = [
  {
    delay: '0s',
    label: 'Social Posts',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="15" rx="3" /><circle cx="12" cy="12.5" r="4" /><circle cx="16.5" cy="8.5" r="1" /></svg>,
  },
  {
    delay: '1.33s',
    label: 'Engagement',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>,
  },
  {
    delay: '2.66s',
    label: 'Conversations',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  },
];

const ARROW_DELAYS = ['.47s', '1.8s'];

function ChainArrow({ delay }) {
  return (
    <svg
      width="22" height="16" viewBox="0 0 28 20" fill="none"
      stroke="rgba(255,255,255,.3)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
      strokeDasharray="6 6"
      className={styles.arrow}
      style={{ animationDelay: delay }}
    >
      <path d="M2 10h22M17 3l7 7-7 7" />
    </svg>
  );
}

export default function TurnSocialIntoBusiness() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} data-reveal className={styles.section} data-screen-label="Turn Social Into Business">
      <div className={styles.glowA} />
      <div className={styles.glitterA} />
      <div className={styles.glitterA2} />
      <div className={styles.glowB} />
      <div className={styles.glitterB} />
      <div className={styles.glitterB2} />

      <div className={styles.badge}>
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#c7cdf8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg>
        <span className={styles.badgeText}>That&apos;s exactly why we built Harmonies</span>
      </div>

      <h2 className={styles.h2}>
        Turn your <span className={styles.strike}>social media</span><br />
        into <span className={styles.gradientWord}>a real business</span>.
      </h2>

      <div className={styles.chainRow}>
        {CHAIN.map((node, i) => (
          <Fragment key={node.label}>
            <div className={styles.node} style={{ animationDelay: node.delay }}>
              {node.icon}
              <span className={styles.nodeLabel} style={{ animationDelay: node.delay }}>{node.label}</span>
            </div>
            {i < ARROW_DELAYS.length && <ChainArrow delay={ARROW_DELAYS[i]} />}
          </Fragment>
        ))}

        <svg width="26" height="18" viewBox="0 0 28 20" fill="none" stroke="url(#realBizArrowGrad)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className={styles.finalArrow} style={{ animationDelay: '3.13s' }}>
          <defs>
            <linearGradient id="realBizArrowGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FC635E" />
              <stop offset="33%" stopColor="#f5878a" />
              <stop offset="66%" stopColor="#8A9BF7" />
              <stop offset="100%" stopColor="#966ac2" />
            </linearGradient>
          </defs>
          <path d="M2 10h22M17 3l7 7-7 7" />
        </svg>

        <div className={styles.finalPill}>
          <span className={styles.finalCount}>+1,000</span>
          <span className={styles.finalLabel}>sellers thriving</span>
        </div>
      </div>
    </section>
  );
}
