import { useReveal } from '../../hooks/useReveal';
import styles from './ProductBundles.module.css';

const PRODUCT_ITEMS = [
  { src: '/assets/item-tote-bag-clay.png', alt: 'Woven tote bag', glow: 'rgba(252,99,94,.32)', anim: 'itemRise1 4.6s ease-in-out infinite', glowAnim: 'itemGlow 4.6s ease-in-out infinite' },
  { src: '/assets/item-candles-stack-clay.png', alt: 'Stacked candles', glow: 'rgba(150,106,194,.32)', anim: 'itemRise2 5s ease-in-out infinite .2s', glowAnim: 'itemGlow 5s ease-in-out infinite .2s' },
  { src: '/assets/item-notebook-clay.png', alt: 'Notebook', glow: 'rgba(138,155,247,.32)', anim: 'itemRise3 4.4s ease-in-out infinite .4s', glowAnim: 'itemGlow 4.4s ease-in-out infinite .4s' },
];

function ProductItem({ item, size }) {
  return (
    <div className={styles.item} style={{ width: size, height: size, animation: item.anim }}>
      <div className={styles.itemGlow} style={{ background: `radial-gradient(circle,${item.glow},transparent 70%)`, animation: item.glowAnim }} />
      <div className={styles.itemPhoto}>
        <img src={item.src} alt={item.alt} />
      </div>
    </div>
  );
}

