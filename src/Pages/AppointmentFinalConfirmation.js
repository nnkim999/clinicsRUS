import React from 'react';
import '../Styles/AppointmentConfirmation.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate



function AppointmentFinalConfirmation() {
  const navigate = useNavigate(); 

  return (
    <div className="appointment-container">
      <header className="header">
        <button className="main-button" onClick={() => navigate('/')}>Main</button>
        <img
          src="/logo.png" // Path to your logo in the public folder
          alt="Clinic Logo"
          className="logo"
        />
      </header>
      <main>
        <h1>Appointment confirmed!</h1>
        <p>Thank you for booking an appointment with us.</p>
        <p>Here are your appointment details:</p>
        <div className="appointment-details">
          <table className="appointment-table">
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
                <td>
                <div>11:00 am</div>
                <div>to</div>
                <div>12:00 pm</div>
              </td>
                <td>Dr. K</td>
                <td>General</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-group">
          <button className="action-button" onClick={() => navigate('/book-appointment')}>Book more appointments</button>
          <button className="action-button" onClick={() => navigate('/manage-appointment')}>Manage appointments</button>
        </div>
      </main>
    </div>
  );


}

export default AppointmentFinalConfirmation;
