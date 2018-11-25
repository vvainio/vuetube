import Vue from 'vue'

import App from '@/App'
import '@/tailwind.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
