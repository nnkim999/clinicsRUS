import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/MyAccount.css';
import ClinicsRUsLogo from '../ClinicsRUs.png'; // Import the logo

function MyAccount() {
  const navigate = useNavigate();

  return (
    <div className="my-account-container">
      <header className="my-account-header">
        <div className="header-left">
          <p className="booking-application-text">Booking Application</p>
        </div>
        <div className="header-center">
          <img
            src={ClinicsRUsLogo}
            alt="ClinicsRUs Logo"
            className="my-account-logo"
          />
        </div>
        <div className="header-right">
          <button className="logout-button" onClick={() => navigate('/')}>
            Log Out
          </button>
        </div>
      </header>

      <nav className="my-account-nav">
        <button className="nav-button active">My Account</button>
        <button className="nav-button" onClick={() => navigate('/contact-us')}>
          Contact Us
        </button>
      </nav>

      <main className="my-account-main">
        <h2 className="welcome-text">Hello, Simon Baxter!</h2>
        <p className="instruction-text">How would you like to proceed?</p>
        <div className="button-container">
          <button
            className="my-account-button"
            onClick={() => navigate('/book-appointment')}
          >
            Book An Appointment
          </button>
          <button
            className="my-account-button"
            onClick={() => navigate('/manage-appointment')}
          >
            Manage Appointments
          </button>
        </div>
      </main>
    </div>
  );
}

export default MyAccount;
