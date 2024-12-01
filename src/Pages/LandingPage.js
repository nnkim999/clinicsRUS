import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/LandingPage.css'; 
import ClinicsRUsLogo from '../ClinicsRUs.png'; // Import the logo

function LandingPage() {
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    navigate('/my-account'); // Navigate to the MyAccount screen
  };

  return (
    <div className="landing-page-container">
      <header className="landing-header">
        <img
          src={ClinicsRUsLogo}
          alt="ClinicsRUs Logo"
          className="landing-logo"
        />
        <p className="landing-description">Booking Application</p>
      </header>
      <nav className="landing-nav">
        <button className="nav-button active">My Account</button>
        <button className="nav-button" onClick={() => navigate('/contact-us')}>
          Contact Us
        </button>
      </nav>
      <main className="landing-main">
        <h2 className="login-title">Patient Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            required
          />
          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </main>
    </div>
  );
}

export default LandingPage;
