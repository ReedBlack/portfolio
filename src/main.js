import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Carousel3d,
  Slide
} from "vue-carousel-3d"



Vue.use(Carousel3d)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')