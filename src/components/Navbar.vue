<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="hidden-xs-only" @click="sideDrawer = !sideDrawer" />
      <v-app-bar-title class="accent--text">
        <span class="font-weight-bold">bg</span>
        <span class="font-weight-light">numbers</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn class="hidden-xs-only" text>
        <span class="mr-2">Sign Out</span>
        <font-awesome-icon icon="sign-out-alt" />
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="sideDrawer" app class="info">
      <v-list>
        <v-list-item-group
          color="accent"
        >
          <v-list-item
            v-for="(link, i) in navlinks"
            :key="i"
            router
            :to="link.path"
          >
            <v-list-item-icon>
              <font-awesome-icon :icon="link.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    sideDrawer: false,
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
