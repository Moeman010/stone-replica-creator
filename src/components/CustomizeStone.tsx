
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const CustomizeStone = () => {
  const [customization, setCustomization] = useState({
    text: 'In Liefdevolle Herinnering',
    fontFamily: 'serif',
    fontSize: '18',
    color: '#FFFFFF',
    stoneType: 'graniet',
    stoneColor: 'zwart'
  });

  const fontFamilies = [
    { value: 'serif', label: 'Times New Roman' },
    { value: 'sans-serif', label: 'Arial' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Playfair Display', label: 'Playfair Display' }
  ];

  const stoneTypes = ['Graniet', 'Marmer', 'Natuursteen', 'Basalt'];
  const stoneColors = ['Zwart', 'Grijs', 'Wit', 'Rood Graniet'];

  const handleQuoteRequest = () => {
    const details = {
      text: customization.text,
      font: customization.fontFamily,
      size: customization.fontSize,
      color: customization.color,
      material: customization.stoneType,
      stoneColor: customization.stoneColor
    };
    console.log('Quote requested for:', details);
    alert('Uw offerte aanvraag is verzonden! We nemen binnen 24 uur contact met u op.');
  };

  return (
    <section id="ontwerp" className="py-16 bg-garden-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-primary mb-4">
            Ontwerp Uw Eigen Monument
          </h2>
          <p className="text-lg text-garden-secondary max-w-2xl mx-auto">
            Personaliseer elk detail van uw monument met onze geavanceerde ontwerptool
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Customization Controls */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg border-garden-light">
              <CardHeader>
                <CardTitle className="text-garden-primary flex items-center gap-2">
                  <span className="w-2 h-2 bg-garden-primary rounded-full"></span>
                  Tekst & Inhoud
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-garden-primary font-medium">Tekst op de grafsteen</Label>
                  <Textarea
                    placeholder="Voer uw gewenste tekst in..."
                    value={customization.text}
                    onChange={(e) => setCustomization({...customization, text: e.target.value})}
                    className="min-h-[80px] border-garden-light focus:border-garden-primary text-black mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-garden-light">
              <CardHeader>
                <CardTitle className="text-garden-primary flex items-center gap-2">
                  <span className="w-2 h-2 bg-garden-primary rounded-full"></span>
                  Stijl & Vormgeving
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-garden-primary font-medium">Lettertype</Label>
                    <select 
                      className="w-full p-3 border border-garden-light rounded-md focus:border-garden-primary text-black mt-2"
                      value={customization.fontFamily}
                      onChange={(e) => setCustomization({...customization, fontFamily: e.target.value})}
                    >
                      {fontFamilies.map(font => (
                        <option key={font.value} value={font.value}>{font.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label className="text-garden-primary font-medium">Tekstkleur</Label>
                    <Input
                      type="color"
                      value={customization.color}
                      onChange={(e) => setCustomization({...customization, color: e.target.value})}
                      className="w-full h-12 border-garden-light mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-garden-primary font-medium">Tekstgrootte: {customization.fontSize}px</Label>
                  <Input
                    type="range"
                    min="14"
                    max="28"
                    value={customization.fontSize}
                    onChange={(e) => setCustomization({...customization, fontSize: e.target.value})}
                    className="w-full mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-garden-light">
              <CardHeader>
                <CardTitle className="text-garden-primary flex items-center gap-2">
                  <span className="w-2 h-2 bg-garden-primary rounded-full"></span>
                  Materiaal & Kleur
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-garden-primary font-medium">Materiaal</Label>
                    <select 
                      className="w-full p-3 border border-garden-light rounded-md focus:border-garden-primary text-black mt-2"
                      value={customization.stoneType}
                      onChange={(e) => setCustomization({...customization, stoneType: e.target.value})}
                    >
                      {stoneTypes.map(type => (
                        <option key={type} value={type.toLowerCase()}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label className="text-garden-primary font-medium">Steenkleur</Label>
                    <select 
                      className="w-full p-3 border border-garden-light rounded-md focus:border-garden-primary text-black mt-2"
                      value={customization.stoneColor}
                      onChange={(e) => setCustomization({...customization, stoneColor: e.target.value})}
                    >
                      {stoneColors.map(color => (
                        <option key={color} value={color.toLowerCase()}>{color}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={handleQuoteRequest}
              size="lg" 
              className="w-full bg-garden-primary hover:bg-garden-secondary text-white py-4 text-lg font-medium"
            >
              Gratis Offerte Aanvragen
            </Button>
          </div>

          {/* Right side - Gravestone Preview */}
          <div className="flex justify-center items-start">
            <Card className="bg-white shadow-2xl border-garden-light max-w-md w-full">
              <CardContent className="p-8">
                <div className="relative">
                  {/* Gravestone Image */}
                  <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg p-8 shadow-2xl border-4 border-gray-600">
                    <div className="text-center">
                      <div 
                        className="text-white text-center break-words leading-relaxed"
                        style={{
                          fontFamily: customization.fontFamily,
                          fontSize: `${parseInt(customization.fontSize)}px`,
                          color: customization.color,
                          textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                          minHeight: '120px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {customization.text || 'Uw tekst verschijnt hier...'}
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gray-400 opacity-50"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-400 opacity-50"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-400 opacity-50"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-400 opacity-50"></div>
                  </div>
                  
                  {/* Material and color info */}
                  <div className="mt-4 text-center">
                    <p className="text-garden-primary font-medium">
                      {customization.stoneType.charAt(0).toUpperCase() + customization.stoneType.slice(1)} - {customization.stoneColor.charAt(0).toUpperCase() + customization.stoneColor.slice(1)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeStone;
