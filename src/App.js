import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import LandingPage from './Pages/LandingPage';
import BookAppointment from './Pages/BookAppointment';
import AppointmentDetails from './Pages/AppointmentDetails';
import ManageAppointment from './Pages/ManageAppointment';
import RescheduleAppointment from './Pages/RescheduleAppointment';
import ManageAppointment from './Pages/ManageAppointment';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Default landing page */}
          <Route path="/book-appointment" element={<BookAppointment />} /> {/* Route to BookAppointment */}
          <Route path="/appointment-details" element={<AppointmentDetails />} /> {/* Route to BookAppointment */}
          <Route path="/reschedule-appointment" element={<RescheduleAppointment />} /> {/* Route to RescheduleAppointment */}
          <Route path="/manage-appointment" element={<ManageAppointment />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
