
import { Button } from '@/components/ui/button';

const CollectionBar = () => {
  const collections = [
    'Klassiek',
    'Modern', 
    'Familie',
    'Hart Vorm',
    'Boek Vorm',
    'Natuursteen',
    'Graniet',
    'Marmer'
  ];

  return (
    <section className="bg-garden-stone py-2 border-b border-garden-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2">
          {collections.map((collection, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="text-black hover:bg-garden-primary hover:text-white transition-colors text-sm py-1 px-3"
            >
              {collection}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionBar;
