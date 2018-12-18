import Vue from 'vue'
import App from './app'
import VueScropper from '../src/index'

Vue.use(VueScropper)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})