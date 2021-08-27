import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetify'

import './plugins/globalComponents'
import './plugins/globalMixins'

Vue.config.productionTip = false

new Vue({
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
