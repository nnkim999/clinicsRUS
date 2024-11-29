import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import LandingPage from './Pages/LandingPage';
import BookAppointment from './Pages/BookAppointment';
import AppointmentDetails from './Pages/AppointmentDetails';
import AppointmentFinalConfirmation from './Pages/AppointmentFinalConfirmation';
import ManageAppointment from './Pages/ManageAppointment';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Default landing page */}
          <Route path="/book-appointment" element={<BookAppointment />} /> {/* Route to BookAppointment */}
          <Route path="/appointment-details" element={<AppointmentDetails />} /> {/* Route to BookAppointment */}
          <Route path="/appointment-confirmation" element={<AppointmentFinalConfirmation />} /> 
          <Route path="/manage-appointment" element={<ManageAppointment />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
