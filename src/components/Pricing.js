import Link from 'next/link';

export default function Pricing() {
  const pricingPlans = [
    {
      name: "基础咨询",
      price: "100",
      description: "基础的IT系统评估与建议",
      features: [
        "系统性能评估",
        "简要问题诊断",
        "基础优化建议",
        "1小时专家咨询"
      ],
      cta: "立即预约"
    },
    {
      name: "标准咨询",
      price: "300",
      description: "全面的系统架构分析与优化方案",
      features: [
        "深入性能分析",
        "架构评估",
        "详细优化方案",
        "3小时专家咨询",
        "一周免费跟进支持"
      ],
      cta: "最受欢迎选择"
    },
    {
      name: "高级咨询",
      price: "500",
      description: "深度技术优化与实施指导",
      features: [
        "全面系统审计",
        "定制化架构设计",
        "技术转型规划",
        "6小时专家咨询",
        "一个月实施支持",
        "优先响应服务"
      ],
      cta: "企业首选"
    }
  ];

  return (
    <section id="pricing" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">服务定价</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们提供灵活的咨询服务套餐，满足不同企业的需求和预算
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`card border ${index === 1 ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'}`}>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">£{plan.price}</span>
                  <span className="text-gray-600">/次</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="mb-8 space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/checkout?plan=${plan.name}&price=${plan.price}`}
                  className={`block w-full py-3 px-4 rounded-md font-medium text-center ${
                    index === 1 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}