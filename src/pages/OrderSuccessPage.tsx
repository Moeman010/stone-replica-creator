
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, Phone, Clock } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [countdown, setCountdown] = useState(10);
  const sessionId = searchParams.get('session_id');

  // Countdown timer for automatic redirect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-garden-cream">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <CardTitle className="text-3xl text-garden-primary mb-2">
                Bestelling Succesvol Geplaatst!
              </CardTitle>
              <p className="text-garden-secondary text-lg">
                Bedankt voor uw vertrouwen in GM Specialist
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {sessionId && (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-medium">
                    ✅ Betaling succesvol verwerkt
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    Sessie ID: {sessionId.substring(0, 20)}...
                  </p>
                </div>
              )}

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-garden-primary mb-3 flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Bevestigingsmail Verzonden
                </h3>
                <p className="text-gray-700 mb-2">
                  U ontvangt binnen enkele minuten een bevestigingsmail met:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Alle details van uw bestelling</li>
                  <li>Uw bestelnummer voor referentie</li>
                  <li>Contactgegevens voor vragen</li>
                </ul>
              </div>

              <div className="bg-garden-cream p-6 rounded-lg border border-garden-light">
                <h3 className="font-semibold text-garden-primary mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Wat Gebeurt Er Nu?
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-garden-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                    <p>We nemen binnen 1-2 werkdagen contact met u op voor een persoonlijk gesprek</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-garden-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                    <p>Samen bespreken we uw wensen en maken we een ontwerp</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-garden-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                    <p>Na goedkeuring starten we met de productie van uw grafsteen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-garden-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">4</div>
                    <p>We plannen de plaatsing op de door u gewenste datum</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-garden-primary mb-3 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Heeft U Vragen?
                </h3>
                <p className="text-gray-700 mb-3">
                  Ons team staat voor u klaar. Neem gerust contact met ons op:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Telefoon:</strong> +31 (0)20 123 4567</p>
                  <p><strong>E-mail:</strong> info@gmspecialist.nl</p>
                  <p><strong>Openingstijden:</strong> Ma-Vr 9:00-17:00, Za 9:00-15:00</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => navigate('/')}
                  className="flex-1 bg-garden-primary hover:bg-garden-secondary text-lg py-3"
                >
                  Terug naar Home ({countdown}s)
                </Button>
                <Button
                  onClick={() => navigate('/contact')}
                  variant="outline"
                  className="flex-1 text-lg py-3"
                >
                  Contact Opnemen
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
