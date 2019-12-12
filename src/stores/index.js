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
  num: 0,
  // 保费
  // 工种列表
  gzList: [],
  // 险种列表
  xzList: [],
  // 附加条件
  condition: [],
  // 赔付比例
  scale: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
