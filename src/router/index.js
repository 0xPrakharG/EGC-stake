import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoinsView from '../views/CoinsView.vue'
import FaqView from '../views/FaqView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/coins',
      name: 'Coins',
      component: CoinsView
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FaqView
    },
    {
      path: '/#team',
      name: 'Team',
      component: HomeView
    },
    {
      path: '/whitepaper',
      name: 'Whitepaper',
      component: HomeView
    },
    {
      path: '/platform',
      name: 'Platform',
      component: HomeView
    }
  ]
})

export default router
