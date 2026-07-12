import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Features.module.css';
import { useReveal } from '../../hooks/useReveal';
import Footer from '../Footer/Footer';
import BecomeSellerModal from '../BecomeSellerModal/BecomeSellerModal';

// Tangram-style puzzle board (README: "5 rounded-rect tiles ... tiled
// edge-to-edge in a 4-col×4-row grid with no gaps or filler cells").
// Grid areas (see Features.module.css .puzzleBoard): storefront + visuals
// are the two large tiles anchoring opposite corners; delivery spans the
// top-right; statistics/marketing fill the two small interior cells.
const PUZZLE_TILES = [
  { key: 'storefront', label: 'Storefront', icon: '🏪', gradient: 'linear-gradient(150deg,#FC635E,#ff9c98)' },
  { key: 'delivery', label: 'Delivery', icon: '🚚', gradient: 'linear-gradient(150deg,#8A9BF7,#5f76ce)' },
  { key: 'statistics', label: 'Statistics', icon: '📈', gradient: 'linear-gradient(150deg,#966ac2,#c199e8)' },
  { key: 'marketing', label: 'Marketing', icon: '🔔', gradient: 'linear-gradient(160deg,#171b52,#0d1033)' },
  { key: 'visuals', label: 'Visuals', icon: '🎨', gradient: 'linear-gradient(150deg,#34C759,#7ee2a0)' },
];

const SELL_CHECKLIST = ['Product catalog', 'Digital store page', 'Order management', 'Customer communication'];
const MARKETING_CHECKLIST = ['Social media growth support', 'Influencer partnerships', 'Campaign opportunities', 'Promotional tools', 'Customer engagement'];
const OPERATIONS_CHECKLIST = ['Order management', 'Delivery coordination', 'Return management', 'Payment tracking', 'Seller analytics'];
const SOCIAL_CHECKLIST = ['Recommendations instead of ratings', 'Discoverable collections', 'Social shopping experience', 'Customer interactions'];

// Icons here are a best-effort match: the source doc's original glyphs were
// lost to a character-encoding issue before reaching this codebase (same
// issue noted in WhyHarmonies.jsx) — picked to fit each item's copy, not
// literally specified.
const GROWTH_ITEMS = [
  { icon: '📊', title: 'Business performance insights' },
  { icon: '🎨', title: 'Branding support' },
  { icon: '🌱', title: 'Growth recommendations' },
  { icon: '🧭', title: 'Marketing guidance' },
];

const ANALYTICS_ITEMS = [
  { num: '01', color: 'rgba(252,99,94,.45)', title: 'Sales analytics' },
  { num: '02', color: 'rgba(138,155,247,.45)', title: 'Product performance' },
  { num: '03', color: 'rgba(150,106,194,.5)', title: 'Customer behavior insights' },
  { num: '04', color: 'rgba(52,199,89,.45)', title: 'Growth opportunities' },
];

const STORE_STATS = [
  { n: '152', label: 'Items' },
  { n: '254K', label: 'Likes' },
  { n: '258', label: 'Followers' },
  { n: '503', label: 'Recommendation', accent: true },
];

const DISCOVER_STORES = [
  { key: 'bg', initials: 'B&G', name: 'B&G Store', ring: 'conic-gradient(from 200deg,#FC635E,#966ac2,#8A9BF7,#FC635E)' },
  { key: 'casa', initials: 'Casa', name: 'Casa Home', ring: 'conic-gradient(from 200deg,#8A9BF7,#5f76ce,#966ac2,#8A9BF7)' },
  { key: 'lume', initials: 'Lumé', name: 'Lumé Studio', ring: 'conic-gradient(from 200deg,#966ac2,#c199e8,#FC635E,#966ac2)' },
  { key: 'nala', initials: 'Nala', name: 'Nala Craft', ring: 'conic-gradient(from 200deg,#34C759,#7ee2a0,#8A9BF7,#34C759)' },
  { key: 'orla', initials: 'Orla', name: 'Orla Home', ring: 'conic-gradient(from 200deg,#FC635E,#8A9BF7,#966ac2,#FC635E)' },
];

