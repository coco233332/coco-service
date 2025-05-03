import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>CoCo Service</h3>
            <p>
              专注于提供专业IT咨询服务，优化系统架构，提升企业技术效率。
            </p>
          </div>
          
          <div className="footer-section links">
            <h3>快速链接</h3>
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/services">服务</Link></li>
              <li><Link to="/about">关于我们</Link></li>
              <li><Link to="/contact">联系我们</Link></li>
            </ul>
          </div>
          
          <div className="footer-section contact">
            <h3>联系方式</h3>
            <p>
              <i className="fa fa-envelope"></i> info@cocoservice.com<br/>
              <i className="fa fa-phone"></i> +44 123 456 7890<br/>
              <i className="fa fa-map-marker"></i> 伦敦市金融区商业大道123号
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} CoCo Service. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;