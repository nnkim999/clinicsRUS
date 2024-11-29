import React from 'react';
import '../Styles/ConfirmCancellationModal.css';

const ConfirmCancellationModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Confirm cancellation</h1>
        <p>
          Are you sure you want to cancel your appointment on October 22nd from
          9:00 am to 10:00 am with Doctor. Alia?
        </p>
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

export default ConfirmCancellationModal;
