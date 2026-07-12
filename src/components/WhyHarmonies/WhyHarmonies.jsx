import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './WhyHarmonies.module.css';
import { useReveal } from '../../hooks/useReveal';
import Footer from '../Footer/Footer';
import BecomeSellerModal from '../BecomeSellerModal/BecomeSellerModal';

const PROBLEMS = [
  { num: '01', color: 'rgba(252,99,94,.45)', title: 'Limited Reach', desc: 'Your products are only seen by your existing followers.' },
  { num: '02', color: 'rgba(138,155,247,.45)', title: 'No Time for Marketing', desc: 'Creating content, finding influencers, and running campaigns takes time.' },
  { num: '03', color: 'rgba(150,106,194,.5)', title: 'Operational Challenges', desc: 'Managing orders, deliveries, and customer communication becomes overwhelming.' },
  { num: '04', color: 'rgba(52,199,89,.45)', title: 'No Clear Growth Strategy', desc: "You sell products, but you don't know what to improve next." },
];

// Icons here are a best-effort match: the source doc's original glyphs were
// lost to a character-encoding issue before reaching this codebase (see
// conversation) — picked to fit each card's copy, not literally specified.
const SOLUTIONS = [
  { icon: '🌍', gradient: 'linear-gradient(135deg,#FC635E,#ff9c98)', shadow: 'rgba(252,99,94,.55)', title: 'More Customers, Beyond Your Followers', desc: 'Get discovered by customers looking for unique local products.' },
  { icon: '🎯', gradient: 'linear-gradient(135deg,#8A9BF7,#5f76ce)', shadow: 'rgba(95,118,206,.5)', title: 'Strategic Growth Support', desc: 'We study your business, identify improvement opportunities, and help you grow.' },
  { icon: '📦', gradient: 'linear-gradient(135deg,#966ac2,#c199e8)', shadow: 'rgba(150,106,194,.5)', title: 'Simplified Selling Operations', desc: 'Manage orders, deliveries, and customer interactions easily.' },
  { icon: '🎨', gradient: 'linear-gradient(135deg,#34C759,#7ee2a0)', shadow: 'rgba(52,199,89,.5)', title: 'Build a Stronger Brand', desc: 'Improve your visual identity, social presence, and customer experience.' },
];

const HOW_STEPS = [
  { title: 'Understand Your Business', desc: 'We analyze your products, customers, and challenges to identify the best opportunities for growth.' },
  { title: 'Showcase Your Products', desc: 'Present your products through curated collections that inspire customers to buy.' },
  { title: 'Connect With New Customers', desc: 'Reach shoppers beyond your existing social media audience.' },
  { title: 'Optimize Your Growth', desc: 'Use insights, recommendations, and support to continuously improve.' },
];

const BEFORE_ITEMS = ['Selling only to followers', 'Creating everything alone', 'Managing orders manually', 'Guessing what works', 'Building slowly'];
const AFTER_ITEMS = ['Reaching new customers', 'Supported by marketing tools', 'Streamlined operations', 'Data-driven decisions', 'Growing systematically'];

const MARKETPLACE_CARDS = [
  { accent: '#FC635E', iconBg: 'rgba(252,99,94,.1)', iconColor: '#FC635E', icon: '★', title: 'Build Your Brand', desc: 'Professional presentation and customer experience.' },
  { accent: '#8A9BF7', iconBg: 'rgba(138,155,247,.12)', iconColor: '#5f76ce', icon: '↗', title: 'Increase Sales', desc: 'Marketing opportunities, recommendations, and partnerships.' },
  { accent: '#966ac2', iconBg: 'rgba(150,106,194,.12)', iconColor: '#966ac2', icon: '⏱', title: 'Save Time', desc: 'Tools that simplify daily operations.' },
  { accent: '#34C759', iconBg: 'rgba(52,199,89,.12)', iconColor: '#1f9e46', icon: '↗', title: 'Grow Strategically', desc: 'Understand what works and where to improve.' },
];

const ADVANTAGE_CARDS = [
  { glow: 'rgba(252,99,94,.28)', title: 'Social Commerce First', desc: 'Turn customers into a community, not just buyers.' },
  { glow: 'rgba(138,155,247,.28)', title: 'Curated Shopping Experience', desc: 'Help customers discover products through meaningful collections.' },
  { glow: 'rgba(150,106,194,.28)', title: 'Local Business Focus', desc: 'Built specifically for UAE creators and small businesses.' },
  { glow: 'rgba(52,199,89,.28)', title: 'Growth Partnership', desc: 'Your success is our success.' },
];

