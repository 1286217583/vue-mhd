
import Vue from 'vue'
import Notify from './index.vue'

export default (Component, options) => {
  /* eslint-disable  */
  console.log(options);
  const node =  new Vue({
    el: document.createElement('div'),
    props: Component.props,
    render: function(h) {
      console.log(this.$listeners);
      return h(Notify, {
        props: this.$props,
        ...options
      }, { msg: this.msg, type: this.type })
    }
  })
  // console.log(node);
  /* eslint-endable */
  document.body.appendChild(node.$el)
  return node
}
