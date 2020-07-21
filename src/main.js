import Vue from 'vue'
import Buefy from 'buefy'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy);
Vue.use(VueCookie);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
