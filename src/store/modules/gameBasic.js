const types = {
    CREATE_PALYERNUM:'gameBasic/CREATE_PALYERNUM',
    CREATE_ISPALYING:'gameBasic/CREATE_ISPALYING',
    CREATE_PALYERINFO:'gameBasic/CREATE_PALYERINFO',
    CREATE_CURRENTPLAYER:'gameBasic/CREATE_CURRENTPLAYER',

    UPDATE_RESETCOUNT:'gameBasic/UPDATE_RESETCOUNT',
    RESET_PALYERNUM:'gameBasic/RESET_PALYERNUM',
    RESET_ISPALYING:'gameBasic/RESET_ISPALYING',
}

const state = {
    resetCount:1,
    palyerNum:null,
    isPalying:false,
    currentPlayerNum:0,
    palyerInfo:{
        id:null,
        isWinner:false
    }
}

const actions ={
    actionsCreatePlayerNum({commit},palyerNum){
        commit(types.CREATE_PALYERNUM, palyerNum)
    },
    actionsCreatePlayerInfo({commit},palyerInfo){
        commit(types.CREATE_PALYERINFO, palyerInfo)
    },
    actionsCreatePlaying({commit},isPalying){
        commit(types.CREATE_ISPALYING, isPalying)
    },
    actionsCreateCurrentPlayerNum({commit},currentPlayerNum){
        commit(types.CREATE_CURRENTPLAYER, currentPlayerNum)
    },
    actionsResetPlayerNum({commit}){
        commit(types.RESET_PALYERNUM)
    },
    actionsResetIsPlaying({commit}){
        commit(types.RESET_ISPALYING)
    },
    actionsUpdateResetCount({commit}){
        commit(types.UPDATE_RESETCOUNT)
    },

}

const getters = {
    getPlayerNum: state => state.palyerNum,
    getIsPlaying: state => state.isPalying,
    getPlayerInfo: state => state.palyerInfo,
    getCurrentPlayerNum: state => state.currentPlayerNum,
    getUpdateResetCount: state => state.resetCount
}

const mutations = {
    [types.CREATE_PALYERNUM](state,palyerNum){
        state.palyerNum = palyerNum
    },
    [types.CREATE_PALYERINFO](state,palyerInfo){
        state.palyerInfo = palyerInfo
    },
    [types.CREATE_ISPALYING](state,isPalying){
        state.isPalying = isPalying
    },
    [types.CREATE_CURRENTPLAYER](state,currentPlayerNum){
        state.currentPlayerNum = currentPlayerNum
    },
    [types.RESET_PALYERNUM](state){
        state.palyerNum = null
    },
    [types.RESET_ISPALYING](state){
        state.isPalying = false
    },
    [types.UPDATE_RESETCOUNT](state){
        state.resetCount++
    },
}

export default{
    state,
    getters,
    actions,
    mutations
}