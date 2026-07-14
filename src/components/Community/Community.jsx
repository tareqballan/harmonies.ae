import { useReveal } from '../../hooks/useReveal';
import styles from './Community.module.css';

const VALUE_LINES = [
  { color: '#FC635E', delay: '0s', pos: styles.valTopLeft, text: 'This is relationship, not a receipt' },
  { color: '#8A9BF7', delay: '.25s', pos: styles.valTopRight, text: "We're built around people" },
  { color: '#966ac2', delay: '.5s', pos: styles.valBottomLeft, text: 'Buying feels like belonging' },
  { color: '#34C759', delay: '.75s', pos: styles.valBottomRight, text: 'Trust travels faster than any ad' },
  { color: '#FC635E', delay: '1s', pos: styles.valCenter, text: 'Every gift opens the shop to someone new' },
];

const LABELS = [
  { left: 305.8, top: 100.8, tx: '-50%', ty: '-100%', color: '#FC635E', name: 'labelSells2', text: 'sells' },
  { left: 82.8, top: 285.7, tx: '-100%', ty: '-50%', color: '#FC635E', name: 'labelSells2', text: 'sells' },
  { left: 534.1, top: 272.5, tx: '0', ty: '-50%', color: '#FC635E', name: 'labelBuys2', text: 'buys' },
  { left: 447.4, top: 519.8, tx: '-50%', ty: '-100%', color: '#5f76ce', name: 'labelRecommends2', text: 'recommends' },
  { left: 180.5, top: 525.3, tx: '-50%', ty: '-100%', color: '#966ac2', name: 'labelGifts2', text: 'gifts' },
  { left: 431.5, top: 135.1, tx: '-50%', ty: '-100%', color: '#1f9d44', name: 'labelFollows', text: 'follows' },
  { left: 95.1, top: 420.3, tx: '-100%', ty: '-50%', color: '#1f9d44', name: 'labelFollows', text: 'follows' },
];

const RING_DOTS = [
  { left: '50%', top: '2px', ml: '-15px', size: 30, bg: '#FC635E', shadow: 'rgba(252,99,94,.6)' },
  { left: 'calc(50% + 207px)', top: 'calc(50% - 122px)', size: 24, bg: '#8A9BF7', shadow: 'rgba(138,155,247,.6)' },
  { left: 'calc(50% + 207px)', top: 'calc(50% + 98px)', size: 26, bg: '#966ac2', shadow: 'rgba(150,106,194,.6)' },
  { left: '50%', bottom: '2px', ml: '-14px', size: 28, bg: '#34C759', shadow: 'rgba(52,199,89,.6)' },
  { left: 'calc(50% - 231px)', top: 'calc(50% + 98px)', size: 22, bg: '#fd8b87', shadow: 'rgba(252,99,94,.5)' },
  { left: 'calc(50% - 231px)', top: 'calc(50% - 122px)', size: 24, bg: '#c9a9e6', shadow: 'rgba(150,106,194,.5)' },
];

function NetworkDecoration({ mobile }) {
  const s = mobile ? { w: 100, h: 88, hub: [45, 49] } : { w: 150, h: 130, hub: [67, 73] };
  const [hx, hy] = s.hub;
  return (
    <svg width={s.w} height={s.h} viewBox={`0 0 ${s.w} ${s.h}`} fill="none" className={styles.netSvg}>
      <g style={{ transformOrigin: `${hx}px ${hy}px`, animation: 'netSpokeA 5.2s ease-in-out infinite' }}>
        <line x1={mobile ? 12 : 18} y1={mobile ? 20 : 30} x2={hx} y2={hy} stroke="#8A9BF7" strokeWidth={mobile ? 1.6 : 2} strokeLinecap="round" opacity=".85" />
        <circle cx={mobile ? 12 : 18} cy={mobile ? 20 : 30} r={mobile ? 5 : 7} fill="#8A9BF7" />
      </g>
      <g style={{ transformOrigin: `${hx}px ${hy}px`, animation: 'netSpokeB 4.6s ease-in-out infinite' }}>
        <line x1={mobile ? 78 : 116} y1={mobile ? 23 : 34} x2={hx} y2={hy} stroke="#FC635E" strokeWidth={mobile ? 1.6 : 2} strokeLinecap="round" opacity=".85" />
        <circle cx={mobile ? 78 : 116} cy={mobile ? 23 : 34} r={mobile ? 5.5 : 8} fill="#FC635E" />
      </g>
      <g style={{ transformOrigin: `${hx}px ${hy}px`, animation: 'netSpokeD 3.9s ease-in-out infinite' }}>
        <line x1={mobile ? 35 : 52} y1={mobile ? 65 : 97} x2={hx} y2={hy} stroke="#966ac2" strokeWidth={mobile ? 1.6 : 2} strokeLinecap="round" opacity=".85" />
        <circle cx={mobile ? 35 : 52} cy={mobile ? 65 : 97} r={mobile ? 3.6 : 5.5} fill="#fd8b87" />
      </g>
      <circle cx={hx} cy={hy} r={mobile ? 5 : 7.5} fill="#966ac2" style={{ transformOrigin: `${hx}px ${hy}px`, animation: 'netHubPulse 4.2s ease-in-out infinite' }} />
    </svg>
  );
}

