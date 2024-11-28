import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../header/Header'; // Importing your Header component
import './EmployeeViewData.css'; // Add this CSS file for styling
import axios from 'axios'; // Import axios for making HTTP requests
import { FaSearch, FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // Import the necessary icons
import Modal from 'react-modal'; // For the popup modal
import EmployeeAddpopup from '../EmployeeAddpopup/EmployeeAddpopup';

Modal.setAppElement('#root');

const EmployeeDataView = () => {
    const [employees, setEmployees] = useState([]); // State to hold employee data
    const [searchTerm, setSearchTerm] = useState(''); // State to hold search input
    const [modalIsOpen, setModalIsOpen] = useState(false); // State to control the modal
    const [selectedEmployee, setSelectedEmployee] = useState(null); // State for the selected employee for editing
    const [isViewMode, setIsViewMode] = useState(false); // State to control view/edit mode

    const navigate = useNavigate(); // To navigate to AddEmployee page

    // Fetch employee records
    const fetchEmployeeRecords = async () => {
        try {
            const response = await axios.get('http://localhost:3001/employeerecord');
            if (response.data.success) {
                setEmployees(response.data.data); // Fetching employees data
            }
        } catch (error) {
            console.error('Error fetching employee records:', error);
        }
    };

    useEffect(() => {
        fetchEmployeeRecords(); // Fetch the employee records
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); // Update search term
    };

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setIsViewMode(false); // Set to edit mode
        setModalIsOpen(true); // Open the modal for editing
    };

    const handleAdd = () => {
        setSelectedEmployee(null); // Clear selected employee
        setIsViewMode(false); // Set to add mode
        setModalIsOpen(true); // Open the modal for adding
    };

    const handleView = (employee) => {
        setSelectedEmployee(employee);
        setIsViewMode(true); // Set to view mode
        setModalIsOpen(true); // Open the modal for viewing
    };

    const handleDelete = async (EmpID) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                const response = await axios.delete(`http://localhost:3001/api/delete-employee/${EmpID}`);
                if (response.data.success) {
                    fetchEmployeeRecords();  // Refresh employee list after deletion
                    alert('Employee deleted successfully!');
                } else {
                    alert('Failed to delete employee. Please try again.');
                }
            } catch (error) {
                console.error('Error deleting employee:', error.response ? error.response.data : error.message);
                alert('An error occurred while deleting the employee. Please try again.');
            }
        }
    };



    const handleToggleStatus = async (EmpID, currentStatus) => {
        console.log('EmpID:', EmpID);  // Check if EmpID is defined
        try {
            const updatedStatus = currentStatus === 'Active' ? 'Deactive' : 'Active';
            const response = await axios.patch(`http://localhost:3001/toggle-employee-status/${EmpID}`, {
                employmentstatus: updatedStatus,
            });

            if (response.data.success) {
                // Update local employee status
                setEmployees((prevEmployees) =>
                    prevEmployees.map((employee) =>
                        employee.EmpID === EmpID
                            ? { ...employee, employmentstatus: updatedStatus }
                            : employee
                    )
                );
            } else {
                console.error('Failed to update status');
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    // Filtered employees based on the search term
    const filteredEmployees = employees.filter(employee => {
        const searchValue = searchTerm.toLowerCase();
        return (
            employee.FirstName.toLowerCase().includes(searchValue) ||
            employee.LastName.toLowerCase().includes(searchValue) ||
            employee.EmpID.toString().includes(searchValue) ||
           // employee.email.toLowerCase().includes(searchValue) ||
            employee.assignrole.toLowerCase().includes(searchValue) ||
            employee.department.toLowerCase().includes(searchValue)
        );
    });

    return (
        <>
            <Header title="Employee Records" />
            <div className="rectangle-box1">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <FaSearch className="search-icon" />
                </div>

                <div className="add-employee-container">
                    <button className="add-employee-button" onClick={handleAdd}>
                        + Add
                    </button>
                </div>

                <div className="header-row">
                    <span>First Name</span>
                    <span>Employee ID</span>
                    <span>Department</span>
                    <span>Assign Role</span>
                    
                    <span>Image</span>
                    <span>Status</span>
                </div>

                <div className="data-container">
                    {filteredEmployees.map(employee => (
                        <div key={employee.EmpID} className="data-row"> {/* Ensure this is unique */}
                            <span>{employee.FirstName || 'N/A'}</span>
                            <span>{employee.EmpID || 'N/A'}</span>
                            <span>{employee.department || 'N/A'}</span>
                            <span>{employee.assignrole || 'N/A'}</span>
                           
                            <span>{employee.selectedImage1 || 'N/A'}</span>
                            <span>
                                <button
                                    className={`status-button ${employee.employmentstatus === 'Active' ? 'active' : 'deactive'}`}
                                    onClick={() => handleToggleStatus(employee.EmpID, employee.employmentstatus)}
                                >
                                    {employee.employmentstatus === 'Active' ? 'Active' : 'Deactive'}
                                </button>
                            </span>
                            <span className="action-icons">
                               
                                <FaEdit onClick={() => handleEdit(employee)} className="icon" />
                                <FaTrash onClick={() => handleDelete(employee.EmpID)} className="icons" />
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for adding/editing employee */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Add/Edit Employee"
                style={{
                    content: {
                        width: '1120px',
                        height: '650px',
                        margin: 'auto',
                    }
                }}
            >
                <h2>{isViewMode ? 'View Employee Details' : selectedEmployee ? 'Edit Employee' : 'Add Employee'}</h2>
                <EmployeeAddpopup
                    closeModal={() => setModalIsOpen(false)}
                    fetchEmployeeRecords={fetchEmployeeRecords}
                    employee={selectedEmployee} // Pass the selected employee for viewing/editing
                    isReadOnly={isViewMode} // Pass read-only state
                />
            </Modal>
        </>
    );
};

export default EmployeeDataView;
