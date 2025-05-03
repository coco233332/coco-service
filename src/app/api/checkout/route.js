import { stripe } from '../../../lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { price, plan, customerInfo } = await request.json();
    
    // 创建Stripe结账会话
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: plan || '专业IT咨询服务',
              description: '提供专业IT咨询，优化系统架构，提升企业技术效率',
            },
            unit_amount: parseInt(price) * 100, // Stripe使用最小货币单位（便士）
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
      metadata: {
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        customerCompany: customerInfo.company,
        customerPhone: customerInfo.phone,
        customerMessage: customerInfo.message,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: { message: error.message } },
      { status: 500 }
    );
  }
}