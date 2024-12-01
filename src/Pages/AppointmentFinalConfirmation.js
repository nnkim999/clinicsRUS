import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AppointmentConfirmation.css';
import ClinicsRUsLogo from '../ClinicsRUs.png'; // Import the logo

function AppointmentConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="appointment-confirmation-container">
      <header className="confirmation-header">
        <div className="header-left">
          <button className="main-button" onClick={() => navigate('/')}>
            Main
          </button>
        </div>
        <div className="header-right">
          <img
            src={ClinicsRUsLogo}
            alt="ClinicsRUs Logo"
            className="confirmation-logo"
          />
        </div>
      </header>

      <main className="confirmation-main">
        <h1 className="confirmation-title">Appointment confirmed!</h1>
        <p className="confirmation-message">
          Thank you for booking an appointment with us.
          <br />
          Here are your appointment details:
        </p>
        <table className="appointment-details-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Concern</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>19 Sept, 2024</td>
              <td>11:00 am to 12:00 pm</td>
              <td>Dr. K</td>
              <td>General</td>
            </tr>
          </tbody>
        </table>
        <div className="confirmation-buttons">
          <button
            className="action-button"
            onClick={() => navigate('/book-appointment')}
          >
            Book more appointments
          </button>
          <button
            className="action-button"
            onClick={() => navigate('/manage-appointment')}
          >
            Manage appointments
          </button>
        </div>
      </main>
    </div>
  );
}

export default AppointmentConfirmation;
