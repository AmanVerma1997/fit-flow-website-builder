
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import TransformationsPreview from '@/components/TransformationsPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProgramsSection />
      <TransformationsPreview />
      <Footer />
    </div>
  );
};

export default Index;
