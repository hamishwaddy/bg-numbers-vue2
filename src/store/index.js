import Vue from 'vue';
import Vuex from 'vuex';
import EntryService from '../services/EntryService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    latestEntry: null,
    bgThreeHourData: [],
    bgSixHourData: [],
    bgTwelveHourData: [],
  },
  mutations: {
    SET_LOADING_STATUS(state) {
      state.isLoading = !state.isLoading;
    },
    SET_THREE_HOUR_TREND(state, valuesArray) {
      state.bgThreeHourData = valuesArray;
    },
  },
  actions: {
    async fetchLastThreeHourBgData({ commit }) {
      commit('SET_LOADING_STATUS');
      await EntryService.bgChartData(36)
        .then((response) => {
          console.log('RES: ', response);
          commit('SET_LOADING_STATUS');
          commit('SET_THREE_HOUR_TREND', response.data);
        });
    },
  },
  modules: {
  },
});
