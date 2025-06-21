
import CollectionPageLayout from '@/components/CollectionPageLayout';

const ModernPage = () => {
  const modernItems = [
    {
      id: 1,
      name: "Moderne Grafsteen Model A",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.350",
      description: "Strakke moderne grafsteen met minimalistische vormgeving"
    },
    {
      id: 2,
      name: "Moderne Grafsteen Model B",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.550",
      description: "Hedendaagse grafsteen met geometrische lijnen"
    },
    {
      id: 3,
      name: "Moderne Grafsteen Model C",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.750",
      description: "Innovatieve moderne grafsteen met uniek design"
    }
  ];

  return (
    <CollectionPageLayout
      title="Moderne Collectie"
      subtitle="Hedendaagse grafstenen met strakke en moderne vormgeving"
      items={modernItems}
    />
  );
};

export default ModernPage;
