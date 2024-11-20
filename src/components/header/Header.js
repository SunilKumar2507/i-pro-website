import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../images/logo.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProfilePopup from '../../pages/profile/profilepopup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Header = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
 
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.name) {
            setIsLoggedIn(true);
            setUserName(user.name);
        } else {
            setIsLoggedIn(false);
            setUserName('');  // Clear userName on load if not logged in
        }
    }, []);
 
    const togglePopup = () => {
        if (isLoggedIn) {
            setShowPopup(!showPopup);
        } else {
            alert('Please log in to access the profile.');
            navigate('/'); // Redirect to the login page if not logged in
        }
    };
 
    const handleProfileImageUpdate = (newImage) => {
        setProfileImage(newImage);
    };
 
    const handleSignOut = async () => {
        try {
            const response = await axios.post('http://localhost:5000/logout', { userName });
            if (response.status === 200) {
                setProfileImage(null);
                localStorage.removeItem('user');  // Clear user data from localStorage
                setIsLoggedIn(false);  // Update login state
                setUserName('');  // Clear userName
                setShowPopup(false);  // Close the profile popup
                navigate('/');  // Redirect to the homepage or login page
            } else {
                console.error('Failed to logout:', response.data);
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
 
    return (
        <div className="header">
            <h1>REQUEST FOR QUOTE</h1>
            <div className="header-right">
                <img src={logo} className='logo' alt="Logo" />
                <span className="welcome-message">Welcome, {isLoggedIn ? userName : 'User'}</span>
                <div className="profile-icon-container" onClick={togglePopup} title="Profile">
                    {profileImage ? (
                        <img src={profileImage} className="profile-icon-img" alt="Profile" />
                    ) : (
                        <i className="fas fa-user-circle profile-icon"></i>
                    )}
                </div>
                {showPopup && isLoggedIn && (
                    <ProfilePopup
                        onClose={togglePopup}
                        userName={userName}
                        onProfileImageUpdate={handleProfileImageUpdate}
                        onSignOut={handleSignOut} // Pass handleSignOut as a prop
                        setUserName={setUserName}  // Pass setUserName as a prop
                        setIsLoggedIn={setIsLoggedIn}  // Pass setIsLoggedIn as a prop
                    />
                )}
            </div>
        </div>
    );
};
 
export default Header;