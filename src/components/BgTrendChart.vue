<template>
  <v-card class="chart-container">
    <v-btn-toggle>
      <v-btn
        v-for="(name, i) in buttonNames"
        :key="i"
        v-text="name"
        color="accent"
        small
        @click="threeHourData"
      />
    </v-btn-toggle>
    <v-sparkline
      :value="bgValues"
      height="150"
      color="secondary"
      stroke-linecap="round"
      smooth
    />
  </v-card>
</template>

<script>
// import { mapState } from 'vuex';
import EntryService from '@/services/EntryService';

export default {
  name: 'BgTrendChart',
  // props: {
  //   entryData: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  data: () => ({
    buttonNames: ['3 Hours', '6 Hours', '12 Hours', '24 Hours'],
    bgValues: [],
  }),
  methods: {
    threeHourData() {
      EntryService.getLastThreeHours()
        .then((data) => {
          console.log(data);
          data.map((entry) => {
            console.log(entry);
            this.bgValues.push(Number(entry.bgVal));
            return this.bgValues;
          });
          // this.bgValues = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.threeHourData();
  },
  // methods: {
  //   showChart() {
  //     this.$store.dispatch('fetchLastThreeHourBgData');
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  // width: 100%;
}
</style>
