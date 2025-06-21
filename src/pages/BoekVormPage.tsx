
import CollectionPageLayout from '@/components/CollectionPageLayout';

const BoekVormPage = () => {
  const boekItems = [
    {
      id: 1,
      name: "Boek Vorm Model A",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.550",
      description: "Boek-vormige grafsteen met verhaal"
    },
    {
      id: 2,
      name: "Boek Vorm Model B",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.750",
      description: "Elegante boek-vormige grafsteen"
    },
    {
      id: 3,
      name: "Boek Vorm Model C",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.950",
      description: "Premium boek-vormige grafsteen"
    }
  ];

  return (
    <CollectionPageLayout
      title="Boek Vorm Collectie"
      subtitle="Boek-vormige grafstenen die een verhaal vertellen"
      items={boekItems}
    />
  );
};

export default BoekVormPage;
