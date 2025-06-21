
import { MapPin, Clock, Car, Train } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LocationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-primary mb-4">
            Onze Locatie
          </h2>
          <p className="text-lg text-garden-secondary max-w-2xl mx-auto">
            Bezoek ons in onze rustgevende showroom in het hart van Amsterdam
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Details */}
          <div className="space-y-6">
            <Card className="bg-garden-stone/30 border-garden-light">
              <CardHeader>
                <CardTitle className="text-garden-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Adres & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-garden-primary">Voorbeeldstraat 123</p>
                  <p className="text-garden-secondary">1234 AB Amsterdam</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-garden-primary">Telefoon</p>
                    <p className="text-garden-secondary">+31 (0)20 123 4567</p>
                  </div>
                  <div>
                    <p className="font-medium text-garden-primary">E-mail</p>
                    <p className="text-garden-secondary">info@grafsteenwinkel.nl</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-garden-stone/30 border-garden-light">
              <CardHeader>
                <CardTitle className="text-garden-primary flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Openingstijden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-garden-primary">Maandag - Vrijdag</span>
                    <span className="text-garden-secondary">9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-garden-primary">Zaterdag</span>
                    <span className="text-garden-secondary">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-garden-primary">Zondag</span>
                    <span className="text-garden-secondary">Gesloten</span>
                  </div>
                  <div className="mt-4 p-3 bg-garden-primary/10 rounded">
                    <p className="text-xs text-garden-secondary">
                      <strong>Tip:</strong> Voor een persoonlijk gesprek adviseren wij een afspraak te maken
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-garden-stone/30 border-garden-light">
              <CardHeader>
                <CardTitle className="text-garden-primary">Bereikbaarheid</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Car className="h-5 w-5 text-garden-primary mt-1" />
                  <div>
                    <p className="font-medium text-garden-primary">Met de auto</p>
                    <p className="text-sm text-garden-secondary">Gratis parkeren voor de deur. Goed bereikbaar via A10</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Train className="h-5 w-5 text-garden-primary mt-1" />
                  <div>
                    <p className="font-medium text-garden-primary">Openbaar vervoer</p>
                    <p className="text-sm text-garden-secondary">5 minuten lopen vanaf station Amsterdam Centraal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map placeholder */}
          <Card className="bg-garden-stone/30 border-garden-light h-fit">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-garden-light to-garden-secondary rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactieve Kaart</p>
                  <p className="text-sm opacity-80">Voorbeeldstraat 123, Amsterdam</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
