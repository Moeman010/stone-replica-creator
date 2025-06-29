
-- Create products table to store grafsteen products
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  category TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create cart items table for shopping cart functionality
CREATE TABLE public.cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id TEXT, -- For guest users
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create orders table to track purchases
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  stripe_session_id TEXT UNIQUE,
  shipping_address JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create order items table to store individual items in orders
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Products are public (everyone can read)
CREATE POLICY "Everyone can view products" ON public.products FOR SELECT USING (true);

-- Cart items policies
CREATE POLICY "Users can view their own cart items" ON public.cart_items
  FOR SELECT USING (
    (auth.uid() IS NOT NULL AND user_id = auth.uid()) OR 
    (auth.uid() IS NULL AND session_id IS NOT NULL)
  );

CREATE POLICY "Users can insert their own cart items" ON public.cart_items
  FOR INSERT WITH CHECK (
    (auth.uid() IS NOT NULL AND user_id = auth.uid()) OR 
    (auth.uid() IS NULL AND session_id IS NOT NULL)
  );

CREATE POLICY "Users can update their own cart items" ON public.cart_items
  FOR UPDATE USING (
    (auth.uid() IS NOT NULL AND user_id = auth.uid()) OR 
    (auth.uid() IS NULL AND session_id IS NOT NULL)
  );

CREATE POLICY "Users can delete their own cart items" ON public.cart_items
  FOR DELETE USING (
    (auth.uid() IS NOT NULL AND user_id = auth.uid()) OR 
    (auth.uid() IS NULL AND session_id IS NOT NULL)
  );

-- Orders policies
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (
    (auth.uid() IS NOT NULL AND user_id = auth.uid()) OR 
    (auth.uid() IS NULL)
  );

CREATE POLICY "Anyone can insert orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Orders can be updated" ON public.orders FOR UPDATE USING (true);

-- Order items policies
CREATE POLICY "Users can view order items for their orders" ON public.order_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.orders 
      WHERE orders.id = order_items.order_id 
      AND (orders.user_id = auth.uid() OR auth.uid() IS NULL)
    )
  );

CREATE POLICY "Anyone can insert order items" ON public.order_items FOR INSERT WITH CHECK (true);

-- Insert sample products for each collection
INSERT INTO public.products (name, description, price, image_url, category) VALUES
-- Klassiek Collection
('Klassieke Grafsteen Model A', 'Traditionele grafsteen in natuursteen met klassieke vormgeving', 1250.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'klassiek'),
('Klassieke Grafsteen Model B', 'Elegante klassieke grafsteen met verfijnde details', 1450.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'klassiek'),
('Klassieke Grafsteen Model C', 'Premium klassieke grafsteen met handgravures', 1650.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'klassiek'),

-- Modern Collection
('Moderne Grafsteen Model A', 'Eigentijds ontwerp met strakke lijnen', 1350.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'modern'),
('Moderne Grafsteen Model B', 'Minimalistische moderne grafsteen', 1550.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'modern'),
('Moderne Grafsteen Model C', 'Contemporary design met persoonlijke touch', 1750.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'modern'),

-- Familie Collection
('Familie Monument Model A', 'Ruimte voor meerdere namen en data', 1800.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'familie'),
('Familie Monument Model B', 'Groot familie monument met decoraties', 2200.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'familie'),
('Familie Monument Model C', 'Premium familie monument', 2800.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'familie'),

-- Hart Vorm Collection
('Hart Vorm Model A', 'Liefdevol hart-vormige grafsteen', 1450.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'hart-vorm'),
('Hart Vorm Model B', 'Elegant hart-vormige grafsteen met details', 1650.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'hart-vorm'),
('Hart Vorm Model C', 'Premium hart-vormige grafsteen', 1850.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'hart-vorm'),

-- Graniet Collection
('Graniet Model A', 'Duurzame graniet grafsteen', 1350.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'graniet'),
('Graniet Model B', 'Graniet grafsteen met glanzende afwerking', 1550.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'graniet'),
('Graniet Model C', 'Premium graniet grafsteen', 1750.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'graniet'),

-- Marmer Collection
('Marmer Model A', 'Luxe marmer grafsteen', 1650.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'marmer'),
('Marmer Model B', 'Marmer grafsteen met unieke aders', 1850.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'marmer'),
('Marmer Model C', 'Premium marmer grafsteen', 2150.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', 'marmer');
