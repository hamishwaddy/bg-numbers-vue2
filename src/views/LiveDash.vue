<template>
  <div class="live-dash">
    <EntryCard :entry="latestEntry"/>
  </div>
</template>

<script>
import EntryCard from '@/components/EntryCard.vue';
import EntryService from '@/services/EntryService';

export default {
  name: 'LiveDash',
  components: {
    EntryCard,
  },
  data() {
    return {
      latestEntry: {},
      setIntervalId: null,
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
  beforeUnmount() {
    clearInterval(this.setIntervalId);
  },
};
</script>

<style scoped>
.live-dash {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>
