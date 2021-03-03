import Vue from 'vue'
import store from './stores'
import router from './router'
import App from './App.vue'
import processApiConfig from './api/api'
import apiConfig from './api/apiConfig/apiConfig'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as components from '@/components'
import '@/style/main.scss'
import shnUI from 'shn-vue-ui'
import VueDND from 'awe-dnd'
import VueJsonp from 'vue-jsonp'
import Vant from 'vant'
import 'vant/lib/index.css'
// import VConsole from 'vconsole'

// (new VConsole())

Vue.prototype.$api = processApiConfig(apiConfig)

Vue.use(ElementUI)
Vue.use(VueDND)
Vue.use(shnUI)
Vue.use(VueJsonp)
Vue.use(Vant)
Object.values(components).forEach(compItem => {
  Vue.component(compItem.name, { ...compItem })
})

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
