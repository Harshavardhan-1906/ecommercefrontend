import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) { // We pass setUser to update the App state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
            
            // 1. SAVE TO BROWSER STORAGE (New Step)
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user)); 
            
            // 2. Update App State
            setUser(res.data.user);
            
            alert('Login Successful!');
            navigate('/store'); 
        } catch (err) {
            console.error(err);
            alert('Invalid Credentials');
        }
    };

    return (
        <div style={{ 
            minHeight: 'calc(100vh - 80px)',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(20px, 5vw, 40px)',
            boxSizing: 'border-box'
        }}>
            <div style={{
                background: 'white',
                padding: 'clamp(30px, 6vw, 40px)',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                width: '100%',
                maxWidth: '450px'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    color: '#333',
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    marginBottom: 'clamp(20px, 5vw, 30px)',
                    fontWeight: '600'
                }}>🔑 Login</h2>
                <form onSubmit={handleLogin}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        required 
                        style={{ 
                            width: '100%', 
                            padding: 'clamp(12px, 3vw, 15px)', 
                            marginBottom: '20px',
                            border: '2px solid #f0f0f0',
                            borderRadius: '10px',
                            fontSize: 'clamp(14px, 3vw, 16px)',
                            boxSizing: 'border-box',
                            transition: 'border-color 0.3s ease'
                        }} 
                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                        onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        required 
                        style={{ 
                            width: '100%', 
                            padding: 'clamp(12px, 3vw, 15px)', 
                            marginBottom: 'clamp(20px, 4vw, 30px)',
                            border: '2px solid #f0f0f0',
                            borderRadius: '10px',
                            fontSize: 'clamp(14px, 3vw, 16px)',
                            boxSizing: 'border-box',
                            transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                        onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                    />
                    <button 
                        type="submit" 
                        style={{ 
                            width: '100%', 
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
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;