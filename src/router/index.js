import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',  
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/codificacion',
    name: 'codificacion',  
    component: () => import(/* webpackChunkName: "codificacion" */ '../views/Codificacion.vue')
  },
  {
    path: '/codificacion_update',
    name: 'codificacion_update',  
    component: () => import(/* webpackChunkName: "codificacion_update" */ '../components/Codificacion_update.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
