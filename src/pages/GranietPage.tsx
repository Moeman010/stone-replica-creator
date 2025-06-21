
import CollectionPageLayout from '@/components/CollectionPageLayout';

const GranietPage = () => {
  const granietItems = [
    {
      id: 1,
      name: "Graniet Model A",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.350",
      description: "Duurzame graniet grafsteen"
    },
    {
      id: 2,
      name: "Graniet Model B",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.550",
      description: "Graniet grafsteen met glanzende afwerking"
    },
    {
      id: 3,
      name: "Graniet Model C",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.750",
      description: "Premium graniet grafsteen"
    }
  ];

  return (
    <CollectionPageLayout
      title="Graniet Collectie"
      subtitle="Duurzame en elegante graniet grafstenen"
      items={granietItems}
    />
  );
};

export default GranietPage;
