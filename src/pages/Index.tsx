
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CollectionBar from '@/components/CollectionBar';
import Services from '@/components/Services';
import CustomizeStone from '@/components/CustomizeStone';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CollectionBar />
      <Hero />
      <Services />
      <CustomizeStone />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
