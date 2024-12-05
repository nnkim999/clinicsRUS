import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import LandingPage from './Pages/LandingPage';
import MyAccount from './Pages/MyAccount';
import ContactUs from './Pages/ContactUs';
import ContactUs2 from './Pages/ContactUs2';
import BookAppointment from './Pages/BookAppointment';
import AppointmentDetails from './Pages/AppointmentDetails';
import ManageAppointment from './Pages/ManageAppointment';
import RescheduleAppointment from './Pages/RescheduleAppointment';
import AppointmentFinalConfirmation from './Pages/AppointmentFinalConfirmation'
import AppointmentRescheduleDetails from './Pages/AppointmentRescheduleDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Default landing page */}
          <Route path="/my-account" element={<MyAccount />} /> {/* Route to MyAccount */}
          <Route path="/contact-us" element={<ContactUs />} /> {/* Route to ContactUs */}
          <Route path="/contact-us2" element={<ContactUs2 />} /> {/* Route to ContactUs2 */}
          <Route path="/book-appointment" element={<BookAppointment />} /> {/* Route to BookAppointment */}
          <Route path="/appointment-details" element={<AppointmentDetails />} /> {/* Route to BookAppointment */}
          <Route path="/reschedule-appointment" element={<RescheduleAppointment />} /> {/* Route to RescheduleAppointment */}
          <Route path="/manage-appointment" element={<ManageAppointment />} />
          <Route path="/final-confirmation" element={<AppointmentFinalConfirmation />} />
          <Route path="/reschedule-appointment-details" element={<AppointmentRescheduleDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
