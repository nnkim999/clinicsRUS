import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/ManageAppointment.css'; 
import '../App.css';

function ManageAppointment() {
  const navigate = useNavigate(); // Initialize navigate
  
  return (
    <div className="ManageAppointment">
      <header>
        <h1>Manage Appointments</h1>
        <button class="reschedule-button" onClick={() => navigate('/reschedule-appointment')}>
          Reschedule
        </button>
        <button class="cancel-button"onClick={() => navigate('/cancel-appointment')}>
          Cancel
        </button>
      </header>
    </div>
  );
}

export default ManageAppointment;
