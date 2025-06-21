
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="bg-garden-primary text-white shadow-lg">
      {/* Top bar with contact info - smaller */}
      <div className="bg-garden-secondary py-1">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+31 (0)20 123 4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@grafmonumentspecialist.nl</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Maandag - Vrijdag: 9:00 - 17:00</span>
          </div>
        </div>
      </div>

      {/* Main navigation - smaller */}
      <nav className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 bg-garden-cream rounded-full flex items-center justify-center">
              <span className="text-garden-primary font-bold text-lg">G&M</span>
            </div>
            <div className="text-lg font-bold text-black">
              Graf & Monument Specialist
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Zoek collectie, contact, producten..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-garden-cream text-black border-garden-stone"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-garden-secondary" />
            </form>
          </div>

          {/* Contact button */}
          <Button 
            onClick={handleContactClick}
            variant="outline" 
            className="border-white text-black bg-garden-cream hover:bg-garden-stone hover:text-black flex items-center gap-2"
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