const JOURNEY_STEPS = [
  { n: 1, gradient: 'linear-gradient(135deg,#FC635E,#ff9c98)', shadow: 'rgba(252,99,94,.6)', label: 'Create your store', offset: false },
  { n: 2, gradient: 'linear-gradient(135deg,#8A9BF7,#5f76ce)', shadow: 'rgba(95,118,206,.55)', label: 'Upload your products', offset: true },
  { n: 3, gradient: 'linear-gradient(135deg,#966ac2,#c199e8)', shadow: 'rgba(150,106,194,.55)', label: 'Join collections & campaigns', offset: false },
  { n: 4, gradient: 'linear-gradient(135deg,#FC635E,#ff9c98)', shadow: 'rgba(252,99,94,.6)', label: 'Receive orders', offset: true },
  { n: 5, gradient: 'linear-gradient(135deg,#34C759,#7ee2a0)', shadow: 'rgba(52,199,89,.55)', label: 'Grow your business', offset: false, last: true },
];

export default function WhyHarmonies() {
  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
  const handleJoinNow = () => setIsSellerModalOpen(true);
  const closeSellerModal = () => setIsSellerModalOpen(false);

  const problemRef = useReveal();
  const solutionRef = useReveal();
  const howSectionRef = useReveal();
  const howHeadRef = useReveal();
  const compareRef = useReveal();
  const marketplaceRef = useReveal();
  const advantageRef = useReveal();
  const journeyRef = useReveal();
  const finalCtaRef = useReveal();

  return (
    <div id="why-harmonies" className={styles.page}>
      <nav className={styles.nav} data-screen-label="Nav">
        <Link to="/" className={styles.navBrand}>
          <img src="/assets/harmonies-mark.png" alt="Harmonies" className={styles.navMark} />
          <span className={styles.navWordmark}>Harmonies</span>
        </Link>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.backLink}>&larr; Back to site</Link>
          <button type="button" className={styles.joinPill} onClick={handleJoinNow}>Join Now</button>
        </div>
      </nav>

      <section className={styles.hero} data-screen-label="Hero">
        <span className={styles.heroDotA} />
        <span className={styles.heroDotB} />
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>Why Harmonies?</div>
          <h1 className={styles.heroTitle}>Turn Your Passion Into a Growing Business</h1>
          <p className={styles.heroCopy}>Harmonies helps local businesses sell more, build their brand, and manage their growth&mdash;all from one platform.</p>
          <button type="button" className={styles.heroCta} onClick={handleJoinNow}>Join Harmonies &mdash; It&apos;s Free</button>
        </div>
      </section>

      <section ref={problemRef} data-reveal className={styles.problem} data-screen-label="Problem">
        <span className={styles.problemGlow} />
        <div className={styles.problemInner}>
          <div className={styles.problemHead}>
            <div className={styles.problemHeading}>
              <div className={styles.eyebrow}>The Problem</div>
              <h2 className={styles.sectionHeading}>Selling Online Should Be Easier</h2>
            </div>
            <p className={styles.problemSub}>Most local businesses hit the same four walls, no matter how good the product is.</p>
          </div>
          <div className={styles.grid4}>
            {PROBLEMS.map((p) => (
              <div key={p.num} className={styles.problemCell}>
                <span className={styles.problemNum} style={{ color: p.color }}>{p.num}</span>
                <div>
                  <div className={styles.problemTitle}>{p.title}</div>
                  <p className={styles.problemDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={solutionRef} data-reveal className={styles.solution} data-screen-label="Solution">
        <div className={styles.solutionInner}>
          <div className={styles.solutionHead}>
            <div className={styles.eyebrow}>The Solution</div>
            <h2 className={`${styles.sectionHeading} ${styles.solutionHeading}`}>Everything You Need To Grow,<br />In One Place</h2>
          </div>
          <div className={styles.solutionGrid}>
            {SOLUTIONS.map((s) => (
              <div key={s.title} className={styles.solutionCol}>
                <div className={styles.solutionIcon} style={{ background: s.gradient, boxShadow: `0 12px 24px -10px ${s.shadow}` }}>{s.icon}</div>
                <div className={styles.solutionTitle}>{s.title}</div>
                <p className={styles.solutionDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={howSectionRef} data-reveal className={styles.howSection} data-screen-label="How It Works">
        <div className={styles.howInner}>
          <div ref={howHeadRef} data-reveal className={styles.howHead}>
            <h2 className={`${styles.sectionHeading} ${styles.howHeading}`}>How Harmonies Accelerates Your Growth</h2>
          </div>
          <div className={styles.howList}>
            {HOW_STEPS.map((step, i) => (
              <div key={step.title} className={styles.howRow}>
                <div className={styles.howBadge}>{i + 1}</div>
                <div>
                  <div className={styles.howTitle}>{step.title}</div>
                  <p className={styles.howDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={compareRef} data-reveal className={styles.compareSection} data-screen-label="Before vs After">
        <div className={styles.compareInner}>
          <div className={styles.compareHead}>
            <h2 className={`${styles.sectionHeading} ${styles.compareHeading}`}>Before Harmonies vs After Harmonies</h2>
          </div>
          <div className={styles.compare}>
            <div className={styles.compareBefore}>
              <div className={`${styles.compareLabel} ${styles.compareBeforeLabel}`}>Before</div>
              <div className={styles.compareList}>
                {BEFORE_ITEMS.map((item) => (
                  <div key={item} className={styles.compareItem}>
                    <span className={`${styles.compareDot} ${styles.compareBeforeDot}`} />
                    <p className={styles.compareBeforeText}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.compareAfter}>
              <span className={styles.compareAfterGlow} />
              <div className={`${styles.compareLabel} ${styles.compareAfterLabel}`}>After</div>
              <div className={`${styles.compareList} ${styles.compareAfterListWrap}`}>
                {AFTER_ITEMS.map((item) => (
                  <div key={item} className={styles.compareItem}>
                    <span className={`${styles.compareDot} ${styles.compareAfterDot}`} />
                    <p className={styles.compareAfterText}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.compareArrow}>&rarr;</div>
          </div>
        </div>
      </section>

      <section ref={marketplaceRef} data-reveal className={styles.marketplace} data-screen-label="More Than A Marketplace">
        <div className={styles.marketplaceInner}>
          <div className={styles.marketplaceHead}>
            <h2 className={`${styles.sectionHeading} ${styles.marketplaceHeading}`}>More Than A Marketplace</h2>
            <p className={styles.marketplaceSub}>We don&apos;t just list your products.</p>
          </div>
          <div className={styles.marketplaceGrid}>
            {MARKETPLACE_CARDS.map((c) => (
              <div key={c.title} className={styles.marketplaceCard} style={{ '--card-accent': c.accent }}>
                <div className={styles.marketplaceIcon} style={{ background: c.iconBg, color: c.iconColor }}>{c.icon}</div>
                <div className={styles.marketplaceTitle}>{c.title}</div>
                <p className={styles.marketplaceDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={advantageRef} data-reveal className={styles.advantage} data-screen-label="The Harmonies Advantage">
        <div className={styles.advantageInner}>
          <div className={styles.advantageHead}>
            <h2 className={`${styles.sectionHeading} ${styles.advantageHeading}`}>The Harmonies Advantage</h2>
          </div>
          <div className={styles.advantageGrid}>
            {ADVANTAGE_CARDS.map((c) => (
              <div key={c.title} className={styles.advantageCard}>
                <span className={styles.advantageGlow} style={{ background: `radial-gradient(circle, ${c.glow}, transparent 70%)` }} />
                <div className={styles.advantageTitle}>{c.title}</div>
                <p className={styles.advantageDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={journeyRef} data-reveal className={styles.journeySection} data-screen-label="Success Journey">
        <span className={styles.journeyGlow} />
        <div className={styles.journeyInner}>
          <div className={styles.journeyHead}>
            <h2 className={`${styles.sectionHeading} ${styles.journeyHeading}`}>Your Success Journey</h2>
          </div>
          <div className={styles.journey}>
            {JOURNEY_STEPS.map((step, i) => (
              <Fragment key={step.n}>
                <div
                  className={styles.journeyStep}
                  style={{ transform: `translateY(${step.offset ? '-16px' : '0'})` }}
                >
                  <div
                    className={`${styles.journeyBadge} ${step.last ? styles.journeyBadgeLast : ''}`}
                    style={{ background: step.gradient, boxShadow: `0 14px 30px -10px ${step.shadow}` }}
                  >
                    {step.n}
                  </div>
                  <div className={styles.journeyLabel}>{step.label}</div>
                </div>
                {i < JOURNEY_STEPS.length - 1 && (
                  <div
                    className={styles.journeyArrow}
                    style={{ transform: JOURNEY_STEPS[i + 1].offset ? 'translateY(-16px)' : 'none' }}
                  >
                    &rarr;
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section ref={finalCtaRef} data-reveal className={styles.finalCta} data-screen-label="Final CTA">
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaHeading}>Ready To Grow Your Business?</h2>
          <p className={styles.finalCtaCopy}>Join hundreds of local businesses building their future with Harmonies.</p>
          <button type="button" className={styles.finalCtaBtn} onClick={handleJoinNow}>Join Now &mdash; It&apos;s Free</button>
        </div>
      </section>

      <Footer />
      <BecomeSellerModal isOpen={isSellerModalOpen} onClose={closeSellerModal} />
    </div>
  );
}
