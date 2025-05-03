export default function Features() {
  const features = [
    {
      title: "专业团队",
      description: "我们的团队由经验丰富的IT专家组成，拥有多年行业经验和先进技术知识。",
      icon: "👨‍💻"
    },
    {
      title: "定制方案",
      description: "根据您企业的具体需求和挑战，提供量身定制的解决方案。",
      icon: "🔧"
    },
    {
      title: "持续支持",
      description: "咨询服务后提供持续的支持和跟进，确保方案顺利实施。",
      icon: "🤝"
    },
    {
      title: "前沿技术",
      description: "紧跟技术发展趋势，应用最新的工具和方法论解决问题。",
      icon: "🚀"
    },
    {
      title: "成本效益",
      description: "帮助企业优化IT投资，提高资源利用效率，降低运营成本。",
      icon: "💰"
    },
    {
      title: "快速响应",
      description: "高效的沟通机制和响应流程，及时解决客户问题。",
      icon: "⚡"
    }
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择我们</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            COCO Service致力于通过专业的IT咨询服务，帮助企业解决技术难题，提升业务效率
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}