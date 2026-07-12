import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Pricing.module.css';
import { useReveal } from '../../hooks/useReveal';
import { usePageMeta } from '../../hooks/usePageMeta';
import Footer from '../Footer/Footer';
import BecomeSellerModal from '../BecomeSellerModal/BecomeSellerModal';

const FREE_PLAN_ITEMS = [
  'Your own branded storefront',
  'Listed in Harmonies discovery & collections',
  'Order, delivery & customer management tools',
  'Access to the seller community & support',
];

const PAID_SERVICES = [
  { accent: '#FC635E', iconBg: 'rgba(252,99,94,.1)', iconColor: '#FC635E', icon: '💼', title: 'Business Management', desc: 'Hands-on operational support to run and scale your day-to-day.' },
  { accent: '#8A9BF7', iconBg: 'rgba(138,155,247,.12)', iconColor: '#5f76ce', icon: '🎨', title: 'Graphic Design', desc: 'Branding, product visuals, and creative assets that stand out.' },
  { accent: '#966ac2', iconBg: 'rgba(150,106,194,.12)', iconColor: '#966ac2', icon: '📱', title: 'Social Media Management', desc: 'Content, posting, and community management on your channels.' },
  { accent: '#34C759', iconBg: 'rgba(52,199,89,.12)', iconColor: '#1f9e46', icon: '📈', title: 'Marketing Campaigns', desc: 'Planned campaigns and promotions to drive new demand.' },
];

export default function Pricing() {
  usePageMeta({
    title: 'Pricing | Become a Harmonies Partner Seller for Free',
    description: "Join Harmonies at no cost — no fees, no contracts. Optional paid services like marketing and design support are available when you're ready to grow.",
    path: '/pricing',
  });

  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
  const handleJoinNow = () => setIsSellerModalOpen(true);
  const closeSellerModal = () => setIsSellerModalOpen(false);

  const freeRef = useReveal();
  const paidRef = useReveal();
  const consultRef = useReveal();

  return (
    <div id="pricing-page" className={styles.page}>
      <nav className={styles.nav} data-screen-label="Nav">
        <Link to="/" className={styles.navBrand}>
          <img src="/assets/harmonies-mark.png" alt="Harmonies" className={styles.navMark} />
          <span className={styles.navWordmark}>Harmonies</span>
        </Link>
        <button type="button" className={styles.joinPill} onClick={handleJoinNow}>Join Now</button>
      </nav>

      <section className={styles.hero} data-screen-label="Hero">
        <span className={styles.heroDotA} />
        <span className={styles.heroDotB} />
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>Pricing</div>
          <h1 className={styles.heroTitle}>
            Become a Partner Seller <span className={styles.heroTitleGradient}>for Free</span>
          </h1>
          <p className={styles.heroCopy}>Become a Harmonies Partner at no cost. When you&apos;re ready for more support, we build a growth plan around your business.</p>
        </div>
      </section>

      <section ref={freeRef} data-reveal className={styles.freeSection} data-screen-label="Free Partner Plan">
        <div className={styles.freeInner}>
          <div className={styles.freeCard}>
            <span className={styles.freeGlowA} />
            <span className={styles.freeGlowB} />
            <div className={styles.freeRow}>
              <div className={styles.freeCopy}>
                <div className={styles.freeSubBadge}>Free Subscription</div>
                <h2 className={styles.freeTitle}>Become a Harmonies Partner</h2>
                <p className={styles.freeDesc}>Everything you need to open a storefront, reach new customers, and start selling &mdash; no fees, no contracts, no catch.</p>
                <div className={styles.freeChecklist}>
                  {FREE_PLAN_ITEMS.map((item) => (
                    <div key={item} className={styles.freeCheckRow}>
                      <span className={styles.freeCheckIcon}>&#10003;</span>
                      <span className={styles.freeCheckText}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.pricePanel}>
                <div className={styles.priceRow}>
                  <span className={styles.priceSign}>$</span>
                  <span className={styles.priceNum}>0</span>
                </div>
                <div className={styles.priceCaption}>forever, per store</div>
                <button type="button" className={styles.priceBtn} onClick={handleJoinNow}>Join Free</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={paidRef} data-reveal className={styles.paidSection} data-screen-label="Paid Services">
        <div className={styles.paidHead}>
          <div className={styles.eyebrow}>Beyond the Free Plan</div>
          <h2 className={styles.paidHeading}>Need More Hands-On Support?</h2>
          <p className={styles.paidCopy}>Beyond your free storefront, our team offers hands-on services for sellers who want extra support growing their brand.</p>
        </div>
        <div className={styles.paidGridWrap}>
          <div className={styles.paidGrid}>
            {PAID_SERVICES.map((s) => (
              <div key={s.title} className={styles.paidCard} style={{ '--card-accent': s.accent }}>
                <div className={styles.paidIcon} style={{ background: s.iconBg, color: s.iconColor }}>{s.icon}</div>
                <div className={styles.paidTitle}>{s.title}</div>
                <p className={styles.paidDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={consultRef} data-reveal className={styles.consultSection} data-screen-label="Consultation CTA">
        <div className={styles.consultInner}>
          <h2 className={styles.consultHeading}>Let&apos;s Design the Right Plan for You</h2>
          <p className={styles.consultCopy}>Every business is different, so these services aren&apos;t one-size-fits-all packages. Book a private meeting and we&apos;ll scope the right mix and pricing for your goals.</p>
          <Link to="/contact" className={styles.consultBtn}>Become a Seller</Link>
        </div>
      </section>

      <Footer />
      <BecomeSellerModal isOpen={isSellerModalOpen} onClose={closeSellerModal} />
    </div>
  );
}
