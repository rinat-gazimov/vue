import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// window.Application = require('./application.js').default;
window.Common = require('./common.js').default;

const MainPage = resolve => require(['./pages/MainPage.vue'], resolve);


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/main', component: MainPage, canReuse: false, force: true },

    ]
});

window.VueRouter = router;

const app = new Vue({
    el: '#app',
    router: router,
    data: {
        currentRoute: window.location.pathname
    },
    render (h) {
        return h(require('./pages/MainPage.vue'));
    }
});
