import axios from 'axios';

const API_URL = 'http://localhost:5000/api/attendees';

export const getAttendees = async () => await axios.get(API_URL);
export const createAttendee = async (data) => await axios.post(API_URL, data);
export const deleteAttendee = async (id) => await axios.delete(`${API_URL}/${id}`);
