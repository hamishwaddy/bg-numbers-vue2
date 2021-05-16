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

  async getBgChartEntries(numEntries) {
    await apiClient.get(`/entries.json?count=${numEntries}`);
    // .then(({ data }) => {
    //   console.log('DATA: ', data);
    //   return data;
    // });
  },

  // async getLastThreeHours() {
  //   const bgNumsLastThreeHours = [];
  //   let reversed = [];
  //   await apiClient.get('/entries.json?count=36')
  //     .then(({ data }) => {
  //       data.map((entry) => {
  //         bgNumsLastThreeHours.push({
  //           bgVal: Number(((entry.sgv) / 18)).toFixed(1),
  //           time: entry.date,
  //         });
  //         return bgNumsLastThreeHours;
  //       });
  //       reversed = bgNumsLastThreeHours.reverse();
  //     });
  //   return reversed;
  // },

  async getLastTwelveHours() {
    return apiClient.get('/entries.json?count=144');
  },
};
