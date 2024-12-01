import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {Appointment1} from '../Data/Appointments';
import "../Styles/ManageAppointment.css";
import clinicsruslogo2 from "../Assets/ClinicsRUs.png";

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
    <div className="ManageAppointment-container">
      {/* Header */}
      <header className="ManageAppointment-header">
        <img 
          src={clinicsruslogo2} 
          className="ManageAppointment-logo" 
          alt="Clinic R Us Logo" 
          />
        <h1>Manage Appointment</h1>
      </header>
      {/* Navigation Buttons
      <div className="ManageAppointment-navigation">
        <button className="ManageAppointment-button" onClick={() => navigate('/my-account')}>
          My Account
        </button>
      </div> */}

      {/* Appointment Section */}
      <div className="ManageAppointment-body">
        <h2 className='ManageAppointment-title'>Upcoming Appointments</h2>
        <div className='ManageAppointment-table'>
          {Appointment1.map((appointment) => (
            <><div key={appointment.id} className="ManageAppointment-appointment">
              <p>Doctor: {appointment.Doctor}</p>
              <p>Concern: {appointment.Concern}</p>
              <p>Date: {appointment.AppointmentDate.toLocaleDateString()}</p>
              <p>Time: {appointment.AppointmentTime.toLocaleTimeString()}</p>
              <div className="ManageAppointment-buttons">
                <button className="reschedule-button" onClick={() => navigate('/reschedule-appointment')}>
                    Reschedule
                </button>
                <button className="cancel-button" onClick={() => navigate('/cancel-appointment')}>
                    Cancel
                </button>
              </div>
            </div>
            </>))}
      </div>
    </div>
  </div>
  );
}

export default ManageAppointment;
