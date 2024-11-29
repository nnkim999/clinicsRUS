import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/ManageAppointment.css'; 
import '../App.css';

function ManageAppointment() {
  const navigate = useNavigate(); // Initialize navigate

  const [doctor, setDoctor] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const resetFilters = () => {
    setDoctor("");
    setDateFrom("");
    setDateTo("");
  };

  const applyFilters = () => {
    alert(`Filters applied:\nDoctor: ${doctor}\nDate From: ${dateFrom}\nDate To: ${dateTo}`);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  
  return (
    <><div className="ManageAppointment">
      <header>
      <button className="back-button" onClick={() => navigate('/')}>
          Back
        </button>
        <h1>Manage Appointments</h1>
        <button className="reschedule-button" onClick={() => navigate('/reschedule-appointment')}>
          Reschedule
        </button>
        <button className="cancel-button" onClick={() => navigate('/cancel-appointment')}>
          Cancel
        </button>
      </header>
    </div></>
    
  );
}

export default ManageAppointment;
