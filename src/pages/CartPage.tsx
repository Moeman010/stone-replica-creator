
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, loading } = useCart();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen bg-garden-cream">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-garden-primary mx-auto"></div>
            <p className="mt-4 text-garden-secondary">Winkelwagen laden...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-garden-cream">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 text-garden-secondary mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-garden-primary mb-4">
              Uw winkelwagen is leeg
            </h1>
            <p className="text-garden-secondary mb-6">
              Bekijk onze collecties en voeg uw favoriete grafstenen toe aan de winkelwagen.
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-garden-primary hover:bg-garden-secondary"
            >
              Verder winkelen
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-garden-cream">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-garden-primary mb-8">
          Winkelwagen ({items.length} {items.length === 1 ? 'item' : 'items'})
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product.image_url || '/placeholder.svg'}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-garden-primary text-lg">
                        {item.product.name}
                      </h3>
                      {item.product.description && (
                        <p className="text-garden-secondary text-sm mt-1">
                          {item.product.description}
                        </p>
                      )}
                      <p className="text-lg font-bold text-garden-primary mt-2">
                        €{item.product.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-garden-primary">
                        €{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-garden-primary mb-4">
                  Bestelling overzicht
                </h2>
                
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="truncate pr-2">
                        {item.product.name} x{item.quantity}
                      </span>
                      <span className="font-medium">
                        €{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Totaal:</span>
                    <span className="text-garden-primary">€{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button
                  className="w-full bg-garden-primary hover:bg-garden-secondary text-lg py-3"
                  onClick={() => navigate('/checkout')}
                >
                  Naar afrekenen
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full mt-3"
                  onClick={() => navigate('/')}
                >
                  Verder winkelen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
