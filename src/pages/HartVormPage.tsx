
import CollectionPageLayout from '@/components/CollectionPageLayout';

const HartVormPage = () => {
  const hartItems = [
    {
      id: 1,
      name: "Hart Vorm Model A",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.450",
      description: "Liefdevol hart-vormige grafsteen"
    },
    {
      id: 2,
      name: "Hart Vorm Model B",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.650",
      description: "Elegant hart-vormige grafsteen met details"
    },
    {
      id: 3,
      name: "Hart Vorm Model C",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "€1.850",
      description: "Premium hart-vormige grafsteen"
    }
  ];

  return (
    <CollectionPageLayout
      title="Hart Vorm Collectie"
      subtitle="Liefdevolle hart-vormige grafstenen"
      items={hartItems}
    />
  );
};

export default HartVormPage;
