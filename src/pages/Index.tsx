
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CollectionBar from '@/components/CollectionBar';
import Services from '@/components/Services';
import CustomizeStone from '@/components/CustomizeStone';
import ContactSection from '@/components/ContactSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-garden-cream">
      <Header />
      <CollectionBar />
      <Hero />
      <Services />
      <CustomizeStone />
      <ContactSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
