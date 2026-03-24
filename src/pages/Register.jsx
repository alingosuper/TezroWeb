import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { registerUser } from '../api/register';
import CategoryPopup from '../components/popup/CategoryPopup';

const Register = () => {
  const [user] = useAuthState(auth);
  const [category, setCategory] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');

  const handleFinalSubmit = async () => {
    if (!nickname || !category || !phone) return alert("تمام خانے پُر کریں!");
    
    const userData = {
      uid: user.uid,
      name: nickname || user.displayName,
      category: category,
      phone: phone,
      email: user.email
    };

    await registerUser(userData);
    alert("Tezro: رجسٹریشن کامیابی سے ایڈمن کو بھیج دی گئی!");
  };

  if (!user) return (
    <div style={containerStyle}>
      <h2 style={{ color: '#FFD700' }}>TEZRO SECURE LOGIN</h2>
      <button onClick={signInWithGoogle} style={btnStyle}>Google Login</button>
    </div>
  );

  return (
    <div style={containerStyle}>
      {!category && <CategoryPopup setCategory={setCategory} />}
      
      <h2 style={{ color: '#FFD700' }}>خوش آمدید، {user.displayName}</h2>
      <p style={{color: 'gray'}}>کیٹیگری: <span style={{color: '#FFD700'}}>{category}</span></p>

      <div style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }}>
        <input placeholder="Nickname for Admin" onChange={(e)=>setNickname(e.target.value)} style={inputStyle} />
        <input placeholder="Mobile Number" onChange={(e)=>setPhone(e.target.value)} style={inputStyle} />
        
        <button onClick={handleFinalSubmit} style={btnStyle}>رجسٹریشن مکمل کریں</button>
      </div>
    </div>
  );
};

const containerStyle = { backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' };
const inputStyle = { width: '100%', padding: '12px', margin: '10px 0', background: '#111', color: '#fff', border: '1px solid #FFD700', borderRadius: '8px' };
const btnStyle = { backgroundColor: '#FFD700', color: '#000', width: '100%', padding: '15px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' };

export default Register;
