import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'
import Cart from './../views/Cart.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router