<template>
  <v-app>
    <Navbar />

    <v-main class="grey lighten-4">
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <NavbarBottom class="hidden-sm-and-up" />
    <Footer class="hidden-xs-only" />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NavbarBottom from '@/components/NavbarBottom.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',

  components: {
    Navbar,
    NavbarBottom,
    Footer,
  },

  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
