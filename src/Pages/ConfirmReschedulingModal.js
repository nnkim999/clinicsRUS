import React from 'react';
import '../Styles/ConfirmReschedulingModal.css';

const ConfirmReschedulingModal = ({
  onCancel,
  onConfirm,
  formerAppointment,
  newAppointment,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Confirm Rescheduling</h1>
        </div>
        <p>Former Appointment:</p>
        <div className="appointment-card">
          <div className="date-section">
            <span className="date">{formerAppointment.date}</span>
            <span className="month">{formerAppointment.month}</span>
          </div>
          <div className="details-section">
            <p className="time">{formerAppointment.time}</p>
            <p className="doctor">{formerAppointment.doctor}</p>
          </div>
        </div>
        <p>New Appointment:</p>
        <div className="appointment-card">
          <div className="date-section">
            <span className="date">{newAppointment.date}</span>
            <span className="month">{newAppointment.month}</span>
          </div>
          <div className="details-section">
            <p className="time">{newAppointment.time}</p>
            <p className="doctor">{newAppointment.doctor}</p>
          </div>
        </div>
        <div className="modal-buttons">
          <button className="modal-button cancel-button" onClick={onCancel}>
            No
          </button>
          <button className="modal-button confirm-button" onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReschedulingModal;
