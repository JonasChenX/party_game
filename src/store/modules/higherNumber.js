const types = {
    ADD_HIGHERNUMBER:'higherNumber/ADD_HIGHERNUMBER',
    RESET_HIGHERNUMBER:'higherNumber/RESET_HIGHERNUMBER'
}

const state = {
    higherNumberList:[]
}

const actions ={
    actionsAddHigherNumber({commmit},higherNumber){
        commmit(types.ADD_HIGHERNUMBER, higherNumber)
    },
    actionsResetHigherNumber({commit}){
        commit(types.RESET_HIGHERNUMBER)
    }
}

const getters = {
    getHigherNumberList: state => state.higherNumberList,
}

const mutations = {
    [types.ADD_HIGHERNUMBER](state,num){
        state.higherNumberList.push(num)
    },
    [types.RESET_HIGHERNUMBER](state){
        state.higherNumberList = []
    },
}

export default{
    state,
    getters,
    actions,
    mutations
}