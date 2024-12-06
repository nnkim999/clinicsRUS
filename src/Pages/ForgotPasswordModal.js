import React from 'react';
import styles from "../Styles/ForgotPasswordModal.module.css";

const ForgotPasswordModal = ({ onCancel}) => {
    
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <button className={styles["close-button"]} onClick={onCancel}>
          &times;
        </button>
        <h1>Forgot Your Password?</h1>
        <p>
          If you are a clinic patient <br/> Your username should be:<br /> <br/> <h4>firstname.lastname</h4> <br /><br />
          Your password should be the phone number you have on file: <br /><br /> <h4>4035557777</h4> <br />
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

export default ForgotPasswordModal;
