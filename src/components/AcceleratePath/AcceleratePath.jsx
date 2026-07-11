import { useRevealGroup } from '../../hooks/useReveal';
import styles from './AcceleratePath.module.css';

const CORAL = { grad: 'radial-gradient(circle at 32% 28%,#fd8b87,#FC635E 60%,#c23a36 100%)', shadow: 'rgba(252,99,94,.6)', text: '#FC635E' };
const BLUE = { grad: 'radial-gradient(circle at 32% 28%,#a9b8f7,#8A9BF7 60%,#5f76ce 100%)', shadow: 'rgba(138,155,247,.6)', text: '#8A9BF7' };

const STEPS = [
  {
    n: 1, color: CORAL, side: 'left',
    title: 'Analyze Your Business',
    body: 'We look at what you sell, who buys it, and where the friction is—so every next step is built on real signal.',
    img: '/assets/step-analyze.png', ratio: '1408/736', maxW: 500,
  },
  {
    n: 2, color: BLUE, side: 'right',
    title: 'Create Your Growth Plan',
    body: 'A clear, tailored roadmap replaces guesswork—so you always know the next move.',
    img: '/assets/step-plan.png', ratio: '1408/768', maxW: 500,
  },
  {
    n: 3, color: CORAL, side: 'left',
    title: 'Launch Your Storefront',
    body: 'Turn your following into a real, professional storefront—no code, live in minutes.',
    img: '/assets/step-storefront.png', ratio: '1408/768', maxW: 500,
  },
  {
    n: 4, color: BLUE, side: 'right',
    title: 'Manage Your Business',
    body: 'Orders, inventory, and customers—all in one simple dashboard.',
    img: '/assets/step-manage.png', ratio: '1408/736', maxW: 450,
  },
  {
    n: 5, color: CORAL, side: 'left',
    title: 'Deliver Without the Hassle',
    body: 'Pickup, local drop-off, or shipping—routed and tracked automatically.',
    img: '/assets/step-deliver.png', ratio: '1408/768', maxW: 450,
  },
  {
    n: 6, color: BLUE, side: 'right',
    title: 'Reduce Your Delivery Costs',
    body: 'Pooled routes and smarter carrier matching bring costs down—straight back into your business.',
    img: '/assets/step-costs.png', ratio: '1408/768', maxW: 510,
  },
];

function Badge({ n, color }) {
  return (
    <div className={styles.badge} style={{ background: color.grad, boxShadow: `0 10px 26px -8px ${color.shadow}` }}>
      {n}
    </div>
  );
}

export default function AcceleratePath() {
  // Note: the reference alternates data-reveal-l / data-reveal-r per side
  // for a directional slide-in. We simplify to one data-reveal per step
  // (translateY, same easing/duration) since the README's named-animation
  // list only calls out the general reveal pattern, not per-side direction.
  const setRef = useRevealGroup(STEPS.length);

  return (
    <>
      <section id="how-it-works" className={styles.intro} data-screen-label="Accelerate Intro">
        <h2 className={styles.introH2}>
          How We <span className={styles.hl}>Accelerate</span> Your Growth?
        </h2>
      </section>

      <section className={styles.path} data-screen-label="Accelerate Path">
        <svg width="4" height="100%" className={styles.spine} preserveAspectRatio="none">
          <line x1="2" y1="0" x2="2" y2="100%" stroke="#D9D7E1" strokeWidth="3" strokeDasharray="1 12" strokeLinecap="round" />
        </svg>

        {STEPS.map((step, i) => {
          const textBlock = (
            <div className={`${styles.textCol} ${step.side === 'left' ? styles.textRight : ''}`}>
              <div className={styles.stepEyebrow} style={{ color: step.color.text }}>STEP {String(step.n).padStart(2, '0')}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={`${styles.stepBody} ${step.side === 'left' ? styles.bodyRight : ''}`}>{step.body}</p>
            </div>
          );
          const imageBlock = (
            <div className={styles.imageCol} style={{ justifyContent: step.side === 'left' ? 'flex-start' : 'flex-end' }}>
              <img
                src={step.img}
                alt={step.title}
                className={styles.stepImage}
                style={{ maxWidth: step.maxW, aspectRatio: step.ratio }}
              />
            </div>
          );

          return (
            <div key={step.n} ref={setRef(i)} data-reveal className={styles.step}>
              {/* desktop: alternating left/right; mobile: badge, text, image stacked centered */}
              <div className={`${styles.desktopSide} desktop-only`}>
                {step.side === 'left' ? textBlock : imageBlock}
              </div>
              <Badge n={step.n} color={step.color} />
              <div className={`${styles.desktopSide} desktop-only`}>
                {step.side === 'left' ? imageBlock : textBlock}
              </div>

              <div className={`${styles.mobileStack} mobile-only`}>
                <div className={styles.mobileTextCol}>
                  <div className={styles.stepEyebrow} style={{ color: step.color.text }}>STEP {String(step.n).padStart(2, '0')}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
                <img
                  src={step.img}
                  alt={step.title}
                  className={styles.stepImageMobile}
                  style={{ aspectRatio: step.ratio }}
                />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
