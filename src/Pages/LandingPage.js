import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/LandingPage.css'; 
import '../App.css';

function LandingPage() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="LandingPage">
      <header>
        <h1>Welcome to the landing page</h1>
        <button onClick={() => navigate('/book-appointment')}>
          Book an appointment
        </button>
        <button onClick={() => navigate('/manage-appointment')}>
          Manage Appointments
        </button>
      </header>
    </div>
  );
}

export default LandingPage;
