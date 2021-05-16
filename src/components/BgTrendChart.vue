<template>
  <div class="chart-container">
    <div class="error-message" v-if="showError">
      {{ errorMessage }}
    </div>
    <div class="button-group">
      <v-btn
        v-for="(button, i) in buttons"
        :key="i"
        v-text="button.text"
        active-class="active"
        :class="{active:button.isActive}"
        text
        tile
        small
        @click="loadChart(button.hours)"
      />
    </div>
    <LineChart
      class="line-chart"
      v-if="loaded"
      :chart-data="chartData.bgValues"
      :chart-labels="chartData.labels"
      :array-length="arrayLength"
      :min-threshold="minThreshold"
      :max-threshold="maxThreshold"
    />
  </div>
</template>

<script>
import LineChart from '@/components/LineChart.vue';
import { mapState } from 'vuex';

export default {
  name: 'BgTrendChart',
  components: { LineChart },
  data: () => ({
    buttons: [
      { text: '3 Hours', hours: 3, isActive: true },
      { text: '6 Hours', hours: 6, isActive: false },
      { text: '12 Hours', hours: 12, isActive: false },
      { text: '24 Hours', hours: 24, isActive: false },
    ],
    loaded: false,
    period: 'Last 3 Hours',
    arrayLength: null,
    minThreshold: 4,
    maxThreshold: 10,
    showError: false,
    errorMessage: 'no data found',
    setIntervalId: null,
  }),
  computed: {
    ...mapState({
      bgThreeHourData: (state) => state.bgThreeHourData,
      bgSixHourData: (state) => state.bgSixHourData,
      bgTwelveHourData: (state) => state.bgTwelveHourData,
      bgTwentyFourHourData: (state) => state.bgTwentyFourHourData,
    }),
    chartData() {
      return {
        bgValues: [],
        labels: [],
      };
    },
  },
  mounted() {

  },
  beforeDestroy() {
    clearInterval(this.setIntervalId);
  },
  methods: {
    async getInitialBgData() {
      this.initialData = await Promise.all([
        this.$store.dispatch('fetchLastThreeHourBgData'),
        this.$store.dispatch('fetchLastSixHourBgData'),
      ]);
      console.log(this.initialData);
      // await this.$store.dispatch('fetchLastSixHourBgData');
    },
    async get3() {
      this.loaded = false;
      await this.$store.dispatch('fetchLastThreeHourBgData');
      this.chartData.bgValues = [];
      this.chartData.bgValues = this.bgThreeHourData.map(
        (entry) => Number((entry.sgv / 18).toFixed(1)),
      );
      this.chartData.labels = this.bgThreeHourData.map((entry) => entry.date);
      this.loaded = true;
    },
    async get6() {
      this.loaded = false;
      await this.$store.dispatch('fetchLastSixHourBgData');
      this.chartData.bgValues = [];
      this.chartData.bgValues = this.bgSixHourData.map(
        (entry) => Number((entry.sgv / 18).toFixed(1)),
      );
      this.chartData.labels = this.bgSixHourData.map((entry) => entry.date);
      this.loaded = true;
    },
    async get12() {
      this.loaded = false;
      await this.$store.dispatch('fetchLastTwelveHourBgData');
      this.chartData.bgValues = [];
      this.chartData.bgValues = this.bgTwelveHourData.map(
        (entry) => Number((entry.sgv / 18).toFixed(1)),
      );
      this.chartData.labels = this.bgTwelveHourData.map((entry) => entry.date);
      this.loaded = true;
    },
    async get24() {
      this.loaded = false;
      await this.$store.dispatch('fetchLastTwentyFourHourBgData');
      this.chartData.bgValues = [];
      this.chartData.bgValues = this.bgTwentyFourHourData.map(
        (entry) => Number((entry.sgv / 18).toFixed(1)),
      );
      this.chartData.labels = this.bgTwentyFourHourData.map((entry) => entry.date);
      this.loaded = true;
    },
    loadChart(value, isActive) {
      console.log(isActive);
      switch (value) {
        case 6:
          this.get6();
          break;
        case 12:
          this.get12();
          break;
        case 24:
          this.get24();
          break;
        default:
          this.get3();
      }
    },
    // async getInitialData() {
    //   this.loaded = false;
    //   const data = await this.$store.dispatch('fetchLastThreeHourBgData');
    //   console.log('data: ', data);
    //   // this.bgValues
    //   // await this.$store.dispatch('fetchLastSixHourBgData');
    // },
    // async getInitialThreeHourData() {
    //   console.log('getInitThreeHrData');
    //   const result = await this.$store.dispatch('fetchLastThreeHourBgData');
    //   console.log('res: ', result);
    //   // this.bgValues =
    // this.bgLastThreeHours.map((entry) => ((Number(entry.sgv / 18).toFixed(1)));
    //   // this.labels = this.bgLastThreeHours.map((entry) => entry.date);
    // },
    fetchThreeHourDataEveryMinute() {
      clearInterval(this.setIntervalId);
      this.setIntervalId = (() => {
        this.fetchDataLastThreeHours();
      }, 60000);
    },
    async fetchDataLastThreeHours() {
      try {
        this.loaded = false;
        this.$store.dispatch('fetchLastThreeHourBgData');
        this.bgValues = this.bgLastThreeHours.map((entry) => Number((entry.sgv / 18).toFixed(1)));
        this.labels = this.bgLastThreeHours.map((entry) => entry.date);
        this.loaded = true;
      } catch (e) {
        this.showError = true;
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

  button:hover {

  }

  button:active {
    border-bottom: 2px solid #000 !important;
    // background: yellow;
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
