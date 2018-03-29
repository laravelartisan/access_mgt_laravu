import Vue from 'vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import axios from 'axios'
import lodash from 'lodash'
import $ from 'jquery'
import moment from 'moment'
import router from './routes/index.js'
import BootstrapVue from 'bootstrap-vue'
import jwtToken from './helpers/jwt-token.js'

import Datatable from 'vue2-datatable-component'


window.$ = window.jQuery = $;

window._ = lodash;
window.Vue = Vue;
window.axios = axios;
window.moment = moment;
window.router = router;
window.jwtToken = jwtToken;
window.params = new URLSearchParams();

Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.use(Datatable);




window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');
window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken.getToken();
//window.axios.defaults.headers.common['LoginTime'] = jwtToken.getloginTime();


window.axios.defaults.baseURL = '/api/v1';

/*router.afterEach((to, from) => {
    if(to.meta.requiresAuth) {
        var loginTime = moment(Store.state.login.tokenExp.time, 'hh:mm:ss a');
        var diffFromLoginTime = moment(moment().format('hh:mm:ss a'), 'hh:mm:ss a').diff(loginTime)
        if(diffFromLoginTime > Store.state.login.tokenExp.duration*60*1000){
            Store.dispatch('logoutRequest')
                .then((response) => {
                    router.push({name: 'login'});
                })
                .catch((error) => {});
        }
    }

})*/

