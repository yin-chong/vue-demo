import { ADD_NUM } from '../type'

export default {
  addNum ({ commit, state }, payload) {
    // console.log(payload)
    commit(ADD_NUM, payload)
  }
}
