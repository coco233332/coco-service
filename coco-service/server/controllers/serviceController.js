const Service = require('../models/Service');

// 获取所有服务
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 获取单个服务详情
exports.getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: '服务不存在' });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 初始化服务数据
exports.initServices = async () => {
  try {
    const count = await Service.countDocuments();
    if (count === 0) {
      await Service.create([
        {
          name: 'IT基础咨询服务',
          description: '提供IT系统评估，识别问题并提出优化建议。',
          price: 100,
          currency: 'GBP'
        },
        {
          name: '系统架构优化服务',
          description: '专业评估现有系统架构，提供优化方案，提升系统性能与稳定性。',
          price: 200,
          currency: 'GBP'
        },
        {
          name: '企业技术效率提升方案',
          description: '全面分析企业技术流程，设计自动化方案，提高工作效率。',
          price: 300,
          currency: 'GBP'
        }
      ]);
      console.log('服务数据初始化成功');
    }
  } catch (error) {
    console.error('服务数据初始化失败:', error);
  }
};