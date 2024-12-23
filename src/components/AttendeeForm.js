import React, { useState } from 'react';

const AttendeeForm = ({ onAddAttendee }) => {
  const [attendeeName, setAttendeeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (attendeeName) {
      onAddAttendee({ name: attendeeName });
      setAttendeeName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Attendee Name"
        value={attendeeName}
        onChange={(e) => setAttendeeName(e.target.value)}
      />
      <button type="submit">Add Attendee</button>
    </form>
  );
};

export default AttendeeForm;
