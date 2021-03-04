import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact'
import Padre from '../views/Padre'
import Uno from '../views/Uno'
import Dos from '../views/Dos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Inicio'
    }
  },
  {
    path: '/otra-ruta',
    component: Home,
    name: 'Home2'
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contacto'
    }
  },
  {
    path: '/padre',
    name: 'Padre',
    component: Padre,
    children: [
      {
        path: 'uno',
        name: 'HijoUno',
        component: Uno
      },
      {
        path: 'dos/:id',
        name: 'HijoDos',
        component: Dos
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  console.log('siguiente ruta', to)
  document.title = `Galaxia | ${to.meta.title || 'Otro'}`
  window.scroll(0, 0)
  next()
})

export default router
