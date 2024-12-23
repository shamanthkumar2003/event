import React, { useState } from 'react';
import AttendeeList from '../components/AttendeeList';
import AttendeeForm from '../components/AttendeeForm';

const AttendeeManagement = () => {
  const [attendees, setAttendees] = useState([]);

  const addAttendee = (attendee) => {
    setAttendees([...attendees, { id: attendees.length + 1, ...attendee }]);
  };

  return (
    <div>
      <h1>Attendee Management</h1>
      <AttendeeForm onAddAttendee={addAttendee} />
      <AttendeeList attendees={attendees} />
    </div>
  );
};

export default AttendeeManagement;
