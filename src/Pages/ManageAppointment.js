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
  const [appointments, setAppointments] = useState(Appointment1); // State for managing appointments

  // Function to handle opening the cancel modal
  const handleCancelClick = (appointment) => {
    setSelectedAppointment(appointment); // Set the selected appointment
    setIsCancelModalOpen(true); // Open the cancel modal
  };

  // Function to handle modal confirmation (appointment cancellation)
  const handleConfirmCancel = () => {
    if (appointments.length > 2) {
      const updatedAppointments = appointments.filter((_, index) => index !== 2); // Remove the third appointment
      setAppointments(updatedAppointments); // Update state with filtered appointments
      console.log("Appointment Cancelled: Removed Appointment1[2]");
    } else {
      console.log("No Appointment1[2] to remove.");
    }
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
        <h1 className='ManageAppointment-title'>Manage Appointments</h1>
        <p className="Patient-name">Simon Baxter's</p> {/* Patient's name */}
        <h2 className='UpcomingAppointment-title'>Upcoming Appointments</h2>
        <div className='ManageAppointment-table'>
          {appointments.map((appointment, index) => (
            <div className='ManageAppointment-appointment' key={appointment.id}>
              <p><span className='label'>Date:</span> {appointment.AppointmentDate.toDateString()}</p>
              <p><span className='label'>Time:</span> {appointment.AppointmentTime.toLocaleTimeString()}</p>
              <p><span className='label'>Doctor:</span> {appointment.Doctor}</p>
              <p><span className='label'>Concern:</span> {appointment.Concern}</p>
              <div className="ManageAppointment-buttons">
                <div className='tooltip-container'>
                  <button
                    className={`reschedule-button ${index === 0 ? 'disabled' : ''}`}
                    onClick={() => index !== 0 && navigate('/reschedule-appointment')}
                    disabled={index === 0} // Disable the button if it's the first appointment
                  >
                    Reschedule
                  </button>
                  {index === 0 && <span className='tooltiptext'>Unavailable for change. Please contact the clinic for assistance.</span>}
                </div>
                <div className='tooltip-container'>
                  <button
                    className={`cancel-button ${index === 0 ? 'disabled' : ''}`}
                    onClick={() => index !== 0 && handleCancelClick(appointment)} // Open the modal
                    disabled={index === 0} // Disable the button if it's the first appointment
                  >
                    Cancel
                  </button>
                  {index === 0 && <span className='tooltiptext'>Unavailable for change. Please contact the clinic for assistance.</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render the cancel modal */}
      {isCancelModalOpen && (
        <ConfirmCancellationModal
          onCancel={() => setIsCancelModalOpen(false)} // Close modal when 'No' is clicked
          onConfirm={handleConfirmCancel} // Confirm cancellation and close modal
        />
      )}
    </div>
  );
}

export default ManageAppointment;
