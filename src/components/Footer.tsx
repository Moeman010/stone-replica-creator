
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-memorial-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Grafsteenwinkel.nl</h3>
            <p className="text-gray-300 mb-4">
              Al meer dan 25 jaar specialist in grafstenen en monumenten. 
              Wij helpen u bij het creëren van een waardig monument voor uw dierbaren.
            </p>
            <div className="flex items-center text-gray-300">
              <span>Met respect en vakmanschap</span>
              <Heart className="h-4 w-4 ml-2 text-memorial-accent" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snelle Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-memorial-accent transition-colors">Home</a></li>
              <li><a href="#diensten" className="hover:text-memorial-accent transition-colors">Diensten</a></li>
              <li><a href="#producten" className="hover:text-memorial-accent transition-colors">Producten</a></li>
              <li><a href="#contact" className="hover:text-memorial-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-memorial-accent transition-colors">Grafstenen</a></li>
              <li><a href="#" className="hover:text-memorial-accent transition-colors">Monumenten</a></li>
              <li><a href="#" className="hover:text-memorial-accent transition-colors">Restauratie</a></li>
              <li><a href="#" className="hover:text-memorial-accent transition-colors">Onderhoud</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-memorial-medium mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Grafsteenwinkel.nl. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
