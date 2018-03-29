import * as types from './../../mutation-types';

//export default {
export const    state= {
        authenticated: false,
        roles:['hello'],
        name: null,
        email: null
    }

export const    mutations = {
        [types.SET_AUTH_USER] (state, payload) {
            state.authenticated = true;
            state.name = payload.user.name;
            state.email = payload.user.email;
            state.roles = payload.user.roles.data;
        },
        [types.UNSET_AUTH_USER] (state) {
            alert('unset');
            state.authenticated = false;
            state.name = null;
            state.email = null;
        }
    }
export const     actions= {
        setAuthUser: ({commit, dispatch}) => {
            axios.get('/current-user?include=roles')
                .then(response => {
                    console.log(response);
                    commit({
                        type: types.SET_AUTH_USER,
                        user: response.data
                    })
                })
                .catch(error => {
                    dispatch('logoutRequest');
                })
        },
        unsetAuthUser: ({commit}) => {
            commit({
                type: types.UNSET_AUTH_USER
            });
        }
    }
//}