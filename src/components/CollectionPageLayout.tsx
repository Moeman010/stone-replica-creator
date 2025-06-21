
import Header from '@/components/Header';
import CollectionBar from '@/components/CollectionBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';

interface CollectionItem {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

interface CollectionPageLayoutProps {
  title: string;
  subtitle: string;
  items: CollectionItem[];
}

const CollectionPageLayout = ({ title, subtitle, items }: CollectionPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-garden-cream">
      <Header />
      <CollectionBar />
      
      {/* Page Header */}
      <section className="bg-garden-primary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-lg text-garden-cream">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Collection Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <Card key={item.id} className="bg-white shadow-lg border-garden-stone hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-garden-stone rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-garden-primary mb-2">
                    {item.name}
                  </h3>
                  <p className="text-garden-secondary mb-4">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-garden-primary">
                      {item.price}
                    </span>
                    <button className="bg-garden-primary text-white px-4 py-2 rounded hover:bg-garden-secondary transition-colors">
                      Meer Info
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CollectionPageLayout;
