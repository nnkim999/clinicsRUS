import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Appointment1 } from '../Data/Appointments';
import "../Styles/ManageAppointment.css";
import clinicsruslogo2 from "../Assets/ClinicsRUs.png";

function ManageAppointment() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="ManageAppointment-container">
      {/* Header */}
      <header className="ManageAppointment-header">
        <div className="header-left">
          <p className="booking-application-text">Booking Application</p>
        </div>
        <div className="header-center">
          <img
            src={clinicsruslogo2}
            alt="ClinicsRUs Logo"
            className="ManageAppointment-logo"
          />
        </div>
        <div className="header-right">
          <button className="logout-button" onClick={() => navigate('/')}>
            Log Out
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="ManageAppointment-nav">
        <button className="nav-button active" onClick={() => navigate('/my-account')}>
          My Account
        </button>
        <button className="nav-button" onClick={() => navigate('/contact-us')}>
          Contact Us
        </button>
      </nav>

      {/* Appointment Section */}
      <div className="ManageAppointment-body">
        <h2 className='UpcomingAppointment-title'>Upcoming Appointments</h2>
        <div className='ManageAppointment-table'>
          {Appointment1.map((appointment) => (
            <div className='ManageAppointment-appointment' key={appointment.id}>
              <p><span className='label'>Date:</span> {appointment.AppointmentDate.toDateString()}</p>
              <p><span className='label'>Time:</span> {appointment.AppointmentTime.toLocaleTimeString()}</p>
              <p><span className='label'>Doctor:</span> {appointment.Doctor}</p>
              <p><span className='label'>Concern:</span> {appointment.Concern}</p>
              <div className="ManageAppointment-buttons">
                <button className="reschedule-button" onClick={() => navigate('/reschedule-appointment')}>
                  Reschedule
                </button>
                <button className="cancel-button" onClick={() => navigate('/cancel-appointment')}>
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}

export default ManageAppointment;
