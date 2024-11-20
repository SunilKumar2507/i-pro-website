import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Resetpassword.css'
import Header from '../../components/header/Header'
 
const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
 
        try {
            const response = await fetch('http://localhost:3001/update-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, newPassword }),
            });
 
            if (!response.ok) {
                throw new Error('Error resetting password');
            }
 
            const data = await response.json();
            if (data.success) {
                alert('Password reset successful');
                navigate('/');
            } else {
                alert('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error resetting password. Please try again.');
        }
    };
 
    return (
        <form className='resetForm' onSubmit={handleSubmit}>
            <p className='resetHeading'>Reset your password</p>
            <label className='resetLabel'>
                <input
                className='resetHeadingInput1'
                    type="password"
                    value={newPassword}
                    placeholder="New Password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </label>
            <label className='resetLabel'>
                <input
                className='resetHeadingInput2'
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm New Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </label>
            <button className='resetSubmitbtn'type="submit">Reset Password</button>
        </form>
    );
};
 
export default ResetPassword;