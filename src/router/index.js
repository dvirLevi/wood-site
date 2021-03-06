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
    path: '/store/:id',
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
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
})

export default router
