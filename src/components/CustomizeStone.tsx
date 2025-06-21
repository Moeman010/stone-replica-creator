
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Stone3DViewer from './Stone3DViewer';

const CustomizeStone = () => {
  const [customization, setCustomization] = useState({
    text: 'In Liefdevolle Herinnering',
    fontFamily: 'Arial',
    fontSize: '16',
    color: '#FFFFFF',
    stoneType: 'graniet',
    stoneColor: 'zwart'
  });

  const fontFamilies = ['Arial', 'Times New Roman', 'Georgia', 'Helvetica'];
  const stoneTypes = ['Graniet', 'Marmer', 'Natuursteen'];
  const stoneColors = ['Zwart', 'Grijs', 'Wit', 'Rood'];

  return (
    <section className="py-16 bg-garden-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-primary mb-4">
            Ontwerp Je Eigen Grafsteen
          </h2>
          <p className="text-lg text-garden-secondary max-w-2xl mx-auto">
            Personaliseer elke detail van uw monument in 3D
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Preview */}
          <div className="relative">
            <Stone3DViewer 
              text={customization.text}
              fontFamily={customization.fontFamily}
              fontSize={customization.fontSize}
              color={customization.color}
            />
          </div>

          {/* Customization Controls */}
          <div className="space-y-4">
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-garden-stone">
                <TabsTrigger value="text" className="text-black data-[state=active]:bg-garden-primary data-[state=active]:text-white">Tekst</TabsTrigger>
                <TabsTrigger value="style" className="text-black data-[state=active]:bg-garden-primary data-[state=active]:text-white">Stijl</TabsTrigger>
                <TabsTrigger value="material" className="text-black data-[state=active]:bg-garden-primary data-[state=active]:text-white">Materiaal</TabsTrigger>
              </TabsList>

              <TabsContent value="text" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-garden-primary">Tekst</label>
                  <Textarea
                    placeholder="Voer uw tekst in..."
                    value={customization.text}
                    onChange={(e) => setCustomization({...customization, text: e.target.value})}
                    className="min-h-[100px] border-garden-light focus:border-garden-primary text-black"
                  />
                </div>
              </TabsContent>

              <TabsContent value="style" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-garden-primary">Lettertype</label>
                  <select 
                    className="w-full p-2 border border-garden-light rounded-md focus:border-garden-primary text-black"
                    value={customization.fontFamily}
                    onChange={(e) => setCustomization({...customization, fontFamily: e.target.value})}
                  >
                    {fontFamilies.map(font => (
                      <option key={font} value={font}>{font}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-garden-primary">Tekstgrootte</label>
                  <Input
                    type="range"
                    min="12"
                    max="32"
                    value={customization.fontSize}
                    onChange={(e) => setCustomization({...customization, fontSize: e.target.value})}
                    className="border-garden-light"
                  />
                  <span className="text-sm text-garden-secondary">{customization.fontSize}px</span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-garden-primary">Tekstkleur</label>
                  <Input
                    type="color"
                    value={customization.color}
                    onChange={(e) => setCustomization({...customization, color: e.target.value})}
                    className="w-full h-10 border-garden-light"
                  />
                </div>
              </TabsContent>

              <TabsContent value="material" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-garden-primary">Materiaal</label>
                  <select 
                    className="w-full p-2 border border-garden-light rounded-md focus:border-garden-primary text-black"
                    value={customization.stoneType}
                    onChange={(e) => setCustomization({...customization, stoneType: e.target.value})}
                  >
                    {stoneTypes.map(type => (
                      <option key={type} value={type.toLowerCase()}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-garden-primary">Kleur</label>
                  <select 
                    className="w-full p-2 border border-garden-light rounded-md focus:border-garden-primary text-black"
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

            <div className="pt-4">
              <Button size="lg" className="w-full bg-garden-primary hover:bg-garden-secondary text-black">
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
