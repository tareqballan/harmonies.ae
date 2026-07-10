import { useReveal } from '../../hooks/useReveal';
import styles from './TheLoop.module.css';

const PILLARS = [
  {
    key: 'sell', label: 'Sell', pos: styles.posTop, labelPos: styles.labelAbove,
    radius: '60% 40% 55% 45% / 45% 55% 45% 55%',
    gradient: 'linear-gradient(135deg,#fd8b87,#FC635E 70%)',
    shadow: 'rgba(252,99,94,.55)',
    icon: <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4" />,
    icon2: <path d="M3 6h18" />,
    icon3: <path d="M16 10a4 4 0 0 1-8 0" />,
  },
  {
    key: 'manage', label: 'Manage', pos: styles.posRight, labelPos: styles.labelRightOf,
    radius: '45% 55% 40% 60% / 55% 45% 60% 40%',
    gradient: 'linear-gradient(135deg,#b9c5fb,#5f76ce 75%)',
    shadow: 'rgba(95,118,206,.55)',
    icon: <rect x="3" y="4" width="18" height="12" rx="2" />,
    icon2: <path d="M8 20h8M12 16v4" />,
  },
  {
    key: 'deliver', label: 'Deliver', pos: styles.posBottom, labelPos: styles.labelBelow,
    radius: '55% 45% 60% 40% / 40% 60% 45% 55%',
    gradient: 'linear-gradient(135deg,#c9a9e6,#966ac2 75%)',
    shadow: 'rgba(150,106,194,.55)',
    icon: <path d="M3 7h11v10H3z" />,
    icon2: <path d="M14 10h4l3 3v4h-7v-7z" />,
    icon3: <circle cx="7.5" cy="19" r="1.6" />,
    icon4: <circle cx="17.5" cy="19" r="1.6" />,
  },
  {
    key: 'grow', label: 'Grow', pos: styles.posLeft, labelPos: styles.labelLeftOf,
    radius: '40% 60% 45% 55% / 60% 40% 55% 45%',
    gradient: 'linear-gradient(135deg,#fd8b87,#c23a36 75%)',
    shadow: 'rgba(252,99,94,.5)',
    icon: <path d="M3 17l6-6 4 4 8-8" />,
    icon2: <path d="M15 7h6v6" />,
  },
];

export default function TheLoop() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} className={styles.section} data-screen-label="The Loop" data-reveal>
      <div className={styles.glowA} />
      <div className={styles.glitterA} />
      <div className={styles.glitterA2} />
      <div className={styles.glowB} />
      <div className={styles.glitterB} />
      <div className={styles.glitterB2} />

      <div className={styles.inner}>
        <div className={styles.badge}>
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#8A9BF7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" /></svg>
          <span className={styles.badgeText}>Your Success Pillars</span>
        </div>
        <h2 className={styles.h2}>
          Every sale, <span className={styles.gradientWord}>a little easier</span> than the last.
        </h2>

        <div className={styles.diagram}>
          <svg viewBox="0 0 600 600" className={`${styles.ring} ${styles.ringOuter}`}>
            <circle cx="300" cy="300" r="270" fill="none" stroke="rgba(199,205,248,.55)" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" />
          </svg>
          <svg viewBox="0 0 600 600" className={`${styles.ring} ${styles.ringInner}`}>
            <circle cx="300" cy="300" r="230" fill="none" stroke="#3a3f76" strokeWidth="1" strokeDasharray="1 9" strokeLinecap="round" />
          </svg>

          <div className={`${styles.particle} ${styles.particle1}`}>
            <div className={styles.particleTrail} style={{ background: 'linear-gradient(to left,rgba(252,99,94,.65),rgba(252,99,94,0))' }} />
            <div className={styles.particleDot} style={{ background: 'radial-gradient(circle,#fff,#FC635E 60%,transparent 100%)', boxShadow: '0 0 22px 7px rgba(252,99,94,.65)' }} />
          </div>
          <div className={`${styles.particle} ${styles.particle2}`}>
            <div className={styles.particleTrail} style={{ background: 'linear-gradient(to left,rgba(138,155,247,.6),rgba(138,155,247,0))' }} />
            <div className={styles.particleDot} style={{ background: 'radial-gradient(circle,#fff,#8A9BF7 60%,transparent 100%)', boxShadow: '0 0 18px 6px rgba(138,155,247,.6)' }} />
          </div>

          <div className={styles.hub}>
            <img src="/assets/harmonies-mark.png" alt="" className={styles.hubMark} />
            <span className={styles.hubText}>Harmonies</span>
          </div>

          {PILLARS.map((p) => (
            <div key={p.key} className={`${styles.pillar} ${p.pos}`}>
              <div className={p.labelPos}>
                <div className={styles.pillarLabel}>{p.label}</div>
              </div>
              <div
                className={styles.pillarIcon}
                style={{ borderRadius: p.radius, background: p.gradient, boxShadow: `0 16px 34px -10px ${p.shadow}` }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {p.icon}{p.icon2}{p.icon3}{p.icon4}
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
