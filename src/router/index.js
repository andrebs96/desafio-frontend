import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Tembici'
    },
    component: Home
  },
  {
    path: '/top-5-products',
    name: 'Top 5 Products',
    meta: {
      title: 'Top 5 Products'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "top5" */ '../views/Top5/index.vue')
  },
  {
    path: '/your-cart',
    name: 'Cart',
    meta: {
      title: 'Cart'
    },
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
})

export default router
