import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './SuccessPage.css';

const SuccessPage = () => {
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      // 如果从结账页面直接导航而来，状态中应该有订单ID
      if (location.state && location.state.orderId) {
        try {
          const res = await axios.get(`/api/orders/${location.state.orderId}`);
          setOrderDetails(res.data.order);
          setLoading(false);
        } catch (err) {
          setError('获取订单详情失败');
          setLoading(false);
        }
      } else {
        setLoading(false);
        setError('找不到订单信息');
      }
    };

    fetchOrderDetails();
  }, [location]);

  if (loading) return <div className="loading">加载中...</div>;
  
  // 如果没有订单详情但有服务信息（来自location状态）
  const service = location.state?.service;

  return (
    <div className="success-page">
      <div className="container">
        <div className="success-content">
          <div className="success-icon">✓</div>
          <h1>支付成功！</h1>
          
          {orderDetails ? (
            <div className="order-details">
              <h2>订单详情</h2>
              <div className="detail-item">
                <span>服务:</span>
                <span>{orderDetails.service.name}</span>
              </div>
              <div className="detail-item">
              <span>金额:</span>
                <span>£{orderDetails.totalAmount}</span>
              </div>
              <div className="detail-item">
                <span>订单时间:</span>
                <span>{new Date(orderDetails.createdAt).toLocaleString()}</span>
              </div>
              <div className="detail-item">
                <span>客户:</span>
                <span>{orderDetails.customer.name}</span>
              </div>
              <div className="detail-item">
                <span>邮箱:</span>
                <span>{orderDetails.customer.email}</span>
              </div>
            </div>
          ) : service ? (
            <div className="order-summary">
              <h2>订单摘要</h2>
              <p>您已成功购买了 {service.name}</p>
              <p>金额: £{service.price}</p>
            </div>
          ) : (
            <div className="error-message">{error || '无法加载订单信息'}</div>
          )}
          
          <p className="success-message">
            我们已收到您的预约和付款。我们的团队将尽快与您联系安排咨询服务。
            您也会收到一封确认邮件，其中包含预约详情。
          </p>
          
          <div className="next-steps">
            <h3>下一步</h3>
            <ol>
              <li>检查您的邮箱，确认收到订单确认邮件</li>
              <li>准备您想在咨询中讨论的问题或需求</li>
              <li>等待我们的团队与您联系安排具体时间</li>
            </ol>
          </div>
          
          <div className="action-buttons">
            <Link to="/" className="btn btn-primary">
              返回首页
            </Link>
            <Link to="/services" className="btn btn-secondary">
              浏览更多服务
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;