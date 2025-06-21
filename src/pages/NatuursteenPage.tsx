
import CollectionPageLayout from '@/components/CollectionPageLayout';

const NatuursteenPage = () => {
  const natuursteenItems = [
    {
      id: 1,
      name: "Natuursteen Model A",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.150",
      description: "Authentieke natuursteen grafsteen"
    },
    {
      id: 2,
      name: "Natuursteen Model B",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.350",
      description: "Natuursteen met natuurlijke textuur"
    },
    {
      id: 3,
      name: "Natuursteen Model C",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.550",
      description: "Premium natuursteen grafsteen"
    }
  ];

  return (
    <CollectionPageLayout
      title="Natuursteen Collectie"
      subtitle="Authentieke grafstenen van natuursteen"
      items={natuursteenItems}
    />
  );
};

export default NatuursteenPage;
