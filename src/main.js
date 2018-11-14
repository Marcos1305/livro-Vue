// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import materialize from 'materialize-css';
import VueResouce from 'vue-resource';
import 'materialize-css/dist/css/materialize.min.css';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.prototype.$materialize = materialize;
Vue.use(VueResouce);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
