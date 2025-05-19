// lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend.com/api', // <-- replace with your actual API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
