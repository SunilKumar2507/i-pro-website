import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import image from '../../images/Data Analytics - Animation.gif';
import './Homepage.css';

const Homepage = () => {
    const location = useLocation();
    const { state } = location || {};
    const { userName } = state || {};
    const navigate = useNavigate();

    console.log('userName:', userName);

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;

        if (selectedValue === 'gmc') {
            navigate('/form', { state: { userName } });
        }
        // Add additional logic for other options if needed
    };

    return (
        <>
            <Header userName={userName} />
            <img src={image} alt="Data Analytics Animation" className="image" />
            <div className="dropdown-container">
                <div className="dropdown">
                    <select defaultValue="default" onChange={handleSelectChange}>
                        <option value="default" disabled hidden>REQUEST FOR QUOTE</option>
                        <option value="gmc">Group Mediclaim Policy (GMC)</option>
                        <option value="gpa">Group Personal Accident Policy (GPA)</option>
                        <option value="gtl">Group Term Life Policy (GTL)</option>
                        <option value="asset-policy">Asset Policy</option>
                        <option value="CGLP">Commercial General Liability  Policy</option>
                        <option value="dop">Directors'  Officers' policy</option>
                        <option value="eeip">Electornic equipment insuranc policy</option>
                        <option value="pmi">Plant and Machinery insurance</option>
                        <option value="ear">Erection All Risk Insurance (EAR)</option>
                        <option value="cear">Construction and Erection All Risk Policy (CEAR)</option>
                        <option value="wcp">Workmen's Compensation policy</option>

                    </select>
                </div>
                {/* <div className="dropdown">
                    <select defaultValue="default" onChange={handleSelectChange}>
                        <option value="default" disabled hidden>TAILOR MADE INSURANCE POLICY-RFQ</option>
                        <option value="gmc">Group Mediclaim Policy (GMC)</option>
                        <option value="gpa">Group Personal Accident Policy (GPA)</option>
                        <option value="gtl">Group Term Life Policy (GTL)</option>
                        <option value="asset-policy">Asset Policy</option>
                        <option value="general-liability">General Liability</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select defaultValue="default" onChange={handleSelectChange}>
                        <option value="default" disabled hidden>TAILOR MADE INSURANCE POLICY-RFQ</option>
                        <option value="gmc">Group Mediclaim Policy (GMC)</option>
                        <option value="gpa">Group Personal Accident Policy (GPA)</option>
                        <option value="gtl">Group Term Life Policy (GTL)</option>
                        <option value="asset-policy">Asset Policy</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select defaultValue="default" onChange={handleSelectChange}>
                        <option value="default" disabled hidden>TAILOR MADE INSURANCE POLICY-RFQ</option>
                        <option value="gmc">Group Mediclaim Policy (GMC)</option>
                        <option value="gpa">Group Personal Accident Policy (GPA)</option>
                        <option value="gtl">Group Term Life Policy (GTL)</option>
                        <option value="asset-policy">Asset Policy</option>
                        <option value="general-liability">General Liability</option>
                    </select>
                </div> */}
            </div>
        </>
    );
};

export default Homepage;
