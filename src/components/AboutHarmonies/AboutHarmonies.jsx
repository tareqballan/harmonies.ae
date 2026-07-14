import { useState } from 'react';
import styles from './AboutHarmonies.module.css';
import { useReveal } from '../../hooks/useReveal';
import { usePageMeta, SITE_URL } from '../../hooks/usePageMeta';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import BecomeSellerModal from '../BecomeSellerModal/BecomeSellerModal';

const STORY_IMAGES = [
  { src: '/assets/item-tote-bag-clay.png', alt: 'Handmade tote bag', rotate: '-2deg', offset: '0' },
  { src: '/assets/item-candles-stack-clay.png', alt: 'Handmade candles', rotate: '2deg', offset: '28px' },
  { src: '/assets/item-mug-heart-clay.png', alt: 'Handmade mug', rotate: '2deg', offset: '-28px' },
  { src: '/assets/item-notebook-clay.png', alt: 'Personalized notebook', rotate: '-2deg', offset: '0' },
];

const DIFFERENTIATORS = [
  { icon: '🤝', gradient: 'linear-gradient(135deg,#FC635E,#ff9c98)', shadow: 'rgba(252,99,94,.55)', title: 'More Than a Marketplace', desc: "We don't just connect buyers and sellers. We create an ecosystem where businesses can grow their identity, community, and customer relationships." },
  { icon: '✨', gradient: 'linear-gradient(135deg,#8A9BF7,#5f76ce)', shadow: 'rgba(95,118,206,.5)', title: 'Discovery Through Inspiration', desc: 'Customers don’t just search for products — they discover ideas, collections, and stories that match their lifestyle.' },
  { icon: '🚀', gradient: 'linear-gradient(135deg,#966ac2,#c199e8)', shadow: 'rgba(150,106,194,.5)', title: 'Growth Beyond Selling', desc: 'From branding and marketing support to logistics and business insights, Harmonies helps sellers move from their first sale to sustainable growth.' },
];

const VALUES = [
  { icon: '🎨', bg: 'rgba(252,99,94,.12)', color: '#FC635E', title: 'Creativity First', desc: 'We celebrate originality and help creators share their unique vision with the world.' },
  { icon: '💬', bg: 'rgba(138,155,247,.14)', color: '#5f76ce', title: 'Community Driven', desc: 'We believe the strongest brands are built through authentic relationships.' },
  { icon: '🌱', bg: 'rgba(150,106,194,.14)', color: '#966ac2', title: 'Growth Together', desc: 'When our sellers succeed, our entire community succeeds.' },
  { icon: '🛡️', bg: 'rgba(52,199,89,.14)', color: '#1f9e46', title: 'Trust & Quality', desc: 'We focus on creating reliable experiences for both customers and businesses.' },
];

