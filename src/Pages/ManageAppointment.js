import React from 'react';
import {Appointment1} from '../Data/Appointments';
import "../Styles/ManageAppointment.css";
import clinicsruslogo2 from "../Assets/ClinicsRUs.png";


function ManageAppointment() {
  return (
    <div className="ManageAppointment-container">
      <header className="ManageAppointment-header">
        <img 
          src={clinicsruslogo2} 
          className="ManageAppointment-logo" 
          alt="Clinic R Us Logo" 
          />
        <h1>Manage Appointment</h1>
      </header>
      <div className="ManageAppointment-body">
        {Appointment1.map((appointment) => (
          <div key={appointment.id} className="ManageAppointment-appointment">
            <h2>Appointment {appointment.id}</h2>
            <p>Doctor: {appointment.Doctor}</p>
            <p>Concern: {appointment.Concern}</p>
            <p>Date: {appointment.AppointmentDate.toLocaleDateString()}</p>
            <p>Time: {appointment.AppointmentTime.toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageAppointment;
