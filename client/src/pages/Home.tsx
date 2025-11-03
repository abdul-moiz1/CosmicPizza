import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import CombosSection from '@/components/CombosSection';
import BuildYourOwnSection from '@/components/BuildYourOwnSection';
import MenuSection from '@/components/MenuSection';
import ExtrasSection from '@/components/ExtrasSection';
import LocationsSection from '@/components/LocationsSection';
import CateringSection from '@/components/CateringSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <CombosSection />
      <BuildYourOwnSection />
      <MenuSection />
      <ExtrasSection />
      <LocationsSection />
      <CateringSection />
      <Footer />
    </div>
  );
}