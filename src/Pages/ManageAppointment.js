// src/LandingPage.js
import React from 'react';
import '../Styles/LandingPage.css'; 
import '../App.css';

import clinicsruslogo2 from "../Assets/ClinicsRUs.png";

// import image from "./image.png";
// import line27 from "./line-27.svg";
// import rightSide from "./right-side.png";
// import "./style.css";
// import vector1 from "./vector-1.svg";
// import vector2 from "./vector-2.svg";

// function ManageAppointment() {
//   return (
//     <div className="ManageAppointment">
//       <header>
//         <h1>ManageAppointment</h1>
      
//       </header>
//     </div>
//   );
// }

function ManageAppointment() {
  return (
    <div className="iphone-manage">
      <div className="div">
        <div className="overlap">
          <img className="vector" alt="Vector" src={vector1} />

          <div className="rectangle" />

          <div className="rectangle-2" />

          <div className="text-wrapper">My Account</div>

          <div className="text-wrapper-2">Contact Us</div>

          <img className="vector" alt="Vector" src={vector2} />

          <div className="text-wrapper-3">My Account</div>
        </div>

        <div className="overlap-group">
          <div className="bar">
            <img className="right-side" alt="Right side" src={image} />

            <div className="left-side">
              <div className="time">
                <div className="text-wrapper-4">9:41</div>
              </div>
            </div>
          </div>

          <img
            className="clinicsruslogo"
            alt="Clinicsruslogo"
            src={clinicsruslogo2}
          />

          <div className="bar">
            <img className="right-side" alt="Right side" src={rightSide} />

            <div className="left-side">
              <div className="time">
                <div className="text-wrapper-4">9:41</div>
              </div>
            </div>
          </div>

          <div className="text-wrapper-5">Booking Application</div>

          <div className="rectangle-3" />

          <div className="text-wrapper-6">Log Out</div>
        </div>

        <div className="text-wrapper-7">Manage Appointments</div>

        <div className="text">{""}</div>

        <div className="overlap-2">
          <div className="text-2">{""}</div>

          <div className="rectangle-4" />

          <div className="text-wrapper-8">Upcoming Appointments</div>

          <div className="text-3">{""}</div>
        </div>

        <div className="overlap-group-2">
          <div className="text-wrapper-9">Date</div>

          <div className="rectangle-5" />

          <div className="text-wrapper-10">Date:</div>

          <p className="p">Friday - Nov. 1st, 2024</p>

          <div className="text-wrapper-11">Dr. X</div>

          <div className="text-wrapper-12">Physical Exam</div>

          <div className="text-wrapper-13">Concern:</div>

          <div className="text-wrapper-14">Time:</div>

          <div className="text-wrapper-15">Doctor:</div>

          <div className="rectangle-6" />

          <div className="text-wrapper-16">Cancel</div>

          <div className="rectangle-7" />

          <div className="text-wrapper-17">Reschedule</div>

          <img className="line" alt="Line" src={line27} />

          <div className="text-wrapper-18">8:00 AM</div>

          <div className="text-wrapper-19">Date:</div>

          <p className="text-wrapper-20">Friday - Nov. 5th, 2024</p>

          <div className="text-wrapper-21">Dr. X</div>

          <div className="text-wrapper-22">Vaccine</div>

          <div className="text-wrapper-23">Concern:</div>

          <div className="text-wrapper-24">Time:</div>

          <div className="text-wrapper-25">Doctor:</div>

          <div className="text-wrapper-26">11:00 AM</div>

          <div className="rectangle-8" />

          <div className="text-wrapper-27">Cancel</div>

          <div className="rectangle-9" />

          <div className="text-wrapper-28">Reschedule</div>

          <div className="rectangle-10" />

          <div className="rectangle-11" />
        </div>

        <div className="text-wrapper-29">Simon Baxter’s</div>
      </div>
    </div>
  );
};

export default ManageAppointment;
