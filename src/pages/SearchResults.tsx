
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import CollectionBar from '@/components/CollectionBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';

interface SearchResult {
  id: number;
  name: string;
  type: 'product' | 'page';
  image?: string;
  price?: string;
  description: string;
  url: string;
}

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    // Simuleer zoekresultaten op basis van de query
    const allResults: SearchResult[] = [
      // Pagina's
      { id: 1, name: 'Contact', type: 'page', description: 'Neem contact met ons op', url: '/contact' },
      { id: 2, name: 'Klassieke Collectie', type: 'page', description: 'Bekijk onze klassieke grafstenen', url: '/klassiek' },
      { id: 3, name: 'Moderne Collectie', type: 'page', description: 'Moderne grafstenen', url: '/modern' },
      { id: 4, name: 'Familie Monumenten', type: 'page', description: 'Familie grafstenen', url: '/familie' },
      
      // Producten
      { 
        id: 5, 
        name: 'Klassieke Grafsteen Model A', 
        type: 'product', 
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        price: '€1.250',
        description: 'Traditionele grafsteen in natuursteen', 
        url: '/klassiek' 
      },
      { 
        id: 6, 
        name: 'Moderne Grafsteen Model A', 
        type: 'product', 
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        price: '€1.350',
        description: 'Strakke moderne grafsteen', 
        url: '/modern' 
      },
    ];

    // Filter resultaten op basis van de zoekterm
    const filteredResults = allResults.filter(result =>
      result.name.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  }, [query]);

  const handleResultClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-garden-cream">
      <Header />
      <CollectionBar />
      
      {/* Search Results Header */}
      <section className="bg-garden-primary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Zoekresultaten
            </h1>
            <p className="text-lg text-garden-cream">
              Resultaten voor: "{query}"
            </p>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-garden-secondary">
                Geen resultaten gevonden voor "{query}"
              </p>
              <p className="text-garden-secondary mt-4">
                Probeer andere zoektermen of bekijk onze collecties
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((result) => (
                <Card 
                  key={result.id} 
                  className="bg-white shadow-lg border-garden-stone hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleResultClick(result.url)}
                >
                  {result.image && (
                    <div className="aspect-square bg-garden-stone rounded-t-lg">
                      <img 
                        src={result.image} 
                        alt={result.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        result.type === 'product' ? 'bg-garden-primary text-white' : 'bg-garden-stone text-garden-primary'
                      }`}>
                        {result.type === 'product' ? 'Product' : 'Pagina'}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-garden-primary mb-2">
                      {result.name}
                    </h3>
                    <p className="text-garden-secondary mb-4">
                      {result.description}
                    </p>
                    {result.price && (
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-garden-primary">
                          {result.price}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SearchResults;
