import React from 'react';
import '../Styles/AppointmentDetails.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../App.css";


function AppointmentDetails() {
  const navigate = useNavigate(); 

    return (
      <div className="appointment-details-container">
        <header className="header">
          <button className="back-button">Back</button>
          <img
            src="/logo.png" // Path to your logo in the public folder
            alt="Clinic Logo"
            className="logo"
          />
        </header>
        <main>
          <h1>Appointment Details</h1>
          <div className="appointment-card">
            <h2>Appointment 1:</h2>
            <p>
              <strong>Date:</strong> Oct 2nd, 2024
            </p>
            <p>
              <strong>Time:</strong> 2:00pm - 3:00pm
            </p>
            <p>
              <strong>Doctor:</strong> Dr. K
            </p>
            <div className="concern-row">
              <strong>Specific Concern:</strong>
              <select className="dropdown">
                <option value="General">General</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Cardiology">Cardiology</option>
              </select>
            </div>
          </div>
          <button className="confirm-button-appointment" onClick={() => navigate('/appointment-confirmation')}>Confirm Appointment</button>
        </main>
      </div>
    );
  
  

}
export default AppointmentDetails;
