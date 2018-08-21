import Vue from 'vue'
import App from './App'
import router from './router'

import { Button, Select } from 'element-ui'

Vue.use(Button)
Vue.use(Select)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
