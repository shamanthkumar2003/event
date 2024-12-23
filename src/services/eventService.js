import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events';

export const getEvents = async () => await axios.get(API_URL);
export const createEvent = async (data) => await axios.post(API_URL, data);
export const deleteEvent = async (id) => await axios.delete(`${API_URL}/${id}`);
