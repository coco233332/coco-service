require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/coco-service',
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || 'pk_live_51RISJgB4qiQ1Bp1kqkNPqWEjBRdblxpjYaHsfUcK4aJS5B4KBh3hWp8yGkAbRForRTRU0V9e42aWc7vGGOMx2xQX00Hn8NrGRF',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000'
};