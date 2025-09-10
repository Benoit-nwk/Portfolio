import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Noway from '../views/Noway.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/404',
      name: '404',
      component: Noway,
    },
    {
      path:'/:pathMatch(.*)*',
      redirect: '/404'
    }
  ],
})

export default router
