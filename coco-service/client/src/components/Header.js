import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>CoCo Service</h1>
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/services">服务</Link></li>
            <li><Link to="/about">关于我们</Link></li>
            <li><Link to="/contact">联系我们</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;