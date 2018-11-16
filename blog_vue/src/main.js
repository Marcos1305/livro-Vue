// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import materialize from 'materialize-css';
import VueValidator from 'vue-validator';
import 'materialize-css/dist/css/materialize.min.css';
import http from '@/core/Http';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(VueValidator);
Vue.config.productionTip = false;
Vue.prototype.$materialize = materialize;
Vue.prototype.$http = http;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
