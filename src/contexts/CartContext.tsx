
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    price: number;
    image_url: string;
    description: string;
  };
}

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string, quantity?: number) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  totalItems: number;
  totalPrice: number;
  loading: boolean;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const getSessionId = () => {
    let sessionId = localStorage.getItem('guest_session_id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      localStorage.setItem('guest_session_id', sessionId);
    }
    return sessionId;
  };

  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      let query = supabase
        .from('cart_items')
        .select(`
          id,
          product_id,
          quantity,
          product:products(id, name, price, image_url, description)
        `);

      if (user) {
        query = query.eq('user_id', user.id);
      } else {
        query = query.eq('session_id', getSessionId());
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching cart items:', error);
        throw error;
      }

      console.log('Fetched cart items:', data);
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      toast({
        title: 'Fout',
        description: 'Kon winkelwagen niet laden',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: string, quantity = 1) => {
    try {
      console.log('Adding to cart:', { productId, quantity });
      
      const { data: { user } } = await supabase.auth.getUser();
      
      // Check if item already exists in cart
      const existingItem = items.find(item => item.product_id === productId);
      
      if (existingItem) {
        console.log('Item already in cart, updating quantity');
        await updateQuantity(existingItem.id, existingItem.quantity + quantity);
        return;
      }
      
      const cartData = {
        product_id: productId,
        quantity,
        ...(user ? { user_id: user.id } : { session_id: getSessionId() })
      };

      console.log('Inserting cart data:', cartData);

      const { error } = await supabase
        .from('cart_items')
        .insert(cartData);

      if (error) {
        console.error('Error adding to cart:', error);
        throw error;
      }

      await fetchCartItems();
      toast({
        title: 'Toegevoegd aan winkelwagen',
        description: 'Product is toegevoegd aan uw winkelwagen'
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: 'Fout',
        description: 'Kon product niet toevoegen aan winkelwagen',
        variant: 'destructive'
      });
    }
  };

  const removeFromCart = async (itemId: string) => {
    try {
      console.log('Removing from cart:', itemId);
      
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId);

      if (error) {
        console.error('Error removing from cart:', error);
        throw error;
      }

      await fetchCartItems();
      toast({
        title: 'Verwijderd',
        description: 'Product is verwijderd uit uw winkelwagen'
      });
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast({
        title: 'Fout',
        description: 'Kon product niet verwijderen',
        variant: 'destructive'
      });
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    try {
      console.log('Updating quantity:', { itemId, quantity });
      
      if (quantity <= 0) {
        await removeFromCart(itemId);
        return;
      }

      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', itemId);

      if (error) {
        console.error('Error updating quantity:', error);
        throw error;
      }

      await fetchCartItems();
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast({
        title: 'Fout',
        description: 'Kon aantal niet wijzigen',
        variant: 'destructive'
      });
    }
  };

  const clearCart = async () => {
    try {
      console.log('Clearing cart...');
      
      const { data: { user } } = await supabase.auth.getUser();
      
      let query = supabase.from('cart_items').delete();

      if (user) {
        query = query.eq('user_id', user.id);
      } else {
        query = query.eq('session_id', getSessionId());
      }

      const { error } = await query;
      if (error) {
        console.error('Error clearing cart:', error);
        throw error;
      }

      console.log('Cart cleared successfully');
      setItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const refreshCart = async () => {
    await fetchCartItems();
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      loading,
      refreshCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
