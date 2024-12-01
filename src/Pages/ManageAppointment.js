import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Appointment1 } from '../Data/Appointments';
import "../Styles/ManageAppointment.css";
import clinicsruslogo2 from "../Assets/ClinicsRUs.png";
import ConfirmCancellationModal from './ConfirmCancellationModal'; // Import the Cancel Modal

function ManageAppointment() {
  const navigate = useNavigate(); // Initialize navigate
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false); // State to control modal visibility
  const [selectedAppointment, setSelectedAppointment] = useState(null); // State to hold the selected appointment details for cancellation

  // Function to handle opening the cancel modal
  const handleCancelClick = (appointment) => {
    setSelectedAppointment(appointment); // Set the selected appointment
    setIsCancelModalOpen(true); // Open the cancel modal
  };

  // Function to handle modal confirmation (e.g., appointment cancellation)
  const handleConfirmCancel = () => {
    console.log("Appointment Cancelled");
    setIsCancelModalOpen(false); // Close the cancel modal
    // You can add the logic to cancel the appointment here (e.g., API call)
  };

  // Function to handle modal cancellation (closing the modal)
  const handleCancelModal = () => {
    setIsCancelModalOpen(false); // Close the cancel modal
  };

  return (
    <div className="ManageAppointment-container">
      {/* Header */}
      <header className="ManageAppointment-header">
        <div className="header-left">
          <p className="booking-application-text">Booking Application</p>
        </div>
        <div className="header-center">
          <img
            src={clinicsruslogo2}
            alt="ClinicsRUs Logo"
            className="ManageAppointment-logo"
          />
        </div>
        <div className="header-right">
          <button className="logout-button" onClick={() => navigate('/')}>
            Log Out
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="ManageAppointment-nav">
        <button className="nav-button active" onClick={() => navigate('/my-account')}>
          My Account
        </button>
        <button className="nav-button" onClick={() => navigate('/contact-us')}>
          Contact Us
        </button>
      </nav>

      {/* Appointment Section */}
      <div className="ManageAppointment-body">
        <h2 className='UpcomingAppointment-title'>Upcoming Appointments</h2>
        <div className='ManageAppointment-table'>
          {Appointment1.map((appointment) => (
            <div className='ManageAppointment-appointment' key={appointment.id}>
              <p><span className='label'>Date:</span> {appointment.AppointmentDate.toDateString()}</p>
              <p><span className='label'>Time:</span> {appointment.AppointmentTime.toLocaleTimeString()}</p>
              <p><span className='label'>Doctor:</span> {appointment.Doctor}</p>
              <p><span className='label'>Concern:</span> {appointment.Concern}</p>
              <div className="ManageAppointment-buttons">
                <button className="reschedule-button" onClick={() => navigate('/reschedule-appointment')}>
                  Reschedule
                </button>
                <button className="cancel-button" onClick={() => handleCancelClick(appointment)}>
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render the cancel modal */}
      {isCancelModalOpen && (
        <ConfirmCancellationModal
          onCancel={handleCancelModal}
          onConfirm={handleConfirmCancel}
        />
      )}
    </div>
  );
}

export default ManageAppointment;
