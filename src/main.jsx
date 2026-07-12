import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ContactUs from './components/ContactUs/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './components/TermsOfService/TermsOfService';
import CookiesPolicy from './components/CookiesPolicy/CookiesPolicy';
import CookieConsent from './components/CookieConsent/CookieConsent';
import WhyHarmonies from './components/WhyHarmonies/WhyHarmonies';
import Pricing from './components/Pricing/Pricing';
import Features from './components/Features/Features';
import FAQs from './components/FAQs/FAQs';
import AboutHarmonies from './components/AboutHarmonies/AboutHarmonies';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './styles/tokens.css';
import './styles/base.css';
import './styles/animations.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/why-harmonies" element={<WhyHarmonies />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about-harmonies" element={<AboutHarmonies />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  </React.StrictMode>
);
