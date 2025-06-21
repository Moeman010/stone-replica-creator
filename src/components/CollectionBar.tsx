
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
    <section className="bg-gray-100 py-4 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {collections.map((collection, index) => (
            <Button
              key={index}
              variant="ghost"
              className="text-memorial-dark hover:bg-memorial-accent hover:text-white transition-colors"
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
