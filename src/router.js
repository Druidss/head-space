import { createWebHistory, createRouter } from 'vue-router'


const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/mixer',
      name: 'mixer',
      component: () => import('@/views/Mixer.vue')
    },
    {
      path: '/album',
      name: 'album',
      component: () => import('@/views/Player.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
