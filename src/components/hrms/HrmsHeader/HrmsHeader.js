import React, { useState, useEffect } from 'react';
import './HrmsHeader.css';
import logo from '../Images/logo.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProfilePopup from '../profile/profilepopup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HrmsHeader = ({ title }) => {
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
            setProfileImage(user.profileImage || null); // Load profile image from local storage
        } else {
            setIsLoggedIn(false);
            setUserName(''); // Clear userName on load if not logged in
            setProfileImage(null); // Reset profile image if not logged in
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
            const response = await axios.post('http://localhost:3001/logout', { userName });
            if (response.status === 200) {
                setProfileImage(null);
                localStorage.removeItem('user'); // Clear user data from localStorage
                setIsLoggedIn(false); // Update login state
                setUserName(''); // Clear userName
                setShowPopup(false); // Close the profile popup
                navigate('/'); // Redirect to the homepage or login page
            } else {
                console.error('Failed to logout:', response.data);
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div className="hrmsheader">
            <h1>{title}</h1> {/* Use the title prop here */}
            <div className="hrmsheader-right">
                <img src={logo} className='hrmslogo' alt="Logo" />
                <span className="hrmswelcome-message">Welcome, {isLoggedIn ? userName : 'User'}</span>
                <div className="hrmsprofile-icon-container" onClick={togglePopup} title="Profile">
                    {profileImage ? (
                        <img src={profileImage} className="hrmsprofile-icon-img" alt="Profile" />
                    ) : (
                        <i className="fas fa-user-circle hrmsprofile-icon"></i>
                    )}
                </div>
                {showPopup && isLoggedIn && (
                    <ProfilePopup
                        onClose={togglePopup}
                        userName={userName}
                        onProfileImageUpdate={handleProfileImageUpdate}
                        onSignOut={handleSignOut}
                        setUserName={setUserName}
                        setIsLoggedIn={setIsLoggedIn}
                        profileImage={profileImage}
                    />
                )}
            </div>
        </div>
    );
};

export default HrmsHeader;