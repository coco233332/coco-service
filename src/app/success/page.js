'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <div className="mb-6">
          <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">支付成功！</h1>
        <p className="text-gray-600 mb-8">
          感谢您选择COCO Service。我们已收到您的订单，将尽快与您联系安排咨询服务。
        </p>
        
        <div className="mb-8">
          <div className="border-t border-b border-gray-200 py-4 my-4">
            <p className="text-sm text-gray-500 mb-1">订单编号</p>
            <p className="font-medium">{sessionId ? sessionId.substring(0, 16) + '...' : 'N/A'}</p>
          </div>
          <p className="text-sm text-gray-500">
            订单确认邮件已发送到您提供的邮箱地址，请查收。
          </p>
        </div>
        
        <Link href="/" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700">
          返回首页
        </Link>
      </div>
    </div>
  );
}