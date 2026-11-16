import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppRoutes from './AppRoutes';

/**
 * Build-time only (scripts/prerender.mjs): renders one route to static HTML
 * so crawlers that don't run JavaScript (Meta's App Review, social previews)
 * can read the page. Never shipped to the browser.
 */
export function render(pathname) {
  return renderToString(
    <StaticRouter location={pathname}>
      <AppRoutes />
    </StaticRouter>
  );
}
