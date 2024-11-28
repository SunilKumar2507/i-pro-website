import React, { useState } from "react";
import Header from "../../../header/Header";
import { useAuth } from '../../EmployeeRecords/AuthContext/AuthContext';
import "./CompanyHolidays.css";

const holidaysByMonth = {
    January: [
        { name: "New Year's Day", date: "Jan 1" },
        { name: "Makar Sankranti/Pongal", date: "Jan 14" },
        { name: "Republic Day", date: "Jan 26" },
    ],
    February: [
        { name: "Vasant Panchami", date: "Feb 10" },
        { name: "Maha Shivaratri", date: "Feb 18" },
    ],
    March: [
        { name: "Holi", date: "Mar 8" },
        { name: "Gudi Padwa/Ugadi", date: "Mar 22" },
    ],
    April: [
        { name: "Good Friday", date: "Apr 7" },
        { name: "Ram Navami", date: "Apr 21" },
    ],
    May: [
        { name: "May Day", date: "May 1" },
        { name: "Eid al-Fitr", date: "May 2" },
    ],
    June: [
        { name: "Maharana Pratap Jayanti", date: "Jun 15" },
    ],
    July: [
        { name: "Rath Yatra", date: "Jul 12" },
        { name: "Bakri Eid/Eid al-Adha", date: "Jul 21" },
    ],
    August: [
        { name: "Independence Day", date: "Aug 15" },
        { name: "Raksha Bandhan", date: "Aug 22" },
    ],
    September: [
        { name: "Ganesh Chaturthi", date: "Sep 10" },
        { name: "Onam", date: "Sep 14" },
    ],
    October: [
        { name: "Gandhi Jayanti", date: "Oct 2" },
        { name: "Dussehra", date: "Oct 15" },
    ],
    November: [
        { name: "Diwali", date: "Nov 4" },
        { name: "Guru Nanak Jayanti", date: "Nov 19" },
    ],
    December: [
        { name: "Christmas", date: "Dec 25" },
    ],
};

const CompanyHolidays = () => {
    const { role } = useAuth(); // Get the role from AuthContext
    const [selectedMonth, setSelectedMonth] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [holidayDetails, setHolidayDetails] = useState({
        month: "",
        name: "",
        date: "",
    });

    const handleMonthChange = (event) => {
        const month = event.target.value;
        setSelectedMonth(month === "clear" ? "" : month);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setHolidayDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSaveHoliday = () => {
        const { month, name, date } = holidayDetails;

        if (month && name && date) {
            if (!holidaysByMonth[month]) {
                holidaysByMonth[month] = [];
            }
            holidaysByMonth[month].push({ name, date });

            setHolidayDetails({ month: "", name: "", date: "" });
            setShowPopup(false);
        } else {
            alert("Please fill in all fields.");
        }
    };

    const filteredHolidays = selectedMonth
        ? { [selectedMonth]: holidaysByMonth[selectedMonth] }
        : holidaysByMonth;

    return (
        <>
            <Header title="Company Holidays" />
            <div className="company-holidays">
                <div className="month-selector">
                    <label htmlFor="month">Select Month: </label>
                    <select id="month" value={selectedMonth} onChange={handleMonthChange}>
                        <option value="">All Months</option>
                        {Object.keys(holidaysByMonth).map((month) => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))}
                        <option value="clear">Clear</option>
                    </select>
                </div>

                <div className="holiday-container">
                    {Object.entries(filteredHolidays).map(([month, holidays]) => (
                        <div key={month} className="month-row">
                            <h3>{month}</h3>
                            {holidays.map((holiday, index) => (
                                <div key={index} className="holiday-box">
                                    <div className="holiday-name">
                                        {holiday.name} - {holiday.date}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Only render the "Add Holiday" button if the user is an admin */}
                {role === "Admin" && (
                    <button className="add-holiday-button" onClick={() => setShowPopup(true)}>
                        Add Holiday
                    </button>
                )}

                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <h2>Add Holiday</h2>
                            <div className="popup-field">
                                <label htmlFor="month">Month Name:</label>
                                <select
                                    name="month"
                                    value={holidayDetails.month}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select a Month</option>
                                    {Object.keys(holidaysByMonth).map((month) => (
                                        <option key={month} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="popup-field">
                                <label htmlFor="name">Holiday Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={holidayDetails.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="popup-field">
                                <label htmlFor="date">Date:</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={holidayDetails.date}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="popup-actions">
                                <button onClick={handleSaveHoliday}>Save</button>
                                <button onClick={() => setShowPopup(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CompanyHolidays;
