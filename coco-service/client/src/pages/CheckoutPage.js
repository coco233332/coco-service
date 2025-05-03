import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [orderId, setOrderId] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    details: ''
  });

  useEffect(() => {
    // 获取服务详情
    const fetchService = async () => {
      try {
        const res = await axios.get(`/api/services/${id}`);
        setService(res.data);
        setLoading(false);
      } catch (err) {
        setError('获取服务信息失败');
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    try {
      // 创建支付意向
      const response = await axios.post('/api/create-payment-intent', {
        serviceId: id,
        customerInfo: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone
        },
        details: formData.details
      });

      setClientSecret(response.data.clientSecret);
      setOrderId(response.data.orderId);

      // 确认支付
      const result = await stripe.confirmCardPayment(response.data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: formData.name,
            email: formData.email
          }
        }
      });

      if (result.error) {
        setError(`支付失败: ${result.error.message}`);
        setProcessing(false);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          setSucceeded(true);
          setError(null);
          setProcessing(false);
          
          // 跳转到成功页面
          navigate('/success', { 
            state: { 
              orderId: response.data.orderId,
              service: service
            } 
          });
        }
      }
    } catch (err) {
      setError(`提交订单失败: ${err.message}`);
      setProcessing(false);
    }
  };

  if (loading) return <div className="loading">加载中...</div>;
  if (error && !service) return <div className="error">{error}</div>;
  if (!service) return <div className="not-found">服务不存在</div>;

  const cardElementOptions = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>预约服务</h1>
        
        <div className="checkout-content">
          <div className="service-summary">
            <h2>服务信息</h2>
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-price">
                <span>价格: </span>
                <strong>£{service.price}</strong>
              </div>
            </div>
          </div>
          
          <div className="checkout-form-container">
            <h2>客户信息</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group">
                <label htmlFor="name">姓名 *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">邮箱 *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">公司</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">电话</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="details">需求详情</label>
                <textarea
                  id="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="4"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="card-element">支付信息 *</label>
                <div className="card-element-container">
                  <CardElement id="card-element" options={cardElementOptions} />
                </div>
              </div>
              
              {error && <div className="error-message">{error}</div>}
              
              <button
                type="submit"
                className="btn btn-primary payment-button"
                disabled={processing || !stripe}
              >
                {processing ? '处理中...' : `支付 £${service.price}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;