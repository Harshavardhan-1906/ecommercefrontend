import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    padding: '10px 20px',
    borderRadius: '25px',
    transition: 'all 0.3s ease',
    display: 'block'
  };

  return (
    <nav style={{ 
      background: 'linear-gradient(135deg, #2c3e50, #34495e)', 
      color: 'white',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>CollegeStore</h1>
        
        {/* Desktop Menu */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px',
          '@media (max-width: 768px)': { display: 'none' }
        }}>
          <Link to="/" style={navLinkStyle}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.target.style.background = 'transparent'}>
            🏠 Home
          </Link>
          <Link to="/store" style={navLinkStyle}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.target.style.background = 'transparent'}>
            🛍️ Products
          </Link>
          <Link to="/cart" style={{
            ...navLinkStyle,
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
          }}
            onMouseEnter={(e) => e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)'}
            onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)'}>
            🛒 Cart ({cartCount})
          </Link>
          <Link to="/contact" style={navLinkStyle}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.target.style.background = 'transparent'}>
            📞 Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '10px'
          }}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          display: window.innerWidth <= 768 ? 'flex' : 'none',
          flexDirection: 'column',
          background: 'rgba(44, 62, 80, 0.95)',
          padding: '20px',
          gap: '10px'
        }}>
          <Link to="/" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>🏠 Home</Link>
          <Link to="/store" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>🛍️ Products</Link>
          <Link to="/cart" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>🛒 Cart ({cartCount})</Link>
          <Link to="/contact" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>📞 Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;