
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section className="py-16 bg-garden-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-primary mb-4">
            Neem Contact Op
          </h2>
          <p className="text-lg text-garden-secondary max-w-2xl mx-auto">
            Wij staan voor u klaar met persoonlijk advies en begeleiding
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-white shadow-lg border-garden-stone">
            <CardHeader>
              <CardTitle className="text-garden-primary">Direct Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-garden-stone rounded-lg">
                <div className="bg-garden-primary p-3 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-garden-primary">Bel ons direct</p>
                  <p className="text-garden-secondary">+31 (0)20 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-garden-stone rounded-lg">
                <div className="bg-garden-primary p-3 rounded-full">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-garden-primary">E-mail ons</p>
                  <p className="text-garden-secondary">info@grafsteenwinkel.nl</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-garden-stone rounded-lg">
                <div className="bg-green-500 p-3 rounded-full">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-garden-primary">WhatsApp</p>
                  <p className="text-garden-secondary">Snelle reactie gegarandeerd</p>
                </div>
              </div>

              <div className="bg-garden-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-garden-primary mb-2">Waarom Kiezen Voor Ons?</h4>
                <ul className="space-y-1 text-garden-secondary text-sm">
                  <li>• Meer dan 25 jaar ervaring</li>
                  <li>• Persoonlijke begeleiding</li>
                  <li>• Kwaliteitsgarantie</li>
                  <li>• Gratis advies en offerte</li>
                  <li>• Vakkundige plaatsing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white shadow-lg border-garden-stone">
            <CardHeader>
              <CardTitle className="text-garden-primary">Stuur een Bericht</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Voornaam" className="border-garden-light focus:border-garden-primary text-black" />
                  <Input placeholder="Achternaam" className="border-garden-light focus:border-garden-primary text-black" />
                </div>
                <Input placeholder="E-mailadres" type="email" className="border-garden-light focus:border-garden-primary text-black" />
                <Input placeholder="Telefoonnummer" className="border-garden-light focus:border-garden-primary text-black" />
                <Textarea 
                  placeholder="Uw bericht..."
                  rows={4}
                  className="border-garden-light focus:border-garden-primary text-black"
                />
                <Button className="w-full bg-garden-primary hover:bg-garden-secondary text-black">
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

export default ContactSection;
