// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '/Users/sankarsanjayvarmathotakura/Desktop/EMS/event-management-system/ems/src/assets/styles/global.css';
import Navbar from '/Users/sankarsanjayvarmathotakura/Desktop/EMS/event-management-system/ems/src/components/Navbar.js';
import Home from '/Users/sankarsanjayvarmathotakura/Desktop/EMS/event-management-system/ems/src/pages/Home.js';
import EventDashboard from '/Users/sankarsanjayvarmathotakura/Desktop/EMS/event-management-system/ems/src/pages/EventDashboard.js';
import EventCreation from '/Users/sankarsanjayvarmathotakura/Desktop/EMS/event-management-system/ems/src/pages/EventCreation.js';
import RSVP from '/Users/sankarsanjayvarmathotakura/Desktop/EMS/event-management-system/ems/src/pages/RSVP.js';
import Login from './pages/login';
import ReactDOM from 'react-dom';
import '/Users/sankarsanjayvarmathotakura/Desktop/EMS/event-management-system/ems/src/pages/axiosMock.js'; // Initialize mock API
import  { useState } from 'react';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
      <Router>
          <Navbar />
          <div className="content">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<EventDashboard />} />
                  <Route path="/create-event" element={<EventCreation />} />
                  <Route path="/rsvp" element={<RSVP />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
          </div>
      </Router>
  );
}


export default App;
