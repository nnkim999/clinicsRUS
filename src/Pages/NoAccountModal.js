import React from 'react';
import styles from "../Styles/ForgotPasswordModal.module.css";

const NoAccountModal = ({ onCancel}) => {
    
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <button className={styles["close-button"]} onClick={onCancel}>
          &times;
        </button>
        <h1>Don't Have An Account?</h1>
        <p>
          If the username and password as listed above is not working, please contact the clinic for assistance.<br/>
          Clinic Staff can create an account for you, as well as update your current information.
        </p>
        <div className={styles['modal-buttons']}>
          <button className={styles['modal-button'] + ' ' + styles['cancel-button']} onClick={onCancel}>
            Ok, Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoAccountModal;
