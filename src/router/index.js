import Vue from 'vue';
import VueRouter from 'vue-router';
import LiveDash from '../views/LiveDash.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LiveDash',
    component: LiveDash,
  },
  {
    path: '/stats',
    name: 'Stats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Stats.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
