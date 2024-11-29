import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import LandingPage from './Pages/LandingPage';
import BookAppointment from './Pages/BookAppointment';
import AppointmentDetails from './Pages/AppointmentDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Default landing page */}
          <Route path="/book-appointment" element={<BookAppointment />} /> {/* Route to BookAppointment */}
          <Route path="/appointment-details" element={<AppointmentDetails />} /> {/* Route to BookAppointment */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
