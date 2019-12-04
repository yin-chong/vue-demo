import { ADD_NUM } from '../type'

export default {
  [ADD_NUM] (state, payload) {
    state.num = payload
  }
}