const SEARCH_GROUPS = [
  {
    store: 'Grand Stores',
    avatar: 'linear-gradient(135deg,#FC635E,#ff9c98)',
    products: [
      { gradient: 'linear-gradient(150deg,#ffb9b5,#FC635E)', recs: '20 Recommendations' },
      { gradient: 'linear-gradient(150deg,#8A9BF7,#5f76ce)', recs: '25 Recommendations' },
    ],
  },
  {
    store: 'B&G Stores',
    avatar: 'linear-gradient(135deg,#966ac2,#c199e8)',
    products: [
      { gradient: 'linear-gradient(150deg,#7ee2a0,#1f9e46)', recs: '20 Recommendations' },
      { gradient: 'linear-gradient(150deg,#ff9c98,#e14e49)', recs: '28 Recommendations' },
    ],
  },
];

const ORDERS = [
  { id: '#45665', gradient: 'linear-gradient(150deg,#ffb9b5,#FC635E)', badge: 'Delivered', badgeBg: 'rgba(13,16,51,.7)', name: 'Payout', amount: '2600 AED', amountColor: '#5f76ce' },
  { id: '#45665', gradient: 'linear-gradient(150deg,#0d1033,#3a3f66)', badge: 'Refund', badgeBg: '#c23a36', name: 'Refund', amount: '1200 AED', amountColor: '#c23a36' },
  { id: '#45665', gradient: 'linear-gradient(150deg,#966ac2,#c199e8)', badge: 'Out for delivery', badgeBg: 'rgba(13,16,51,.7)', name: 'Payout', amount: '1200 AED', amountColor: '#5f76ce' },
  { id: '#45664', gradient: 'linear-gradient(150deg,#8A9BF7,#5f76ce)', badge: 'Delivered', badgeBg: 'rgba(13,16,51,.7)', name: 'Payout', amount: '1850 AED', amountColor: '#5f76ce' },
  { id: '#45663', gradient: 'linear-gradient(150deg,#7ee2a0,#1f9e46)', badge: 'Delivered', badgeBg: 'rgba(13,16,51,.7)', name: 'Payout', amount: '3100 AED', amountColor: '#5f76ce' },
];

const RECOMMENDATIONS = [
  {
    name: 'Esther Howard',
    avatar: 'linear-gradient(135deg,#8A9BF7,#5f76ce)',
    text: 'Beautifully packaged and arrived early — will be gifting this again.',
    tags: [
      { label: 'Gift-worthy', color: '#1f9e46', bg: 'rgba(52,199,89,.12)' },
      { label: 'Wedding-ready', color: '#966ac2', bg: 'rgba(150,106,194,.12)' },
    ],
    likes: 12,
  },
  {
    name: 'Marcus Lee',
    avatar: 'linear-gradient(135deg,#FC635E,#ff9c98)',
    text: 'Exactly as pictured, great quality for the price.',
    tags: [],
    likes: 8,
  },
];

function BottomNav({ items, activeIndex, variant = 'logo' }) {
  return (
    <div className={styles.portraitNav}>
      {items.slice(0, 2).map((item, i) => (
        <div key={item} className={styles.navItem}>
          <span className={i === activeIndex ? styles.navIconActive : styles.navIcon}>{NAV_GLYPHS[item]}</span>
          <span className={i === activeIndex ? styles.navLabelActive : styles.navLabel}>{item}</span>
        </div>
      ))}
      {variant === 'logo' ? (
        <span className={styles.navLogoButton}>
          <img src="/assets/harmonies-mark.png" alt="Harmonies" className={styles.navLogoImg} />
        </span>
      ) : (
        <span className={styles.navPlusButton}>+</span>
      )}
      {items.slice(2).map((item, i) => (
        <div key={item} className={styles.navItem}>
          <span className={i + 2 === activeIndex ? styles.navIconActive : styles.navIcon}>{NAV_GLYPHS[item]}</span>
          <span className={i + 2 === activeIndex ? styles.navLabelActive : styles.navLabel}>{item}</span>
        </div>
      ))}
    </div>
  );
}

