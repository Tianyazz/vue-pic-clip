import Vue from 'vue'
import App from './app'
import router from './router'
import VueClip from '../src/index'
import hljs from 'highlight.js'
import 'highlight.js/styles/dracula.css'
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  setTimeout(() => {
    blocks.forEach((block) => {
    hljs.highlightBlock(block)
    })
  }, 200)
})

Vue.use(VueClip)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})