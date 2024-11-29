import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../Styles/RescheduleAppointments.css";
import '../App.css';
import clinicLogo from'../ClinicsRUs.png';
import FilterComponent from '../Components/FilterComponent';
import { AvailableAppointments } from "../Data/AvailableAppointments";



function RescheduleAppointment() {
  const navigate = useNavigate(); // Initialize navigate
  const [doctor, setDoctor] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [clickedButton, setClickedButton] = useState(null); // Track clicked button
  const [tooltipVisible, setTooltipVisible] = useState(false); // Track tooltip visibility

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
      <div> 
        <div className="header-container">
          <div className="header-item">
            <button className="back-button" onClick={() => navigate('/manage-appointment')} >
              Back
            </button>
          </div>
          <div className="header-item">
            <div style={{ height: '20vh' }}>
              {/* Other page content */}
              <img
                  src="../ClinicsRUs.png" // Replace with the path to your image
                  alt="Top Right Logo"
                  style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      width: '100px',  // Adjust size
                      height: 'auto',
                  }}
              />
            </div>
          </div>
        </div>

      </div>
      <h1>Reschedule Appointment</h1>

      <h3>CurrentAppointment:</h3>
      
    </header>
    <><FilterComponent />
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
          onClick={() => navigate('/appointment-details')}
        >
          Book appointment
        </button>

      </div>
    </div></></>
  );
}

export default RescheduleAppointment;