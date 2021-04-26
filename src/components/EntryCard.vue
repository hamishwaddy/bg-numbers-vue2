<template>
  <div v-if="!entry.sgv"><Loading /></div>
  <div v-else class="entry-card">
    <AppCurrentBg :currentSgv="sgv" />
    <CurrentBgDirection :direction="direction" />
    <AppDate :timestamp="date" />
  </div>
</template>

<script>
import Loading from '@/components/AppLoading.vue';
import AppDate from '@/components/AppDate.vue';
import AppCurrentBg from '@/components/AppCurrentBg.vue';
import CurrentBgDirection from '@/components/CurrentBgDirection.vue';

export default {
  name: 'EntryCard',
  components: {
    Loading,
    AppDate,
    AppCurrentBg,
    CurrentBgDirection,
  },
  props: {
    entry: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    sgv() {
      return this.entry.sgv;
    },
    date() {
      return this.entry.date;
    },
    direction() {
      return this.entry.direction;
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-card {
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: transparent;
  border: 8px solid grey;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 0 auto 4rem;
}
/* .entry-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
} */
</style>
