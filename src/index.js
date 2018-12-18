import VueScropper from './vue-scropper'

const install = function(Vue) {
  Vue.component('VueScropper', VueScropper)
}

if (typeof window !== 'undefiend' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  VueScropper
}