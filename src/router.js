import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Music from './views/Music.vue'
import Art from './views/Art.vue'
import ArtConstruction from './views/ArtConstruction.vue'
import Projects from './views/Projects.vue'

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/Music',
    name: 'music',
    component: Music
  }, {
    path: '/Projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/Art',
    name: 'art',
    component: Art
  },
  {
    path: '/ArtConstruction',
    name: 'artConstruction',
    component: ArtConstruction
  }
]
})
