import { createRouter, createWebHistory } from 'vue-router'

const SignIn = () => import('../pages/auth/SignIn.vue')
const SignUp = () => import('../pages/auth/Signup.vue')
const OrganizationCreate = () => import('../pages/auth/OrganizationCreate.vue')
const ResetPassword = () => import('../pages/auth/ResetPassword.vue')
const Home = () => import('../pages/home/Home.vue')

const routes = [
  {
    path: '/',
    redirect: '/signin',
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/organization-create',
    name: 'OrganizationCreate',
    component: OrganizationCreate,
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
