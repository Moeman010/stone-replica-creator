
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CustomizeStone = () => {
  const [customization, setCustomization] = useState({
    text: '',
    fontFamily: 'Arial',
    fontSize: '16',
    color: '#000000',
    stoneType: 'graniet',
    stoneColor: 'zwart'
  });

  const fontFamilies = ['Arial', 'Times New Roman', 'Georgia', 'Helvetica'];
  const stoneTypes = ['Graniet', 'Marmer', 'Natuursteen'];
  const stoneColors = ['Zwart', 'Grijs', 'Wit', 'Rood'];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-memorial-dark mb-4">
            Ontwerp Je Eigen Grafsteen
          </h2>
          <p className="text-xl text-memorial-light max-w-2xl mx-auto">
            Personaliseer elke detail van uw monument
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Preview */}
          <div className="flex justify-center">
            <Card className="w-80 h-96 bg-gray-800 border-4 border-gray-600 flex items-center justify-center">
              <div 
                className="text-center p-6"
                style={{
                  fontFamily: customization.fontFamily,
                  fontSize: `${customization.fontSize}px`,
                  color: customization.color
                }}
              >
                {customization.text || 'Uw tekst hier...'}
              </div>
            </Card>
          </div>

          {/* Customization Controls */}
          <div className="space-y-6">
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="text">Tekst</TabsTrigger>
                <TabsTrigger value="style">Stijl</TabsTrigger>
                <TabsTrigger value="material">Materiaal</TabsTrigger>
              </TabsList>

              <TabsContent value="text" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tekst</label>
                  <Textarea
                    placeholder="Voer uw tekst in..."
                    value={customization.text}
                    onChange={(e) => setCustomization({...customization, text: e.target.value})}
                    className="min-h-[100px]"
                  />
                </div>
              </TabsContent>

              <TabsContent value="style" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Lettertype</label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={customization.fontFamily}
                    onChange={(e) => setCustomization({...customization, fontFamily: e.target.value})}
                  >
                    {fontFamilies.map(font => (
                      <option key={font} value={font}>{font}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tekstgrootte</label>
                  <Input
                    type="range"
                    min="12"
                    max="32"
                    value={customization.fontSize}
                    onChange={(e) => setCustomization({...customization, fontSize: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tekstkleur</label>
                  <Input
                    type="color"
                    value={customization.color}
                    onChange={(e) => setCustomization({...customization, color: e.target.value})}
                    className="w-full h-10"
                  />
                </div>
              </TabsContent>

              <TabsContent value="material" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Materiaal</label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={customization.stoneType}
                    onChange={(e) => setCustomization({...customization, stoneType: e.target.value})}
                  >
                    {stoneTypes.map(type => (
                      <option key={type} value={type.toLowerCase()}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Kleur</label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={customization.stoneColor}
                    onChange={(e) => setCustomization({...customization, stoneColor: e.target.value})}
                  >
                    {stoneColors.map(color => (
                      <option key={color} value={color.toLowerCase()}>{color}</option>
                    ))}
                  </select>
                </div>
              </TabsContent>
            </Tabs>

            <div className="pt-6">
              <Button size="lg" className="w-full bg-memorial-accent hover:bg-memorial-accent/90">
                Offerte Aanvragen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeStone;
