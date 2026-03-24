import React from "react";

const categories = ["Vendor", "Driver", "Delivery Boy", "Hotel Manager", "Shopkeeper", "Plumber", "Carpenter"];

const CategoryPopup = ({ setCategory }) => {
  return (
    <div style={overlayStyle}>
      <div style={cardStyle}>
        <h3 style={{ color: '#FFD700', marginBottom: '20px' }}>Select Category</h3>
        <div style={gridStyle}>
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)} style={itemStyle}>
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const overlayStyle = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };
const cardStyle = { backgroundColor: '#111', padding: '30px', borderRadius: '20px', border: '1px solid #FFD700', textAlign: 'center', width: '85%' };
const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' };
const itemStyle = { padding: '12px', background: '#222', color: '#fff', border: '1px solid #333', borderRadius: '10px', cursor: 'pointer', fontSize: '14px' };

export default CategoryPopup;
