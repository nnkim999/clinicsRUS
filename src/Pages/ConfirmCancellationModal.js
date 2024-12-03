import React from 'react';
import styles from "../Styles/ConfirmCancellationModal.module.css";

const ConfirmCancellationModal = ({ onCancel, onConfirm }) => {
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <button className={styles["close-button"]} onClick={onCancel}>
          &times;
        </button>
        <h1>Confirm cancellation</h1>
        <p>
          Are you sure you want to cancel your appointment on October 22nd from
          9:00 am to 10:00 am with Doctor Alia?
        </p>
        <div className={styles['modal-buttons']}>
          <button className={styles['modal-button'] + ' ' + styles['cancel-button']} onClick={onCancel}>
            No
          </button>
          <button className={styles['modal-button'] + ' ' + styles['confirm-button']} onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCancellationModal;
