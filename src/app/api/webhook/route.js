import { stripe } from '../../../lib/stripe';
import { NextResponse } from 'next/server';

// 新的配置方式
export const runtime = 'edge'; // 可选: 'nodejs' (默认) | 'edge'

async function buffer(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export async function POST(request) {
  try {
    const buf = await buffer(request.body);
    const sig = request.headers.get('stripe-signature');

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error(`Webhook signature verification failed: ${err.message}`);
      return NextResponse.json({ error: err.message }, { status: 400 });
    }

    // 处理特定的webhook事件
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      
      // 在这里处理完成的支付，例如:
      // - 发送订单确认邮件
      // - 更新数据库中的订单状态
      // - 安排服务等
      
      console.log('Payment successful for session:', session.id);
      console.log('Customer info:', session.metadata);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: { message: error.message } },
      { status: 500 }
    );
  }
}