// src/App.js
// import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from '../src/pages/GMCForm/Form';
import LoginForm from '../src/pages/Login/login';
import HomePage from './pages/HomePage/Homepage';
import ResetPassword from './pages/Resetpassword/Reserpassword';


const App = () => {
    // const [formData, setFormData] = useState({});

    // const handleFormData = (data) => {
    //     setFormData(data);
    // };

    return (
        
            <Router>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route
                        path="/homepage"
                        element={
                            
                                <HomePage />
                            
                        }
                    />
                    <Route
                        path="/form"
                        element={
                                <Form />
                        }
                    />
                    <Route
                        path="/reset-password"
                        element={
                                <ResetPassword />
                        }
                    />
                    
                </Routes>
            </Router>

    );
};

export default App;
