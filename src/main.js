import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from './utils/request'
import commonFilter from '@/utils/filters'

Vue.config.productionTip = false

// 全局过滤器
Object.keys(commonFilter).forEach(key => {
  Vue.filter(key, commonFilter[key])
})

// 注册axios请求
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
