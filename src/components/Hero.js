import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              提升您企业的技术效率
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              专业IT咨询，系统架构优化，助力企业数字化转型
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/checkout" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold text-center">
                立即咨询
              </Link>
              <Link href="/#services" className="border border-white text-white hover:bg-blue-600 px-6 py-3 rounded-lg font-bold text-center">
                了解服务
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <img 
                src="/images/hero.jpg" 
                alt="IT咨询服务" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}