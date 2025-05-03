import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 这里应该发送到后端API
    // 现在只是模拟提交
    setSubmitStatus({
      submitted: true,
      success: true,
      message: '感谢您的留言！我们会尽快与您联系。'
    });
    
    // 重置表单
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-content">
          <section className="contact-info">
            <h1>联系我们</h1>
            <p>如有任何问题或需求，请随时与我们联系。我们的团队将竭诚为您服务。</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>电子邮件</h3>
                <p>info@cocoservice.com</p>
              </div>
              
              <div className="contact-method">
                <h3>电话</h3>
                <p>+44 123 456 7890</p>
              </div>
              
              <div className="contact-method">
                <h3>办公地址</h3>
                <p>伦敦市金融区商业大道123号</p>
              </div>
              
              <div className="contact-method">
                <h3>营业时间</h3>
                <p>周一至周五：9:00 - 18:00</p>
              </div>
            </div>
          </section>
          
          <section className="contact-form-section">
            <h2>发送留言</h2>
            
            {submitStatus.submitted && (
              <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
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
                <label htmlFor="subject">主题 *</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">留言内容 *</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary">
                发送留言
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;