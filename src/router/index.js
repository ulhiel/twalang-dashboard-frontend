import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: require('../views/dashboard/dashboard.vue').default,
    children: [
      {
        path: '',
        component: require('../views/dashboard/items/main-dashboard.vue').default
      },
      {
        path: 'marketing',
        component: require('../views/dashboard/items/marketing-view.vue').default
      },
      {
        path: 'product',
        component: require('../views/dashboard/items/product-view.vue').default
      }
    ]
  },
  {
    path: '/dashbooard',
    component: require('../views/dashbooard/dashboard.vue').default,
    children: [
      // {
      //   path: '',
      //   component: require('../views/dashbooard/items/main.vue').default
      // },
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

export default router
