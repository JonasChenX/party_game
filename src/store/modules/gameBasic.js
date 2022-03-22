const types = {
    CREATE_PALYERNUM:'gameBasic/CREATE_PALYERNUM',
    CREATE_ISPALYING:'gameBasic/CREATE_ISPALYING',
    CREATE_PALYERINFO:'gameBasic/CREATE_PALYERINFO',

    RESET_PALYERNUM:'gameBasic/RESET_PALYERNUM',
    RESET_ISPALYING:'gameBasic/RESET_ISPALYING',
}

const state = {
    palyerNum:null,
    isPalying:false,
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
    actionsResetPlayerNum({commit}){
        commit(types.RESET_PALYERNUM)
    },
    actionsResetIsPlaying({commit}){
        commit(types.RESET_ISPALYING)
    },
}

const getters = {
    getPlayerNum: state => state.palyerNum,
    getIsPlaying: state => state.isPalying,
    getPlayerInfo: state => state.palyerInfo,
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
    [types.RESET_PALYERNUM](state){
        state.palyerNum = null
    },
    [types.RESET_ISPALYING](state){
        state.isPalying = false
    },
}

export default{
    state,
    getters,
    actions,
    mutations
}