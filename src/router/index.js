import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    name: 'login',
    component: require('../views/auth/login.vue').default
  },
  {
    path: '/dashbooard',
    component: require('../views/dashbooard/dashboard.vue').default,
    children: [
      {
        path: '',
        component: require('../views/dashbooard/items/marketing.vue').default
      },
      {
        path: 'product',
        component: require('../views/dashbooard/items/product.vue').default
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if (to.name !== 'login' && !store.state.admin) next({ name: 'login' })
  else next()
})

export default router
