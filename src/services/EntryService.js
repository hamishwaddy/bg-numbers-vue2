import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://orriebetes.herokuapp.com/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  async getLatestEntry() {
    return apiClient.get('/entries.json?count=1');
  },

  async getLastThreeHours() {
    return apiClient.get('/entries.json?count=36');
  },

  async getLastTwelveHours() {
    return apiClient.get('/entries.json?count=144');
  },
};
