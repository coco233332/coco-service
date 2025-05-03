import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('/api/services');
        setServices(res.data);
      } catch (error) {
        console.error('获取服务失败:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>专业IT咨询解决方案</h1>
          <p>优化系统架构，提升企业技术效率</p>
          <Link to="/services" className="btn btn-primary">
            探索我们的服务
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">我们的专长</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>IT系统咨询</h3>
              <p>评估现有系统，识别问题并提供解决方案</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>架构优化</h3>
              <p>重新设计系统架构，提升性能与可扩展性</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>效率提升</h3>
              <p>优化工作流程，提高团队生产力</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">热门服务</h2>
          <div className="services-grid">
            {services.slice(0, 3).map(service => (
              <div className="service-card" key={service._id}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <p className="price">£{service.price}</p>
                <Link to={`/services/${service._id}`} className="btn btn-secondary">
                  了解更多
                </Link>
              </div>
            ))}
          </div>
          <div className="all-services-link">
            <Link to="/services">查看所有服务</Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>准备提升您的业务技术能力？</h2>
          <p>我们的专业团队随时准备为您提供支持</p>
          <Link to="/contact" className="btn btn-primary">
            联系我们
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;