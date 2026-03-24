import React, { useState } from 'react';
import { db, storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { compressTezroImage } from '../../utils/ImageCompressor';
import { extractTezroData } from '../../utils/OCRProcessor';

const UniversalForm = ({ category, onBack }) => {
  const [loading, setLoading] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '', phone: '', city: '', cnicNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCNICUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const data = await extractTezroData(file, (percent) => {
      setOcrProgress(percent);
    });

    if (data.success && data.cnic !== "پہچان نہیں ہوسکی") {
      setFormData(prev => ({ ...prev, cnicNumber: data.cnic }));
      alert("🛡️ Tezro AI: شناختی کارڈ نمبر خود بخود شناخت کر لیا گیا!");
    }
    setLoading(false);
    setOcrProgress(0);
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
      const selfieUrl = await uploadAndGetURL(e.target.selfie.files[0], 'selfies');
      const cnicFrontUrl = await uploadAndGetURL(e.target.cnicFront.files[0], 'cnic');
      
      await addDoc(collection(db, "registrations"), {
        ...formData,
        category,
        selfieUrl,
        cnicFrontUrl,
        status: "pending",
        createdAt: serverTimestamp()
      });

      alert("🛡️ Tezro: رجسٹریشن کامیاب!");
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
      <h2 style={{ color: '#FFD700' }}>{category} رجسٹریشن</h2>
      
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="پورا نام" onChange={handleChange} required style={inputStyle} />
        <input 
           name="cnicNumber" 
           value={formData.cnicNumber} 
           placeholder="شناختی کارڈ نمبر" 
           onChange={handleChange} 
           required style={inputStyle} 
        />
        <input name="phone" placeholder="موبائل نمبر" onChange={handleChange} required style={inputStyle} />

        <div style={securitySection}>
          <label style={labelStyle}>🤳 سیلفی:</label>
          <input type="file" name="selfie" accept="image/*" required style={fileInput} />

          <label style={labelStyle}>🪪 شناختی کارڈ (فرنٹ):</label>
          <input 
            type="file" 
            name="cnicFront" 
            accept="image/*" 
            onChange={handleCNICUpload} 
            required style={fileInput} 
          />
          {ocrProgress > 0 && <p style={{color: '#FFD700', fontSize: '10px'}}>پڑھنے کی رفتار: {ocrProgress}%</p>}
        </div>

        <button type="submit" disabled={loading} style={submitBtn}>
          {loading ? "پروسیسنگ جاری ہے..." : "ڈیٹا جمع کریں"}
        </button>
      </form>
    </div>
  );
};

const formCardStyle = { background: '#0a0a0a', padding: '20px', borderRadius: '20px', border: '1px solid #FFD700', maxWidth: '380px' };
const inputStyle = { width: '100%', padding: '12px', margin: '8px 0', background: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '8px' };
const securitySection = { background: 'rgba(255, 215, 0, 0.05)', padding: '15px', borderRadius: '12px', border: '1px dashed #FFD700' };
const labelStyle = { display: 'block', fontSize: '12px', color: '#FFD700' };
const fileInput = { width: '100%', color: '#ccc' };
const submitBtn = { width: '100%', padding: '15px', backgroundColor: '#FFD700', fontWeight: 'bold', borderRadius: '8px', marginTop: '20px' };
const backBtn = { background: 'none', border: 'none', color: '#FFD700' };

export default UniversalForm;
