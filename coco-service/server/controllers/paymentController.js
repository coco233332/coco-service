const config = require('../config/config');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/Order');
const Service = require('../models/Service');

// 创建支付意向
exports.createPaymentIntent = async (req, res) => {
  try {
    const { serviceId, customerInfo, details } = req.body;
    
    // 验证服务存在
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: '服务不存在' });
    }

    // 创建支付意向
    const paymentIntent = await stripe.paymentIntents.create({
      amount: service.price * 100, // Stripe使用最小货币单位（便士）
      currency: service.currency.toLowerCase(),
      metadata: {
        serviceId: service._id.toString(),
        customerName: customerInfo.name,
        customerEmail: customerInfo.email
      }
    });

    // 创建订单
    const order = new Order({
      service: service._id,
      customer: customerInfo,
      paymentIntent: paymentIntent.id,
      totalAmount: service.price,
      currency: service.currency,
      details: details
    });

    await order.save();

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      orderId: order._id
    });
  } catch (error) {
    console.error('支付意向创建失败:', error);
    res.status(500).json({ error: error.message });
  }
};

// 支付状态webhook处理
exports.handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // 处理支付成功事件
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    
    // 更新订单状态
    await Order.findOneAndUpdate(
      { paymentIntent: paymentIntent.id },
      { paymentStatus: 'succeeded' }
    );
    
    // 这里可以添加发送确认邮件等逻辑
  }

  res.status(200).json({ received: true });
};

// 获取订单状态
exports.getOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId).populate('service');
    
    if (!order) {
      return res.status(404).json({ message: '订单不存在' });
    }
    
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};