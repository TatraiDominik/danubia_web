import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/events',
      name: 'Events',
      component: () => import("@/views/Events.vue")
    },
    {
      path: '/trainings',
      name: 'Trainings',
      component: () => import("@/views/Trainings.vue")
    },
    {
      path: '/instructors',
      name: 'Instructors',
      component: () => import("@/views/Instructors.vue")
    },
    {
      path: '/aboutus',
      name: 'About us',
      component: () => import("@/views/AboutUs.vue")
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import("@/views/Contacts.vue")
    }
  ],
})

export default router
