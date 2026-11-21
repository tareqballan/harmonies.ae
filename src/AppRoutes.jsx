import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import ContactUs from './components/ContactUs/ContactUs';
import DeleteAccountRequest from './components/DeleteAccountRequest/DeleteAccountRequest';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './components/TermsOfService/TermsOfService';
import ReturnRefundPolicy from './components/ReturnRefundPolicy/ReturnRefundPolicy';
import DeliveryPolicy from './components/DeliveryPolicy/DeliveryPolicy';
import SellerAgreement from './components/SellerAgreement/SellerAgreement';
import WhyHarmonies from './components/WhyHarmonies/WhyHarmonies';
import Pricing from './components/Pricing/Pricing';
import Features from './components/Features/Features';
import FAQs from './components/FAQs/FAQs';
import AboutHarmonies from './components/AboutHarmonies/AboutHarmonies';

/**
 * The site's routes. Shared by the browser entry (main.jsx) and the
 * build-time prerender (entry-server.jsx), so both render the same pages.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/delete-account" element={<DeleteAccountRequest />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
      <Route path="/delivery-policy" element={<DeliveryPolicy />} />
      <Route path="/seller-agreement" element={<SellerAgreement />} />
      {/* Retired pages. The worker 301s these (see LEGACY_REDIRECTS in
          worker.js); these routes only catch in-app navigation. */}
      <Route path="/cookies-policy" element={<Navigate to="/privacy-policy#cookies" replace />} />
      <Route path="/seller-verification-kyc-policy" element={<Navigate to="/seller-agreement#verification" replace />} />
      <Route path="/why-harmonies" element={<WhyHarmonies />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/features" element={<Features />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/about-harmonies" element={<AboutHarmonies />} />
    </Routes>
  );
}
