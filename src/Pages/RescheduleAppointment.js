import React, { useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import "../Styles/RescheduleAppointments 2.css";
import '../App.css';
import { AvailableAppointments } from "../Data/AvailableAppointments";
import Select from 'react-select';
import ClinicsRUsLogo from "../ClinicsRUs.png";



function RescheduleAppointment() {
  const navigate = useNavigate();

  // States
  const [doctor, setDoctor] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
 
  const [clickedButton, setClickedButton] = useState(null); // Track clicked button
  const [tooltipVisible, setTooltipVisible] = useState(false); // Track tooltip visibility
  const [isFilterVisible, setIsFilterVisible] = useState(true); //Filter visibility toggle
  const [selectedDoctors, setSelectedDoctors] = useState([]); //doctor multiselect
  const [filterValue, setFilterValue] = useState('all');
  const [selectedSlots, setSelectedSlots] = useState([]); // Maintain a list of selected slots
  const [dateRange, setDateRange] = useState({
    startDate: "2024-12-03",
    endDate: "2024-12-04",
  });

  const doctorOptions = [
    { value: "doctor1", label: "Dr. X" },
    { value: "doctor2", label: "Dr. Y" },
    { value: "doctor3", label: "Dr. Z" },
  ];

  const handleDoctorChange = (selectedOptions) => {
    setSelectedDoctors(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  const resetFilters = () => {
    setFilterValue("all");
    setDoctor("");
    setDateFrom("");
    setDateTo("");
    setSelectedDoctors([]);
  };

  const applyFilters = () => {
    alert(
      `Filters applied:\nDoctor: ${doctor}\nDate From: ${dateFrom}\nDate To: ${dateTo}`
    );
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // Derived list of dates based on dateRange
  const dates = useMemo(() => {
    const result = [];
    let currentDate = new Date(dateRange.startDate);
    const endDate = new Date(dateRange.endDate);
    while (currentDate <= endDate) {
      result.push(currentDate.toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return result;
  }, [dateRange]);

  // Format date for display
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  // Check appointment status
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
    return null;
  };

  const handleButtonClick = (date, time) => {
    const slotKey = `${date}-${time}`;
    
    // Check if the slot is already selected
    if (selectedSlots.includes(slotKey)) {
      // If selected, deselect it by filtering it out from the list
      setSelectedSlots(selectedSlots.filter((slot) => slot !== slotKey));
    } else {
      // Otherwise, add it to the selected list
      setSelectedSlots([...selectedSlots, slotKey]);
    }
  };

  const toggleTooltip = () => {
    setTooltipVisible((prev) => !prev);
  };

  const navigatePrev = () => {
    const prevStart = new Date(dateRange.startDate);
    const prevEnd = new Date(dateRange.endDate);
    prevStart.setDate(prevStart.getDate() - 2);
    prevEnd.setDate(prevEnd.getDate() - 2);
    setDateRange({
      startDate: prevStart.toISOString().split("T")[0],
      endDate: prevEnd.toISOString().split("T")[0],
    });
  };

  const navigateNext = () => {
    const nextStart = new Date(dateRange.startDate);
    const nextEnd = new Date(dateRange.endDate);
    nextStart.setDate(nextStart.getDate() + 2);
    nextEnd.setDate(nextEnd.getDate() + 2);
    setDateRange({
      startDate: nextStart.toISOString().split("T")[0],
      endDate: nextEnd.toISOString().split("T")[0],
    });
  };

  const renderTable = () => {
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

    return (
      <div className="appointment-table">
        <div className="table-header">
          <div className="time-column"></div>
          {dates.map((date) => {
            const hasAppointments = timeSlots.some((time) =>
              getTimeSlotStatus(date, time)
            );
  
            return (
              <div
                key={date}
                className={`date-column ${
                  hasAppointments ? "" : "no-appointments"
                }`}
              >
                {formatDate(date)}
                {!hasAppointments && (
                  <div className="no-appointments-text">
                    No appointment available
                  </div>
                )}
              </div>
            );
          })}
        </div>
          
          <div className="table-body">
            {timeSlots.map((time) => (
              <div key={time} className="time-row">
                <div className="time-cell">{time}</div>
                {dates.map((date) => {
                  const status = getTimeSlotStatus(date, time);
                  const hasAppointments = timeSlots.some((timeSlot) =>
                    getTimeSlotStatus(date, timeSlot)
                  );
  
                  return (
                    <div
                      key={`${date}-${time}`}
                      className={`appointment-cell ${
                        hasAppointments ? "" : "no-appointments"
                      }`}
                    >
                      {status && (
                        <button
                          className={`book-button ${
                            selectedSlots.includes(`${date}-${time}`)
                              ? "clicked"
                              : ""
                          }`}
                          onClick={() => handleButtonClick(date, time)}
                        >
                          <div className="button-content">{time}</div>
                          {status.status === "booked" && (
                            <div className="doctor-name">{status.doctor}</div>
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
      </div>
    );
  };
  

  return (
    <><header>
      
    </header><><div className="container">
      <div className="header mb-0">
        <button className="main-button" onClick={() => navigate('/manage-appointment')}>Back</button>
        <img
          src={ClinicsRUsLogo} // Use the imported logo here
          alt="Clinic Logo"
          className="logo"
        />
      </div>
      <h1 style={{ color: '#183E9F', fontWeight: 'bold' }}>Reschedule Appointment</h1>
      <h4 >Current Appointment:</h4>
      <div className="current-appointment-box">
        <div className="appointment-details">
          <div className="appointment-date">Saturday Nov 30th, 2024</div>
          <div className="appointment-time">2:00pm - 3:00pm</div>
          <div className="appointment-doctor">Dr. X</div>
          <div className="appointment-concern">X Ray</div>
        </div>
      </div>
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
    <div className="table-navigation">
          <button onClick={navigatePrev}>&lt;</button>
          <span>{`${formatDate(dateRange.startDate)} - ${formatDate(
            dateRange.endDate
          )}`}</span>
          <button onClick={navigateNext}>&gt;</button>
        </div>
      {/* Other UI code */}
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
        disabled={selectedSlots.length === 0} // Enable only when there's at least one selection
        onClick={() => navigate('/reschedule-appointment-details')}
        >
        Reschedule Appointment
        </button>

      </div>
      
    </div></></>
  );
}

export default RescheduleAppointment;
