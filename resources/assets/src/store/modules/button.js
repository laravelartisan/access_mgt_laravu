export default {
    state:{
        isDisabled:false
    },
    mutations: {
        buttonStatus: function(state, payload){
            if(payload){
                state.isDisabled = true;
            }else{
                state.isDisabled = false;
            }

        }
    },

    actions: {
        getButtonStatus: function({ commit }, payload){
            commit('buttonStatus',payload );
        }
    }
}
