
import CollectionPageLayout from '@/components/CollectionPageLayout';

const KlassiekPage = () => {
  const klassiekItems = [
    {
      id: 1,
      name: "Klassieke Grafsteen Model A",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.250",
      description: "Traditionele grafsteen in natuursteen met klassieke vormgeving"
    },
    {
      id: 2,
      name: "Klassieke Grafsteen Model B",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.450",
      description: "Elegante klassieke grafsteen met verfijnde details"
    },
    {
      id: 3,
      name: "Klassieke Grafsteen Model C",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.650",
      description: "Premium klassieke grafsteen met handgravures"
    }
  ];

  return (
    <CollectionPageLayout
      title="Klassieke Collectie"
      subtitle="Tijdloze en elegante grafstenen in klassieke stijl"
      items={klassiekItems}
    />
  );
};

export default KlassiekPage;
