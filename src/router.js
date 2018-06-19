import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Music from './views/Music.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/Music',
    name: 'music',
    component: Music
  }]
})