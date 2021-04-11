<template>
  <v-footer
    color="grey lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="(link, i) in navlinks"
        :key="i"
        color="white"
        text
        class="my-2"
      >
        {{ link.text }}
      </v-btn>
      <v-col
        class="grey lighten-1 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>dad's random stuff</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    navlinks: [
      { text: 'Live Dash', path: '/' },
      { text: 'Stats', path: '/stats' },
      { text: 'Profile', path: '/profile' },
    ],
  }),
};
</script>

<style lang="scss" scoped>

</style>
