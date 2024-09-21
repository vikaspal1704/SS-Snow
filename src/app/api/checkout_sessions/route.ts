import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const products = {
  single_driveway: { name: "Single Driveway", price: 4999 },
  double_driveway: { name: "Double Driveway", price: 9999 },
  triple_driveway: { name: "Triple Driveway", price: 14999 },
  shared_driveway: { name: "Shared Driveway", price: 19999 },
};

// POST method handler for creating a Stripe checkout session
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { productId } = body;

    const product = products[productId];

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
