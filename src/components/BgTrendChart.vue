<template>
<div class="chart-container">
  <v-btn-toggle>
    <v-btn
      v-for="(name, i) in buttonNames"
      :key="i"
      v-text="name"
      small
      text
      outlined
    />
  </v-btn-toggle>
  <v-sparkline
    :value="entryData"
    height="100"
    color="secondary"
    stroke-linecap="round"
    smooth
  />
</div>
</template>

<script>
import EntryService from '@/services/EntryService';

export default {
  name: 'BgTrendChart',
  props: {
    entryData: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    buttonNames: ['3 Hours', '6 Hours', '12 Hours', '24 Hours'],
    bgNumbers: [],
  }),
  created() {
    console.log('entryData: ', this.entryData);
  },
  methods: {
    getLastThreeHours() {
      EntryService.getLastThreeHours()
        .then(({ data }) => {
          console.log('last 3 hrs: ', data);
          data.map((entry) => {
            this.bgNumbers.push(entry.sgv);
            console.log('bgNums: ', this.bgNumbers);
            return true;
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
}
</style>
