import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#FFD700', fontSize: '2.5rem' }}>Tezro Super App</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        One Platform. Endless Possibilities. Tezro Super is a next-generation digital ecosystem...
      </p>
      
      <button 
        onClick={() => navigate('/register')} 
        style={{ 
          backgroundColor: '#FFD700', 
          color: '#000', 
          padding: '15px 30px', 
          border: 'none', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          borderRadius: '5px',
          fontSize: '1rem'
        }}
      >
        Get Started
      </button>

      <h2 style={{ marginTop: '40px', color: '#FFD700' }}>About Tezro</h2>
      <p>Tezro Super is an advanced multi-service digital platform built to revolutionize the way people access services.</p>
    </div>
  );
};

export default Home;
