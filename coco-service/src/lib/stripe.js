import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

// 客户端Stripe实例
export const getStripe = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  return stripePromise;
};

// 服务端Stripe实例
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
});