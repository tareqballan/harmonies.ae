import { useEffect, useRef } from 'react';

/**
 * Counts a number up from 0 to `target` once the element scrolls into
 * view, matching the reference prototype's [data-count] behavior: cubic
 * ease-out over 1200ms, driven by requestAnimationFrame and written
 * directly to textContent (imperative, so the 1200ms animation doesn't
 * drive ~75 React re-renders). Plays once per mount via IntersectionObserver
 * (threshold 0.4).
 *
 * Usage: const ref = useCountUp(503); <div ref={ref}>0</div>
 */
export function useCountUp(target, { suffix = '', commas = false, duration = 1200 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const format = (n) => {
      const rounded = Math.round(n);
      return (commas ? rounded.toLocaleString('en-US') : String(rounded)) + suffix;
    };

    const animate = () => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = format(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      el.textContent = format(target);
      return undefined;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);

    return () => obs.disconnect();
  }, [target, suffix, commas, duration]);

  return ref;
}
