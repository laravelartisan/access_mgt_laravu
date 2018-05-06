"use strict"
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap.js';
import store from './store/index.js'
//import App from './Main.vue'
import App from './App.vue'





/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const appComponent = Vue.component('app', App);

    new appComponent({
        el: '#app',
        router,
        store
    });
