import * as types from './../../mutation-types';

//export default {
export const    state = {

    list:[],
}

export const    mutations = {
    [types.ROLES_LIST] (state, payload) {
        state.list = [];
        payload.roles.forEach( role => {
            state.list.push({
                id: role.id,
                name: role.name
            });
        });
    },
}
export const     actions= {
    getRoles: ({commit, dispatch}) => {
        axios.get('/roles')
            .then(response => {

                commit({
                    type: types.ROLES_LIST,
                    roles: response.data.data
                })
            })
            .catch(error => {

            })
    },
}
//}