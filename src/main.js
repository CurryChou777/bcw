// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import {routerMode} from './config/env'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: routerMode,
  linkActiveClass: 'active'
})

new Vue({
  router
}).$mount('#app')
