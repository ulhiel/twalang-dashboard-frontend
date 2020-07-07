import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './styles/app.scss'

import VueCurrencyFilter from 'vue-currency-filter'
Vue.use(VueCurrencyFilter,
  {
    symbol : 'Rp.',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })

/**
 * 
 * IMPORTING FONTAWESOME
 * 
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faCogs,faPoll,faLightbulb,faBullseye,faDrawPolygon,faChartLine,
          faStarOfLife,faCompass,faPercentage,faCertificate,faMapMarker,faBoxes,faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret,faCogs,faPoll,faLightbulb,faBullseye,faDrawPolygon,faChartLine,
            faStarOfLife,faCompass,faPercentage,faCertificate,faMapMarker,faBoxes,faDollarSign)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/** END OF FONTAWESOME */


axios.defaults.baseURL = 'http://127.0.0.1:8000'


Vue.component('top-navbar', require('./components/includes/navbar.vue').default)
Vue.component('left-bar', require('./components/includes/left-bar.vue').default)

Vue.component('age-demographic', require('./components/chart/age-demographic.vue').default)
Vue.component('age-demographicContainer', require('./components/chart/age-demographicContainer.vue').default)

Vue.component('doughnut-chart', require('./components/chart/doughnut-chart.vue').default)
Vue.component('gender-comparison', require('./components/chart/gender-comparison.vue').default)
Vue.component('succesful-purchase-bycity', require('./components/chart/succesful-purchase-bycity.vue').default)
Vue.component('successful-purchase-bycategory', require('./components/chart/category-successful.vue').default)


Vue.component('dashboard-sidebar', require('./components/incluudes/sidebar.vue').default)
Vue.component('location-performance',require('./components/chart/location-performance.vue').default)
Vue.component('category-performance', require('./components/chart/category-performance.vue').default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