const NAV_GLYPHS = {
  Home: '🏠', Cart: '🛒', Categories: '▤', Profile: '👤', Orders: '📋', 'My Store': '🏪', Settings: '⚙',
};

export default function Features() {
  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
  const handleJoinNow = () => setIsSellerModalOpen(true);
  const closeSellerModal = () => setIsSellerModalOpen(false);

  const sellRef = useReveal();
  const collectionsRef = useReveal();
  const growthRef = useReveal();
  const marketingRef = useReveal();
  const operationsRef = useReveal();
  const socialRef = useReveal();
  const analyticsRef = useReveal();
  const finalCtaRef = useReveal();

  return (
    <div id="features-page" className={styles.page}>
      <nav className={styles.nav} data-screen-label="Nav">
        <Link to="/" className={styles.navBrand}>
          <img src="/assets/harmonies-mark.png" alt="Harmonies" className={styles.navMark} />
          <span className={styles.navWordmark}>Harmonies</span>
        </Link>
        <button type="button" className={styles.joinPill} onClick={handleJoinNow}>Join Now</button>
      </nav>

      <section className={styles.hero} data-screen-label="Hero">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.heroBadge}>Features</div>
            <h1 className={styles.heroTitle}>Everything You Need to Turn Your Business Into a Brand</h1>
            <p className={styles.heroSub}>Sell more, manage smarter, and grow faster with a platform built for local businesses.</p>
            <button type="button" className={styles.heroCta} onClick={handleJoinNow}>Join Now &mdash; It&apos;s Free</button>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.puzzleBoard}>
              {PUZZLE_TILES.map((t) => (
                <div key={t.key} className={`${styles.tile} ${styles['tile_' + t.key]}`} style={{ background: t.gradient }}>
                  <span className={styles.tileIcon}>{t.icon}</span>
                  <span className={styles.tileLabel}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 01 Sell Everywhere ============ */}
      <section ref={sellRef} data-reveal className={styles.featRow} data-screen-label="Sell Everywhere">
        <div className={styles.featInner}>
          <div className={styles.featText}>
            <div className={styles.featEyebrowRow}>
              <span className={styles.featBadge} style={{ background: 'rgba(252,99,94,.12)', color: '#FC635E' }}>01</span>
              <span className={styles.featEyebrow} style={{ color: '#FC635E' }}>Sell Everywhere, From One Place</span>
            </div>
            <h2 className={styles.featHeading}>Your Products. Your Customers. One Platform.</h2>
            <p className={styles.featCopy}>Create your digital storefront, showcase your products beautifully, reach customers beyond social media, and accept orders without manual messaging.</p>
            <div className={styles.checklist}>
              {SELL_CHECKLIST.map((item) => (
                <div key={item} className={styles.checkItem}>
                  <span className={styles.checkDot} style={{ background: '#FC635E' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.featVisual}>
            <div className={styles.portraitCard}>
              <div className={styles.storeBanner}>
                <svg width="100%" height="100%" viewBox="0 0 300 184" preserveAspectRatio="none" className={styles.storeBannerSvg}>
                  <circle cx="266" cy="40" r="26" fill="#fff" opacity=".25" />
                  <circle cx="33" cy="136" r="18" fill="#fff" opacity=".2" />
                  <path d="M0 116 Q 84 40 168 116" stroke="#fff" strokeWidth="6" fill="none" opacity=".3" />
                </svg>
              </div>
              <div className={styles.storeBody}>
                <div className={styles.storeAvatar}>B&amp;G</div>
                <div className={styles.storeHeadRow}>
                  <div>
                    <div className={styles.storeName}>B&amp;G Store</div>
                    <div className={styles.storeSub}>Handmade &amp; Gift Store</div>
                  </div>
                  <span className={styles.followPill}>Follow</span>
                </div>
                <p className={styles.storeDesc}>Handmade gifts &amp; home decor, crafted in small batches with love.</p>
                <div className={styles.storeStats}>
                  {STORE_STATS.map((s) => (
                    <div key={s.label} className={styles.storeStat}>
                      <div className={s.accent ? styles.storeStatNumAccent : styles.storeStatNum}>{s.n}</div>
                      <div className={styles.storeStatLabel}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.storeTabs}>
                  <span className={styles.storeTabActive}>Home</span>
                  <span className={styles.storeTab}>Harmonies</span>
                  <span className={styles.storeTab}>Offers</span>
                </div>
                <div className={styles.storeStrip}>
                  <span className={styles.storeStripLabel}>Cozy Living</span>
                </div>
                <div className={styles.storeGrid}>
                  {['#966ac2,#c199e8', '#34C759,#7ee2a0'].map((g, i) => (
                    <div key={i} className={styles.storeProduct}>
                      <div className={styles.storeProductImg} style={{ background: `linear-gradient(135deg,${g})` }} />
                      <div className={styles.storeProductInfo}>
                        <div className={styles.storeProductName}>Party Mood Cake</div>
                        <div className={styles.storeProductPrice}>1200 AED</div>
                        <div className={styles.storeProductMeta}>20 Recommendations &middot; 236 Likes</div>
                      </div>
                    </div>
                  ))}
                </div>
                <BottomNav items={['Home', 'Cart', 'Categories', 'Profile']} activeIndex={0} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 02 Collections ============ */}
      <section ref={collectionsRef} data-reveal className={`${styles.featRow} ${styles.featRowReverse} ${styles.washSection}`} data-screen-label="Collections">
        <div className={`${styles.featInner} ${styles.featInnerReverse}`}>
          <div className={styles.featText}>
            <div className={styles.featEyebrowRow}>
              <span className={styles.featBadge} style={{ background: 'rgba(138,155,247,.14)', color: '#5f76ce' }}>02</span>
              <span className={styles.featEyebrow} style={{ color: '#5f76ce' }}>Turn Products Into Collections</span>
            </div>
            <h2 className={styles.featHeading}>Create Harmonies That Inspire Customers</h2>
            <p className={styles.featCopy}>Customers don&apos;t always buy one product &mdash; they buy a lifestyle. Combine products into curated collections and themed bundles that increase discovery and help customers find the perfect combination.</p>
            <div className={styles.exampleCallout}>
              <span className={styles.exampleIcon}>✨</span>
              <div>
                <div className={styles.exampleLabel}>Example Harmony</div>
                <div className={styles.exampleText}>&quot;Summer Gift Harmony&quot; &rarr; Candle + Handmade Card + Jewelry</div>
              </div>
            </div>
          </div>

          <div className={styles.featVisual}>
            <div className={`${styles.portraitCard} ${styles.discoverCard}`}>
              <div className={styles.discoverTop}>
                <div className={styles.discoverUser}>
                  <span className={styles.discoverAvatar}>👤</span>
                  <div>
                    <div className={styles.discoverWelcome}>Welcome...</div>
                    <div className={styles.discoverName}>Tareq Ballan</div>
                  </div>
                </div>
                <div className={styles.discoverIcons}>
                  <span>🔍</span>
                  <span className={styles.discoverBell}>🔔</span>
                </div>
              </div>
              <div className={styles.discoverTabs}>
                <span className={styles.discoverTabActive}>&#10024; Discover</span>
                <span className={styles.discoverTab}>&#128717; Shop</span>
              </div>
              <div className={styles.discoverAvatarRow}>
                {DISCOVER_STORES.map((s) => (
                  <div key={s.key} className={styles.discoverStore}>
                    <span className={styles.discoverRing} style={{ background: s.ring }}>
                      <span className={styles.discoverRingInner}>{s.initials}</span>
                    </span>
                    <span className={styles.discoverStoreName}>{s.name}</span>
                  </div>
                ))}
              </div>
              <div className={styles.harmonyPost}>
                <div className={styles.harmonyTopLeft}>
                  <span className={styles.harmonyAvatar}>B&amp;G</span>
                  <div>
                    <div className={styles.harmonyStoreName}>B&amp;G Store</div>
                    <div className={styles.harmonyHandle}>@bgstore</div>
                  </div>
                </div>
                <span className={styles.harmonyProfileIcon}>👤</span>
                <div className={styles.harmonyImage} />
                <div className={styles.harmonyRail}>
                  <span>🔖</span>
                  <div className={styles.harmonyRailStat}><span>&#8635;</span><span>25</span></div>
                  <div className={styles.harmonyRailStat}><span>💬</span><span>1,468</span></div>
                  <div className={styles.harmonyRailStat}><span className={styles.harmonyHeart}>&#10084;</span><span>369</span></div>
                </div>
                <div className={styles.harmonyOverlay}>
                  <div className={styles.harmonyTitle}>Soft Stillness Harmony</div>
                  <div className={styles.harmonyBottomRow}>
                    <div>
                      <span className={styles.harmonyRecPill}>&#10003; 20 Recommendations</span>
                      <div className={styles.harmonyPrice}>240 AED</div>
                    </div>
                    <div className={styles.harmonyAvatarStack}>
                      <span style={{ background: 'linear-gradient(135deg,#8A9BF7,#5f76ce)' }} />
                      <span style={{ background: 'linear-gradient(135deg,#966ac2,#c199e8)' }} />
                    </div>
                  </div>
                </div>
              </div>
              <BottomNav items={['Home', 'Cart', 'Categories', 'Profile']} activeIndex={0} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 Grow Your Brand ============ */}
      <section ref={growthRef} data-reveal className={styles.growthSection} data-screen-label="Grow Your Brand">
        <div className={styles.growthInner}>
          <div className={styles.featEyebrowRow} style={{ justifyContent: 'center' }}>
            <span className={styles.featBadge} style={{ background: 'rgba(252,99,94,.16)', color: '#FC635E' }}>03</span>
            <span className={styles.featEyebrow} style={{ color: '#FC635E' }}>Grow Your Brand</span>
          </div>
          <h2 className={`${styles.featHeading} ${styles.growthHeading}`}>More Than a Marketplace. A Growth Partner.</h2>
          <p className={styles.growthCopy}>We study your business, understand your challenges, and help you improve every step of your journey.</p>
          <div className={styles.growthGrid}>
            {GROWTH_ITEMS.map((item) => (
              <div key={item.title} className={styles.growthCell}>
                <div className={styles.growthIcon}>{item.icon}</div>
                <div className={styles.growthTitle}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 Marketing Made Simple ============ */}
      <section ref={marketingRef} data-reveal className={styles.featRow} data-screen-label="Marketing Made Simple">
        <div className={styles.featInner}>
          <div className={styles.featText}>
            <div className={styles.featEyebrowRow}>
              <span className={styles.featBadge} style={{ background: 'rgba(150,106,194,.14)', color: '#966ac2' }}>04</span>
              <span className={styles.featEyebrow} style={{ color: '#966ac2' }}>Marketing Made Simple</span>
            </div>
            <h2 className={styles.featHeading}>Get Your Brand In Front of More Customers</h2>
            <div className={styles.checklist}>
              {MARKETING_CHECKLIST.map((item) => (
                <div key={item} className={styles.checkItem}>
                  <span className={styles.checkDot} style={{ background: '#966ac2' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.featVisual}>
            <div className={styles.portraitCard}>
              <div className={styles.searchBody}>
                <div className={styles.searchHeadRow}>
                  <span>&#8592;</span>
                  <span className={styles.searchTitle}>Search</span>
                </div>
                <div className={styles.searchBarRow}>
                  <div className={styles.searchPill}><span>🔍</span><span>Gift</span></div>
                  <div className={styles.searchFilterPill}><span>Brands</span><span>&#9662;</span></div>
                </div>
                {SEARCH_GROUPS.map((group) => (
                  <div key={group.store}>
                    <div className={styles.searchStoreRow}>
                      <div className={styles.searchStoreLeft}>
                        <span className={styles.searchStoreAvatar} style={{ background: group.avatar }} />
                        <span className={styles.searchStoreName}>{group.store}</span>
                      </div>
                      <span className={styles.followPillSmall}>Follow</span>
                    </div>
                    <div className={styles.searchProductGrid}>
                      {group.products.map((p, i) => (
                        <div key={i} className={styles.searchProduct}>
                          <div className={styles.searchProductImg} style={{ background: p.gradient }} />
                          <div className={styles.searchProductInfo}>
                            <div className={styles.storeProductName}>Party Mood Cake</div>
                            <div className={styles.storeProductPrice}>1200 AED</div>
                            <div className={styles.storeProductMeta}>{p.recs}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <BottomNav items={['Home', 'Cart', 'Categories', 'Profile']} activeIndex={3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05 Stress-Free Operations ============ */}
      <section ref={operationsRef} data-reveal className={`${styles.featRow} ${styles.featRowReverse} ${styles.washSection}`} data-screen-label="Stress-Free Operations">
        <div className={`${styles.featInner} ${styles.featInnerReverse}`}>
          <div className={styles.featText}>
            <div className={styles.featEyebrowRow}>
              <span className={styles.featBadge} style={{ background: 'rgba(52,199,89,.14)', color: '#1f9e46' }}>05</span>
              <span className={styles.featEyebrow} style={{ color: '#1f9e46' }}>Stress-Free Operations</span>
            </div>
            <h2 className={styles.featHeading}>Focus on Creating. We Handle the Complexity.</h2>
            <div className={styles.checklist}>
              {OPERATIONS_CHECKLIST.map((item) => (
                <div key={item} className={styles.checkItem}>
                  <span className={styles.checkDot} style={{ background: '#1f9e46' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.featVisual}>
            <div className={styles.portraitCard}>
              <div className={styles.ordersBody}>
                <div className={styles.ordersTitle}>Orders</div>
                <div className={styles.ordersSearchRow}><span>🔍</span><span>Search categories</span></div>
                <div className={styles.ordersChipRow}>
                  <span className={styles.ordersChipActive}>All</span>
                  <span className={styles.ordersChip}>Pending</span>
                  <span className={styles.ordersChip}>Preparing</span>
                </div>
                <div className={styles.ordersList}>
                  {ORDERS.map((o, i) => (
                    <div key={i} className={styles.orderRow}>
                      <div className={styles.orderThumb} style={{ background: o.gradient }}>
                        <span className={styles.orderBadge} style={{ background: o.badgeBg }}>{o.badge}</span>
                      </div>
                      <div className={styles.orderInfo}>
                        <div className={styles.orderId}>Order {o.id}</div>
                        <div className={styles.orderName}>Product Name</div>
                        <div className={styles.orderAmount}>{o.name} &middot; <span style={{ color: o.amountColor, fontWeight: 700 }}>{o.amount}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
                <BottomNav items={['Home', 'Orders', 'My Store', 'Settings']} activeIndex={1} variant="plus" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 06 Build Social Commerce Together ============ */}
      <section ref={socialRef} data-reveal className={styles.featRow} data-screen-label="Build Social Commerce Together">
        <div className={styles.featInner}>
          <div className={styles.featText}>
            <div className={styles.featEyebrowRow}>
              <span className={styles.featBadge} style={{ background: 'rgba(252,99,94,.12)', color: '#FC635E' }}>06</span>
              <span className={styles.featEyebrow} style={{ color: '#FC635E' }}>Build Social Commerce Together</span>
            </div>
            <h2 className={styles.featHeading}>Your Customers Become Your Community</h2>
            <div className={styles.checklist}>
              {SOCIAL_CHECKLIST.map((item) => (
                <div key={item} className={styles.checkItem}>
                  <span className={styles.checkDot} style={{ background: '#FC635E' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.featVisual}>
            <div className={styles.recCard}>
              <div className={styles.recTabs}>
                <span className={styles.recTab}>All</span>
                <span className={styles.recTab}>Comments</span>
                <span className={styles.recTabActive}>Recommendations</span>
              </div>
              <div className={styles.recList}>
                {RECOMMENDATIONS.map((r) => (
                  <div key={r.name} className={styles.recRow}>
                    <span className={styles.recAvatar} style={{ background: r.avatar }} />
                    <div className={styles.recBody}>
                      <div className={styles.recNameRow}>
                        <span className={styles.recName}>{r.name}</span>
                        <span className={styles.recPill}>Recommended</span>
                      </div>
                      <div className={styles.recText}>{r.text}</div>
                      {r.tags.length > 0 && (
                        <div className={styles.recTagRow}>
                          {r.tags.map((tag) => (
                            <span key={tag.label} className={styles.recTag} style={{ color: tag.color, background: tag.bg }}>{tag.label}</span>
                          ))}
                        </div>
                      )}
                      <div className={styles.recMeta}>{r.likes} Likes &middot; Reply</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.recFooter}>
                <span className={styles.recBtn}>Recommend this Item</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 07 Analytics & Insights ============ */}
      <section ref={analyticsRef} data-reveal className={`${styles.featRow} ${styles.featRowReverse} ${styles.analyticsSection}`} data-screen-label="Analytics & Insights">
        <span className={styles.analyticsGlow} />
        <div className={`${styles.featInner} ${styles.featInnerReverse}`} style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.featText}>
            <div className={styles.featEyebrowRow}>
              <span className={styles.featBadge} style={{ background: 'rgba(138,155,247,.16)', color: '#8A9BF7' }}>07</span>
              <span className={styles.featEyebrow} style={{ color: '#8A9BF7' }}>Analytics &amp; Insights</span>
            </div>
            <h2 className={`${styles.featHeading} ${styles.analyticsHeading}`}>Know What Works. Improve Faster.</h2>
            <div className={styles.analyticsGrid}>
              {ANALYTICS_ITEMS.map((item) => (
                <div key={item.num} className={styles.analyticsCell}>
                  <span className={styles.analyticsNum} style={{ color: item.color }}>{item.num}</span>
                  <div className={styles.analyticsTitle}>{item.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.featVisual}>
            <div className={styles.dashCard}>
              <div className={styles.dashLabel}>Total Earnings</div>
              <div className={styles.dashTotalRow}>
                <span className={styles.dashTotal}>1,150,254</span>
                <span className={styles.dashCurrency}>AED</span>
              </div>
              <div className={styles.dashStatsGrid}>
                <div className={styles.dashStat}><div className={styles.dashStatNum}>20</div><div className={styles.dashStatLabel}>Pending</div></div>
                <div className={styles.dashStat}><div className={styles.dashStatNum}>05</div><div className={styles.dashStatLabel}>Refund</div></div>
                <div className={styles.dashStat}><div className={styles.dashStatNum}>07</div><div className={styles.dashStatLabel}>Preparing</div></div>
              </div>
              <div className={styles.dashTrendRow}>
                <span className={styles.dashTrendLabel}>Revenue Trend</span>
                <span className={styles.dashTrendDays}>7 Days</span>
              </div>
              <svg width="100%" height="56" viewBox="0 0 280 56" className={styles.dashSpark}>
                <polyline points="0,40 40,44 80,26 120,34 160,14 200,22 240,8 280,18" fill="none" stroke="#8A9BF7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="240" cy="8" r="4" fill="#FC635E" />
              </svg>
              <div className={styles.dashActivityLabel}>Recent Activity</div>
              <div className={styles.dashActivityList}>
                <div className={styles.dashActivityRow}>
                  <span className={styles.dashActivityIcon} style={{ background: 'rgba(138,155,247,.14)', color: '#5f76ce' }}>💳</span>
                  <span>Payout completed &mdash; AED 640</span>
                </div>
                <div className={styles.dashActivityRow}>
                  <span className={styles.dashActivityIcon} style={{ background: 'rgba(52,199,89,.14)', color: '#1f9e46' }}>📦</span>
                  <span>New order received &mdash; AED 890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={finalCtaRef} data-reveal className={styles.finalCta} data-screen-label="Final CTA">
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaHeading}>Ready to Grow Your Business?</h2>
          <p className={styles.finalCtaCopy}>Join local businesses already building their future with Harmonies.</p>
          <button type="button" className={styles.finalCtaBtn} onClick={handleJoinNow}>Start For Free</button>
        </div>
      </section>

      <Footer />
      <BecomeSellerModal isOpen={isSellerModalOpen} onClose={closeSellerModal} />
    </div>
  );
}
