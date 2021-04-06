import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 基础样式
import './assets/styles/base.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
