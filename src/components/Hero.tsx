
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center bg-no-repeat text-white py-32"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1200&h=600&fit=crop")'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professionele Grafstenen
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Respectvolle herinneringen in steen
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
              Maak Je Eigen Ontwerp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
