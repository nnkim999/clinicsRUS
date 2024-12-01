import React, { useState } from "react";
import "../Styles/AppointmentDetails.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ConfirmReschedulingModal from "./ConfirmReschedulingModal";

const AppointmentRescheduleDetails = () => {
  const navigate = useNavigate();
  const [concern, setConcern] = useState("General");
  const [customConcern, setCustomConcern] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleConcernChange = (event) => {
    setConcern(event.target.value);
    if (event.target.value !== "Other") {
      setCustomConcern(""); // Reset custom concern when not "Other"
    }
  };
  const handleConfirmClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCancelModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  

  const handleConfirmModal = () => {
    // Logic to confirm the appointment (e.g., API call, redirect, etc.)
    console.log("Appointment confirmed!");
    setIsModalOpen(false); // Close the modal
    navigate("/final-confirmation");
  };


  const formerAppointment = {
    date: "2",
    month: "October",
    time: "2:00pm - 3:00pm",
    doctor: "Dr. K",
  };
  
  const newAppointment = {
    date: "3",
    month: "October",
    time: "3:00pm - 4:00pm",
    doctor: "Dr. L",
  };
 
  

  return (
    <div className="appointment-details-container">
      <header className="header">
        <button className="back-button" onClick={() => navigate('/book-appointment')}>Back</button>
        <img
          src="/logo.png" // Path to your logo in the public folder
          alt="Clinic Logo"
          className="logo"
        />
      </header>
      <main>
        <h1>Appointment Details</h1>
        <div className="appointment-card">
          <h2>Appointment 1:</h2>
          <p>
            <strong>Date:</strong> Oct 2nd, 2024
          </p>
          <p>
            <strong>Time:</strong> 2:00pm - 3:00pm
          </p>
          <p>
            <strong>Doctor:</strong> Dr. K
          </p>
          <div className="concern-row">
            <strong>Specific Concern:</strong>
            <select
              className="dropdown"
              value={concern}
              onChange={handleConcernChange}
            >
              <option value="General">General</option>
              <option value="Skin Irritation">Skin Irritation</option>
              <option value="Cold/Flu">Cold/Flu</option>
              <option value="Headache/Migraine">Headache/Migraine</option>
              <option value="Fever">Fever</option>
              <option value="Stomach Pain">Stomach Pain</option>
              <option value="Cough">Cough</option>
              <option value="Injury">Injury</option>
              <option value="Allergies">Allergies</option>
              <option value="Fatigue">Fatigue</option>
              <option value="Chronic Pain">Chronic Pain</option>
              <option value="Other">Other</option>

            </select>
            {concern === "Other" && (
              <input
                type="text"
                placeholder="Type your concern"
                className="custom-concern-input"
                value={customConcern}
                onChange={(e) => setCustomConcern(e.target.value)}
              />
            )}
          </div>
        </div>
        <button className="confirm-button-appointment" onClick={handleConfirmClick}>
          Confirm Appointment
        </button>
      </main>
        {/* Render Modal */}
        {isModalOpen && (
          <ConfirmReschedulingModal
          onCancel={handleCancelModal}
          onConfirm={handleConfirmModal}
          formerAppointment={formerAppointment}
          newAppointment={newAppointment}
        />
      )}
    </div>
  );
};

export default AppointmentRescheduleDetails;
