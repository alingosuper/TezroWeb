import React, { Suspense, lazy } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// صفحات کو 'Lazy Load' کرنا سیکیورٹی اور اسپیڈ کے لیے بہتر ہے
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

>>>>>>> b1e980a (Fixed: App.jsx code manually saved)
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Security = lazy(() => import('./pages/Security'));
const Features = lazy(() => import('./pages/Features'));

<<<<<<< HEAD
// لوڈنگ کے دوران دکھانے کے لیے ایک سادہ اسکرین
const Loading = () => <div style={{textAlign: 'center', marginTop: '20%'}}>Loading Tezro Super App...</div>;
=======
const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a0a', color: '#fff' }}>
    <h2>Tezro Super App Loading...</h2>
  </div>
);
>>>>>>> b1e980a (Fixed: App.jsx code manually saved)

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
<<<<<<< HEAD
          {/* مین پیج */}
          <Route path="/" element={<Home />} />
          
          {/* رجسٹریشن پیج */}
          <Route path="/register" element={<Register />} />
          
          {/* سیکیورٹی پیج */}
          <Route path="/security" element={<Security />} />
          
          {/* فیچرز پیج */}
          <Route path="/features" element={<Features />} />

          {/* اگر کوئی غلط یو آر ایل لکھے تو واپس ہوم پر بھیج دیں */}
          <Route path="*" element={<Home />} />
=======
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/security" element={<Security />} />
          <Route path="/features" element={<Features />} />
          <Route path="*" element={<Navigate to="/" replace />} />
>>>>>>> b1e980a (Fixed: App.jsx code manually saved)
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
<<<<<<< HEAD
=======


>>>>>>> b1e980a (Fixed: App.jsx code manually saved)
