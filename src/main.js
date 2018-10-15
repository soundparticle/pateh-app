import Vue from 'vue';
import VueRouter from 'Vue-router';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#App');