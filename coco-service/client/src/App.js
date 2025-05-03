import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

// 从环境变量加载Stripe公钥
const stripePromise = loadStripe('pk_live_51RISJgB4qiQ1Bp1kqkNPqWEjBRdblxpjYaHsfUcK4aJS5B4KBh3hWp8yGkAbRForRTRU0V9e42aWc7vGGOMx2xQX00Hn8NrGRF');

function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route path="/checkout/:id" element={<CheckoutPage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Elements>
    </Router>
  );
}

export default App;