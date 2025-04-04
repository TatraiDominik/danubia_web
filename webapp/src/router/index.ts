import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAdminStore } from '@/stores/admin';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { public: false },
    },
    {
      path: '/events',
      name: 'Events',
      component: () => import("@/views/Events.vue"),
      meta: { public: false },
    },
    {
      path: '/trainings',
      name: 'Trainings',
      component: () => import("@/views/Trainings.vue"),
      meta: { public: false },
    },
    {
      path: '/instructors',
      name: 'Instructors',
      component: () => import("@/views/Instructors.vue"),
      meta: { public: false },
    },
    {
      path: '/aboutus',
      name: 'About us',
      component: () => import("@/views/AboutUs.vue"),
      meta: { public: false },
      children: [
        {
          path: 'introduction',
          name: "Introduction",
          component: () => import("@/views/aboutUs/Introduction.vue"),
          meta: { public: false },
        },
        {
          path: 'coworkers',
          name: 'Co-workers',
          component: () => import("@/views/aboutUs/CoWorkers.vue"),
          meta: { public: false },
        },
        {
          path: 'management',
          name: 'Management',
          component: () => import("@/views/aboutUs/Management.vue"),
          meta: { public: false },
        },
        {
          path: 'applications',
          name: 'Applications',
          component: () => import("@/views/aboutUs/Applications.vue"),
          meta: { public: false },
        },
        {
          path: 'pubinterestdata',
          name: 'Public interest data',
          component: () => import("@/views/aboutUs/PubInterestData.vue"),
          meta: { public: false },
        },
      ],
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import("@/views/Contacts.vue"),
      meta: { public: false },
    },
    {
      path: '/adminlogin',
      name: 'Admin login',
      component: () => import("@/views/AdminLogin.vue"),
      meta: { public: true },
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import("@/views/Admin.vue"),
      meta: { public: false },
      children: [
        {
          path: 'posts',
          name: 'Posts',
          component: () => import('@/views/admin/Post.vue'),
          meta: { public: false },
        },
        {
          path: 'instructor',
          name: 'Instructor',
          component: () => import('@/views/admin/Instructor.vue'),
          meta: { public: false },
        },
        {
          path: 'coworker',
          name: 'Co-worker',
          component: () => import('@/views/admin/CoWorker.vue'),
          meta: { public: false },
        },
      ],
    },
    {
      path: '/forparents',
      name: "For parents",
      component: () => import("@/views/ForParents.vue"),
      meta: { public: false },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/adminlogin',
    },
  ],
});

// 🔐 Egységes route guard
router.beforeEach((to, from, next) => {
  const adminStore = useAdminStore();

  if (to.meta.public || adminStore.loggedIn()) {
    next();
  } else {
    next('/adminlogin');
  }
});

export default router;
