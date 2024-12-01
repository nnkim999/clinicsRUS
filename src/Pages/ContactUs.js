import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/ContactUs.css';
import ClinicsRUsLogo from '../ClinicsRUs.png'; // Import the logo

function ContactUs() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="contact-us-container">
      <header className="contact-us-header">
        <div className="header-top">
          <img
            src={ClinicsRUsLogo}
            alt="ClinicsRUs Logo"
            className="contact-us-logo"
          />
        </div>
        <p className="contact-us-description">Booking Application</p>
      </header>

      <nav className="contact-us-nav">
        <button className="nav-button" onClick={() => navigate('/')}>
          My Account
        </button>
        <button className="nav-button active">Contact Us</button>
      </nav>

      <main className="contact-us-main">
        <h2 className="contact-us-title">Contact Us</h2>
        <div className="contact-us-details">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <p className="contact-info">clinicsrus@gmail.com</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <p className="contact-info">(403) - 555 - 5555</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <p className="contact-info">
              123 Dalhousie St NW #912
              <br />
              Calgary, Alberta
              <br />
              Canada T3P 0B0
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactUs;
