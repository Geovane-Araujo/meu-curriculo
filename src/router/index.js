import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import beforeeach from './beforeeach'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../security/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(beforeeach)
export default router
