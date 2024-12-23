import React from 'react';

const AttendeeList = ({ attendees }) => {
  return (
    <ul>
      {attendees.map((attendee) => (
        <li key={attendee.id}>{attendee.name}</li>
      ))}
    </ul>
  );
};

export default AttendeeList;
