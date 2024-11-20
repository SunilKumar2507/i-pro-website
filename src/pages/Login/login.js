import Header from '../../components/header/Header';
import './login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isResetPassword, setIsResetPassword] = useState(false);
    const navigate = useNavigate();
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let url, body;
    
            if (isResetPassword) {
                // Correct URL for reset password
                url = 'http://localhost:3001/reset-password';
                body = JSON.stringify({ email });
            } else {
                // Correct URL for login
                url = 'http://localhost:3001/';
                body = JSON.stringify({ email, password });
            }
    
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body,
            });
    
            if (!response.ok) {
                const errorMessage = `HTTP error! status: ${response.status}`;
                throw new Error(errorMessage);
            }
    
            const data = await response.json();
            if (data.success) {
                if (isResetPassword) {
                    alert('Password reset email sent');
                } else {
                    // alert('Login successful');
                }
                
                if (!isResetPassword) {
                    localStorage.setItem('user', JSON.stringify({ name: data.name, email: data.email }));
                    navigate('/Homepage', { state: { userName: data.name } });
                }
            } else {
                alert('Failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert(`Network error: ${error.message}. Please ensure the server is running and reachable.`);
        }
    };
    
 
    return (
        <>
            <Header />
            <form className = "loginForm" onSubmit={handleSubmit}>
                <p className='paragraph'>{isResetPassword ? 'Reset Password' : 'Sign in'}</p>
                <label className = "loginLable">
                    <input
                    className='loginInput'
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                {!isResetPassword && (
                    <label className = "loginLable">
                        <input
                        className='loginInput'
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                )}
                <button className = "loginButton"type="submit">{isResetPassword ? 'Send Reset Link' : 'Login'}</button>
                <a href='#' onClick={() => setIsResetPassword(!isResetPassword)} className='resetpassword'>
                    {isResetPassword ? 'Back to Login' : 'Forgot Password?'}
                </a>
            </form>
        </>
    );
};
 
export default LoginForm;