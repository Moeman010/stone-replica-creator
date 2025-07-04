
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => navigate('/cart')}
      className="relative hover:bg-garden-primary hover:text-white transition-colors"
    >
      <ShoppingCart className="h-4 w-4" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-garden-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
      <span className="sr-only">Winkelwagen ({totalItems} items)</span>
    </Button>
  );
};

export default CartIcon;
