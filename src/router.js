import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import Prices from './views/Prices.vue';
import Partnerek from './views/Partnerek.vue';
import Contact from './views/Contact.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/prices',
        name: 'prices',
        component: Prices
      },
      {
        path: '/partnerek',
        name: 'partnerek',
        component: Partnerek
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      },
      { path: '*',
      redirect: '/404' }
  ]
})