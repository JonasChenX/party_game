import { createStore } from 'vuex'
import gameBasic from '@/store/modules/gameBasic.js'
import higherNumber from '@/store/modules/higherNumber.js'
import guessingNumber from '@/store/modules/guessingNumber.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    gameBasic,
    higherNumber,
    guessingNumber
  },
  strict:true
})
