<template>
  <div class="live-dash">
    <!-- <v-btn @click="getInitialThreeHourData">get 3</v-btn> -->
    <EntryCard :entry="latestEntry"/>
    <BgTrendChart />
  </div>
</template>

<script>
import EntryService from '@/services/EntryService';
import EntryCard from '@/components/EntryCard.vue';
import BgTrendChart from '@/components/BgTrendChart.vue';

export default {
  name: 'LiveDash',
  components: {
    EntryCard,
    BgTrendChart,
  },
  data() {
    return {
      latestEntry: {},
      setIntervalId: null,
      initialData: [],
    };
  },
  created() {
    this.getInitEntry();
    this.fetchLatestEntryEveryMinute();
  },
  methods: {
    getInitEntry() {
      EntryService.getLatestEntry()
        .then(({ data }) => {
          console.log('init entry: ', data[0]);
          // eslint-disable-next-line prefer-destructuring
          this.latestEntry = data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchLatestEntryEveryMinute() {
      this.setIntervalId = setInterval(() => {
        EntryService.getLatestEntry()
          .then(({ data }) => {
            console.log('getting data every minute: ', data[0]);
            // eslint-disable-next-line prefer-destructuring
            this.latestEntry = data[0];
          })
          .catch((error) => {
            console.log(error);
          });
      }, 60000);
    },
  },
  beforeDestroy() {
    clearInterval(this.setIntervalId);
  },
};
</script>

<style lang="scss" scoped>
.live-dash {
  // align-items: center;
  // display: flex;
  // flex-direction: column;
}
</style>
