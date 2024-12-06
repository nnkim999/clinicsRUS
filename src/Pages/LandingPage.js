import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../Styles/LandingPage.css'; 
import ClinicsRUsLogo from '../ClinicsRUs.png'; // Import the logo
import ForgotPasswordModal from './ForgotPasswordModal';
import NoAccountModal from './NoAccountModal';

function LandingPage() {
  const navigate = useNavigate(); // Initialize navigate

  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false); // State to control modal visibility
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false); // State to control modal visibility
  

  // Function to handle opening the cancel modal
  const handleForgotClick = () => {
    setIsForgotModalOpen(true); // Open the cancel modal
  };

  // Function to handle modal confirmation (e.g., appointment cancellation)
  const handleConfirmForgot = () => {
    setIsForgotModalOpen(false); // Close the cancel modal
    // You can add the logic to cancel the appointment here (e.g., API call)
  };

  // Function to handle modal cancellation (closing the modal)
  const handleForgotModal = () => {
    setIsForgotModalOpen(false); // Close the cancel modal
  };

   // Function to handle opening the cancel modal
   const handleAccountClick = () => {
    setIsAccountModalOpen(true); // Open the cancel modal
  };

  // Function to handle modal confirmation (e.g., appointment cancellation)
  const handleConfirmAccount = () => {
    setIsAccountModalOpen(false); // Close the cancel modal
    // You can add the logic to cancel the appointment here (e.g., API call)
  };

  // Function to handle modal cancellation (closing the modal)
  const handleAccountModal = () => {
    setIsAccountModalOpen(false); // Close the cancel modal
  };

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
          <Link to="" className="forgot-password" onClick={() => handleForgotClick()}>
          Forgot password?
          </Link>
          
          {/* <div className='tooltip-container'>
          
                <button
                    className={`cancel-button`}
                    onClick={() => handleCancelClick()} // Open the modal
                  >
                    Forgot Password?
                  </button>
                  <span className='tooltiptext'>Unavailable for change. Please contact the clinic for assistance.</span>
                </div>

                <div> 
        

        
      </div>*/}
  
          
          <button type="submit" className="login-button">
            Login
          </button>
          <div> 
            <Link to="" className="forgot-password" onClick={() => handleAccountClick()}>
            Don't Have An Account?
            </Link>
          </div>
        </form>
      </main>
      {/* Conditionally render the forgot password modal */}
      {isForgotModalOpen && (
        <ForgotPasswordModal
          onCancel={handleForgotModal}
          onConfirm={handleConfirmForgot}
        />
      )}
      {/* Conditionally render the forgot password modal */}
      {isAccountModalOpen && (
        <NoAccountModal
          onCancel={handleAccountModal}
          onConfirm={handleConfirmAccount}
        />
      )}
    </div>
  );
}

export default LandingPage;
