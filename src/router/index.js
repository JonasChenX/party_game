import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '@/views/GameView.vue'
import CrossMyHeartView from '@/views/CrossMyHeartView.vue'
import BlogView from '@/views/BlogView.vue'

import HigherNumber from '@/components/game-com/HigherNumber.vue'
import GuessingNumber from '@/components/game-com/GuessingNumber.vue'
import HumanRoulette from '@/components/game-com/HumanRoulette.vue'

import BlogList from '@/components/blog-com/BlogList.vue'
import Bulletin from '@/components/blog-com/Bulletin.vue'
import Question from '@/components/blog-com/ContactMe.vue'
import Info from '@/components/blog-com/Info.vue'
// import BlogAdd from '@/components/blog-com/BlogAdd.vue'
import BlogAdd from '@/components/blog-com/test.vue'


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
  },
  {
    path:'/CrossMyHeart',
    name:'CrossMyHeart',
    component: CrossMyHeartView
  },
  {
    path:'/Blog',
    name:'Blog',
    redirect:'/Blog/BlogList',
    component: BlogView,
    children: [
      {
        path:'BlogList',
        name:'BlogList',
        component: BlogList
      },
      {
        path:'Bulletin',
        name:'Bulletin',
        component: Bulletin
      },
      {
        path:'Question',
        name:'Question',
        component: Question
      },
      {
        path:'Info',
        name:'Info',
        component: Info
      },
      {
        path:'BlogAdd',
        name:'BlogAdd',
        component: BlogAdd
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
