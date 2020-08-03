import Vue from 'vue'
import Buefy from 'buefy'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'
import 'buefy/dist/buefy.css'
import store from "./store"

Vue.config.productionTip = false
Vue.use(Buefy);
Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
