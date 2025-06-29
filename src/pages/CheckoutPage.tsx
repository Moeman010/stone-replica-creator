
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Starting checkout process...');
      
      // Create order in database
      const { data: { user } } = await supabase.auth.getUser();
      
      const orderData = {
        email: formData.email,
        total_amount: totalPrice,
        status: 'pending',
        user_id: user?.id || null,
        shipping_address: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
          phone: formData.phone
        }
      };

      console.log('Creating order with data:', orderData);

      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert(orderData)
        .select()
        .single();

      if (orderError) {
        console.error('Order creation error:', orderError);
        throw orderError;
      }

      console.log('Order created successfully:', order);

      // Add order items
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.product.price
      }));

      console.log('Creating order items:', orderItems);

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) {
        console.error('Order items creation error:', itemsError);
        throw itemsError;
      }

      console.log('Order items created successfully');

      // Send order confirmation email
      try {
        console.log('Sending order confirmation email...');
        const emailData = {
          email: formData.email,
          orderId: order.id.substring(0, 8).toUpperCase(),
          customerName: `${formData.firstName} ${formData.lastName}`,
          items: items.map(item => ({
            name: item.product.name,
            quantity: item.quantity,
            price: item.product.price
          })),
          totalAmount: totalPrice,
          shippingAddress: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            city: formData.city,
            postalCode: formData.postalCode,
            phone: formData.phone
          }
        };

        const { error: emailError } = await supabase.functions.invoke('send-order-confirmation', {
          body: emailData
        });

        if (emailError) {
          console.error('Email sending error:', emailError);
          // Don't throw here, continue with checkout even if email fails
        } else {
          console.log('Order confirmation email sent successfully');
        }
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with checkout process even if email fails
      }

      // Create Stripe checkout session
      console.log('Creating Stripe checkout session...');
      const { data: stripeData, error: stripeError } = await supabase.functions.invoke('create-checkout', {
        body: {
          orderId: order.id,
          items: items.map(item => ({
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity
          })),
          customerEmail: formData.email
        }
      });

      if (stripeError) {
        console.error('Stripe checkout error:', stripeError);
        throw stripeError;
      }

      console.log('Stripe checkout session created:', stripeData);

      if (!stripeData?.url) {
        throw new Error('Geen betaal URL ontvangen van Stripe');
      }

      // Update order with Stripe session ID
      if (stripeData.sessionId) {
        await supabase
          .from('orders')
          .update({ stripe_session_id: stripeData.sessionId })
          .eq('id', order.id);
      }

      // Clear cart
      await clearCart();

      toast({
        title: 'Bestelling geplaatst!',
        description: 'U wordt doorgestuurd naar de betaalpagina...'
      });

      // Redirect to Stripe in the same window instead of new tab
      console.log('Redirecting to Stripe:', stripeData.url);
      window.location.href = stripeData.url;

    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: 'Fout bij afrekenen',
        description: error instanceof Error ? error.message : 'Er is een fout opgetreden. Probeer het opnieuw.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-garden-cream">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-garden-primary mb-8">
          Afrekenen
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contactgegevens</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Voornaam *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Achternaam *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mailadres *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    U ontvangt een bevestigingsmail op dit e-mailadres
                  </p>
                </div>

                <div>
                  <Label htmlFor="phone">Telefoonnummer *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">Adres *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="postalCode">Postcode *</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Plaats *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Let op:</strong> Na het plaatsen van uw bestelling wordt u doorgestuurd naar een veilige betaalpagina van Stripe. 
                    U ontvangt ook een bevestigingsmail met alle details van uw bestelling.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-garden-primary hover:bg-garden-secondary"
                  disabled={loading}
                >
                  {loading ? 'Bestellling wordt verwerkt...' : `Bestelling plaatsen en betalen €${totalPrice.toFixed(2)}`}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bestelling overzicht</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.image_url}
                        alt={item.product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-gray-500">Aantal: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold">
                      €{(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Totaal:</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
