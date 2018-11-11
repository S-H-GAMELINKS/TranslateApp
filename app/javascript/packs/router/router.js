import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';
import Index from '../components/web/Index.vue';
import About from '../components/web/About.vue';
import Contact from '../components/web/Contact.vue';
import Translate from '../components/web/Translate.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/translate', component: Translate }
  ],
})