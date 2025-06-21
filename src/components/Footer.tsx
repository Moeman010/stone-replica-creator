
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-garden-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-garden-cream">Grafsteenwinkel.nl</h3>
            <p className="text-garden-stone mb-4">
              Al meer dan 25 jaar specialist in grafstenen en monumenten. 
              Wij helpen u bij het creëren van een waardig monument voor uw dierbaren.
            </p>
            <div className="flex items-center text-garden-stone">
              <span>Met respect en vakmanschap</span>
              <Heart className="h-4 w-4 ml-2 text-garden-cream" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-garden-cream">Snelle Links</h4>
            <ul className="space-y-2 text-garden-stone">
              <li><a href="#home" className="hover:text-garden-cream transition-colors">Home</a></li>
              <li><a href="#diensten" className="hover:text-garden-cream transition-colors">Diensten</a></li>
              <li><a href="#producten" className="hover:text-garden-cream transition-colors">Producten</a></li>
              <li><a href="#contact" className="hover:text-garden-cream transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-garden-cream">Diensten</h4>
            <ul className="space-y-2 text-garden-stone">
              <li><a href="#" className="hover:text-garden-cream transition-colors">Grafstenen</a></li>
              <li><a href="#" className="hover:text-garden-cream transition-colors">Monumenten</a></li>
              <li><a href="#" className="hover:text-garden-cream transition-colors">Restauratie</a></li>
              <li><a href="#" className="hover:text-garden-cream transition-colors">Onderhoud</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-garden-secondary mt-8 pt-8 text-center text-garden-stone">
          <p>&copy; 2024 Grafsteenwinkel.nl. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
