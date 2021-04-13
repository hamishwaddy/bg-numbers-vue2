<template>
<div>
  <span class="time-ago" :title="humanFriendlyDate">{{ timeAgo }}</span>
</div>
</template>

<script>
import { format, formatDistanceToNow } from 'date-fns';

export default {
  props: {
    timestamp: {
      required: true,
      type: Number,
    },
  },
  data: () => ({
    timeAgo: 'ago',
  }),
  created() {
    this.calculateTimeAgo();
  },
  computed: {
    // timeAgo() {
    //   return this.recalculateTimeAgo();
    // },
    humanFriendlyDate() {
      return format(this.timestamp, 'dd-MMM-yyyy hh:mm:aaa');
    },
  },
  methods: {
    calculateTimeAgo() {
      setInterval(() => {
        console.log(formatDistanceToNow(this.timestamp, { addSuffix: true }));
        this.timeAgo = formatDistanceToNow(this.timestamp, { addSuffix: true });
      }, 60000);
    },
  },
};
</script>

<style lang="scss" scoped>
.time-ago {
  font-size: 0.8em;
  max-width: 200px;
  color: grey;
}
</style>
