const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const config = require('./config/config');
const apiRoutes = require('./routes/api');
const serviceController = require('./controllers/serviceController');

const app = express();

// 中间件配置
app.use(express.json());
app.use(cors({
  origin: config.CLIENT_URL,
  credentials: true
}));

// Webhook路由特殊处理
app.use('/api/webhook', express.raw({ type: 'application/json' }));

// API路由
app.use('/api', apiRoutes);

// 前端静态文件服务
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

// 连接数据库
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('MongoDB连接成功');
    // 初始化服务数据
    serviceController.initServices();
  })
  .catch(err => console.error('MongoDB连接失败:', err));

// 启动服务器
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`服务器运行在端口: ${PORT}`);
});