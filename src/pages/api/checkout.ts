import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { cartItems } = req.body

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed." })
    }

    if (!cartItems || cartItems.length === 0) {
        return res.status(400).json({ error: 'No items in the cart.' })
    }

    const lineItems = cartItems.map(item => ({
        price: item.defaultPriceId,
        quantity: item.quantity || 1,
    }));

    const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancel_url = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: success_url,
        cancel_url: cancel_url,
        mode: 'payment',
        line_items: lineItems,
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })
}