import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Card from '@/components/Card';
import Buttons from '@/components/Buttons';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld,
    },
    {
      path: '/card',
      component: Card,
      auth: true,
    },
    {
      path: '/buttons',
      component: Buttons,
    },
    {
      path: '*',
      redirect: { name: 'index' },
    },
  ],
  mode: 'history',
  linkActiveClass: 'active',
});
