
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import CollectionBar from '@/components/CollectionBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
}

interface CollectionPageLayoutProps {
  title: string;
  subtitle: string;
  category: string;
}

const CollectionPageLayout = ({ title, subtitle, category }: CollectionPageLayoutProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category', category);

        if (error) throw error;
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast({
          title: 'Fout',
          description: 'Kon producten niet laden',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const handleAddToCart = async (productId: string) => {
    await addToCart(productId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-garden-cream">
        <Header />
        <CollectionBar />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">Producten laden...</div>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

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
            {products.map((product) => (
              <Card key={product.id} className="bg-white shadow-lg border-garden-stone hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-garden-stone rounded-t-lg">
                  <img 
                    src={product.image_url} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-garden-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-garden-secondary mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-garden-primary">
                      €{product.price.toFixed(2)}
                    </span>
                    <Button 
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-garden-primary text-white px-4 py-2 rounded hover:bg-garden-secondary transition-colors"
                    >
                      Toevoegen aan winkelwagen
                    </Button>
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
