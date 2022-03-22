const types = {
    CREATE_PALYERNUM:'gameBasic/CREATE_PALYERNUM',
    CREATE_PALYERINFO:'gameBasic/CREATE_PALYERINFO',
}

const state = {
    palyerNum:null,
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
    }
}

const getters = {
    getPlayerNum: state => state.palyerNum,
    getPlayerInfo: state => state.palyerInfo,
}

const mutations = {
    [types.CREATE_PALYERNUM](state,palyerNum){
        state.palyerNum = palyerNum
    },
    [types.CREATE_PALYERINFO](state,palyerInfo){
        state.palyerInfo = palyerInfo
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}