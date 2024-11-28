import React from 'react';
import { useAuth } from '../EmployeeRecords/AuthContext/AuthContext'; // Ensure you have access to Auth context
import { useNavigate } from 'react-router-dom';
import Header from '../../header/Header';
import image from '../Images/Website Designer in Wembley London 1 (1).png'; // Make sure this path is correct for the image
import './Homepage.css';

const Homepage = () => {
    const { role, EmpID } = useAuth(); // Access the user's role and EmpID from Auth context
    const navigate = useNavigate();

    console.log('Logged in user:', { EmpID, role }); // Log the role and EmpID to check if they are being correctly retrieved

    const handleLeaveManagementClick = () => {
        navigate('/Leavebalance'); // Navigate to Leave Management Homepage
    };

    const handleEmployeeRecordClick = () => {
        console.log('Navigating with EmpID:', EmpID); // Log the EmpID before navigation

        if (role === 'Employee') {
            navigate('/updateemployee', { state: { EmpID } }); // Pass EmpID when role is Employee
        } else if (role === 'Admin') {
            navigate('/EmployeeDataView'); // Admin role redirects to EmployeeDataView
        }
    };

    return (
        <>
            <Header title="HRMS" /> {/* Assuming you have a Header component that takes a title prop */}
            
            {/* Image Section */}
            <div className="container">
                <img src={image} className='image' alt="Website" /> {/* Ensure image path is correct */}
            </div>

            {/* Button Section */}
            <div className="button-container">
                {/* Role-based button rendering */}
                <button className="button" onClick={handleEmployeeRecordClick}>
                    {role === 'Employee' ? 'Update Employee' : 'Employee Records'}
                </button>
                <button className="button" onClick={handleLeaveManagementClick}>Leave Management</button>
                <button className="button">Time Tracker</button>
                <button className="button">Payslip</button>
                <button className="button">Training</button>
            </div>
        </>
    );
};

export default Homepage;
