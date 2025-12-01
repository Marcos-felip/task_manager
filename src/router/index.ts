import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/signin',
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: () => import('../pages/auth/SignIn.vue'),
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('../pages/auth/Signup.vue'),
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: () => import('../pages/auth/ResetPassword.vue'),
    },
  ],
})

export default router
