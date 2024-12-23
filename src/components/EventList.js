import React from 'react';

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>{event.name}</li>
      ))}
    </ul>
  );
};

export default EventList;
