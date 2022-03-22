import { createStore } from 'vuex'
import gameBasic from '@/store/modules/gameBasic.js'
import higherNumber from '@/store/modules/higherNumber.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    gameBasic,
    higherNumber
  },
  strict:true
})
