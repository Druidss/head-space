import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/player',
      name: 'player',
      component: () => import('@/views/Player.vue')
    },
    {
      path: '/album',
      name: 'album',
      component: () => import('@/views/Album.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/spotify',
      name: 'spotify',
      component: () => import('@/views/Spotify.vue')
    },
    {
      path: '/instagram',
      name: 'instagram',
      component: () => import('@/views/Instagram.vue')
    },
    {
      path: '/soundcloud',
      name: 'soundcloud',
      component: () => import('@/views/SoundCloud.vue')
    }
  ]
})
