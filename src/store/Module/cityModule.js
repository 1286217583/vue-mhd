// 城市相关的 仓库子模块
const city = window.sessionStorage.getItem('city')

const state = {
  // 当前选择的城市
  curCity: city ? JSON.parse(city) : null
}

const getters = {
  curCityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}

const mutations = {
  SET_CURCITY (state, payload) {
    state.curCity = payload

    window.sessionStorage.setItem('city', JSON.stringify(payload))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
