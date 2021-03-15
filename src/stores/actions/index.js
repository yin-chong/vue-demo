export default {
  addWork (context, params) {
    setTimeout(() => {
      context.commit('addWork', params)
    }, 1000)
  },
  doneWork (context, index) {
    setTimeout(() => {
      context.commit('doneWork', index)
    }, 1000)
  },
  removeWork (context, index) {
    setTimeout(() => {
      context.commit('removeWork', index)
    }, 1000)
  },

  // 路由添加
  setKeepAlive (context, keepAlive) {
    context.commit('setKeepAlive', keepAlive)
  }
}
