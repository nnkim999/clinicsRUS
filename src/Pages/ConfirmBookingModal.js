import React from 'react';
import styles from "../Styles/ConfirmationBooking.module.css";

const ConfirmBookingModal = ({ onCancel, onConfirm, appointment }) => {
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <button className={styles["close-button"]} onClick={onCancel}>
          &times;
        </button>
        <h1>Confirm Booking</h1>
        <p>Are you sure you want to confirm the following appointment?</p>
        <div className={styles["appointment-card"]}>
          <div className={styles["date-section"]}>
            <span className={styles["date"]}>{appointment.date}</span>
            <span className={styles["month"]}>{appointment.month}</span>
          </div>
          <div className={styles["details-section"]}>
            <p className={styles["time"]}>{appointment.time}</p>
            <p className={styles["doctor"]}>{appointment.doctor}</p>
          </div>
        </div>
        <div className={styles["modal-buttons"]}>
          <button
            className={`${styles["modal-button"]} ${styles["cancel-button"]}`}
            onClick={onCancel}
          >
            No
          </button>
          <button
            className={`${styles["modal-button"]} ${styles["confirm-button"]}`}
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBookingModal;
