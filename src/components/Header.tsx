
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import CartIcon from '@/components/CartIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [navigate]);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/klassiek', label: 'Klassiek' },
    { href: '/modern', label: 'Modern' },
    { href: '/familie', label: 'Familie' },
    { href: '/hart-vorm', label: 'Hart Vorm' },
    { href: '/graniet', label: 'Graniet' },
    { href: '/marmer', label: 'Marmer' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-garden-light sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl font-bold text-garden-primary cursor-pointer hover:text-garden-secondary transition-colors"
              onClick={() => navigate('/')}
            >
              GM Specialist
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="flex w-full">
              <Input
                type="text"
                placeholder="Zoeken naar grafstenen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none border-r-0 focus:ring-2 focus:ring-garden-primary"
              />
              <Button 
                type="submit"
                variant="outline" 
                className="rounded-l-none border-l-0 px-3 hover:bg-garden-primary hover:text-white"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.slice(0, 4).map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-garden-primary hover:text-garden-secondary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <CartIcon />
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <CartIcon />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-garden-light"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-garden-light py-4 bg-white">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex mb-4">
                <Input
                  type="text"
                  placeholder="Zoeken..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none border-r-0"
                />
                <Button 
                  type="submit"
                  variant="outline" 
                  className="rounded-l-none border-l-0 px-3"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
              
              {navigationItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-garden-primary hover:text-garden-secondary transition-colors py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
