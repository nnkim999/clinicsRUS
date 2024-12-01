import React from 'react';
import styles from "../Styles/ConfirmReschedulingModal.module.css";

const ConfirmReschedulingModal = ({
  onCancel,
  onConfirm,
  formerAppointment,
  newAppointment,
}) => {
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <button className={styles["close-button"]} onClick={onCancel}>
          &times;
        </button>
        <div className={styles['modal-header']}>
          <h1>Confirm Rescheduling</h1>
        </div>
        <p>Former Appointment:</p>
        <div className={styles['appointment-card']}>
          <div className={styles['date-section']}>
            <span className={styles['date']}>{formerAppointment.date}</span>
            <span className={styles['month']}>{formerAppointment.month}</span>
          </div>
          <div className={styles['details-section']}>
            <p className={styles['time']}>{formerAppointment.time}</p>
            <p className={styles['doctor']}>{formerAppointment.doctor}</p>
          </div>
        </div>
        <p>New Appointment:</p>
        <div className={styles['appointment-card']}>
          <div className={styles['date-section']}>
            <span className={styles['date']}>{newAppointment.date}</span>
            <span className={styles['month']}>{newAppointment.month}</span>
          </div>
          <div className={styles['details-section']}>
            <p className={styles['time']}>{newAppointment.time}</p>
            <p className={styles['doctor']}>{newAppointment.doctor}</p>
          </div>
        </div>
        <div className={styles['modal-buttons']}>
          <button className={`${styles['modal-button']} ${styles['cancel-button']}`} onClick={onCancel}>
            No
          </button>
          <button className={`${styles['modal-button']} ${styles['confirm-button']}`} onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};


export default ConfirmReschedulingModal;
