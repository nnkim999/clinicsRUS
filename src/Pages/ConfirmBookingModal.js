import React from 'react';
import '../Styles/ConfirmBookingModal.css';

const ConfirmBookingModal = ({ onCancel, onConfirm, appointment }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Confirm Booking</h1>
        <p>Are you sure you want to confirm the following appointment?</p>
        <div className="appointment-card">
          <div className="date-section">
            <span className="date">{appointment.date}</span>
            <span className="month">{appointment.month}</span>
          </div>
          <div className="details-section">
            <p className="time">{appointment.time}</p>
            <p className="doctor">{appointment.doctor}</p>
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

export default ConfirmBookingModal;
