import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ServicesPage.css';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('/api/services');
        setServices(res.data);
        setLoading(false);
      } catch (err) {
        setError('获取服务列表失败');
        setLoading(false);
        console.error(err);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div className="loading">加载中...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="services-page">
      <div className="container">
        <div className="services-header">
          <h1>我们的服务</h1>
          <p>CoCo Service提供全方位的IT咨询服务，帮助企业优化系统架构，提升技术效率</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service._id}>
              <div className="service-card-content">
                <h2>{service.name}</h2>
                <p className="service-description">{service.description}</p>
                <div className="service-price">
                  <span>£{service.price}</span>
                </div>
                <div className="service-actions">
                  <Link to={`/services/${service._id}`} className="btn btn-secondary">
                    查看详情
                  </Link>
                  <Link to={`/checkout/${service._id}`} className="btn btn-primary">
                    立即预约
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-footer">
          <h2>需要定制服务？</h2>
          <p>如果您需要针对特定需求的定制解决方案，请联系我们的专业团队</p>
          <Link to="/contact" className="btn btn-primary">
            联系我们
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;