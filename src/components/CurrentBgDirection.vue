<template>
  <div class="icon-wrapper">
    <font-awesome-icon :icon="arrowDirection" :class="classObject" />
  </div>
</template>

<script>
export default {
  name: 'CurrentBgDirection',
  props: {
    direction: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      icons: [
        { direction: 'Flat', iconString: 'arrow-alt-circle-right' },
        { direction: 'FortyFiveUp', iconString: 'arrow-alt-circle-right' },
        { direction: 'SingleUp', iconString: 'arrow-alt-circle-up' },
        { direction: 'DoubleUp', iconString: 'angle-double-up' },
        { direction: 'FortyFiveDown', iconString: 'arrow-alt-circle-right' },
        { direction: 'SingleDown', iconString: 'arrow-alt-circle-down' },
        { direction: 'DoubleDown', iconString: 'angle-double-down' },
        { direction: 'NOT COMPUTABLE', iconString: 'poo-storm' },
      ],
    };
  },
  computed: {
    classObject() {
      return {
        'forty-five-up': this.direction === 'FortyFiveUp',
        'forty-five-down': this.direction === 'FortyFiveDown',
      };
    },
    arrowDirection() {
      let iconName;
      this.icons.filter((i) => {
        if (i.direction === this.direction) {
          iconName = i.iconString;
        }
        return iconName;
      });
      return iconName;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: flex;
  justify-content: center;

  svg {
    height: 36px;
    width: auto;
  }
}

.forty-five-down {
  transform: rotate(45deg);
}

.forty-five-up {
  transform: rotate(-45deg);
}
</style>
