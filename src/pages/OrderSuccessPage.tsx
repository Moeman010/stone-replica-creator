
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OrderSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-garden-cream">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-garden-primary">
                Bestelling Geplaatst!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-garden-secondary">
                Bedankt voor uw bestelling. U wordt doorgestuurd naar de betaalpagina.
              </p>
              <p className="text-sm text-gray-500">
                Na succesvolle betaling ontvangt u een bevestigingsmail met alle details.
              </p>
              <div className="space-y-2">
                <Button
                  onClick={() => navigate('/')}
                  className="w-full bg-garden-primary hover:bg-garden-secondary"
                >
                  Terug naar home
                </Button>
                <Button
                  onClick={() => navigate('/contact')}
                  variant="outline"
                  className="w-full"
                >
                  Contact opnemen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSuccessPage;
