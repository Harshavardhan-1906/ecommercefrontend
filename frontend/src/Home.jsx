import React from 'react';

function Home({ products, addToCart }) {
  return (
    <div style={{ 
      padding: 'clamp(20px, 5vw, 40px)', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: 'calc(100vh - 80px)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: 'white', 
        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', 
        marginBottom: 'clamp(20px, 5vw, 40px)',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        margin: '0 0 clamp(20px, 5vw, 40px) 0'
      }}>🛍️ Available Products</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', 
        gap: 'clamp(15px, 3vw, 30px)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {products.map(product => (
          <div key={product._id} style={{ 
            background: 'white',
            borderRadius: '15px',
            padding: 'clamp(15px, 3vw, 20px)',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            height: 'fit-content'
          }}
          onMouseEnter={(e) => {
            if (window.innerWidth > 768) {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
          }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ 
                width: '100%', 
                height: 'clamp(150px, 20vw, 200px)', 
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '15px'
              }} 
            />
            <h3 style={{ 
              color: '#333', 
              fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', 
              marginBottom: '10px',
              fontWeight: '600',
              lineHeight: '1.3'
            }}>{product.name}</h3>
            <p style={{ 
              fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
              color: '#667eea', 
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>${product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              style={{ 
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 24px)',
                width: '100%',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  e.target.style.transform = 'scale(1.05)';
                }
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
              }}>
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;