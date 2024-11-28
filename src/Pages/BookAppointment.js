import React, { useState } from "react";
import "../App.css";
import "../Styles/BookAppointment.css";
import { AvailableAppointments } from "../Data/AvailableAppointments";

function AppointmentBooking() {
  const [doctor, setDoctor] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [clickedButton, setClickedButton] = useState(null); // Track clicked button

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
    <div>
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
    </div>
  );
}

export default AppointmentBooking;
