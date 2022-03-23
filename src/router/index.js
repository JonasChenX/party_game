import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '@/views/GameView.vue'

import HigherNumber from '@/components/game-com/HigherNumber.vue'
import GuessingNumber from '@/components/game-com/GuessingNumber.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Game',
    name: 'game',
    redirect: '/',
    component: GameView,
    children: [
      {
        path: '/Game/HigherNumber',
        name: 'HigherNumber',
        component: HigherNumber
      },
      {
        path: '/Game/GuessingNumber',
        name: 'GuessingNumber',
        component: GuessingNumber
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
