import Vue from 'vue'
import Vuex from 'vuex'

import CityModule from './Module/cityModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city: CityModule
  }
})
