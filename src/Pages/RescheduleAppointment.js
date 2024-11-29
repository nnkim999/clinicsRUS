import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/RescheduleAppointments.css";
import '../App.css';
import FilterComponent from '../Components/FilterComponent';


function RescheduleAppointment() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="RescheduleAppointment">
      <header>
        <button class="main-button" onClick={() => navigate('/manage-appointment')}>
          Main</button>
        
        <h1>RescheduleAppointment</h1>


      
      </header>
      <div class="main-content">
        <FilterComponent/>


        
      </div>
    </div>
  );
}

export default RescheduleAppointment;