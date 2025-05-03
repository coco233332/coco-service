import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-header">
          <h1>关于CoCo Service</h1>
          <p className="lead">
            我们是一家专注于IT咨询领域的专业服务提供商，致力于帮助企业优化系统架构，提升技术效率。
          </p>
        </section>

        <section className="about-mission">
          <h2>我们的使命</h2>
          <p>
            CoCo Service的使命是通过提供专业、高效的IT咨询服务，帮助企业解决技术挑战，
            优化业务流程，提升运营效率，让技术成为企业发展的推动力而非阻碍。
          </p>
        </section>

        <section className="about-values">
          <h2>我们的价值观</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>专业精神</h3>
              <p>我们拥有丰富的行业经验和技术专长，提供专业可靠的解决方案。</p>
            </div>
            <div className="value-card">
              <h3>客户至上</h3>
              <p>我们始终将客户需求放在首位，提供个性化的服务体验。</p>
            </div>
            <div className="value-card">
              <h3>持续创新</h3>
              <p>我们不断学习和探索新技术，为客户提供最前沿的解决方案。</p>
            </div>
            <div className="value-card">
              <h3>诚信透明</h3>
              <p>我们坚持诚信经营，与客户建立透明、长期的合作关系。</p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2>我们的团队</h2>
          <p>
            CoCo Service拥有一支由经验丰富的IT专家组成的团队。我们的团队成员在系统架构、
            软件开发、数据分析和项目管理等领域拥有多年的实践经验，能够为客户提供全方位的技术支持。
          </p>
        </section>

        <section className="about-cta">
          <h2>准备与我们合作？</h2>
          <p>无论您是寻求技术咨询、系统优化还是效率提升方案，我们都能为您提供专业支持。</p>
          <div className="cta-buttons">
            <Link to="/services" className="btn btn-primary">
              浏览我们的服务
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              联系我们
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;