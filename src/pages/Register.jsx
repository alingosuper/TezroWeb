import React, { useState } from 'react';
import { auth, signInWithGoogle, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { addDoc, collection } from 'firebase/firestore';

const Register = () => {
  const [user] = useAuthState(auth);
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [nickname, setNickname] = useState('');

  const handleRegistration = async () => {
    try {
      // صرف قلیل ترین ڈیٹا بھیجنا
      await addDoc(collection(db, "registrations"), {
        uid: user.uid,
        adminViewName: nickname || user.displayName, // ایڈمن کو صرف یہ نام دکھے گا
        category: category,
        timestamp: new Date()
      });
      alert("رجسٹریشن کامیاب! ایڈمن آپ سے جلد رابطہ کرے گا۔");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  if (!user) {
    return (
      <div style={{ backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ color: '#FFD700' }}>آگے بڑھنے کے لیے لاگ ان کریں</h2>
        <button onClick={signInWithGoogle} style={btnStyle}>Google کے ساتھ لاگ ان کریں</button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', minHeight: '100vh' }}>
      <h2 style={{ color: '#FFD700' }}>خوش آمدید، {user.displayName}</h2>
      {step === 1 && (
        <div>
          <label>اپنا پسندیدہ نام (Nickname) درج کریں جو ایڈمن کو نظر آئے:</label>
          <input 
            type="text" 
            onChange={(e) => setNickname(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '10px 0', background: '#222', color: '#fff' }} 
          />
          <select onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', padding: '10px', background: '#222', color: '#fff' }}>
            <option value="">کیٹیگری منتخب کریں</option>
            <option value="driver">ڈرائیور</option>
            <option value="plumber">پلمبر</option>
          </select>
          <button onClick={handleRegistration} style={btnStyle}>رجسٹر کریں</button>
        </div>
      )}
    </div>
  );
};

const btnStyle = { backgroundColor: '#FFD700', color: '#000', padding: '12px 24px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' };

export default Register;
