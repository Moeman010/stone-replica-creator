
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderConfirmationRequest {
  email: string;
  orderId: string;
  customerName: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  shippingAddress: any;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, orderId, customerName, items, totalAmount, shippingAddress }: OrderConfirmationRequest = await req.json();

    const itemsHtml = items.map(item => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">€${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    `).join('');

    const emailResponse = await resend.emails.send({
      from: "GM Specialist <onboarding@resend.dev>",
      to: [email],
      subject: "Bevestiging van uw bestelling - GM Specialist",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2c5530; text-align: center;">Bedankt voor uw bestelling!</h1>
          
          <p>Beste ${customerName},</p>
          
          <p>We hebben uw bestelling succesvol ontvangen. Hieronder vindt u de details van uw bestelling:</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #2c5530; margin-top: 0;">Bestelling #${orderId}</h3>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <thead>
                <tr style="background-color: #2c5530; color: white;">
                  <th style="padding: 10px; text-align: left;">Product</th>
                  <th style="padding: 10px; text-align: center;">Aantal</th>
                  <th style="padding: 10px; text-align: right;">Prijs</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
              <tfoot>
                <tr style="background-color: #f0f8f0; font-weight: bold;">
                  <td colspan="2" style="padding: 15px; text-align: right;">Totaal:</td>
                  <td style="padding: 15px; text-align: right;">€${totalAmount.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          ${shippingAddress ? `
          <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #2c5530; margin-top: 0;">Verzendadres</h3>
            <p>${shippingAddress.firstName} ${shippingAddress.lastName}<br>
            ${shippingAddress.address}<br>
            ${shippingAddress.postalCode} ${shippingAddress.city}<br>
            Tel: ${shippingAddress.phone}</p>
          </div>
          ` : ''}
          
          <p>We zullen contact met u opnemen om de verdere details van uw grafsteen te bespreken en een afspraak te maken voor de plaatsing.</p>
          
          <p>Heeft u vragen over uw bestelling? Neem dan contact met ons op via:</p>
          <ul>
            <li>Telefoon: +31 (0)20 123 4567</li>
            <li>E-mail: info@gmspecialist.nl</li>
          </ul>
          
          <p style="margin-top: 30px;">Met vriendelijke groet,<br>
          <strong>Het GM Specialist Team</strong></p>
          
          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>GM Specialist - Grafstenen met zorg en vakmanschap</p>
          </div>
        </div>
      `,
    });

    console.log("Order confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-order-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
