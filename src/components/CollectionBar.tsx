
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CollectionBar = () => {
  const navigate = useNavigate();
  
  const collections = [
    { name: 'Klassiek', path: '/klassiek' },
    { name: 'Modern', path: '/modern' }, 
    { name: 'Familie', path: '/familie' },
    { name: 'Hart Vorm', path: '/hart-vorm' },
    { name: 'Boek Vorm', path: '/boek-vorm' },
    { name: 'Natuursteen', path: '/natuursteen' },
    { name: 'Graniet', path: '/graniet' },
    { name: 'Marmer', path: '/marmer' }
  ];

  const handleCollectionClick = (path: string) => {
    navigate(path);
  };

  return (
    <section id="collectie" className="bg-garden-stone py-2 border-b border-garden-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2">
          {collections.map((collection, index) => (
            <Button
              key={index}
              onClick={() => handleCollectionClick(collection.path)}
              variant="ghost"
              size="sm"
              className="text-black hover:bg-garden-primary hover:text-white transition-colors text-sm py-1 px-3"
            >
              {collection.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionBar;
