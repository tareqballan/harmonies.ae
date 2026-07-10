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

export default function App() {
  const handleJoinNow = () => {
    // TODO: wire to real signup/waitlist flow — no target defined yet,
    // see design handoff README > State Management.
    console.log('Join Now clicked');
  };

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
    </div>
  );
}
