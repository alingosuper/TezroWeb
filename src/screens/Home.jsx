import React from 'react';

const Home = () => {
  return (
    <div style={containerStyle}>
      <nav style={navStyle}>
        <h2 style={{color: '#FFD700'}}>TEZRO SUPER APP</h2>
        <div>
          <button style={btnStyle}>Services</button>
          <button style={btnStyle}>Login</button>
        </div>
      </nav>
      
      <div style={heroSection}>
        <h1>پاکستان کی تیز ترین سروسز 🇵🇰</h1>
        <p>اب ہر کام ہوگا تیز، محفوظ اور قابلِ اعتماد۔</p>
        <button style={mainBtn}>ابھی شروع کریں</button>
      </div>
    </div>
  );
};

const containerStyle = { background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'Arial' };
const navStyle = { display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #222' };
const btnStyle = { background: 'transparent', color: '#fff', border: 'none', margin: '0 10px', cursor: 'pointer' };
const heroSection = { textAlign: 'center', marginTop: '100px' };
const mainBtn = { background: '#FFD700', color: '#000', padding: '15px 40px', border: 'none', borderRadius: '30px', fontWeight: 'bold', fontSize: '18px' };

export default Home;
