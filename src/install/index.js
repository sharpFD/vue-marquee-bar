import VueMarqueeBar from '../components/VueMarqueeBar.vue'
import _Vue from 'vue'

VueMarqueeBar.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(VueMarqueeBar.name, VueMarqueeBar)
}
export default VueMarqueeBar;
