import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AmiiboListView from '../views/AmiiboListView.vue'
import AmiiboDetailsView from '../views/AmiiboDetailsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'amiiboList',
      component: AmiiboListView
    },
    {
      path: '/list/:tail',
      name: 'amiiboDetails',
      component: AmiiboDetailsView
    }
  ]
})

export default router
