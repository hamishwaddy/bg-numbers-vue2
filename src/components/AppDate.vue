<template>
<div>
  <span class="time-ago" :title="humanFriendlyDate">test</span>
  {{timeAgo}}
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
  // data: () => ({
  //   timeAgo: '',
  // }),
  // mounted() {
  //   console.log(this.timeAgo);
  // },
  computed: {
    timeAgo() {
      return this.recalculateTimeAgo();
    },
    humanFriendlyDate() {
      return format(this.timestamp, 'dd-MMM-yyyy hh:mm:aaa');
    },
  },
  methods: {
    recalculateTimeAgo() {
      setInterval(() => {
        console.log(formatDistanceToNow(this.timestamp, { addSuffix: true }));
        formatDistanceToNow(this.timestamp, { addSuffix: true });
      }, 60000);
    },
  },
};
</script>

<style lang="scss" scoped>
.time-ago {
  border: 1px solid #000;
  width: 200px;
}
</style>
