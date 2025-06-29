
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Create checkout function started");
    
    const { orderId, items, customerEmail } = await req.json();
    console.log("Received data:", { orderId, items, customerEmail });
    
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      console.error("STRIPE_SECRET_KEY is not configured");
      throw new Error("STRIPE_SECRET_KEY is not configured");
    }

    console.log("Stripe key found, initializing Stripe...");
    const stripe = new Stripe(stripeKey, {
      apiVersion: "2023-10-16",
    });

    if (!items || !Array.isArray(items) || items.length === 0) {
      throw new Error("Geen geldige items ontvangen");
    }

    console.log("Creating line items...");
    const lineItems = items.map((item: any) => {
      if (!item.name || !item.price || !item.quantity) {
        throw new Error(`Ongeldige item data: ${JSON.stringify(item)}`);
      }
      
      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            description: "Grafsteen van GM Specialist",
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      };
    });

    console.log("Line items created:", lineItems);

    const origin = req.headers.get("origin") || "http://localhost:3000";
    console.log("Origin:", origin);

    console.log("Creating Stripe checkout session...");
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "ideal"],
      line_items: lineItems,
      mode: "payment",
      customer_email: customerEmail,
      success_url: `${origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      metadata: {
        orderId: orderId,
      },
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['NL', 'BE', 'DE'],
      },
    });

    console.log("Stripe session created successfully:", { id: session.id, url: session.url });

    return new Response(
      JSON.stringify({
        url: session.url,
        sessionId: session.id,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Er is een onbekende fout opgetreden",
        details: error instanceof Error ? error.stack : undefined
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
