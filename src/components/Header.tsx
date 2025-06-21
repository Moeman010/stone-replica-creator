
import { useState } from 'react';
import { Search, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
  };

  return (
    <header className="bg-memorial-dark text-white shadow-lg">
      {/* Top bar with contact info */}
      <div className="bg-memorial-medium py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+31 (0)20 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@grafsteenwinkel.nl</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Maandag - Vrijdag: 9:00 - 17:00</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Grafsteenwinkel.nl
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Zoek collectie, contact, diensten..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white text-black"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </form>
          </div>

          {/* Contact button */}
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-memorial-dark flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
