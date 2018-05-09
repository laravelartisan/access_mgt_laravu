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
                name: menu.menuName
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

    getMenusByModule: ({commit, dispatch}, moduleId) => {
        return new Promise((resolve, reject) => {
            axios.get('/menus/'+ moduleId + '/module').then( response => {
                var menusByModule = [];
                response.data.data.forEach( menu => {
                    menusByModule.push({
                        id: menu.id,
                        name: menu.menuName
                    });
                });
                resolve(menusByModule);
            }).catch(error => {
                //console.log(error.response.data);
                reject();
            });

        });

    },

    getStoreChildrenMenus: ({commit, dispatch}, parentMenuId) => {
        return new Promise((resolve, reject) => {
            axios.get('/menus/'+ parentMenuId + '/childrenMenus').then( response => {
                var childrenMenus = [];
                response.data.data.forEach( menu => {
                    childrenMenus.push({
                        id: menu.id,
                        name: menu.menuName
                    });
                });
                resolve(childrenMenus);
            }).catch(error => {
                //console.log(error.response.data);
                reject();
            });

        });
    }
}
//}