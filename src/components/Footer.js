import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">COCO Service</h3>
            <p className="text-gray-400">
              提供专业IT咨询，系统架构优化和技术效率提升服务
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">服务</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-gray-400 hover:text-white">IT系统评估</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white">架构优化设计</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white">技术效率提升</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white">数字化转型咨询</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">关于我们</h4>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-gray-400 hover:text-white">团队介绍</Link></li>
              <li><Link href="/#pricing" className="text-gray-400 hover:text-white">服务定价</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">客户案例</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">隐私政策</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-gray-400">
              <li>邮箱: coco@cocoservice.shop</li>
              <li>电话: +44 7873 651740</li>
              <li>地址: London, United Kingdom</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} COCO Service. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  );
}