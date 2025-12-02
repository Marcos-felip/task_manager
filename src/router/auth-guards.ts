import type { Router } from 'vue-router'

export const setupAuthGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
    const token = localStorage.getItem('access_token')

    if (requiresAuth && !token) {
      next('/signin')
    } else {
      next()
    }
  })
}
