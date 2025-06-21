
import { Heart, Settings, Truck, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Grafstenen',
      description: 'Hoogwaardige grafstenen in verschillende materialen en stijlen. Van klassiek tot modern.'
    },
    {
      icon: Settings,
      title: 'Restauratie',
      description: 'Professionele restauratie van bestaande grafstenen en monumenten.'
    },
    {
      icon: Truck,
      title: 'Plaatsing',
      description: 'Vakkundige plaatsing en installatie door ervaren specialisten.'
    },
    {
      icon: Users,
      title: 'Persoonlijk Advies',
      description: 'Individueel advies en begeleiding tijdens het gehele proces.'
    }
  ];

  return (
    <section id="diensten" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-primary mb-4">
            Onze Diensten
          </h2>
          <p className="text-lg text-garden-secondary max-w-2xl mx-auto">
            Van ontwerp tot plaatsing, wij begeleiden u door het gehele proces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-garden-stone/30 border-garden-light hover:border-garden-primary">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-garden-primary/20 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-garden-primary" />
                </div>
                <CardTitle className="text-garden-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-garden-secondary">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
