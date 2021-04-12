import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
// 引入 基础样式
import './assets/styles/base.scss'
// import Notify from './components/notify/create'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/logo.png',
  loading: '/logo.png',
  attempt: 3
})

Vue.config.productionTip = false
// Vue.use(Notify)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
