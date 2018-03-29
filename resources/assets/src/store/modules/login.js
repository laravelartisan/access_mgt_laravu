import jwtToken from './../../helpers/jwt-token';
import * as types from './../../mutation-types';

//export default {
export const   state = {
        errors: {
            email: null,
            password: null
        },
    authenticated: false,
    roles:['hello'],
    name: null,
    email: null
       /* tokenExp: {
            duration: null,
            time: null
        }*/
    }

export const     mutations = {
    [types.SET_AUTH_USER] (state, {user}) {
        console.log(user.data)
        state.authenticated = true;
        state.name = 5;
        state.email = 5;
        state.roles = user.data.roles.data;
    },
    [types.UNSET_AUTH_USER] (state) {
        alert('unset');
        state.authenticated = false;
        state.name = null;
        state.email = null;
    },
        [types.LOGIN_SUCCESS] (state) {
            alert('loginSuccess')
            state.errors.email = null;
            state.errors.password = null;
        },
        [types.LOGIN_FAILURE] (state, payload) {
            state.errors.email = payload.errors.email ? payload.errors.email[0] : null;
            state.errors.password = payload.errors.password ? payload.errors.password[0] : null;
        },
        [types.CLEAR_LOGIN_ERRORS] (state, payload) {
            alert('clear_login')
            state.errors.email = null;
            state.errors.password = null;
        }
       /* [types.GET_TOKEN_EXPIRE_TIME] (state, payload) {
            console.log(moment().format('hh:mm:ss a'))
            state.tokenExp.time = moment().format('hh:mm:ss a');
            state.tokenExp.duration = payload.tokenExp;
        },*/

    }

export const    actions = {
        loginRequest: ({dispatch}, formData) => {
            return new Promise((resolve, reject) => {
                axios.post('/signin', formData)
                    .then(response => {
                        alert('loginreq')
                        dispatch('loginSuccess', response.data);
                        resolve();
                    })
                    .catch(error => {
                        //console.log(error.response.data);
                        dispatch('loginFailure', error.response.data);
                        reject();
                    });
            });
        },

        loginSuccess: ({commit, dispatch}, jwtTokenObj) => {
            jwtToken.setToken(jwtTokenObj.token);
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken.getToken();
            //jwtToken.setLoginTime(jwtTokenObj.loginTime);
            //window.axios.defaults.headers.common['LoginTime'] =  jwtToken.getloginTime();
           /* commit({
                type: types.GET_TOKEN_EXPIRE_TIME,
                tokenExp: jwtTokenObj.exp,
            });*/
            commit({
                type: types.LOGIN_SUCCESS
            });

            dispatch('setAuthUser');
        },
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
        alert('unset authuser');
        commit({
            type: types.UNSET_AUTH_USER
        });
    },

        loginFailure: ({commit, dispatch}, body) => {
            commit({
                type: types.LOGIN_FAILURE,
                errors: body
            });

            if(body.error) {
                dispatch('showErrorNotification', body.error);
            }
        },
        clearLoginErrors: ({commit}) => {
            alert('clear_log_errors_action');
            commit({
                type: types.CLEAR_LOGIN_ERRORS
            });
        },

        logoutRequest: ({dispatch}) => {
            jwtToken.removeToken();
            //jwtToken.removeLoginTime();
alert('logout');
            return new Promise((resolve, reject) => {
                dispatch('unsetAuthUser');
                resolve();
            });
        },

        // not used
        signIn: function ({dispatch}, payload) {
            return axios.post(
                '/signin',
                payload
            )
                .then(response => {
                    localStorage.setItem('id_token', response.data.meta.token)
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')

                    //vState.user.authenticated = true // not working
                    //vState.user.profile = response.data.data // not working
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
//}