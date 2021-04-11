<template>
<v-bottom-navigation
      color="accent"
      class="hidden-sm-and-up"
    >
      <v-btn v-for="(link, i) in navlinks" :key="i" router :to="link.path">
        <span>{{ link.text }}</span>
        <font-awesome-icon :icon="link.icon" />
      </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
  name: 'NavbarBottom',
  data: () => ({
    navlinks: [
      { text: 'Live Dash', icon: 'tachometer-alt', path: '/' },
      { text: 'Stats', icon: 'chart-line', path: '/stats' },
      { text: 'Profile', icon: 'id-card-alt', path: '/profile' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
</style>
