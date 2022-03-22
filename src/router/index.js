import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '@/views/GameView.vue'

import PalyerNum from '@/components/game-com/PalyerNum.vue'
import HigherNumber from '@/components/game-com/HigherNumber.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Game',
    name: 'game',
    redirect: '/Game/PlayerNum',
    component: GameView,
    children: [
      {
        path: '/Game/PlayerNum',
        name: 'PlayerNum',
        component: PalyerNum
      },
      {
        path: '/Game/HigherNumber',
        name: 'HigherNumber',
        component: HigherNumber
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
