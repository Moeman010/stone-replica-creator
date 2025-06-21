
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    {
      name: 'Klassieke Grafsteen',
      material: 'Graniet',
      description: 'Tijdloze elegantie in zwart graniet',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop'
    },
    {
      name: 'Moderne Monument',
      material: 'Natuursteen',
      description: 'Eigentijds ontwerp met persoonlijke touch',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop'
    },
    {
      name: 'Familie Monument',
      material: 'Marmer',
      description: 'Ruimte voor meerdere namen en data',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop'
    },
    {
      name: 'Staande Steen',
      material: 'Graniet',
      description: 'Imposante verschijning met gravures',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
    },
    {
      name: 'Hart Monument',
      material: 'Natuursteen',
      description: 'Hartvormig ontwerp voor speciale herinneringen',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop'
    },
    {
      name: 'Boek Monument',
      material: 'Marmer',
      description: 'Boekachtig design met ruimte voor tekst',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="producten" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-memorial-dark mb-4">
            Onze Collectie
          </h2>
          <p className="text-xl text-memorial-light max-w-2xl mx-auto">
            Ontdek onze uitgebreide collectie grafstenen en monumenten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" className="bg-white/90 text-memorial-dark">
                    Meer Info
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-memorial-dark mb-2">{product.name}</h3>
                <p className="text-memorial-accent font-medium mb-2">{product.material}</p>
                <p className="text-memorial-light">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-memorial-dark hover:bg-memorial-medium text-white px-8 py-3">
            Bekijk Alle Producten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
