import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/allmovies',
    name: 'AllMovies',
    component: () => import('../views/AllMovies.vue')
  },
  {
    path: '/allseries',
    name: 'AllSeries',
    component: () => import('../views/AllSeries.vue')
  },
  {
    path: '/serie/:id',
    name: 'Serie',
    component: () => import('../views/Serie.vue')
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: () => import('../views/Movie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
