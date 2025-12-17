import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();

  // 1. Calculate Total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // 2. Checkout Function
  const handleCheckout = async () => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
      alert("Please Login to Checkout!");
      navigate('/login');
      return;
    }

    // Prepare Data for Backend
    const orderData = {
      userId: user.id, // We get this from the saved LocalStorage
      orderItems: cart.map(item => ({
        name: item.name,
        price: item.price,
        product: item._id
      })),
      totalPrice: total
    };

    try {
      // Send to Backend
      await axios.post('http://localhost:5000/api/orders', orderData);
      alert('Order Placed Successfully! 🎉');
      // Ideally, you would clear the cart here (we can do that next)
    } catch (error) {
      console.error(error);
      alert('Checkout Failed');
    }
  };

  return (
    <div style={{ 
      minHeight: 'calc(100vh - 80px)',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: 'clamp(20px, 5vw, 40px)',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: 'clamp(20px, 5vw, 40px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        width: '100%'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#333',
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
          marginBottom: 'clamp(20px, 5vw, 40px)',
          fontWeight: '600'
        }}>🛒 Your Shopping Cart</h2>
        
        {cart.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#666',
            fontSize: '1.2rem'
          }}>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                background: '#f8f9fa',
                borderRadius: '15px',
                padding: 'clamp(15px, 3vw, 20px)',
                marginBottom: '15px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                flexWrap: window.innerWidth <= 480 ? 'wrap' : 'nowrap',
                gap: window.innerWidth <= 480 ? '10px' : '0'
              }}>
                <span style={{ 
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
                  fontWeight: '500', 
                  color: '#333',
                  flex: window.innerWidth <= 480 ? '1 1 100%' : 'auto'
                }}>{item.name}</span>
                <span style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', 
                  fontWeight: 'bold', 
                  color: '#667eea',
                  flex: window.innerWidth <= 480 ? 'auto' : 'auto'
                }}>${item.price}</span>
                <button 
                  onClick={() => removeFromCart(index)} 
                  style={{ 
                    background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 15px)',
                    cursor: 'pointer',
                    fontSize: 'clamp(12px, 2.5vw, 14px)',
                    fontWeight: '600',
                    transition: 'transform 0.3s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => window.innerWidth > 768 && (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Remove ❌
                </button>
              </div>
            ))}
            
            <div style={{
              textAlign: 'center',
              margin: 'clamp(20px, 5vw, 40px) 0',
              padding: 'clamp(15px, 3vw, 20px)',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '15px',
              color: 'white'
            }}>
              <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', margin: 0 }}>Total: ${total}</h3>
            </div>
            
            <button 
              onClick={handleCheckout}
              style={{ 
                width: '100%',
                background: 'linear-gradient(45deg, #28a745, #20c997)', 
                color: 'white', 
                padding: 'clamp(15px, 3vw, 20px)', 
                border: 'none', 
                borderRadius: '15px',
                cursor: 'pointer', 
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                fontWeight: '600',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)'
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  e.target.style.transform = 'translateY(-3px)';
                }
                e.target.style.boxShadow = '0 8px 25px rgba(40, 167, 69, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.4)';
              }}
            >
              Place Order ✅
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;