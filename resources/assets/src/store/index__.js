import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import login from "./modules/login";
import authUser from "./modules/authUser";
import notification from "./modules/notification";
import precosting from "./modules/precosting.js";
console.log({
   module: {
        login,
        authUser,
        notification,
        precosting
    }
});
export default new Vuex.Store({
    modules: {
        login,
        authUser,
        notification,
        precosting
    },
    strict: true
});

