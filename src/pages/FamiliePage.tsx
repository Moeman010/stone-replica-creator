
import CollectionPageLayout from '@/components/CollectionPageLayout';

const FamiliePage = () => {
  const familieItems = [
    {
      id: 1,
      name: "Familie Monument Model A",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€2.250",
      description: "Ruim familie monument voor meerdere personen"
    },
    {
      id: 2,
      name: "Familie Monument Model B",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€2.650",
      description: "Groot familie monument met extra graveerruimte"
    },
    {
      id: 3,
      name: "Familie Monument Model C",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€3.150",
      description: "Premium familie monument met luxe afwerking"
    }
  ];

  return (
    <CollectionPageLayout
      title="Familie Collectie"
      subtitle="Ruime monumenten voor het hele gezin"
      items={familieItems}
    />
  );
};

export default FamiliePage;
