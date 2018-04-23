import * as types from './../../mutation-types';

//export default {
export const    state = {

    list:[],
}

export const    mutations = {
    [types.MENUS_LIST] (state, payload) {
        state.list = [];
        payload.menus.forEach( menu => {
            state.list.push({
                id: menu.id,
                name: menu.name
            });
        });
    },
}
export const     actions= {
    getMenus: ({commit, dispatch}) => {
        axios.get('/menus')
            .then(response => {

                commit({
                    type: types.MENUS_LIST,
                    menus: response.data.data
                })
            })
            .catch(error => {

            })
    },
}
//}