const ABOUT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Harmonies',
  url: `${SITE_URL}/about-harmonies`,
  description: 'Harmonies is a social commerce platform designed to help local businesses and creators sell, grow, and build meaningful connections with customers.',
  about: {
    '@type': 'Organization',
    name: 'Harmonies',
    legalName: 'Lumiere Global Ventures LLC-FZ',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/harmonies-mark.png`,
  },
};

export default function AboutHarmonies() {
  usePageMeta({
    title: 'About Harmonies | Empowering Local Creators',
    description: 'Harmonies is a social commerce platform designed to help local businesses and creators sell, grow, and build meaningful connections with customers — all in one place.',
    path: '/about-harmonies',
  });

  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
  const handleJoinNow = () => setIsSellerModalOpen(true);
  const closeSellerModal = () => setIsSellerModalOpen(false);

  const storyRef = useReveal();
  const missionRef = useReveal();
  const differentRef = useReveal();
  const valuesRef = useReveal();
  const movementRef = useReveal();

  return (
    <div id="about-harmonies-page" className={styles.page}>
      <script type="application/ld+json">{JSON.stringify(ABOUT_SCHEMA)}</script>

      <Nav variant="light" onJoinNow={handleJoinNow} />

      <section className={styles.hero} data-screen-label="Hero">
        <span className={styles.heroDotA} />
        <span className={styles.heroDotB} />
        <span className={styles.heroDotC} />
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>About Harmonies</div>
          <h1 className={styles.heroTitle}>
            Empowering Local Creators.<br />
            Building the Future of <span className={styles.gradientWord}>Social Commerce.</span>
          </h1>
          <p className={styles.heroCopy}>Harmonies is a social commerce platform designed to help local businesses and creators sell, grow, and build meaningful connections with customers&mdash;all in one place.</p>
        </div>
      </section>

      <section ref={storyRef} data-reveal className={styles.story} data-screen-label="Our Story">
        <div className={styles.storyInner}>
          <div className={styles.storyText}>
            <div className={styles.eyebrow}>Our Story</div>
            <h2 className={styles.sectionHeading}>Every Great Product Starts With a Story</h2>
            <p className={styles.storyPara}>Across the UAE, thousands of talented local sellers and social-media sellers are building unique products&mdash;from handmade crafts and fashion to home d&eacute;cor and personalized gifts. However, many struggle with the same challenges: reaching customers, managing operations, creating a strong brand, and scaling their business.</p>
            <p className={`${styles.storyPara} ${styles.storyParaBold}`}>Harmonies was created to bridge this gap.</p>
            <p className={styles.storyPara}>We bring together creators, customers, and communities in one ecosystem where products are discovered through inspiration, recommendations, and meaningful connections.</p>
          </div>
          <div className={styles.storyVisual}>
            <div className={styles.storyGrid}>
              {STORY_IMAGES.map((img) => (
                <div key={img.src} className={styles.storyCard} style={{ transform: `rotate(${img.rotate})`, marginTop: img.offset }}>
                  <img src={img.src} alt={img.alt} className={styles.storyImg} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={missionRef} data-reveal className={styles.mission} data-screen-label="Mission and Vision">
        <span className={styles.missionGlowA} />
        <span className={styles.missionGlowB} />
        <div className={styles.missionGrid}>
          <div className={styles.missionCell}>
            <div className={styles.missionIcon} style={{ background: 'linear-gradient(135deg,#FC635E,#ff9c98)', boxShadow: '0 12px 24px -10px rgba(252,99,94,.55)' }}>🎯</div>
            <div className={styles.missionEyebrow} style={{ color: '#FC635E' }}>Our Mission</div>
            <p className={styles.missionStatement}>To empower local businesses with the tools, support, and exposure they need to transform their ideas into successful brands.</p>
            <p className={styles.missionSub}>We believe that every creator deserves more than just a marketplace. They deserve a partner that helps them grow.</p>
          </div>
          <div className={styles.missionCell}>
            <div className={styles.missionIcon} style={{ background: 'linear-gradient(135deg,#8A9BF7,#5f76ce)', boxShadow: '0 12px 24px -10px rgba(95,118,206,.5)' }}>🔭</div>
            <div className={styles.missionEyebrow} style={{ color: '#8A9BF7' }}>Our Vision</div>
            <p className={styles.missionStatement}>To build the future of social commerce, where creativity meets opportunity and every local business can grow, connect, and succeed.</p>
          </div>
        </div>
      </section>

      <section ref={differentRef} data-reveal className={styles.different} data-screen-label="What Makes Us Different">
        <div className={styles.differentInner}>
          <div className={styles.differentHead}>
            <div className={styles.eyebrow}>What Sets Us Apart</div>
            <h2 className={styles.sectionHeading}>What Makes Harmonies Different?</h2>
          </div>
          <div className={styles.differentGrid}>
            {DIFFERENTIATORS.map((d, i) => (
              <div key={d.title} className={styles.differentCol} style={i > 0 ? { borderLeft: '1px solid var(--color-border)' } : undefined}>
                <div className={styles.differentIcon} style={{ background: d.gradient, boxShadow: `0 12px 24px -10px ${d.shadow}` }}>{d.icon}</div>
                <div className={styles.differentTitle}>{d.title}</div>
                <p className={styles.differentDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={valuesRef} data-reveal className={styles.values} data-screen-label="Our Values">
        <div className={styles.valuesInner}>
          <div className={styles.valuesHead}>
            <div className={styles.eyebrow}>Our Values</div>
            <h2 className={styles.sectionHeading}>What We Stand For</h2>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon} style={{ background: v.bg, color: v.color }}>{v.icon}</div>
                <div className={styles.valueTitle}>{v.title}</div>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={movementRef} data-reveal className={styles.movement} data-screen-label="Join the Movement">
        <div className={styles.movementHead}>
          <div className={styles.eyebrow}>Join the Movement</div>
          <h2 className={styles.sectionHeading}>Together, We Are Building a New Way to Shop, Connect, and Grow.</h2>
        </div>
        <div className={styles.movementGrid}>
          <div className={styles.movementCard}>
            <img src="/assets/avatar-girl.png" alt="Creator" className={styles.movementAvatar} />
            <div>
              <div className={styles.movementEyebrow} style={{ color: '#FC635E' }}>For Creators</div>
              <div className={styles.movementLine}>Turn your passion into a growing business.</div>
            </div>
          </div>
          <div className={styles.movementCard}>
            <img src="/assets/avatar-boy.png" alt="Customer" className={styles.movementAvatar} />
            <div>
              <div className={styles.movementEyebrow} style={{ color: '#5f76ce' }}>For Customers</div>
              <div className={styles.movementLine}>Discover unique products from talented local creators.</div>
            </div>
          </div>
        </div>
        <button type="button" className={styles.movementCta} onClick={handleJoinNow}>Join Harmonies</button>
      </section>

      <Footer />
      <BecomeSellerModal isOpen={isSellerModalOpen} onClose={closeSellerModal} />
    </div>
  );
}
