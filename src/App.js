import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventManagement from './pages/EventManagement';
import AttendeeManagement from './pages/AttendeeManagement';
import TaskTracker from './pages/TaskTracker';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EventManagement />} />
        <Route path="/attendees" element={<AttendeeManagement />} />
        <Route path="/tasks" element={<TaskTracker />} />
      </Routes>
    </Router>
  );
};

export default App;
