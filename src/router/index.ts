import { useRoutes } from './router';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: useRoutes()
})

console.log(useRoutes());

export default router
