import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import SeamOrbs from './components/SeamOrbs/SeamOrbs';
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
  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
  const handleJoinNow = () => setIsSellerModalOpen(true);
  const closeSellerModal = () => setIsSellerModalOpen(false);

  return (
    <div id="harmonies-site" className="site-root">
      <Nav onJoinNow={handleJoinNow} />
      <Hero />
      <SeamOrbs />
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
