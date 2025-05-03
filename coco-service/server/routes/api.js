const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const paymentController = require('../controllers/paymentController');

// 服务相关路由
router.get('/services', serviceController.getAllServices);
router.get('/services/:id', serviceController.getService);

// 支付相关路由
router.post('/create-payment-intent', paymentController.createPaymentIntent);
router.get('/orders/:orderId', paymentController.getOrderStatus);
router.post('/webhook', express.raw({ type: 'application/json' }), paymentController.handleWebhook);

module.exports = router;