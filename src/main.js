import Vue from 'vue'
import App from './App'
import router from './router'

import {Button, Form, FormItem, Input, Switch, Pagination} from 'element-ui'

import './assets/style/reset.css'
import './assets/style/border.css'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Switch)
Vue.use(Input)
Vue.use(Pagination)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
