import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              COCO Service
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-gray-700 hover:text-blue-600">
              服务内容
            </Link>
            <Link href="/#pricing" className="text-gray-700 hover:text-blue-600">
              服务定价
            </Link>
            <Link href="/#features" className="text-gray-700 hover:text-blue-600">
              解决方案
            </Link>
            <Link href="/checkout" className="btn-primary">
              立即咨询
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            {/* 移动端菜单按钮 */}
            <button className="text-gray-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}