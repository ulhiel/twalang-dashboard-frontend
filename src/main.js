import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './styles/app.scss'
// import Chart from 'chart.js'


axios.defaults.baseURL = 'http://127.0.0.1:8000'


Vue.component('top-navbar', require('./components/includes/navbar.vue').default)
Vue.component('left-bar', require('./components/includes/left-bar.vue').default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
