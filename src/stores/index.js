import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  todos: [
    { id: 1, text: '....', done: true },
    { id: 2, text: '....', done: false }
  ],
  num: 0
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
