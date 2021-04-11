/* eslint-disable */
import Vue from 'vue'
import Notify from './index.vue'
import CreateNotify from './createNotify.js'

// let timer
let val

function Notifys (opntion) {
  val = CreateNotify(Notify, {

  })
  Object.assign(val, opntion)
  console.log(val)
  Vue.use(Notify)
  return val
}
Vue.prototype.$notify = Notify
export default Notifys
/* eslint-enable */
