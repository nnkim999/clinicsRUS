import React, { useState } from "react";
import "./App.css"; // Add CSS styles here

const AppointmentBooking = () => {
  const [doctor, setDoctor] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const resetFilters = () => {
    setDoctor("");
    setDateFrom("");
    setDateTo("");
  };

  const applyFilters = () => {
    alert(`Filters applied:\nDoctor: ${doctor}\nDate From: ${dateFrom}\nDate To: ${dateTo}`);
  };

  return (
    <div className="container">
      <div className="header">
        <button className="main-button">Main</button>
        <img
          src="/logo.png" // Replace with the actual logo path
          alt="ClinicsRUs Logo"
          className="logo"
        />
      </div>
      <h1 className="title">Appointment booking</h1>
      <div className="filter-container">
        <div className="filter-header">
          <span>Filter</span>
          <button className="collapse-button">&#9650;</button>
        </div>
        <div className="filter-content">
          <div className="filter-item">
            <label>Doctor:</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="input-field"
            >
              <option value="">Select</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Lee">Dr. Lee</option>
            </select>
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
      </div>
    </div>
  );
};

export default AppointmentBooking;
