export const state = {
    fabricBudget: false
}

export const mutations = {
    fabricBudgetStatus: function(state, payload){
        if(payload){
            state.fabricBudget = true;
        }else{
            state.fabricBudget = false;
        }

    }
}

export const actions = {
    getFabricBudgetStatus: function({ commit }, payload){
        commit('fabricBudgetStatus',payload );
    }
}

/*
export default {
    state: {
        fabricBudget: false
    },

    mutations: {
        fabricBudgetStatus: function(state, payload){
            if(payload){
                state.fabricBudget = true;
            }else{
                state.fabricBudget = false;
            }

        }
    },

    actions: {
        getFabricBudgetStatus: function({ commit }, payload){
            commit('fabricBudgetStatus',payload );
        }
    }
}*/