export default function Community() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} data-reveal className={styles.section} data-screen-label="Not Another Transaction">
      <div className={`${styles.blobA} desktop-only`} />
      <div className={`${styles.netWrap} desktop-only`}><NetworkDecoration /></div>
      <div className={`${styles.netWrapMobile} mobile-only`}><NetworkDecoration mobile /></div>
      <div className={`${styles.blobAMobile} mobile-only`} />

      <div className={styles.heading}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Social Ecommerce
        </div>
        <h2 className={styles.h2}>
          Not a marketplace. Harmonies is a <span className={styles.gradientWord}>community.</span>
        </h2>
      </div>

      {/* ============ Full relationship diagram (same on desktop and mobile;
           mobile scales the whole thing down via CSS transform, per handoff) ============ */}
      <div className={styles.desktopDiagramOuter}>
        <div className={styles.desktopDiagramInner}>
          {VALUE_LINES.map((v, i) => (
            <div key={i} className={`${styles.valueLine} ${v.pos} desktop-only`} style={{ animationDelay: v.delay }}>
              <span className={styles.valueDot} style={{ background: v.color }} />
              <span className={styles.valueText}>{v.text}</span>
            </div>
          ))}

          <div className={styles.loopWrap}>
            <div className={styles.diagramFloat}>
              <div className={styles.blobHalo} />
              <div className={styles.blobShape}>
                <div className={styles.blobInnerWash} />
                <div className={styles.blobDashRing} />
                <div className={styles.ringSpin}>
                  {RING_DOTS.map((d, i) => (
                    <div
                      key={i}
                      className={styles.ringDot}
                      style={{
                        left: d.left, top: d.top, bottom: d.bottom,
                        marginLeft: d.ml, width: d.size, height: d.size,
                        background: d.bg, boxShadow: `0 6px 14px -4px ${d.shadow}`,
                      }}
                    />
                  ))}
                </div>
                <div className={styles.blobFace} />
              </div>

              <div className={`${styles.driftDot} ${styles.drift1}`}><div className={styles.driftInner} /></div>
              <div className={`${styles.driftDot} ${styles.drift2}`}><div className={styles.driftInner} /></div>
              <div className={`${styles.driftDot} ${styles.drift3}`}><div className={styles.driftInner} /></div>

              <svg width="100%" height="100%" viewBox="0 0 620 640" preserveAspectRatio="none" className={styles.storySvg}>
                <defs>
                  <marker id="arrowCoral" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#FC635E" /></marker>
                  <marker id="arrowBlue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#8A9BF7" /></marker>
                  <marker id="arrowPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#966ac2" /></marker>
                  <marker id="arrowGreen" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1f9d44" /></marker>
                </defs>
                <path className={styles.storyEdge} pathLength="1" d="M136,154 L169.4,187.7 A202,202 0 0,1 446.2,183.6 L484,141" fill="none" stroke="#FC635E" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="1" markerEnd="url(#arrowCoral)" style={{ animationName: 'edgeSells' }} />
                <path className={styles.storyEdge} pathLength="1" d="M136,154 L169.4,187.7 A202,202 0 0,0 123,409.1 L105,416" fill="none" stroke="#FC635E" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="1" markerEnd="url(#arrowCoral)" style={{ animationName: 'edgeSells' }} />
                <path className={styles.storyEdge} pathLength="1" d="M484,141 L446.2,183.6 A202,202 0 0,1 502.7,393.2 L515,397" fill="none" stroke="#FC635E" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="1" markerEnd="url(#arrowCoral)" style={{ animationName: 'edgeBuys' }} />
                <path className={styles.storyEdge} pathLength="1" d="M515,397 L502.7,393.2 A202,202 0 0,1 310,534.8 L310,531" fill="none" stroke="#8A9BF7" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="1" markerEnd="url(#arrowBlue)" style={{ animationName: 'edgeRecommends' }} />
                <path className={styles.storyEdge} pathLength="1" d="M310,531 L310,534.8 A202,202 0 0,1 123,409.1 L105,416" fill="none" stroke="#966ac2" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="1" markerEnd="url(#arrowPurple)" style={{ animationName: 'edgeGiftsA' }} />
                <path className={styles.storyEdge} pathLength="1" d="M515,397 L502.7,393.2 A202,202 0 0,0 169.4,187.7 L136,154" fill="none" stroke="#1f9d44" strokeOpacity="1" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="2 6" markerEnd="url(#arrowGreen)" style={{ animationName: 'edgeFollow1' }} />
                <path className={styles.storyEdge} pathLength="1" d="M310,531 L310,534.8 A202,202 0 0,1 169.4,187.7 L136,154" fill="none" stroke="#1f9d44" strokeOpacity="1" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="2 6" markerEnd="url(#arrowGreen)" style={{ animationName: 'edgeFollow2' }} />
              </svg>

              <div className={styles.storyPulse} style={{ width: 9, height: 9, margin: '-4.5px 0 0 -4.5px', background: '#FC635E', boxShadow: '0 0 10px 3px rgba(252,99,94,.65)', offsetPath: "path('M136,154 L169.4,187.7 A202,202 0 0,1 446.2,183.6 L484,141')", animationName: 'pulseSells' }} />
              <div className={styles.storyPulse} style={{ width: 9, height: 9, margin: '-4.5px 0 0 -4.5px', background: '#FC635E', boxShadow: '0 0 10px 3px rgba(252,99,94,.65)', offsetPath: "path('M136,154 L169.4,187.7 A202,202 0 0,0 123,409.1 L105,416')", animationName: 'pulseSells' }} />
              <div className={styles.storyPulse} style={{ width: 9, height: 9, margin: '-4.5px 0 0 -4.5px', background: '#FC635E', boxShadow: '0 0 10px 3px rgba(252,99,94,.6)', offsetPath: "path('M484,141 L446.2,183.6 A202,202 0 0,1 502.7,393.2 L515,397')", animationName: 'pulseBuys' }} />
              <div className={styles.storyPulse} style={{ width: 9, height: 9, margin: '-4.5px 0 0 -4.5px', background: '#5f76ce', boxShadow: '0 0 10px 3px rgba(138,155,247,.6)', offsetPath: "path('M515,397 L502.7,393.2 A202,202 0 0,1 310,534.8 L310,531')", animationName: 'pulseRecommends' }} />
              <div className={styles.storyPulse} style={{ width: 9, height: 9, margin: '-4.5px 0 0 -4.5px', background: '#966ac2', boxShadow: '0 0 10px 3px rgba(150,106,194,.6)', offsetPath: "path('M310,531 L310,534.8 A202,202 0 0,1 123,409.1 L105,416')", animationName: 'pulseGiftsA' }} />
              <div className={styles.storyPulse} style={{ width: 8, height: 8, margin: '-4px 0 0 -4px', background: '#34C759', boxShadow: '0 0 10px 3px rgba(52,199,89,.6)', offsetPath: "path('M515,397 L502.7,393.2 A202,202 0 0,0 169.4,187.7 L136,154')", animationName: 'pulseFollow1' }} />
              <div className={styles.storyPulse} style={{ width: 8, height: 8, margin: '-4px 0 0 -4px', background: '#34C759', boxShadow: '0 0 10px 3px rgba(52,199,89,.6)', offsetPath: "path('M310,531 L310,534.8 A202,202 0 0,1 169.4,187.7 L136,154')", animationName: 'pulseFollow2' }} />

              <div className={styles.centerLabel}>
                <div className={styles.centerIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f9d44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
                </div>
                <span className={styles.centerText}>A growing<br />community</span>
              </div>

              <div className={styles.nodeShadow} style={{ left: '22%', top: 'calc(24% + 66px)', width: 90, height: 16, background: 'radial-gradient(closest-side,rgba(252,99,94,.35),transparent 75%)', animation: 'floatShadow 4s ease-in-out infinite' }} />
              <div className={styles.nodeShadow} style={{ left: '83%', top: 'calc(62% + 56px)', width: 76, height: 14, background: 'radial-gradient(closest-side,rgba(13,16,51,.28),transparent 75%)', animation: 'floatShadow 4.4s ease-in-out infinite', animationDelay: '.2s' }} />
              <div className={styles.nodeShadow} style={{ left: '50%', top: 'calc(83% + 56px)', width: 76, height: 14, background: 'radial-gradient(closest-side,rgba(13,16,51,.28),transparent 75%)', animation: 'floatShadow 4.2s ease-in-out infinite', animationDelay: '.35s' }} />

              <div className={styles.node} style={{ left: '22%', top: '24%' }}>
                <div style={{ animation: 'nodeFloatA 4.6s ease-in-out infinite' }}>
                  <div className={styles.nodeCircle} style={{ width: 118, height: 118, background: '#fff8f2', border: '3px solid #FC635E', boxShadow: '0 14px 28px -10px rgba(252,99,94,.5)' }}>
                    <img src="/assets/storefront.png" alt="The seller's shop" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
              <div className={styles.node} style={{ left: '78%', top: '22%' }}>
                <div style={{ animation: 'nodeFloatB 5.2s ease-in-out infinite' }}>
                  <div className={styles.nodeCircle} style={{ width: 96, height: 96, background: '#fbf3ef', border: '3px solid #8A9BF7', boxShadow: '0 12px 24px -8px rgba(138,155,247,.45)' }}>
                    <img src="/assets/mug-photo.png" alt="Hand-thrown mug" style={{ width: '76%', height: '76%', objectFit: 'cover', borderRadius: '50%' }} />
                  </div>
                </div>
              </div>
              <div className={styles.node} style={{ left: '83%', top: '62%' }}>
                <div style={{ animation: 'nodeFloatC 4.9s ease-in-out infinite' }}>
                  <div className={styles.nodeCircle} style={{ width: 100, height: 100, background: '#fff5f0', border: '3px solid #8fa0d0', boxShadow: '0 12px 24px -8px rgba(13,16,51,.28)' }}>
                    <img src="/assets/avatar-girl.png" alt="Buyer" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }} />
                  </div>
                </div>
              </div>
              <div className={styles.node} style={{ left: '17%', top: '65%' }}>
                <div style={{ animation: 'nodeFloatD 5.5s ease-in-out infinite' }}>
                  <div className={styles.nodeCircle} style={{ width: 96, height: 96, background: '#fdf0ef', border: '3px solid #966ac2', boxShadow: '0 12px 24px -8px rgba(150,106,194,.4)' }}>
                    <img src="/assets/candle-photo.png" alt="Dried flowers" style={{ width: '78%', height: '78%', objectFit: 'cover', borderRadius: '50%' }} />
                  </div>
                </div>
              </div>
              <div className={styles.node} style={{ left: '50%', top: '83%' }}>
                <div style={{ animation: 'nodeFloatE 4.3s ease-in-out infinite' }}>
                  <div className={styles.nodeCircle} style={{ width: 100, height: 100, background: '#fff5f0', border: '3px solid #8fa0d0', boxShadow: '0 12px 24px -8px rgba(13,16,51,.28)' }}>
                    <img src="/assets/avatar-boy.png" alt="Friend" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 26%' }} />
                  </div>
                </div>
              </div>

              {LABELS.map((l, i) => (
                <div key={i} className={styles.labelWrap} style={{ left: l.left, top: l.top, transform: `translate(${l.tx},${l.ty})` }}>
                  <span className={styles.storyLabel} style={{ color: l.color, animationName: l.name }}>{l.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============ MOBILE: same diagram (scaled via CSS), value-lines
           become a static stacked list below it instead of scattered overlay ============ */}
      <div className={`${styles.valueLinesList} mobile-only`}>
        {VALUE_LINES.map((v, i) => (
          <div key={i} className={styles.valueLineStatic} style={{ animationDelay: v.delay }}>
            <span className={styles.valueDot} style={{ background: v.color }} />
            <span className={styles.valueText}>{v.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
