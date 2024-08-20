## Repository behind the [webshop course](https://www.youtube.com/watch?v=BRB5Qah502w) on Youtube!

## Ecommerce Template Integrated with Stripe.

This is a full-stack TypeScript ecommerce template using:

Frontend:
Next.js
[react-stripe-js](https://github.com/stripe/react-stripe-js) for [Checkout](https://stripe.com/checkout)
Backend
Next.js [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) and [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations)
[stripe-node with TypeScript](https://github.com/stripe/stripe-node#usage-with-typescript)

## Demo

- [Live Demo](https://webshop-zeta-two.vercel.app/)

The demo is running in test mode -- use 4242424242424242 as a test card number with any CVC + future expiration date.

Use the 4000002760003184 test card number to trigger a 3D Secure challenge flow.

Read more about testing on Stripe.

## Functionality

- Stripe Checkout
  - Server Component: [app/store/components/cart/Page.tsx](path/to/Page.tsx)
  - Server Action: [app/actions/stripe.ts](path/to/stripe.ts)
  - Checkout Session 'success' page fetches the Checkout Session object from Stripe: [app/store/result/page.tsx](path/to/page.tsx)
- Webhook handling for post-payment events
  Route Handler: [app/api/webhooks/route.ts](path/to/route.ts)

## Manual

1. Fork the project or open with your Github Desktop
2. Copy the `.env.local.example` file into a file named `.env.local` in the root directory of this project:

```bash
cp .env.local.example .env.local
```

You will need a Stripe account ([register](https://dashboard.stripe.com/register)) to run this sample. Go to the [Stripe developer dashboard](https://dashboard.stripe.com/apikeys) to find your API keys and replace them in the .env.local file.

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<replace-with-your-publishable-key>
STRIPE_SECRET_KEY=<replace-with-your-secret-key>
```

3. Now install the dependencies

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

4. Forward webhooks to your local dev server
   First install the [CLI](https://stripe.com/docs/stripe-cli) and [link your Stripe account](https://stripe.com/docs/stripe-cli#link-account).

Next, start the webhook forwarding:

```bash
stripe listen --forward-to localhost:3000/api/webhooks
```

The CLI will print a webhook secret key to the console. Set `STRIPE_WEBHOOK_SECRET` to this value in your .`env.local` file.

5. Move to next step (Adjust it to your Store, see below)

## Adjust it to your Store

5.1 Edit the products in [app/components/constants/Products.tsx](path/to/Products.tsx) to your ones
5.2 Update the images in [app/public](path/to/public) to your images and update the [app/favoicon.icon](path/to/favoicon.ico) to your website logo
5.3 Update the company info in [app/store/components/constants/Legal.tsx](path/to/Legal.tsx) to your company info
5.4 Update the text for the about section in [app/store/components/constants/Texts.tsx](path/to/Texts.tsx) to your company info
5.5 Update the function in [app/components/store/products/ItemList.tsx](path/to/ItemList.tsx) `const returnCategory = (category: string) => {}` to return the correct ones, given your categories
