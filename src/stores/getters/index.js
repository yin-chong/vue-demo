export default {
  // 事项列表长度
  listLength: state => state.list.length,
  // 未完成事项数量
  listUndone (state) {
    let unDone = 0
    state.list.forEach(el => {
      if (!el.done) unDone += 1
    })
    return unDone
  },

  // 获取keepAlive
  keepAlive: state => state.keepAlive
}
