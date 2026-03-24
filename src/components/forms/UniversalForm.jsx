import React, { useState } from 'react';
import { db, storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { compressTezroImage } from '../../utils/ImageCompressor';

const UniversalForm = ({ category, onBack }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', city: '', cnicNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadAndGetURL = async (file, path) => {
    if (!file) return null;
    const compressed = await compressTezroImage(file);
    const storageRef = ref(storage, `registrations/${category}/${path}/${Date.now()}`);
    await uploadBytes(storageRef, compressed);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // سیکیورٹی تصاویر کا اپلوڈ
      const selfieUrl = await uploadAndGetURL(e.target.selfie.files[0], 'selfies');
      const cnicFrontUrl = await uploadAndGetURL(e.target.cnicFront.files[0], 'cnic');
      
      await addDoc(collection(db, "registrations"), {
        ...formData,
        category,
        selfieUrl,
        cnicFrontUrl,
        status: "pending",
        securityVerified: false,
        createdAt: serverTimestamp()
      });

      alert("🛡️ Tezro: آپ کا ڈیٹا سیکیورٹی شیلڈ میں محفوظ کر لیا گیا ہے۔ ایڈمن تصدیق کے بعد رابطہ کرے گا۔");
      onBack();
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={formCardStyle}>
      <button onClick={onBack} style={backBtn}>← واپس جائیں</button>
      <h2 style={{ color: '#FFD700', fontSize: '20px' }}>{category} سیکیورٹی رجسٹریشن</h2>
      
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="پورا نام (شناختی کارڈ والا)" onChange={handleChange} required style={inputStyle} />
        <input name="cnicNumber" placeholder="شناختی کارڈ نمبر (13 ہندسے)" onChange={handleChange} required style={inputStyle} />
        <input name="phone" placeholder="موبائل نمبر" onChange={handleChange} required style={inputStyle} />

        <div style={securitySection}>
          <label style={labelStyle}>🤳 اپنی واضح سیلفی اپلوڈ کریں:</label>
          <input type="file" name="selfie" accept="image/*" required style={fileInput} />

          <label style={labelStyle}>🪪 شناختی کارڈ (فرنٹ) کی تصویر:</label>
          <input type="file" name="cnicFront" accept="image/*" required style={fileInput} />
        </div>

        <button type="submit" disabled={loading} style={submitBtn}>
          {loading ? "سیکیورٹی چیک جاری ہے..." : "ڈیٹا جمع کریں اور تصدیق کریں"}
        </button>
      </form>
    </div>
  );
};

const formCardStyle = { background: '#0a0a0a', padding: '20px', borderRadius: '20px', border: '1px solid #FFD700', width: '100%', maxWidth: '380px', boxShadow: '0 0 20px rgba(255, 215, 0, 0.1)' };
const inputStyle = { width: '100%', padding: '12px', margin: '8px 0', background: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '8px', boxSizing: 'border-box' };
const securitySection = { background: 'rgba(255, 215, 0, 0.05)', padding: '15px', borderRadius: '12px', margin: '15px 0', border: '1px dashed #FFD700' };
const labelStyle = { display: 'block', fontSize: '12px', color: '#FFD700', marginBottom: '5px', marginTop: '10px' };
const fileInput = { width: '100%', fontSize: '12px', color: '#ccc' };
const submitBtn = { width: '100%', padding: '15px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' };
const backBtn = { background: 'none', border: 'none', color: '#FFD700', cursor: 'pointer', marginBottom: '10px' };

export default UniversalForm;
