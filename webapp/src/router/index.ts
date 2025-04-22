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
      meta: { public: true }, // Módosítva public-ra
    },
    {
      path: '/events',
      name: 'Events',
      component: () => import("@/views/Events.vue"),
      meta: { public: true }, // Módosítva public-ra
    },
    {
      path: '/instructors',
      name: 'Instructors',
      component: () => import("@/views/Instructors.vue"),
      meta: { public: true }, // Módosítva public-ra
    },
    {
      path: '/aboutus',
      name: 'About us',
      component: () => import("@/views/AboutUs.vue"),
      meta: { public: true }, // Módosítva public-ra
      children: [
        {
          path: 'introduction',
          name: "Introduction",
          component: () => import("@/views/aboutUs/Introduction.vue"),
          meta: { public: true }, // Módosítva public-ra
        },
        {
          path: 'coworkers',
          name: 'Co-workers',
          component: () => import("@/views/aboutUs/CoWorkers.vue"),
          meta: { public: true }, // Módosítva public-ra
        },
        {
          path: 'management',
          name: 'Management',
          component: () => import("@/views/aboutUs/Management.vue"),
          meta: { public: true }, // Módosítva public-ra
        },
        {
          path: 'applications',
          name: 'Applications',
          component: () => import("@/views/aboutUs/Applications.vue"),
          meta: { public: true }, // Módosítva public-ra
        },
        {
          path: 'publication',
          name: 'Publication',
          component: () => import("@/views/aboutUs/Publication.vue"),
          meta: { public: true }, // Módosítva public-ra
        },
      ],
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import("@/views/Contacts.vue"),
      meta: { public: true }, // Módosítva public-ra
    },
    {
      path: '/adminlogin',
      name: 'Admin login',
      component: () => import("@/views/AdminLogin.vue"),
      meta: { public: true }, // Már eredetileg is public volt
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import("@/views/Admin.vue"),
      meta: { public: false }, // Admin útvonal védett marad
      children: [
        {
          path: 'posts',
          name: 'Posts',
          component: () => import('@/views/admin/Post.vue'),
          meta: { public: false }, // Admin útvonal védett marad
        },
        {
          path: 'instructor',
          name: 'Instructor',
          component: () => import('@/views/admin/Instructor.vue'),
          meta: { public: false }, // Admin útvonal védett marad
        },
        {
          path: 'coworker',
          name: 'Co-worker',
          component: () => import('@/views/admin/CoWorker.vue'),
          meta: { public: false }, // Admin útvonal védett marad
        },
      ],
    },
    {
      path: '/forparents',
      name: "For parents",
      component: () => import("@/views/ForParents.vue"),
      meta: { public: true }, // Módosítva public-ra
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
