import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  //Set Globle state variable
  state: {
    token: null,
    user: "Guest",
    isUserLoggedIn: false,
    showButton: true
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    }, 
    setUser (state, user) {
      state.user = user
    },
    setShowButton (state, showButton) {
      state.showButton = showButton
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setShowButton ({commit}, showButton) {
      commit('setShowButton', showButton)
    }
  } 
})