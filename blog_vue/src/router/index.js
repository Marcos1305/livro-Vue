import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/logout',
      template: '<b>teste</b>',
    },
    {
      path: '/removePost',
      template: '<b>teste</b>',
    },
  ],
  mode: 'history',
  linkActiveClass: 'active',

});