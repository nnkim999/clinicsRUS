import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../Styles/RescheduleAppointments.css";
import '../App.css';
//import FilterComponent from '../Components/FilterComponent';
import { AvailableAppointments } from "../Data/AvailableAppointments";
import { Dropdown, Button, Form, Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import ClinicsRUsLogo from "../ClinicsRUs.png";


function RescheduleAppointment() {
  const navigate = useNavigate(); 
  const [doctor, setDoctor] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [clickedButton, setClickedButton] = useState(null); // Track clicked button
  const [tooltipVisible, setTooltipVisible] = useState(false); // Track tooltip visibility
  const [isFilterVisible, setIsFilterVisible] = useState(true); //Filter visibility toggle
  const [selectedDoctors, setSelectedDoctors] = useState([]); //doctor multiselect
  const [filterValue, setFilterValue] = useState('all');

  const doctorOptions = [
    { value: 'doctor1', label: 'Dr. X' },
    { value: 'doctor2', label: 'Dr. Y' },
    { value: 'doctor3', label: 'Dr. Bob Brown' },
    { value: 'doctor4', label: 'Dr. Alice Green' },
  ];

  const handleDoctorChange = (selectedOptions) => {
    setSelectedDoctors(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const resetFilters = () => {
    setFilterValue('all');
    setDoctor("");
    setDateFrom("");
    setDateTo("");
    setSelectedDoctors([]);
  };

  const applyFilters = () => {
    alert(`Filters applied:\nDoctor: ${doctor}\nDate From: ${dateFrom}\nDate To: ${dateTo}`);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };


  const timeSlots = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  const dates = ["2024-12-03", "2024-12-04"]; // Example dates (can be dynamic)

  // Format date to display in header
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  // Check appointment status for a specific time slot
  const getTimeSlotStatus = (date, time) => {
    const appointment = AvailableAppointments.find((appt) => {
      const apptDate = new Date(appt.AppointmentDate).toDateString();
      const apptTime = new Date(appt.AppointmentTime).getHours();

      return (
        apptDate === new Date(date).toDateString() &&
        apptTime === parseInt(time.split(":")[0], 10)
      );
    });

    if (appointment) {
      return {
        status: "booked",
        doctor: appointment.Doctor,
      };
    }
    return null; // No matching appointment
  };

  // Handle button click to toggle selection
  const handleButtonClick = (date, time) => {
    const buttonKey = `${date}-${time}`;
    if (clickedButton === buttonKey) {
      setClickedButton(null); // Deselect
    } else {
      setClickedButton(buttonKey); // Select the clicked button
    }
  };

  // Toggle tooltip visibility
  const toggleTooltip = () => {
    setTooltipVisible((prev) => !prev);
  };

  // Render the appointment table
  const renderTable = () => {
    return (
      <div className="appointment-table">
        <div className="table-header">
          <div className="time-column"></div>
          {dates.map((date) => (
            <div key={date} className="date-column">
              {formatDate(date)}
            </div>
          ))}
        </div>
        <div className="table-body">
          {timeSlots.map((time) => (
            <React.Fragment key={time}>
              <div className="time-row">
                <div className="time-cell">{time}</div>
                {dates.map((date) => {
                  const status = getTimeSlotStatus(date, time);
                  return (
                    <div
                      key={`${date}-${time}`}
                      className="appointment-cell"
                    >
                      {status ? (
                        <button
                          className={`book-button ${
                            clickedButton === `${date}-${time}`
                              ? "clicked"
                              : ""
                          }`}
                          onClick={() => handleButtonClick(date, time)}
                        >
                          <div className="button-content">{time}</div>
                          {status.status === "booked" && (
                            <div className="doctor-name">
                              {status.doctor}
                            </div>
                          )}
                        </button>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };


  return (
    <><header>
      
    </header><><div className="container">
      <div className="header mb-0">
        <button className="main-button">Main</button>
        <img
          src={ClinicsRUsLogo} // Use the imported logo here
          alt="Clinic Logo"
          className="logo"
        />
      </div>
      <h1 style={{color: '#183E9F',fontWeight: 'bold' }}>Reschedule an Appointment</h1>
      <h3 >Current Appointment:</h3>
      <div className="filter-container">
        <div className="filter-header">
          <span>Filter</span>
          <button className="collapse-button" onClick={toggleFilterVisibility}>
            {isFilterVisible ? "\u25B2" : "\u25BC"} {/* ▲ for open, ▼ for collapsed */}
          </button>
        </div>
        {isFilterVisible && ( // Conditionally render filter content
          <div className="filter-content">
            <div className="filter-item">
              <label>Doctor:</label>
              <Select
                                isMulti
                                options={doctorOptions}
                                value={doctorOptions.filter(option => selectedDoctors.includes(option.value))}
                                onChange={handleDoctorChange}
                                placeholder="Select doctors"
                                isSearchable
                            />
            </div>
            <div className="filter-item">
              <label>Date From:</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="filter-item">
              <label>Date To:</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="filter-buttons">
              <button className="reset-button" onClick={resetFilters}>
                Reset
              </button>
              <button className="filter-button" onClick={applyFilters}>
                Filter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="container">
      {/* Render the table */}
      {renderTable()}

      {/* Legend */}
      <div className="legend-container">
        <div className="legend-item">
          <button className="legend-button unavailable">Unavailable</button>
        </div>
        <div className="legend-item">
          <button className="legend-button available">Available</button>
        </div>
        <div className="legend-item">
          <button className="legend-button selected">Selected ✓</button>
        </div>
      </div>

      {/* Tooltip and Book Appointment in the Same Row */}
      <div className="action-row">
        <div className="tooltip-container">
          {tooltipVisible && (
            <span className="tooltip-text">
              Please select an available appointment slot to proceed.
            </span>
          )}
          <button className="tooltip-button" onClick={toggleTooltip}>
            <span>?</span>
          </button>

        </div>

        <button
          className="book-appointment-button"
          disabled={!clickedButton} // Disable when no slot is selected
          onClick={() => navigate('/reschedule-appointment-details')}
        >
          Book appointment
        </button>

      </div>
    </div></></>
  );
}

export default RescheduleAppointment;