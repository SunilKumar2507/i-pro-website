import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../EmployeeRecords/AuthContext/AuthContext'; // Importing useAuth to access EmpID and role
import Header from '../../../header/Header';
import { useNavigate } from 'react-router-dom';
import './LeaveBalance.css';

const LeaveBalance = () => {
    const { role, EmpID } = useAuth();  // Destructure EmpID and role from the context
    const [leaveBalance, setLeaveBalance] = useState([]);
    const [message, setMessage] = useState('');
    const [userRole, setUserRole] = useState(role);  // Initialize userRole with role from context

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/ApplyleaveScreen');
    };

    const handleClickcompanybalance = () => {
        navigate('/companyholidays');
    };

    const handleClickApprover = () => {
        if (userRole === 'Manager') {
            navigate('/approveleave');
        }
    };

    const handleClickStatus = () => {
        navigate('/LeaveSubmitted');
    };

    useEffect(() => {
        setUserRole(role);  // Update the userRole whenever the role changes
        fetchLeaveBalance();
    }, [role]);  // Run the effect whenever role changes

    const fetchLeaveBalance = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/leave_balance?EmpID=${EmpID}`);
            // Filter the data to only include the logged-in user's records
            const userLeaveBalance = response.data.filter(
                (record) => record.EmpID === EmpID
            );
            setLeaveBalance(userLeaveBalance);
        } catch (error) {
            setMessage('Error fetching leave balance: ' + error.message);
        }
    };

    return (
        <>
            <Header title="Leave Balance Dashboard" />
            <div>
                <br />
                <br />
                {message && <p>{message}</p>}
                <table>
                    <thead>
                        <tr>
                            <th>EmpID</th>
                            <th>LeaveType</th>
                            <th>Assigned Leave</th>
                            <th>Carryforward Leave</th>
                            <th>Availed Leave</th>
                            <th>Pending Leaves</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaveBalance.map((record) => (
                            <tr key={record.leavebalanceid}>
                                <td>{record.EmpID}</td>
                                <td>{record.Leavetype}</td>
                                <td>{record.AssignedLeave}</td>
                                <td>{record.CarryforwardBalance}</td>
                                <td>{record.AvailedLeave}</td>
                                <td>{record.pendingLeave}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={handleClick} className="applyleave">
                    Apply Leave
                </button>
                <button onClick={handleClickcompanybalance} className="Companyholidays">
                    Company Holidays
                </button>
                <button onClick={handleClickStatus} className="LeaveSubmitted ">
                    LeaveStatus
                </button>
                <button
                    className={`approver ${userRole !== 'Manager' ? 'disabled-button' : ''}`}
                    onClick={handleClickApprover}
                    disabled={userRole !== 'Manager'}
                >
                    Approver
                </button>
            </div>
        </>
    );
};

export default LeaveBalance;
