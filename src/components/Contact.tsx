
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-memorial-dark mb-4">
            Contact & Locatie
          </h2>
          <p className="text-xl text-memorial-light max-w-2xl mx-auto">
            Neem contact met ons op voor een vrijblijvend adviesgesprek
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-memorial-dark">Contactgegevens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-memorial-accent" />
                  <div>
                    <p className="font-medium text-memorial-dark">Voorbeeldstraat 123</p>
                    <p className="text-memorial-light">1234 AB Amsterdam</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-memorial-accent" />
                  <p className="text-memorial-dark">+31 (0)20 123 4567</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-memorial-accent" />
                  <p className="text-memorial-dark">info@grafsteenwinkel.nl</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-memorial-accent" />
                  <div>
                    <p className="font-medium text-memorial-dark">Openingstijden</p>
                    <p className="text-memorial-light">Ma-Vr: 9:00 - 17:00</p>
                    <p className="text-memorial-light">Za: 10:00 - 16:00</p>
                    <p className="text-memorial-light">Zondag: Gesloten</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-memorial-dark">Waarom Kiezen Voor Ons?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-memorial-light">
                  <li>• Meer dan 25 jaar ervaring</li>
                  <li>• Persoonlijke begeleiding</li>
                  <li>• Kwaliteitsgarantie</li>
                  <li>• Gratis advies en offerte</li>
                  <li>• Vakkundige plaatsing</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-memorial-dark">Contactformulier</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Voornaam" />
                  <Input placeholder="Achternaam" />
                </div>
                <Input placeholder="E-mailadres" type="email" />
                <Input placeholder="Telefoonnummer" />
                <Textarea 
                  placeholder="Uw bericht..."
                  rows={4}
                />
                <Button className="w-full bg-memorial-dark hover:bg-memorial-medium text-white">
                  Verstuur Bericht
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
