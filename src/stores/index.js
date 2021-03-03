import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  todos: [
    { id: 1, text: '张三', done: true },
    { id: 2, text: '李四', done: false }
  ],
  num: 0
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
