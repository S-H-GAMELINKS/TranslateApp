import Vue from 'vue/dist/vue.esm';
import Router from './router/router';
import Header from './components/layouts/Header.vue';

import VueDictaphone from "vue-dictaphone";
Vue.use(VueDictaphone);

const app = new Vue({
    el: '#app',
    router: Router,
    components: {
        'nav-bar': Header
    }
})