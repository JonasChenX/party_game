import {generateRandomInt} from '@/script/Util.js'
const types = {
    CREATE_BINGONUM:'guessingNumber/CREATE_BINGONUM',
    UPDATE_ISBINGO:'guessingNumber/UPDATE_ISBINGO',
    RESET_ISBINGO:'guessingNumber/RESET_ISBINGO'
}

const state = {
    bingoNum:generateRandomInt(1,10),
    isBingo:false
}

const actions ={
    actionsCreateBingoNum({commit}){
        commit(types.CREATE_BINGONUM)
    },
    actionsUpdateIsBingo({commit},isBingo){
        commit(types.UPDATE_ISBINGO, isBingo)
    },
    actionsResetIsBingo({commit}){
        commit(types.RESET_ISBINGO)
    }
}

const getters = {
    getBingoNum: state => state.bingoNum,
    getIsBingo: state => state.isBingo
}

const mutations = {
    [types.CREATE_BINGONUM](state){
        state.bingoNum = generateRandomInt(1,10)
    },
    [types.UPDATE_ISBINGO](state,isBingo){
        state.isBingo = isBingo
    },
    [types.RESET_ISBINGO](state){
        state.isBingo = false
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}