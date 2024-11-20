import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './profilepopup.css';
import { FaSignOutAlt } from 'react-icons/fa';
 
const ProfilePopup = ({ onClose, userName, onProfileImageUpdate, setUserName, setIsLoggedIn }) => {
    const [profileImage, setProfileImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
 
    useEffect(() => {
        const fetchProfileImage = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/profile-image/${userName}`);
                if (response.data.image) {
                    setProfileImage(`data:image/png;base64,${response.data.image}`);
                }
            } catch (error) {
                console.error('Failed to load profile image:', error);
            }
        };
 
        fetchProfileImage();
    }, [userName]);
 
    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setProfileImage(URL.createObjectURL(file));
        }
    };
 
    const handleSave = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('profileImage', selectedFile);
            formData.append('userName', userName);
 
            try {
                await axios.post('http://localhost:3001/upload-profile-image', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setSuccessMessage('Updated successfully!');
                setErrorMessage('');
                onProfileImageUpdate(URL.createObjectURL(selectedFile));
                setTimeout(() => onClose(), 2000);
            } catch (error) {
                setErrorMessage('Failed to save profile image.');
                setSuccessMessage('');
                console.error('Failed to save profile image:', error);
            }
        } else {
            setErrorMessage('No file selected!');
        }
    };
 
    const handleSignOut = async () => {
        try {
            const response = await axios.post('http://localhost:3001/logout', { userName });
            if (response.status === 200) {
                localStorage.removeItem('user'); // Clear user data from localStorage
                setUserName('');  // Clear the userName in Header
                setIsLoggedIn(false);  // Set login state to false in Header
                navigate('/');  // Redirect the user to the login page
                window.location.reload();  // Reload the page to update the header
            } else {
                console.error('Failed to logout:', response.data);
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
 
    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
 
    return (
        <div className="profile-popup">
            <i className="fas fa-times close-icon" onClick={onClose} title="Close"></i>
            <div className="profile-content">
                <div className="profile-image-container">
                    {profileImage ? (
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="profile-image"
                        />
                    ) : (
                        <span>No Image</span>
                    )}
                </div>
                <div className="profile-details">
                    <h2 className="h2">{userName || 'User Name'}</h2>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="file"
                        ref={fileInputRef} // Add ref to file input
                        style={{ display: 'none' }} // Hide the default file input
                    />
                    <button
                        onClick={triggerFileInput}
                        className="edit-button"
                        title="Edit"
                    >
                        Edit
                    </button>
                    <i
                        className="fas fa-save save-icon"
                        onClick={handleSave}
                        title="Save"
                    ></i>
                    <div className="horizontal-container">
                        <hr/>
                    </div>
                    <div className="signout-container">
                        <FaSignOutAlt className="signout-icon" />
                        <p className="signout-link" onClick={handleSignOut}>Sign Out</p>
                    </div>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
};
 
export default ProfilePopup;