import VueClip from './vue-clip'

const install = function(Vue) {
  Vue.component(VueClip.name, VueClip)
}

if (typeof window !== 'undefiend' && window.Vue) {
  install(window.Vue)
}
export { VueClip }

export default {
  install,
  VueClip,
  vueClip: VueClip
}
