export default function Services() {
  const services = [
    {
      title: "IT系统评估",
      description: "全面评估您的IT基础设施，找出潜在问题和优化空间，制定改进计划。",
      icon: "🔍"
    },
    {
      title: "架构优化设计",
      description: "基于先进技术和最佳实践，为您的系统提供优化方案，提高性能和可扩展性。",
      icon: "🏗️"
    },
    {
      title: "技术效率提升",
      description: "通过流程优化和自动化，提高团队的技术效率，降低运营成本。",
      icon: "📈"
    },
    {
      title: "数字化转型咨询",
      description: "帮助企业规划和实施数字化转型策略，实现业务增长和创新。",
      icon: "💻"
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的专业服务</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            COCO Service提供全方位的IT咨询与优化服务，帮助企业提升技术效能，实现业务目标
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card flex flex-col items-center text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}