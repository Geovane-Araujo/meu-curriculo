import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import beforeeach from './beforeeach'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: { name: 'dash' },
    children: [
      {
        path: '/dash',
        name: 'dash',
        component: () => import('../views/home/dash/Dash.vue')
      },
      {
        path: '/userdata',
        name: 'userdata',
        component: () => import('../views/home/user-data/UserData.vue')
      },
      {
        path: '/curriculummodel',
        name: 'curriculummodel',
        component: () => import('../views/home/curriculum-model/CurriculumModel.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/security/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/Register.vue')
  },
  {
    path: '/curriculumstudio',
    name: 'curriculumstudio',
    component: () => import('../views/curriculumStudio/CurriculumStudio.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(beforeeach)
export default router
