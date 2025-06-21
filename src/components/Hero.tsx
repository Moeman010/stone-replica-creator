
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-memorial-dark to-memorial-medium text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professionele Grafstenen & Monumenten
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Respectvolle herinneringen in steen. Wij helpen u bij het creëren van een waardig monument voor uw dierbaren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-memorial-accent hover:bg-memorial-accent/90 text-white px-8 py-3"
            >
              Bekijk Collectie
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-memorial-dark px-8 py-3"
            >
              Gratis Advies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
