import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);

const routes = [{ path:'/login', component: Login },
                { path:'/', component: Home }
               ];

const router = new VueRouter({
    routes:routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
