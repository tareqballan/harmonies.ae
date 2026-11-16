import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import CookieConsent from './components/CookieConsent/CookieConsent';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './styles/tokens.css';
import './styles/base.css';
import './styles/animations.css';

// Prerendered pages (see scripts/prerender.mjs) arrive with their content
// already in #root so crawlers can read it. createRoot replaces that static
// markup with the live app; the content is identical, so nothing visibly changes.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
      <CookieConsent />
    </BrowserRouter>
  </React.StrictMode>
);
