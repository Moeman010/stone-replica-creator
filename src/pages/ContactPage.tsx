
import Header from '@/components/Header';
import CollectionBar from '@/components/CollectionBar';
import ContactSection from '@/components/ContactSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-garden-cream">
      <Header />
      <CollectionBar />
      
      {/* Page Header */}
      <section className="bg-garden-primary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact
            </h1>
            <p className="text-lg text-garden-cream">
              Neem contact met ons op voor al uw vragen
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
