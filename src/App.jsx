import { useState } from 'react';
import ProductList from './components/ProductList';
function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState('');
  const toggleVisibility = () => {
    setShowProducts(!showProducts);
  };
  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#1a1a1a' }}>  
      <h1 style={{ fontSize: '2.2rem', marginBottom: '24px', paddingBottom: '10px', borderBottom: '1px solid #eaeaea' }}>
        React Product Dashboard
      </h1>
      <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <input 
          type="text" 
          value={name} 
          onChange={handleNameInput} 
          placeholder="Type your name here..."
          style={{ 
            padding: '10px 15px', 
            fontSize: '16px', 
            borderRadius: '6px', 
            border: '1px solid #d1d5db', 
            outline: 'none',
            width: '250px'
          }}
        />
        <p style={{ fontSize: '18px', fontWeight: '500', margin: 0 }}>
          Hello, {name}
        </p>
      </div>
      <button 
        onClick={toggleVisibility}
        style={{ 
          padding: '10px 24px', 
          fontSize: '16px', 
          fontWeight: '500',
          cursor: 'pointer', 
          backgroundColor: '#111827', 
          color: '#ffffff', 
          border: 'none', 
          borderRadius: '6px', 
          marginBottom: '30px'
        }}
      >
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>
      {showProducts && <ProductList />}
    </div>
  );
}
export default App;