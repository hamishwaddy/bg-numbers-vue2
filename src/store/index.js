import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import EntryService from '../services/EntryService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    latestEntry: null,
    bgThreeHourData: [],
    bgSixHourData: [],
    bgTwelveHourData: [],
    bgTwentyFourHourData: [],
  },
  mutations: {
    SET_LOADING_STATUS(state) {
      state.isLoading = !state.isLoading;
    },
    SET_THREE_HOUR_TREND(state, valuesArray) {
      state.bgThreeHourData = valuesArray;
    },
    SET_SIX_HOUR_TREND(state, valuesArray) {
      state.bgSixHourData = valuesArray;
    },
    SET_TWELVE_HOUR_TREND(state, valuesArray) {
      state.bgTwelveHourData = valuesArray;
    },
    SET_TWENTYFOUR_HOUR_TREND(state, valuesArray) {
      state.bgTwentyFourHourData = valuesArray;
    },
  },
  actions: {
    async fetchLastThreeHourBgData({ commit }) {
      commit('SET_LOADING_STATUS');
      const { data } = await axios.get('https://orriebetes.herokuapp.com/api/v1/entries.json',
        { params: { count: 36 } });
      console.log('3hr data: ', data);
      this.bgThreeHourData = data;
      commit('SET_LOADING_STATUS');
      commit('SET_THREE_HOUR_TREND', data);
    },
    async fetchLastSixHourBgData({ commit }) {
      commit('SET_LOADING_STATUS');
      const { data } = await axios.get('https://orriebetes.herokuapp.com/api/v1/entries.json',
        { params: { count: 72 } });
      console.log('6hr data: ', data);
      this.bgSixHourData = data;
      commit('SET_LOADING_STATUS');
      commit('SET_SIX_HOUR_TREND', data);
    },
    async fetchLastTwelveHourBgData({ commit }) {
      commit('SET_LOADING_STATUS');
      const { data } = await axios.get('https://orriebetes.herokuapp.com/api/v1/entries.json',
        { params: { count: 108 } });
      console.log('12hr data: ', data);
      this.bgTwelveHourData = data;
      commit('SET_LOADING_STATUS');
      commit('SET_TWELVE_HOUR_TREND', data);
    },
    async fetchLastTwentyFourHourBgData({ commit }) {
      commit('SET_LOADING_STATUS');
      const { data } = await axios.get('https://orriebetes.herokuapp.com/api/v1/entries.json',
        { params: { count: 216 } });
      console.log('24hr data: ', data);
      this.bgTwentyFourHourData = data;
      commit('SET_LOADING_STATUS');
      commit('SET_TWENTYFOUR_HOUR_TREND', data);
    },
  },
  modules: {
  },
});
