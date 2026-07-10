import { useEffect, useRef } from 'react';

/**
 * Recreates the reveal-on-scroll behavior from the reference prototypes:
 * elements start at opacity:0/translateY(28px) (see [data-reveal] rules in
 * animations.css) and gain the `is-in` class once they enter the viewport,
 * via an IntersectionObserver (threshold 0, rootMargin '10% 0px 10% 0px')
 * plus a scroll/resize-driven fallback sweep for elements that are already
 * in view on mount (e.g. above-the-fold content) or that the observer
 * missed during fast scrolls.
 *
 * Usage: const ref = useReveal(); <div ref={ref} data-reveal>...</div>
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const revealIfVisible = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 1.1 && r.bottom > -vh * 0.15) {
        el.classList.add('is-in');
        return true;
      }
      return false;
    };

    const hasIO = typeof IntersectionObserver !== 'undefined';
    const obs = hasIO
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-in');
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0, rootMargin: '10% 0px 10% 0px' }
        )
      : null;
    if (obs) obs.observe(el);

    let ticking = false;
    const sweep = () => {
      ticking = false;
      if (!el.classList.contains('is-in')) revealIfVisible();
    };
    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(sweep);
      }
    };
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    sweep();

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (obs) obs.disconnect();
    };
  }, []);

  return ref;
}

/**
 * Same as useReveal but returns a ref-setter for use in a list (so a
 * variable number of elements — e.g. pain-point rows, timeline steps —
 * can each register themselves with one observer instance).
 */
export function useRevealGroup(count) {
  const refs = useRef([]);
  refs.current = Array.from({ length: count }, (_, i) => refs.current[i] || null);

  useEffect(() => {
    const els = refs.current.filter(Boolean);
    if (!els.length) return undefined;

    const revealIfVisible = (el) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 1.1 && r.bottom > -vh * 0.15) {
        el.classList.add('is-in');
        return true;
      }
      return false;
    };

    const hasIO = typeof IntersectionObserver !== 'undefined';
    const obs = hasIO
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-in');
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0, rootMargin: '10% 0px 10% 0px' }
        )
      : null;
    if (obs) els.forEach((el) => obs.observe(el));

    let ticking = false;
    const sweep = () => {
      ticking = false;
      els.forEach((el) => {
        if (!el.classList.contains('is-in')) revealIfVisible(el);
      });
    };
    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(sweep);
      }
    };
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    sweep();

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (obs) obs.disconnect();
    };
  }, [count]);

  return (i) => (node) => {
    refs.current[i] = node;
  };
}
