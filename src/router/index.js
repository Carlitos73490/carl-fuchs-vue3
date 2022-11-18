import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AmiiboListView from '../views/AmiiboListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ListeAmiibo',
      name: 'amiiboList',
      component: AmiiboListView
    }
  ]
})

export default router
