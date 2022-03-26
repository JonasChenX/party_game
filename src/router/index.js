import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '@/views/GameView.vue'
import CrossMyHeartView from '@/views/CrossMyHeartView.vue'

import HigherNumber from '@/components/game-com/HigherNumber.vue'
import GuessingNumber from '@/components/game-com/GuessingNumber.vue'
import HumanRoulette from '@/components/game-com/HumanRoulette.vue'

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
      {
        path: '/Game/HumanRoulette',
        name: 'HumanRoulette',
        component: HumanRoulette
      },
    ]
  },{
    path:'/CrossMyHeart',
    name:'CrossMyHeart',
    component: CrossMyHeartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
