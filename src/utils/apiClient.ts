import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.polygon.io/v3/reference',
  params: {apiKey: '9QWtJtsJ2cBzuTtB2A4ovfYr20AyaKTE'},
  headers: {
    'Content-Type': 'application/json',
  },
});
export default apiClient;
