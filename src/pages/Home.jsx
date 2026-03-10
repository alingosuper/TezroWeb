import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: '#000', color: '#FFD700', padding: '50px', textAlign: 'center', minHeight: '100vh' }}>
      <h1>Tezro Super App</h1>
      <p style={{ color: '#fff' }}>Welcome to the next generation platform.</p>
      <button 
        onClick={() => navigate('/register')}
        style={{ backgroundColor: '#FFD700', color: '#000', padding: '15px 30px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
