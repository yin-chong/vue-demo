import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  list: [
    { id: 0, value: '这是待办事项A', done: false },
    { id: 1, value: '这是待办事项B', done: false },
    { id: 2, value: '这是待办事项C', done: true },
    { id: 3, value: '这是待办事项D', done: false }
  ],
  // 路由keepAlive
  keepAlive: ['keep']
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
