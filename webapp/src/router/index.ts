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
      component: () => import("@/views/AboutUs.vue"),
      children:[
        {
          path:'introduction',
          name:"Introduction",
          component: () => import("@/views/aboutUs/Introduction.vue")
        },
        {
          path:'coworkers',
          name:'Co-workers',
          component: () => import("@/views/aboutUs/CoWorkers.vue")
        },
        {
          path:'management',
          name:'Management',
          component: () => import("@/views/aboutUs/Management.vue")
        },        {
          path:'applications',
          name:'Applicatons',
          component: () => import("@/views/aboutUs/Applications.vue")
        },        {
          path:'pubinterestdata',
          name:'Public interest data',
          component: () => import("@/views/aboutUs/PubInterestData.vue")
        },
      ]
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import("@/views/Contacts.vue")
    }
  ],
})

export default router
