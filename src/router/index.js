import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Contact from '../views/Contact.vue'
import Apropos from '../views/Apropos.vue'
import Projets from '../views/Projets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'acceuil',
      component: Accueil,
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },

    {
      path: '/a-propos',
      name: 'Apropos',
      component: Apropos,
    },

    {
      path: '/projets',
      name: 'Projets',
      component: Projets,
    },
  ],
  // Retour en haut de page a chaque changement de route
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router