function LikeIcon({ size = 15, filter }) {
  return (
    <div className={styles.likeWrap} style={{ width: size * 2, height: size * 2 }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#FC635E" stroke="#FC635E" strokeWidth="1" className={styles.heartBeat} style={filter ? { filter } : undefined}><path d="M12 21s-7.5-4.9-10-9.4C.4 8.4 2 5 5.4 5c2 0 3.5 1.1 4.6 2.7C11.1 6.1 12.6 5 14.6 5 18 5 19.6 8.4 18 11.6 15.5 16.1 12 21 12 21z" /></svg>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#FC635E" className={`${styles.heartFloat} ${styles.heartFloat1}`}><path d="M12 21s-7.5-4.9-10-9.4C.4 8.4 2 5 5.4 5c2 0 3.5 1.1 4.6 2.7C11.1 6.1 12.6 5 14.6 5 18 5 19.6 8.4 18 11.6 15.5 16.1 12 21 12 21z" /></svg>
      <svg width={size * 0.73} height={size * 0.73} viewBox="0 0 24 24" fill="#f5878a" className={`${styles.heartFloat} ${styles.heartFloat2}`}><path d="M12 21s-7.5-4.9-10-9.4C.4 8.4 2 5 5.4 5c2 0 3.5 1.1 4.6 2.7C11.1 6.1 12.6 5 14.6 5 18 5 19.6 8.4 18 11.6 15.5 16.1 12 21 12 21z" /></svg>
      <svg width={size * 0.67} height={size * 0.67} viewBox="0 0 24 24" fill="#FC635E" className={`${styles.heartFloat} ${styles.heartFloat3}`}><path d="M12 21s-7.5-4.9-10-9.4C.4 8.4 2 5 5.4 5c2 0 3.5 1.1 4.6 2.7C11.1 6.1 12.6 5 14.6 5 18 5 19.6 8.4 18 11.6 15.5 16.1 12 21 12 21z" /></svg>
      <div className={styles.heartRing} />
    </div>
  );
}

export default function ProductBundles() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} data-reveal className={styles.section} data-screen-label="Product Bundles">
      <div className={`${styles.tickRail} ${styles.tickLeft}`}>
        <span className={styles.tick} style={{ background: '#FC635E', animation: 'tickFade1 3.4s ease-in-out infinite' }} />
        <span className={styles.tick} style={{ background: '#8A9BF7', animation: 'tickFade2 3.8s ease-in-out infinite .3s' }} />
        <span className={styles.tick} style={{ background: '#966ac2', animation: 'tickFade1 3.1s ease-in-out infinite .6s' }} />
        <span className={styles.tick} style={{ background: '#FC635E', animation: 'tickFade2 3.6s ease-in-out infinite .9s' }} />
      </div>
      <div className={`${styles.tickRail} ${styles.tickRight}`}>
        <span className={styles.tick} style={{ background: '#966ac2', animation: 'tickFade2 3.5s ease-in-out infinite .2s' }} />
        <span className={styles.tick} style={{ background: '#FC635E', animation: 'tickFade1 3.9s ease-in-out infinite .5s' }} />
        <span className={styles.tick} style={{ background: '#8A9BF7', animation: 'tickFade2 3.2s ease-in-out infinite .8s' }} />
        <span className={styles.tick} style={{ background: '#966ac2', animation: 'tickFade1 3.7s ease-in-out infinite 1.1s' }} />
      </div>

      <div className={styles.heading}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Product Bundles
        </div>
        <h2 className={styles.h2}>
          <span className={styles.gradientText}>Post once, sell as a&nbsp;Harmony.</span>
        </h2>
        <p className={styles.subcopy}>
          Style a few products together in one photo, set one price, and post it once. Buyers discover the whole set in Discover and buy it in a tap.
        </p>
      </div>

      {/* ============ DESKTOP: horizontal 3-stage flow ============ */}
      <div className={`${styles.flowRow} desktop-only`}>
        <div className={styles.stage}>
          <span className={styles.stageLabel}>Your products</span>
          <div className={styles.stackCenter}>
            <div className={styles.itemsColumn}>
              {PRODUCT_ITEMS.map((item) => (
                <ProductItem key={item.alt} item={item} size="clamp(64px,6vw,88px)" />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.mergeConnector}>
          <svg width="56" height="430" viewBox="0 0 70 430" preserveAspectRatio="none" fill="none" style={{ width: '100%', height: '100%' }}>
            <path d="M4 113 C 34 113, 34 215, 64 215" stroke="#FC635E" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="6 6" className={styles.bundleArrow} />
            <path d="M4 215 L64 215" stroke="#8A9BF7" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="6 6" className={styles.bundleArrow} />
            <path d="M4 317 C 34 317, 34 215, 64 215" stroke="#966ac2" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="6 6" className={styles.bundleArrow} />
            <circle cx="64" cy="215" r="6" fill="#FC635E" />
            <circle cx="64" cy="215" r="11" fill="none" stroke="#FC635E" strokeWidth="1.4" opacity=".4" />
          </svg>
        </div>

        <div className={styles.stage}>
          <span className={styles.stageLabel}>Styled together in one photo</span>
          <svg width="72" height="20" viewBox="0 0 72 20" fill="none" className={styles.horizConnectorSvg}>
            <path d="M2 10h20" stroke="#FC635E" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="6 6" className={styles.bundleArrow} />
            <path d="M26 10h20" stroke="#8A9BF7" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="6 6" className={styles.bundleArrow} />
            <path d="M50 10h10" stroke="#966ac2" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="6 6" className={styles.bundleArrow} />
            <path d="M58 2l10 8-10 8" stroke="#966ac2" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className={styles.sceneFrame}>
            <div className={styles.sceneShadow} />
            <div className={styles.scenePhoto}>
              <img src="/assets/scene-morning-light-clay.png" alt="Styled together, one photo" />
            </div>
          </div>
        </div>

        <div className={styles.stage}>
          <span className={styles.stageLabel}>Posted as one Harmony</span>
          <div className={styles.horizConnectorSpacer} />
          <PhoneMockup variant="desktop" />
        </div>
      </div>

      {/* ============ MOBILE: vertical stacked flow ============ */}
      <div className={`${styles.flowColumn} mobile-only`}>
        <div className={styles.stage}>
          <span className={styles.stageLabel}>Your products</span>
          <div className={styles.itemsRow}>
            {PRODUCT_ITEMS.map((item) => (
              <ProductItem key={item.alt} item={item} size="70px" />
            ))}
          </div>
        </div>

        <VertConnector />

        <div className={styles.stage}>
          <span className={styles.stageLabel}>Styled together in one photo</span>
          <div className={styles.sceneFrameMobile}>
            <div className={styles.sceneShadow} />
            <div className={styles.scenePhoto}>
              <img src="/assets/scene-morning-light-clay.png" alt="Styled together, one photo" />
            </div>
          </div>
        </div>

        <VertConnector />

        <div className={styles.stage}>
          <span className={styles.stageLabel}>Posted as one Harmony</span>
          <PhoneMockup variant="mobile" />
        </div>
      </div>
    </section>
  );

  function VertConnector() {
    return (
      <svg width="26" height="46" viewBox="0 0 26 46" fill="none">
        <path d="M13 2v14" stroke="#FC635E" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="6 6" className={styles.bundleArrow} />
        <path d="M13 18v14" stroke="#8A9BF7" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="6 6" className={styles.bundleArrow} />
        <path d="M4 30l9 12 9-12" stroke="#966ac2" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  function PhoneMockup({ variant }) {
    const isMobile = variant === 'mobile';
    return (
      <div className={isMobile ? styles.sceneFrameMobile : styles.sceneFrame}>
        <div className={styles.sceneShadow} />
        <div className={`${styles.scenePhoto} ${styles.postedCard}`}>
          <img src="/assets/scene-morning-light-clay.png" alt="Morning Light Harmony" />

          <div className={styles.cardTopRow}>
            <div className={styles.storeChip}>
              <div className={styles.storeAvatar} />
              {isMobile ? (
                <span className={styles.storeNameMobile}>Your Store</span>
              ) : (
                <div className={styles.storeNameCol}>
                  <span className={styles.storeName}>Your Store</span>
                  <span className={styles.storeHandle}>@yourstore</span>
                </div>
              )}
            </div>
            <div className={styles.moreButton}>
              <svg width={isMobile ? 11 : 13} height={isMobile ? 11 : 13} viewBox="0 0 24 24" fill="none" stroke="#0d1033" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M19 8v6M22 11h-6" /></svg>
            </div>
          </div>

          <div className={styles.actionRail}>
            <div className={styles.actionIcon}>
              <svg width={isMobile ? 15 : 17} height={isMobile ? 15 : 17} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,.5))' }}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
            </div>
            <div className={styles.actionCol}>
              <div className={styles.actionIcon}><svg width={isMobile ? 15 : 17} height={isMobile ? 15 : 17} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,.5))' }}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg></div>
              <span className={styles.actionCount}>12</span>
            </div>
            <div className={styles.actionCol}>
              <div className={styles.actionIcon}><svg width={isMobile ? 15 : 17} height={isMobile ? 15 : 17} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,.5))' }}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg></div>
              <span className={styles.actionCount}>612</span>
            </div>
            <div className={styles.actionCol}>
              <LikeIcon size={isMobile ? 16 : 15} filter={isMobile ? 'drop-shadow(0 1px 3px rgba(0,0,0,.4))' : undefined} />
              <span className={styles.actionCount}>341</span>
            </div>
          </div>

          <div className={isMobile ? styles.cardCopyMobile : styles.cardCopy}>
            <div className={styles.cardTitle}>Morning Light Harmony</div>
            <div className={styles.recRow}>
              <span className={styles.recCheck}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              </span>
              <span className={styles.recText}>9 Recommendations</span>
            </div>
            <div className={styles.cardPrice}>$36</div>
          </div>

          <div className={isMobile ? styles.avatarStackMobile : styles.avatarStack}>
            <div className={styles.avatarChip} style={{ zIndex: 3 }}><img src="/assets/item-tote-bag-clay.png" alt="" /></div>
            <div className={styles.avatarChip} style={{ zIndex: 2 }}><img src="/assets/item-candles-stack-clay.png" alt="" /></div>
            <div className={styles.avatarChip} style={{ zIndex: 1 }}><img src="/assets/item-notebook-clay.png" alt="" /></div>
          </div>

          <div className={styles.dotsRow}>
            <span className={styles.dotActive} />
            <span className={styles.dotInactive} />
            <span className={styles.dotInactive} />
          </div>
        </div>
      </div>
    );
  }
}
