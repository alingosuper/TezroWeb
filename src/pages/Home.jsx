import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    { title: "Tezro Ride", desc: "تیز رفتار اور محفوظ سفر، شہر بھر میں کہیں بھی۔", icon: "🚗" },
    { title: "Tezro Food", desc: "آپ کے پسندیدہ کھانے، اب آپ کی دہلیز پر۔", icon: "🍲" },
    { title: "Tezro Pay", desc: "بجلی کے بل اور رقم کی منتقلی، اب ایک کلک پر۔", icon: "💳" },
    { title: "Tezro Logistics", desc: "سامان کی ترسیل اور کورئیر سروس، پورے ملک میں۔", icon: "📦" }
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <div style={{ padding: '60px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #1a1a1a 0%, #000 100%)', borderBottom: '2px solid #FFD700' }}>
        <h1 style={{ color: '#FFD700', fontSize: '3rem', marginBottom: '10px', textShadow: '0 0 15px rgba(255, 215, 0, 0.5)' }}>TEZRO SUPER APP</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: 'auto', color: '#ccc' }}>
          ایک پلیٹ فارم، لاتعداد امکانات۔ ہم آپ کی روزمرہ ضرورتوں کو ڈیجیٹل جدت سے جوڑتے ہیں۔
        </p>
        <button 
          onClick={() => navigate('/register')}
          style={{ backgroundColor: '#FFD700', color: '#000', padding: '15px 40px', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', marginTop: '30px', fontSize: '1.1rem', boxShadow: '0 5px 15px rgba(255, 215, 0, 0.3)' }}
        >
          ابھی شامل ہوں (Get Started)
        </button>
      </div>

      {/* Services Section */}
      <div style={{ padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#FFD700', marginBottom: '40px' }}>ہماری سروسز</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1200px', margin: 'auto' }}>
          {services.map((service, index) => (
            <div key={index} style={{ backgroundColor: '#111', padding: '30px', borderRadius: '15px', border: '1px solid #333', textAlign: 'center', transition: '0.3s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{service.icon}</div>
              <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>{service.title}</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div style={{ padding: '50px 20px', backgroundColor: '#0a0a0a', textAlign: 'center' }}>
        <h2 style={{ color: '#FFD700' }}>Tezro ہی کیوں؟</h2>
        <div style={{ maxWidth: '800px', margin: '20px auto', lineHeight: '1.8', color: '#ddd' }}>
          <p>✅ **اعلیٰ سیکیورٹی:** آپ کا ڈیٹا اور ادائیگیاں مکمل محفوظ ہیں۔</p>
          <p>✅ **تیز رفتار:** ہمارا سسٹم آرٹیفیشل انٹیلیجنس پر مبنی ہے جو سیکنڈوں میں کام کرتا ہے۔</p>
          <p>✅ **سب کے لیے:** چاہے آپ کسٹمر ہوں یا سروس پرووائیڈر، Tezro سب کے لیے منافع بخش ہے۔</p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '30px', textAlign: 'center', borderTop: '1px solid #222', color: '#666' }}>
        <p>&copy; 2026 Tezro Foundation. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Home;
