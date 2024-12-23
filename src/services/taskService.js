import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = async (eventId) => await axios.get(`${API_URL}/${eventId}`);
export const updateTaskStatus = async (id, status) => await axios.put(`${API_URL}/${id}`, { status });
