<template>
  <div class="live-dash">
    <EntryCard :entry="latestEntry"/>
    <BgTrendChart :entryData="threeHourTrend" />
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
      threeHourTrend: [],
      twelveHourTrend: [],
      setIntervalId: null,
    };
  },
  created() {
    this.getInitEntry();
    this.fetchLatestEntryEveryMinute();
    this.fetchLastThreeHours();
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
    fetchLastThreeHours() {
      EntryService.getLastThreeHours()
        .then(({ data }) => {
          data.map((entry) => {
            console.log('entry: ', entry);
            this.threeHourTrend.push(entry.sgv);
            return true;
          });
        });
    },
  },
  beforeUnmount() {
    clearInterval(this.setIntervalId);
  },
};
</script>

<style scoped>
.live-dash {
  align-items: center;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin-top: 2rem;
}
</style>
