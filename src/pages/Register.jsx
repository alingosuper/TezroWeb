import React, { useState } from 'react';

const Register = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');

  // ہر کام کے مطابق مخصوص اشیاء (Items/Inventory) کا نقشہ
  const specificItems = {
    driver: ["گاڑی کا نمبر", "لائسنس نمبر", "گاڑی کی قسم (بائیک/کار)", "فیول ٹائپ"],
    plumber: ["تجربہ (سال)", "پلمبنگ ٹولز لسٹ", "سروس ایریا", "پائپ فٹنگ مہارت"],
    carpenter: ["لکڑی کی قسم", "فرنیچر ڈیزائننگ", "آری/مشین ٹائپ", "روزانہ اجرت"],
    delivery: ["بائیک ماڈل", "ڈیلیوری بیگ موجود ہے؟", "شناختی کارڈ نمبر", "زون"],
    postman: ["علاقہ (پوسٹل کوڈ)", "سائیکل/بائیک", "سرکاری تجربہ", "ڈاک خانہ نام"],
    hotel: ["ہوٹل کا نام", "کمروں کی تعداد", "مینو کیٹیگری", "ایڈریس"],
    manager: ["ہال کی گنجائش", "ایونٹ ٹائپ", "بکنگ ریٹ", "سیکیورٹی فیچرز"]
  };

  const btnStyle = { 
    backgroundColor: '#FFD700', 
    color: '#000', 
    padding: '12px', 
    border: 'none', 
    borderRadius: '5px', 
    fontWeight: 'bold', 
    cursor: 'pointer',
    marginTop: '20px',
    width: '100%'
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#FFD700', textAlign: 'center', textShadow: '0 0 10px gold' }}>TEZRO SUPER APP</h1>
      <h2 style={{ textAlign: 'center' }}>رجسٹریشن پورٹل</h2>

      {step === 1 && (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>اپنی مہارت منتخب کریں:</label>
          <select 
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '5px', background: '#222', color: '#fff', border: '1px solid #FFD700' }}
          >
            <option value="">-- منتخب کریں --</option>
            <option value="driver">ڈرائیور (Driver)</option>
            <option value="plumber">پلمبر (Plumber)</option>
            <option value="carpenter">کارپینٹر (Carpenter)</option>
            <option value="delivery">ڈلیوری بوائے (Delivery)</option>
            <option value="postman">ڈاکیا (Postman)</option>
            <option value="hotel">ہوٹل رجسٹریشن</option>
            <option value="manager">فنکشن ہال مینیجر</option>
          </select>
          <button onClick={() => setStep(2)} disabled={!category} style={btnStyle}>اگلا مرحلہ</button>
        </div>
      )}

      {step === 2 && (
        <div style={{ maxWidth: '400px', margin: 'auto', border: '1px solid #FFD700', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ color: '#FFD700', textTransform: 'uppercase' }}>{category} - ڈیٹا انٹری</h3>
          <p>براہ کرم صرف متعلقہ معلومات فراہم کریں:</p>
          
          {specificItems[category]?.map((item, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>{item}:</label>
              <input type="text" placeholder={`${item} درج کریں`} style={{ width: '100%', padding: '10px', background: '#333', border: '1px solid #555', color: '#fff' }} />
            </div>
          ))}

          <button onClick={() => alert('شکریہ! آپ کا ڈیٹا محفوظ ہو گیا ہے۔')} style={btnStyle}>رجسٹریشن مکمل کریں</button>
          <button onClick={() => setStep(1)} style={{ ...btnStyle, backgroundColor: '#444', color: '#fff' }}>واپس جائیں</button>
        </div>
      )}
    </div>
  );
};

export default Register;
