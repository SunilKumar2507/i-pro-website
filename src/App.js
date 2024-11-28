// src/App.js
// import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../src/pages/Landingpage/Landingpage';
import Form from '../src/pages/GMCForm/Form';
import LoginForm from '../src/pages/Login/login';
import HomePage from './pages/HomePage/Homepage';
import ResetPassword from './pages/Resetpassword/Reserpassword';
import Hrmshomepage from '../src/components/hrms/Homepage/Homepage.js';
import HrmsloginForm from '../src/components/hrms/Login/Login.js';
import AddEmployee from '../src/components/hrms/EmployeeRecords/AddEmployeedata/AddEmployee';
import EmployeeDataView from '../src/components/hrms/EmployeeRecords/EmployeeViewData/EmployeeViewData.js';
import LMShomepage from '../src/components/hrms/LeaveManagementSystem/LMSHomepage/LMShomepage';
import ApplyLeave from '../src/components/hrms/LeaveManagementSystem/ApplyLeaveScreen/ApplyLeave.js';
import CompanyHolidays from '../src/components/hrms/LeaveManagementSystem/CompanyHolidays/CompanyHolidays.js';
import LeaveApprover from '../src/components/hrms/LeaveManagementSystem/LeaveApprover/LeaveApprover.js';
import LeaveBalance from '../src/components/hrms/LeaveManagementSystem/Leavebalance/LeaveBalance.js';
import LeaveSubmittedScreen from '../src/components/hrms/LeaveManagementSystem/LeaveSubmittedScreen/LeaveSubmittedScreen.js';
import { AuthProvider } from './components/hrms/EmployeeRecords/AuthContext/AuthContext.js';


const App = () => {
    // const [formData, setFormData] = useState({});

    // const handleFormData = (data) => {
    //     setFormData(data);
    // };

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route
                        path="/loginForm"
                        element={

                            <LoginForm />

                        }
                    />
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
                    <Route path="/HrmsloginForm" element={<HrmsloginForm />} />
                    <Route path="/Hrmshomepage" element={<Hrmshomepage />} />
                    <Route path="/EmployeeDataview" element={<EmployeeDataView />} />
                    <Route path="/updateemployee" element={<AddEmployee />} />
                    <Route path="/LMShomepage" element={<LMShomepage />} />
                    <Route path="/ApplyleaveScreen" element={<ApplyLeave />} />
                    <Route path="/companyholidays" element={<CompanyHolidays />} />
                    <Route path="/approveleave" element={<LeaveApprover />} />
                    <Route path="/Leavebalance" element={<LeaveBalance />} />
                    <Route path="/LeaveSubmitted" element={<LeaveSubmittedScreen />} />

                </Routes>
            </Router>
        </AuthProvider>

    );
};

export default App;
