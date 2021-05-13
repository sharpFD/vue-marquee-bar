import VueMarqueeBar from './src/components/VueMarqueeBar.vue'
import _Vue from 'vue'
import App from './src/App.vue'
import router from "./src/router/index";

_Vue.config.productionTip = false

new _Vue({
  render: h => h(App),
  router,
}).$mount('#app')


VueMarqueeBar.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(VueMarqueeBar.name, VueMarqueeBar)
}

export default VueMarqueeBar;