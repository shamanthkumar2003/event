import React, { useState } from 'react';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';

const EventManagement = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, { id: events.length + 1, ...event }]);
  };

  return (
    <div>
      <h1>Event Management</h1>
      <EventForm onAddEvent={addEvent} />
      <EventList events={events} />
    </div>
  );
};

export default EventManagement;
