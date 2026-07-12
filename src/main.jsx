import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ContactUs from './components/ContactUs/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import CookiesPolicy from './components/CookiesPolicy/CookiesPolicy';
import CookieConsent from './components/CookieConsent/CookieConsent';
import WhyHarmonies from './components/WhyHarmonies/WhyHarmonies';
import './styles/tokens.css';
import './styles/base.css';
import './styles/animations.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/why-harmonies" element={<WhyHarmonies />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  </React.StrictMode>
);
