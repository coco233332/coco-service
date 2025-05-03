'use client';

import { useSearchParams } from 'next/navigation';
import CheckoutForm from '../../components/CheckoutForm';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || '标准咨询';
  const price = searchParams.get('price') || '100';

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">预约IT咨询服务</h1>
        <p className="text-gray-600">
          请填写以下信息，完成后将跳转到安全支付页面
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <CheckoutForm plan={plan} price={price} />
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>您的付款将通过Stripe安全处理，我们不会存储您的付款信息。</p>
        <p className="mt-2">提交订单后，您将收到确认邮件和服务详情。</p>
      </div>
    </div>
  );
}