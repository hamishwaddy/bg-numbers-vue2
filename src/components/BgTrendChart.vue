<template>
<div>
  <div class="button-group">
    <v-btn
      v-for="(button, i) in buttons"
      :key="i"
      v-text="button.text"
      color="button.color"
      x-small
      text
      plain
      active-class
      @click="threeHourData"
    />
  </div>
    <div class="error-message" v-if="showError">
      {{ errorMessage }}
    </div>
    <div class="chart-container">
      <LineChart
        class="line-chart"
        v-if="loaded"
        :chart-data="bgValues"
        :chart-labels="labels"
        :array-length="arrayLength"
        :min-threshold="minThreshold"
        :max-threshold="maxThreshold"
      />
    </div>
    </div>
</template>

<script>
import EntryService from '@/services/EntryService';
import LineChart from '@/components/LineChart.vue';
// import { format } from 'date-fns';

export default {
  name: 'BgTrendChart',
  components: { LineChart },
  data: () => ({
    buttons: [
      { text: '3 Hours', color: '#bada55' },
      { text: '6 Hours', color: '#bada55' },
      { text: '12 Hours', color: '#bada55' },
      { text: '24 Hours', color: '#bada55' },
    ],
    loaded: false,
    period: 'Last 3 Hours',
    bgValues: [],
    labels: [],
    arrayLength: null,
    minThreshold: 4,
    maxThreshold: 10,
    showError: false,
    errorMessage: 'no data found',
  }),
  computed: {
  },
  mounted() {
    this.fetchDataLastThreeHours();
    this.fetchThreeHourDataEveryMinute();
  },
  methods: {
    fetchThreeHourDataEveryMinute() {
      setInterval(() => {
        this.fetchDataLastThreeHours();
      }, 60000);
    },
    async fetchDataLastThreeHours() {
      this.loaded = false;
      try {
        const data = await EntryService.getLastThreeHours();
        this.bgValues = data.map((entry) => Number(entry.bgVal));
        this.labels = data.map((entry) => entry.time);
        this.loaded = true;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// .chart-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 30px;
//   padding: 0 5px;
// }
.button-group {
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.5rem;

  button:active {
    text-decoration: underline;
  }
}

.line-chart {
  border-radius: 6px;
  height: 30vh;
  padding: 6px 0;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  // box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}
</style>
