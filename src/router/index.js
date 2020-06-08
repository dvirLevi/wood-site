import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/store.vue')
  },
  {
    path: '/productPage/:id',
    name: 'productPage',
    component: () => import('../views/productPage.vue')
  },
  {
    path: '/beforePay',
    name: 'beforePay',
    component: () => import('../views/beforePay.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('../views/pay.vue')
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
