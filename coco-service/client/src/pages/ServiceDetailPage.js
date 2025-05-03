import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/services/${id}`);
        setService(res.data);
        setLoading(false);
      } catch (err) {
        setError('获取服务详情失败');
        setLoading(false);
        console.error(err);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <div className="loading">加载中...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!service) return <div className="not-found">服务不存在</div>;

  return (
    <div className="service-detail-page">
      <div className="container">
        <div className="service-content">
          <h1>{service.name}</h1>
          <div className="service-meta">
            <span className="price">£{service.price}</span>
            <span className="currency">{service.currency}</span>
          </div>
          <div className="service-description">
            <h2>服务详情</h2>
            <p>{service.description}</p>
            
            <div className="service-benefits">
              <h3>服务优势</h3>
              <ul>
                <li>专业IT顾问提供定制化方案</li>
                <li>基于多年行业经验的最佳实践</li>
                <li>全面的问题分析与解决方案</li>
                <li>持续的技术支持与跟进</li>
              </ul>
            </div>

            <div className="service-process">
              <h3>服务流程</h3>
              <ol>
                <li>初步沟通，了解需求</li>
                <li>专业评估与分析</li>
                <li>提供定制化解决方案</li>
                <li>方案实施与优化</li>
                <li>效果评估与持续改进</li>
              </ol>
            </div>
          </div>

          <div className="cta-container">
            <Link to={`/checkout/${service._id}`} className="btn btn-primary">
              立即预约
            </Link>
            <Link to="/services" className="btn btn-secondary">
              返回服务列表
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;