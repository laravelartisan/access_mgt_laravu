import * as types from './../../mutation-types';

//export default {
export const    state = {

    list:[],
}

export const    mutations = {
    [types.MODULES_LIST] (state, payload) {
        state.list = [];
        payload.modules.forEach( module => {
            state.list.push({
                id: module.id,
                name: module.name
            });
        });
    },
}
export const     actions= {
    getModules: ({commit, dispatch}) => {
        axios.get('/modules')
            .then(response => {

                commit({
                    type: types.MODULES_LIST,
                    modules: response.data.data
                })
            })
            .catch(error => {

            })
    },

    getModulesByRole: ({commit, dispatch}) => {
        
    }
}
//}