
import { useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+31201234567';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@grafmonumentspecialist.nl';
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+31201234567';
    const message = 'Hallo, ik heb interesse in jullie diensten voor grafstenen en monumenten.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-garden-cream">
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
              <div 
                onClick={handlePhoneClick}
                className="flex items-center space-x-4 p-4 bg-garden-stone rounded-lg cursor-pointer hover:bg-garden-light transition-colors"
              >
                <div className="bg-garden-primary p-3 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-garden-primary">Bel ons direct</p>
                  <p className="text-garden-secondary">+31 (0)20 123 4567</p>
                </div>
              </div>
              
              <div 
                onClick={handleEmailClick}
                className="flex items-center space-x-4 p-4 bg-garden-stone rounded-lg cursor-pointer hover:bg-garden-light transition-colors"
              >
                <div className="bg-garden-primary p-3 rounded-full">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-garden-primary">E-mail ons</p>
                  <p className="text-garden-secondary">info@grafmonumentspecialist.nl</p>
                </div>
              </div>

              <div 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-4 p-4 bg-garden-stone rounded-lg cursor-pointer hover:bg-garden-light transition-colors"
              >
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    name="firstName"
                    placeholder="Voornaam" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border-garden-light focus:border-garden-primary text-black" 
                    required
                  />
                  <Input 
                    name="lastName"
                    placeholder="Achternaam" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border-garden-light focus:border-garden-primary text-black" 
                    required
                  />
                </div>
                <Input 
                  name="email"
                  placeholder="E-mailadres" 
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-garden-light focus:border-garden-primary text-black" 
                  required
                />
                <Input 
                  name="phone"
                  placeholder="Telefoonnummer" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-garden-light focus:border-garden-primary text-black" 
                />
                <Textarea 
                  name="message"
                  placeholder="Uw bericht..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border-garden-light focus:border-garden-primary text-black"
                  required
                />
                <Button type="submit" className="w-full bg-garden-primary hover:bg-garden-secondary text-white">
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
