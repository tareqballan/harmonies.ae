import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router doesn't reset scroll position on navigation by default —
// without this, clicking a link partway down one page lands at the same
// scroll offset on the next page instead of the top. When the target URL
// carries a hash (e.g. a deep link into a legal document's section), scroll
// to that element instead so anchor references actually land where they point.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
