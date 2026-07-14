import { useState } from 'react';
import { usePageMeta } from './hooks/usePageMeta';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import PainPoints from './components/PainPoints/PainPoints';
import Community from './components/Community/Community';
import TurnSocialIntoBusiness from './components/TurnSocialIntoBusiness/TurnSocialIntoBusiness';
import ProductBundles from './components/ProductBundles/ProductBundles';
import SectionDivider from './components/SectionDivider/SectionDivider';
import AcceleratePath from './components/AcceleratePath/AcceleratePath';
import TheLoop from './components/TheLoop/TheLoop';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import BecomeSellerModal from './components/BecomeSellerModal/BecomeSellerModal';

export default function App() {
  usePageMeta({
    title: 'Harmonies — The Future of Social Commerce',
    description: 'Harmonies helps local, social-first sellers turn their following into a professional online business.',
    path: '/',
  });

  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
  const handleJoinNow = () => setIsSellerModalOpen(true);
  const closeSellerModal = () => setIsSellerModalOpen(false);

  return (
    <div id="harmonies-site" className="site-root">
      <Nav variant="dark" onJoinNow={handleJoinNow} />
      <Hero onJoinNow={handleJoinNow} />
      <PainPoints />
      <Community />
      <TurnSocialIntoBusiness />
      <ProductBundles />
      <SectionDivider />
      <AcceleratePath />
      <TheLoop />
      <FinalCTA onJoinNow={handleJoinNow} />
      <Footer />
      <BecomeSellerModal isOpen={isSellerModalOpen} onClose={closeSellerModal} />
    </div>
  );
}
