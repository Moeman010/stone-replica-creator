
import CollectionPageLayout from '@/components/CollectionPageLayout';

const MarmerPage = () => {
  const marmerItems = [
    {
      id: 1,
      name: "Marmer Model A",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.650",
      description: "Luxe marmer grafsteen"
    },
    {
      id: 2,
      name: "Marmer Model B",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.850",
      description: "Marmer grafsteen met unieke aders"
    },
    {
      id: 3,
      name: "Marmer Model C",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€2.150",
      description: "Premium marmer grafsteen"
    }
  ];

  return (
    <CollectionPageLayout
      title="Marmer Collectie"
      subtitle="Luxueuze marmer grafstenen van hoogste kwaliteit"
      items={marmerItems}
    />
  );
};

export default MarmerPage;
