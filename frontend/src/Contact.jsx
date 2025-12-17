import React from 'react';

function Contact() {
  return (
    <div style={{ 
      minHeight: 'calc(100vh - 80px)',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: 'clamp(20px, 5vw, 40px)',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: 'clamp(30px, 6vw, 40px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#333',
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
          marginBottom: 'clamp(20px, 5vw, 40px)',
          fontWeight: '600'
        }}>📞 Contact Us</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: 'clamp(20px, 4vw, 40px)',
          alignItems: 'start'
        }}>
          <div>
            <h3 style={{ color: '#667eea', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '20px' }}>Get in Touch</h3>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: '#666', marginBottom: '10px' }}>
                <strong>📧 Email:</strong> support@collegestore.com
              </p>
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: '#666', marginBottom: '10px' }}>
                <strong>📱 Phone:</strong> +1 (555) 123-4567
              </p>
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: '#666', marginBottom: '10px' }}>
                <strong>📍 Address:</strong> 123 College Street, University City, UC 12345
              </p>
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: '#666' }}>
                <strong>🕒 Hours:</strong> Mon-Fri 9AM-6PM, Sat 10AM-4PM
              </p>
            </div>
          </div>
          
          <div>
            <h3 style={{ color: '#667eea', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '20px' }}>Send Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="text" 
                placeholder="Your Name" 
                style={{
                  padding: 'clamp(12px, 3vw, 15px)',
                  border: '2px solid #f0f0f0',
                  borderRadius: '10px',
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                style={{
                  padding: 'clamp(12px, 3vw, 15px)',
                  border: '2px solid #f0f0f0',
                  borderRadius: '10px',
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
              />
              <textarea 
                placeholder="Your Message" 
                rows="4"
                style={{
                  padding: 'clamp(12px, 3vw, 15px)',
                  border: '2px solid #f0f0f0',
                  borderRadius: '10px',
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
              />
              <button 
                type="submit"
                style={{
                  padding: 'clamp(12px, 3vw, 15px)',
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                }}
                onMouseEnter={(e) => {
                  if (window.innerWidth > 768) {
                    e.target.style.transform = 'translateY(-2px)';
                  }
                  e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                }}
              >
                Send Message 📤
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;