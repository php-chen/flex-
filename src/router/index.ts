import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Simple from '../pages/simple/simple.vue' //简单页面

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: "/complex",
  },
  {
    // 简单
    path: '/simple',
    name: 'simple',
    component: Simple
  },
  {
    // 复杂
    path: '/complex',
    name: 'complex',
    component: () => import('../pages/complex/complex.vue')
  }
]

const router = new VueRouter({
  // mode: 'hash',
  // base: '/flex/',
  mode:'history',
  base: '/',
  routes
})

export default router
