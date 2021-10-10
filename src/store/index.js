import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,
    overlay: false,
  },
  mutations: {
    SET_DRAWER: (state, payload) => state.drawer = payload,
    SET_OVERLAY: (state, payload) => state.overlay = payload
  },
})
