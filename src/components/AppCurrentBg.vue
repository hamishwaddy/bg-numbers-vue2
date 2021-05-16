<template>
  <div class="bg-number-container">
    <div v-if="bgValInMmol() < 4" class="warning">
      <span>URGENT</span>
      <font-awesome-icon icon="exclamation-triangle" type="fas" class="icon" />
    </div>
    <span
      class="bg-value"
      :style="{
        fontSize: `${fontSize}px`,
        fontWeight: 900,
      }"
    >
      {{ bgValInMmol() }}
    </span>
    <span class="bg-unit">mmol</span>
  </div>
</template>

<script>
export default {
  name: 'AppCurrentBg',
  props: {
    currentSgv: {
      type: Number,
      required: true,
    },
    fontSize: {
      type: Number,
      default: 64,
    },
  },
  methods: {
    bgValInMmol() {
      return (this.currentSgv / 18).toFixed(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-number-container {
  display: flex;
  flex-direction: column;
}

.bg-value {
  margin: 0;
}

.bg-unit {
  margin: -20px 0 30px;
  text-align: center;
}

.warning {
  align-items: center;
  background-color: red;
  border-radius: 0.5rem;
  color: #fff;
  display: flex;
  font-weight: 700;
  padding: 0.5rem 2rem;
}

.icon {
  height: 1rem;
  margin-left: 0.5rem;
  width: auto;
}
</style>
