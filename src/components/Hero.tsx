
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleViewCollection = () => {
    document.getElementById('collectie')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCustomDesign = () => {
    document.getElementById('ontwerp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center bg-no-repeat text-white py-24"
      style={{
        backgroundImage: 'linear-gradient(rgba(76,92,76,0.7), rgba(76,92,76,0.7)), url("https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1200&h=600&fit=crop")'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-garden-cream">
            Graf & Monument Specialist
          </h1>
          <p className="text-lg md:text-xl mb-6 text-garden-cream">
            Respectvolle herinneringen in natuursteen
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={handleViewCollection}
              size="lg" 
              className="bg-garden-primary hover:bg-garden-secondary text-white px-6 py-2"
            >
              Bekijk Collectie
            </Button>
            <Button 
              onClick={handleCustomDesign}
              variant="outline" 
              size="lg" 
              className="border-garden-cream text-garden-cream hover:bg-garden-cream hover:text-garden-primary px-6 py-2"
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
