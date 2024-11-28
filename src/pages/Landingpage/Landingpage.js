import Header from '../../components/header/Header';
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Landingpage/Landingpage.css";

function LandingPage() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
        <Header/>
        <div className="landing-container">
            <header className="landing-header">
                <h1>Welcome to Teamipro</h1>
            </header>
            <div className="landing-buttons">
                <button
                    className="landing-button rfq-button"
                    onClick={() => handleNavigation("/LoginForm")}
                >
                    Go to RFQ
                </button>
                <button
                    className="landing-button hrms-button"
                    onClick={() => handleNavigation("/HrmsLoginForm")}
                >
                    Go to HRMS
                </button>
            </div>
        </div>
        </>
    );
}

export default LandingPage;
