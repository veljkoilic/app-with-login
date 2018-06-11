import Vue from 'vue'
import App from './App.vue'

// Axios
import axios from 'axios'
Vue.prototype.axios = axios
// Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// jQuery for bootstrap
Vue.use({
  install: function(Vue){
      Vue.prototype.$jQuery = require('jquery');
  }
}); 

// Router
  window.Vue = Vue;
  window.VueRouter = VueRouter;
  import VueRouter from 'vue-router';
  import router from '../routes';
  Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
