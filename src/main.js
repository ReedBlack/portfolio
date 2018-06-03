import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Carousel3d,
  Slide
} from "vue-carousel-3d"
import Vuetify from "vuetify"
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'vuetify/dist/vuetify.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.use(Carousel3d)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')