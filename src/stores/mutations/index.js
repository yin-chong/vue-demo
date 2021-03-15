export default {
  // 事项添加
  addWork (state, work) {
    const item = {
      id: new Date().getTime(),
      value: work,
      done: false
    }
    state.list.push(item)
  },
  // 事项完成
  doneWork (state, index) {
    state.list[index].done = true
  },
  // 删除事项
  removeWork (state, index) {
    state.list.splice(index, 1)
  },

  // keepAlive路由添加
  setKeepAlive (state, keepAlive) {
    state.keepAlive = keepAlive || []
  }
}
